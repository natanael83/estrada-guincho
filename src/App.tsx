import React, { useState } from 'react';
import {
  Truck,
  PhoneCall,
  Menu,
  X,
  Car,
  Battery,
  Wrench,
  Clock,
  UserCheck,
  CreditCard,
  MapPin,
  Mail,
  Instagram,
  Facebook,
  Share2,
  Shield,
  Flame,
  LifeBuoy,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-primary/10 px-4 md:px-10 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 text-primary">
          <Truck className="w-8 h-8" />
          <h2 className="text-xl font-extrabold tracking-tight">ESTRADA GUINCHO</h2>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-semibold hover:text-primary transition-colors">Home</a>
          <a href="#services" className="text-sm font-semibold hover:text-primary transition-colors">Serviços</a>
          <a href="#trust" className="text-sm font-semibold hover:text-primary transition-colors">Por que nós?</a>
          <a href="#contact" className="text-sm font-semibold hover:text-primary transition-colors">Contato</a>
        </nav>

        <div className="flex items-center gap-4">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://api.whatsapp.com/send?phone=5569984322802&text=Olá,%20gostaria%20de%20solicitar%20um%20guincho."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            Chamar Agora
          </motion.a>
          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-primary/5 mt-4 overflow-hidden"
          >
            <div className="flex flex-col gap-4 py-4">
              <a href="#home" onClick={() => setIsOpen(false)} className="text-sm font-semibold px-4 py-2 hover:bg-primary/5 rounded-lg">Home</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="text-sm font-semibold px-4 py-2 hover:bg-primary/5 rounded-lg">Serviços</a>
              <a href="#trust" onClick={() => setIsOpen(false)} className="text-sm font-semibold px-4 py-2 hover:bg-primary/5 rounded-lg">Por que nós?</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-sm font-semibold px-4 py-2 hover:bg-primary/5 rounded-lg">Contato</a>
              <motion.a 
                whileTap={{ scale: 0.98 }}
                href="https://api.whatsapp.com/send?phone=5569984322802&text=Olá,%20gostaria%20de%20solicitar%20um%20guincho."
                className="flex bg-primary text-white px-6 py-3 rounded-lg font-bold text-center justify-center items-center gap-2 mx-4 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Chamar Agora
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 via-background-dark/60 to-transparent z-10"></div>
        <img
          src="/assets/hero.png"
          alt="Socorro de guincho em rodovia"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-10 lg:px-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-6"
        >
          <span className="inline-block px-4 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-widest">
            Atendimento 24 Horas
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Socorro 24h na Estrada
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium">
            Rapidez e segurança para você não ficar na mão. Atendimento especializado em qualquer lugar, a qualquer hora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://api.whatsapp.com/send?phone=5569984322802&text=Olá,%20gostaria%20de%20solicitar%20um%20guincho."
              className="bg-primary text-white px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20 cursor-pointer"
            >
              <Truck className="w-6 h-6" />
              Chamar Guincho Agora
            </motion.a>
            <button className="bg-white/10 backdrop-blur text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              Ver Preços
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Guincho Leve",
      description: "Transporte seguro para carros de passeio, SUVs e utilitários leves com plataforma hidráulica."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Guincho Pesado",
      description: "Equipamentos robustos para suporte e remoção de caminhões, ônibus e máquinas pesadas."
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Recarga de Bateria",
      description: "Auxílio rápido para partida auxiliar (chupeta) ou substituição de bateria no local."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Troca de Pneu",
      description: "Substituição de pneus furados com rapidez e segurança, mesmo em rodovias movimentadas."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Nossas Soluções</h2>
          <h3 className="text-3xl md:text-4xl font-black mb-6">Soluções Completas de Assistência</h3>
          <p className="text-slate-600 text-lg">Oferecemos suporte total para seu veículo com agilidade.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-background-light rounded-2xl border border-primary/5 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Disponibilidade",
      description: "Estamos prontos para atender você a qualquer hora do dia ou da noite, inclusive feriados."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Motoristas Experientes",
      description: "Equipe treinada e capacitada para lidar com qualquer situação de emergência com calma e técnica."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Preço Justo e Transparente",
      description: "Orçamentos honestos sem taxas escondidas. Aceitamos cartões de Debito, Credito e Pix."
    }
  ];

  return (
    <section id="trust" className="py-20 px-4 md:px-10 lg:px-20 bg-background-light overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <img
            src="/assets/hero.jpg"
            alt="Nossa frota"
            className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-video lg:aspect-square"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-primary/10">
            <p className="text-4xl font-black text-primary">5+</p>
            <p className="text-sm font-bold text-slate-500 uppercase">Anos de Experiência</p>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Compromisso</h2>
            <h3 className="text-3xl md:text-4xl font-black mb-6">Por que nos escolher?</h3>
          </div>
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-primary">
                  {benefit.icon}
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">{benefit.title}</h5>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-10 lg:px-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h3 className="text-4xl md:text-5xl font-black">Números de Emergência</h3>


          <div className="space-y-4 pt-4">
            <div className="bg-white/10 p-4 rounded-lg flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Atendimento em toda Vilhena e Região</span>
            </div>
            <a 
              href="https://api.whatsapp.com/send?phone=5569984322802&text=Olá,%20gostaria%20de%20solicitar%20um%20guincho."
              className="bg-white/10 p-4 rounded-lg flex items-center gap-3 hover:bg-white/20 transition-all border border-white/5"
            >
              <PhoneCall className="w-5 h-5 text-green-400" />
              <span className="text-xl font-bold">(55) 69984322802</span>
            </a>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/10 pt-6 mt-2">
              <div className="bg-black/20 p-3 rounded-xl border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">PRF</span>
                </div>
                <a href="tel:191" className="text-2xl font-black">191</a>
              </div>
              <div className="bg-black/20 p-3 rounded-xl border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-slate-400" />
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">PM</span>
                </div>
                <a href="tel:190" className="text-2xl font-black">190</a>
              </div>
              <div className="bg-black/20 p-3 rounded-xl border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-1">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">Bombeiro</span>
                </div>
                <a href="tel:193" className="text-2xl font-black">193</a>
              </div>
            </div>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="group overflow-hidden rounded-2xl aspect-square shadow-xl border border-white/10">
            <img 
              src="/assets/transporte.webp" 
              alt="Serviço de guincho" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="group overflow-hidden rounded-2xl aspect-square shadow-xl border border-white/10">
            <img 
              src="/assets/troca de bateria.webp" 
              alt="Troca de bateria" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="group overflow-hidden rounded-2xl aspect-square shadow-xl border border-white/10">
            <img 
              src="/assets/mecanico.jpeg" 
              alt="Socorro mecânico" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="group overflow-hidden rounded-2xl aspect-square shadow-xl border border-white/10">
            <img 
              src="/assets/atendimento.jpeg" 
              alt="Atendimento 24h" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FloatingWA = () => {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="https://api.whatsapp.com/send?phone=5569984322802&text=Olá,%20gostaria%20de%20solicitar%20um%20guincho."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba59] transition-colors flex items-center justify-center group cursor-pointer"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-3 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
        Chamar no WhatsApp
      </span>
    </motion.a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background-dark text-slate-400 py-16 px-4 md:px-10 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-white">
            <Truck className="w-8 h-8" />
            <h2 className="text-xl font-black tracking-tight">ESTRADA GUINCHO</h2>
          </div>
          <p className="text-sm leading-relaxed">Referência em socorro mecânico e guincho em toda a região. Segurança para você e seu veículo 24 horas por dia.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Links Rápidos</h5>
          <ul className="space-y-4 text-sm">
            <li><a href="#home" className="hover:text-primary transition-colors">Página Inicial</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Nossos Serviços</a></li>
            <li><a href="#trust" className="hover:text-primary transition-colors">Por que nos escolher</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contato de Emergência</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Localização</h5>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Av. Principal das Rodovias, 1500<br />Setor Industrial - RO</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <span>contato@estradaguincho.com.br</span>
            </li>
            <li className="flex gap-3">
              <PhoneCall className="w-5 h-5 text-primary" />
              <a href="https://api.whatsapp.com/send?phone=5569984322802&text=Olá,%20gostaria%20de%20solicitar%20um%20guincho." className="hover:text-primary transition-colors">(69) 98432-2802</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2026 ESTRADA GUINCHO. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Política de Privacidade</a>
          <a href="#" className="hover:text-white">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
