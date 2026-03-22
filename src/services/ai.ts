/**
 * SERVIÇO DE IA (SEGURO)
 * Este arquivo NÃO contém chaves de API.
 * Ele faz solicitações ao nosso servidor backend local (Porta 3001)
 * que contém a chave secreta de forma protegida.
 */

const API_SERVER_URL = "http://localhost:3001";

export async function askGemini(prompt: string): Promise<string> {
  try {
    const response = await fetch(`${API_SERVER_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error(`Erro no servidor de IA: ${response.statusText}`);
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Erro ao chamar o serviço de IA:", error);
    return "Desculpe, ocorreu um erro ao processar sua solicitação.";
  }
}
