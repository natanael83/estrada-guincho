import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: '.env.local' });

const app = express();
app.use(express.json());
app.use(cors()); // Permitir que o frontend React acesse este servidor

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;

  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'SUA_CHAVE_AQUI') {
    return res.status(500).json({ error: 'Configuração do Gemini não encontrada ou inválida.' });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    res.json({ text });
  } catch (error: any) {
    console.error("Erro ao chamar o Gemini:", error);
    res.status(500).json({ error: 'Erro ao processar a requisição de IA.' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor de segurança rodando em http://localhost:${PORT}`);
});
