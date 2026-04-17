/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, ReactNode, useState, useEffect } from "react";
import { 
  Calendar, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Search, 
  CalendarDays, 
  CreditCard, 
  Check,
  RefreshCw,
  Users,
  Bell,
  Shield,
  Ban,
  Scale,
  Anchor,
  PenLine
} from "lucide-react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function BussolaAnimation() {
  const [searchText, setSearchText] = useState("");
  const [resultText, setResultText] = useState("");
  const [phase, setPhase] = useState(0); // 0: typing search, 1: showing result box, 2: typing result

  const fullSearchText = "Enxaqueca";
  const fullResultText = "Dor pulsante que denuncia pensamentos e relações que ocuparam sua cabeça além do suportável. Surge quando você precisou engolir conflitos, calar opiniões e administrar expectativas alheias sem ter espaço para si. A mente tenta expulsar o que foi acumulado: pressão familiar, cobranças invisíveis, controle emocional para manter vínculos. A dor revela sobrecarga de responsabilidade emocional e esforço em manter tudo funcionando, mesmo exausta.";

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 0) {
      if (searchText.length < fullSearchText.length) {
        timeout = setTimeout(() => {
          setSearchText(fullSearchText.slice(0, searchText.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => setPhase(1), 1000);
      }
    } else if (phase === 1) {
      timeout = setTimeout(() => setPhase(2), 500);
    } else if (phase === 2) {
      if (resultText.length < fullResultText.length) {
        timeout = setTimeout(() => {
          setResultText(fullResultText.slice(0, resultText.length + 3)); 
        }, 15);
      } else {
        timeout = setTimeout(() => {
          setSearchText("");
          setResultText("");
          setPhase(0);
        }, 6000);
      }
    }

    return () => clearTimeout(timeout);
  }, [searchText, resultText, phase]);

  return (
    <div className="w-full max-w-[950px] mx-auto bg-dark-card border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-amber/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 relative z-10 items-center">
        {/* Column 1: Text and Reinforcement */}
        <div className="text-left">
          <div className="bg-amber text-dark text-[10px] font-bold tracking-[0.2em] uppercase py-1 px-4 rounded-full w-fit mb-6">Bônus Especial #1</div>
          <h3 className="font-serif text-[clamp(28px,5vw,42px)] font-bold text-off-white leading-tight mb-5">
             A Bússola da <span className="text-amber">Cura</span>
          </h3>
          <p className="text-lg text-muted leading-relaxed mb-8">
            Um buscador exclusivo onde você digita qualquer sintoma ou doença e recebe imediatamente a raiz emocional por trás dela. Pare de tratar apenas o sintoma e comece a curar a causa.
          </p>

          <div className="space-y-4 mb-10">
            {[
              "Acesso vitalício e ilimitado",
              "Baseado em mais de 7.000 atendimentos",
              "Identificação instantânea da causa emocional",
              "Passo a passo para qualquer sintoma ou doença"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3 text-off-white/90 text-sm">
                <div className="w-5 h-5 bg-amber/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-amber" />
                </div>
                {point}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5 pt-8 border-t border-white/5">
             <div className="text-left">
                <div className="text-[12px] text-muted line-through mb-0 px-1">R$47,00</div>
                <div className="font-bebas text-[38px] text-amber leading-none">GRÁTIS</div>
             </div>
             <div className="text-[13px] text-muted leading-tight italic">
               Disponível imediatamente <br /> após a inscrição.
             </div>
          </div>
        </div>

        {/* Column 2: The Tool Simulation Box (Smaller and Subtle) */}
        <div className="bg-dark/40 border border-white/10 rounded-3xl p-5 md:p-8 flex flex-col gap-5 backdrop-blur-sm shadow-inner scale-95 lg:scale-100">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10px] tracking-widest uppercase text-muted font-bold opacity-50">Simulador da Bússola</div>
            <div className="flex gap-1.5 px-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>
          </div>

          {/* Search Box */}
          <div className="bg-[#141b1f] border border-white/10 rounded-xl p-4 flex items-center gap-3">
            <Search className="w-4 h-4 text-amber" />
            <div className="text-sm text-off-white font-medium flex-1">
              {searchText}
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-4 bg-amber ml-0.5 align-middle"
              />
            </div>
          </div>

          {/* Result Box */}
          <div className="min-h-[160px] flex flex-col justify-start">
            <AnimatePresence>
              {phase >= 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="bg-[#141b1f] border border-teal/20 rounded-xl p-5 border-l-4 border-l-teal"
                >
                  <div className="text-[10px] tracking-[0.2em] uppercase text-teal font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal/40 animate-pulse" />
                    Raiz:
                  </div>
                  <div className="text-[13px] md:text-[14px] text-off-white/80 leading-relaxed font-light">
                    {resultText}
                    {phase === 2 && resultText.length < fullResultText.length && (
                      <motion.span 
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-1.5 h-0.5 bg-teal ml-1 align-middle"
                      />
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const checkoutUrl = "https://pay.hub.la/Kje4ommigzzBR7AlPQkL";

  const [visitors, setVisitors] = useState(142);
  const [notification, setNotification] = useState<string | null>(null);
  const [progress, setProgress] = useState(82);

  const names = [
    "Maria Clara", "Ana Paula", "Juliana", "Fernanda", "Beatriz", "Camila", 
    "Luciana", "Patrícia", "Cláudia", "Renata", "Sônia", "Marta", "Daniela", 
    "Cristiane", "Aline", "Vanessa", "Tatiane", "Priscila", "Letícia", 
    "Larissa", "Gisele", "Eliane", "Débora", "Bianca", "Roberta", "Sabrina"
  ];

  useEffect(() => {
    // Visitor counter simulation
    const visitorInterval = setInterval(() => {
      setVisitors(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 3000);

    // Notification simulation
    const notificationInterval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      setNotification(`${randomName} entrou para o Workshop`);
      setTimeout(() => setNotification(null), 4000);
    }, 8000);

    // Suttle progress bar simulation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 94) return prev;
        return prev + 0.1;
      });
    }, 5000);

    return () => {
      clearInterval(visitorInterval);
      clearInterval(notificationInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* NOTIFICATION POPUP - MOVED TO BOTTOM NEAR STICKY BAR */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-[105px] left-1/2 -translate-x-1/2 z-[100] bg-dark-card/80 backdrop-blur-md border border-white/10 py-2 px-4 rounded-full shadow-xl flex items-center gap-2"
          >
            <div className="w-2 h-2 bg-amber rounded-full animate-pulse" />
            <span className="text-[11px] text-muted font-medium uppercase tracking-wider">{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>
      {/* TOPBAR */}
      <div className="bg-amber text-dark text-center py-2.5 px-5 text-[13px] font-medium tracking-wider uppercase">
        ⚡ Próxima turma: 18 de abril — Vagas limitadas. Apenas R$37.
      </div>

      {/* HERO */}
      <section className="bg-dark-2 relative overflow-hidden py-20 px-6 text-center min-h-[600px] flex flex-col justify-center">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Image: Recommend 1920x1080px */}
          <div className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('http://brunosimplicio.com.br/wp-content/uploads/2026/04/Pagina-de-vendas.jpg')" }}></div>
          {/* Mobile Image: Recommend 1080x1920px */}
          <div className="lg:hidden absolute inset-0 bg-cover bg-left bg-no-repeat" style={{ backgroundImage: "url('http://brunosimplicio.com.br/wp-content/uploads/2026/04/Pagina-de-vendas.jpg')" }}></div>
        </div>
        
        <div className="relative z-10">
          <div className="inline-block bg-amber/15 border border-amber/40 text-amber-light text-[11px] tracking-[0.12em] uppercase py-1.5 px-4.5 rounded-full mb-7 font-medium">
            Workshop ao vivo • 18 de abril • 09h30
          </div>

          <h1 className="font-bebas text-[clamp(46px,10vw,88px)] leading-[0.95] tracking-tight text-off-white max-w-[900px] mx-auto mb-2.5">
            Eu sei como
            <span className="text-amber block">fazer sua doença</span>
            sumir da sua vida
          </h1>

          <p className="text-lg text-muted max-w-[600px] mx-auto mb-10 font-light leading-relaxed">
            Não é sobre força de vontade.<br />
            Não é sobre sorte.<br />
            É sobre <strong className="text-off-white font-medium">entender o padrão emocional que está adoecendo seu corpo.</strong>
          </p>

          <a 
            href={checkoutUrl} 
            className="inline-block bg-amber hover:bg-amber-light text-dark font-medium py-4.5 px-12 rounded-md transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Quero saber como →
          </a>

          <div className="mt-7 flex justify-center gap-8 flex-wrap">
            <span className="text-sm text-muted flex items-center gap-1.5">
              <Calendar className="w-[15px] h-[15px] text-amber" />
              18 de abril, às 09h30
            </span>
            <span className="text-sm text-muted flex items-center gap-1.5">
              <Mail className="w-[15px] h-[15px] text-amber" />
              100% Online e ao vivo
            </span>
            <span className="text-sm text-muted flex items-center gap-1.5">
              <ShieldCheck className="w-[15px] h-[15px] text-amber" />
              Garantia de 30 dias
            </span>
          </div>
        </div>
      </section>

      <hr className="border-none border-t border-white/7 m-0" />

      {/* IDENTIFICATION SECTION */}
      <section className="py-20 px-6 bg-dark">
        <Reveal className="max-w-[800px] mx-auto text-center">
          <div className="text-[11px] tracking-[0.14em] uppercase text-amber font-medium mb-4">Isso é pra você?</div>
          <h2 className="font-serif text-[clamp(28px,5vw,44px)] font-bold leading-tight text-off-white mb-6">
            Se você tem <em className="text-amber italic not-italic">algum</em> desses sintomas,<br />eu quero falar com você.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-10">
            {[
              "Enxaqueca ou dor de cabeça constante",
              "Candidíase recorrente",
              "Ansiedade que não passa",
              "Fibromialgia ou dores sem explicação",
              "Endometriose ou cistos",
              "Cansaço emocional profundo",
              "Insônia ou sono que não descansa",
              "Sensação de sobrecarga constante",
              "Síndrome do pânico",
              "Gastrite, refluxo ou problemas digestivos",
              "Pressão alta ou palpitações",
              "Compulsão alimentar"
            ].map((symptom, idx) => (
              <div key={idx} className="bg-dark-card/50 border border-white/5 rounded-lg p-4 flex items-center text-left gap-4 text-[14px] text-off-white/90 hover:border-amber/30 transition-all hover:bg-dark-card">
                <div className="w-6 h-6 bg-amber/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-amber" />
                </div>
                {symptom}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* VICIOUS CYCLE SECTION */}
      <section className="py-16 px-6 bg-off-white text-dark overflow-hidden">
        <Reveal className="max-w-[900px] mx-auto text-center">
          <div className="text-[11px] tracking-[0.14em] uppercase text-amber-dim font-bold mb-3">O Ciclo que te aprisiona</div>
          <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-bold leading-tight mb-12 text-dark">
            Você está presa em um <br /><span className="text-amber-dim italic">ciclo vicioso.</span>
          </h2>
          
          <div className="relative w-56 h-56 md:w-64 md:h-64 mx-auto mb-12">
             {/* Animated dotted circle */}
             <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_15s_linear_infinite]">
                <circle 
                  cx="100" cy="100" r="80" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeDasharray="6 6"
                  className="text-amber/60"
                />
             </svg>
             
             <div className="absolute inset-0 flex items-center justify-center">
                <RefreshCw className="w-10 h-10 text-amber animate-[spin_8s_linear_infinite]" />
             </div>

             {/* Positioned Words with floating animation */}
             <motion.div 
               animate={{ y: [0, -6, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-2 left-1/2 -translate-x-1/2 bg-dark text-amber px-5 py-1.5 rounded-lg font-bebas text-xl tracking-wider shadow-xl z-10"
             >
               Trata
             </motion.div>
             
             <motion.div 
               animate={{ x: [0, 6, 0] }}
               transition={{ duration: 3, repeat: Infinity, delay: 1, ease: "easeInOut" }}
               className="absolute top-1/2 -right-8 -translate-y-1/2 bg-dark text-amber px-5 py-1.5 rounded-lg font-bebas text-xl tracking-wider shadow-xl z-10"
             >
               Melhora
             </motion.div>

             <motion.div 
               animate={{ x: [0, -6, 0] }}
               transition={{ duration: 3, repeat: Infinity, delay: 2, ease: "easeInOut" }}
               className="absolute top-1/2 -left-8 -translate-y-1/2 bg-dark text-amber px-5 py-1.5 rounded-lg font-bebas text-xl tracking-wider shadow-xl z-10"
             >
               Volta
             </motion.div>
          </div>

          <div className="max-w-[600px] mx-auto">
             <p className="text-xl md:text-2xl font-serif italic mb-6 text-dark/80 leading-relaxed">
               "Você trata. Melhora. Volta. Trata. Melhora. Volta. <br className="hidden md:block" />
               Isso não é azar. Isso é <span className="text-dark font-bold not-italic">padrão.</span>"
             </p>
             <div className="h-1 w-16 bg-amber mx-auto mb-8 rounded-full" />
             <p className="text-lg md:text-xl font-medium text-dark uppercase tracking-tight leading-snug">
               E padrão se resolve na <span className="text-amber-dim underline decoration-2 underline-offset-4 font-bold">causa.</span>
             </p>
             
             <div className="mt-12">
                <a 
                  href={checkoutUrl} 
                  className="inline-block bg-dark text-amber font-medium py-4 px-10 rounded-md transition-all hover:scale-105 shadow-lg text-sm md:text-base"
                >
                  Quero quebrar esse ciclo →
                </a>
             </div>
          </div>
        </Reveal>
      </section>

      <hr className="border-none border-t border-white/7 m-0" />

      {/* THE PROMISE SECTION */}
      <section className="bg-dark-3 py-20 px-6">
        <Reveal className="max-w-[820px] mx-auto text-center">
          <div className="text-[11px] tracking-[0.14em] uppercase text-amber font-medium mb-4">A verdade que ninguém te contou</div>
          <h2 className="font-serif text-[clamp(28px,5vw,44px)] font-bold leading-tight text-off-white mb-6">
            O seu corpo não está te <em className="text-amber italic not-italic">traindo.</em><br />Ele está tentando te avisar.
          </h2>

          <p className="text-[17px] text-muted leading-relaxed my-6 max-w-[700px] mx-auto">
            Depois de mais de 7.000 atendimentos clínicos, eu identifiquei um padrão que se repete com impressionante precisão: <strong className="text-off-white">toda doença tem uma causa emocional.</strong> Sem exceção.
          </p>
          <p className="text-[17px] text-muted leading-relaxed mb-6 max-w-[700px] mx-auto">
            Isso não significa que você é fraca. Significa que você passou anos engolindo o que sente, cuidando de todo mundo, e deixando o seu corpo gritar por você — no único idioma que ele conhece: a doença.
          </p>

          <div className="text-[11px] tracking-[0.14em] uppercase text-amber font-medium mt-12 mb-4">Os 4 padrões que adoecem seu corpo</div>
          <h2 className="font-serif text-[clamp(28px,5vw,44px)] font-bold leading-tight text-off-white mb-6">
            Toda doença se encaixa em <em className="text-amber italic not-italic">um destes</em> padrões
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-center max-w-[800px] mx-auto">
            {[
              { 
                num: "01", 
                name: "Proteção", 
                icon: <Shield className="w-8 h-8 text-amber" />,
                desc: "O corpo cria uma barreira entre você e algo que representa risco emocional.", 
                examples: "Candidíase, endometriose, psoríase, herpes recorrente" 
              },
              { 
                num: "02", 
                name: "Evitação", 
                icon: <Ban className="w-8 h-8 text-amber" />,
                desc: "O corpo te impede de enfrentar algo que gera medo ou confronto.", 
                examples: "Labirintite, síndrome do pânico, enxaqueca, desmaios" 
              },
              { 
                num: "03", 
                name: "Compensação", 
                icon: <Scale className="w-8 h-8 text-amber" />,
                desc: "O corpo preenche um vazio emocional que nunca foi preenchido de outra forma.", 
                examples: "Compulsão alimentar, vícios, bulimia" 
              },
              { 
                num: "04", 
                name: "Suporte", 
                icon: <Anchor className="w-8 h-8 text-amber" />,
                desc: "O corpo carrega um peso emocional que nunca pôde ser expresso.", 
                examples: "Fibromialgia, hérnia de disco, artrose, fadiga crônica" 
              }
            ].map((pattern, idx) => (
              <div key={idx} className="bg-dark-card border border-white/6 rounded-xl p-8 transition-all hover:border-amber/30 hover:-translate-y-0.5 flex flex-col items-center">
                <div className="w-16 h-16 bg-amber/10 rounded-full flex items-center justify-center mb-6">
                  {pattern.icon}
                </div>
                <div className="font-bebas text-[24px] text-amber/40 leading-none mb-2 tracking-widest">{pattern.num}</div>
                <div className="font-sans text-lg font-bold text-amber-light uppercase tracking-wider mb-3">{pattern.name}</div>
                <p className="text-sm text-muted leading-relaxed mb-4">{pattern.desc}</p>
                <div className="mt-auto pt-4 border-t border-white/5 w-full">
                  <p className="text-[13px] text-off-white/60 leading-relaxed">
                    <strong className="text-off-white font-medium">Exemplos:</strong><br /> {pattern.examples}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ACCOUNTABILITY */}
      <section className="bg-amber text-dark py-18 px-6 text-center">
        <h2 className="font-bebas text-[clamp(38px,7vw,72px)] leading-none mb-5 tracking-tight">
          EU ME RESPONSABILIZO<br />POR VOCÊ.
        </h2>
        <p className="text-lg max-w-[600px] mx-auto mb-8 font-light leading-relaxed text-dark/80">
          Se você seguir o método que vou te ensinar no workshop,<br />
          é impossível não dar certo. Eu me comprometo pessoalmente com isso.<br />
          Por isso, a garantia é de 30 dias — não 7, não 15. <strong className="font-bold">30 dias.</strong>
        </p>
        <a 
          href={checkoutUrl} 
          className="inline-block bg-dark text-amber font-medium py-4.5 px-12 rounded-md transition-colors hover:bg-dark-3"
        >
          Quero participar →
        </a>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-dark-2 py-20 px-6">
        <Reveal className="max-w-[760px] mx-auto text-center">
          <div className="text-[11px] tracking-[0.14em] uppercase text-amber font-medium mb-4">O que você vai receber</div>
          <h2 className="font-serif text-[clamp(28px,5vw,44px)] font-bold leading-tight text-off-white mb-6">
            Tudo que você precisa para <em className="text-amber italic not-italic">agir na raiz</em>
          </h2>

          <div className="space-y-0 text-left">
            {[
              { 
                icon: <CalendarDays className="w-[22px] h-[22px] text-amber" />, 
                title: "3 horas de workshop ao vivo", 
                desc: "Bruno vai ao vivo, sem roteiro ensaiado, te ensinando a identificar o padrão emocional por trás da sua doença e o protocolo exato para agir na raiz." 
              },
              { 
                icon: <Search className="w-[22px] h-[22px] text-amber" />, 
                title: "Ferramenta Bússola da Cura", 
                desc: "O \"Google das doenças emocionais\". Você digita qualquer sintoma ou doença e ela devolve a causa emocional por trás — com base em mais de 7.000 atendimentos." 
              },
              { 
                icon: <PenLine className="w-[22px] h-[22px] text-amber" />, 
                title: "Protocolo de Desativação", 
                desc: "O passo a passo exato para agir na causa e desativar o padrão emocional por trás da doença. Para adultos e crianças." 
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-5 py-6 border-b border-white/6 last:border-none items-start">
                <div className="w-11 h-11 bg-amber/12 rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-[17px] font-medium text-off-white mb-1.5">{item.title}</h3>
                  <p className="text-[15px] text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-11 text-center">
            <a 
              href={checkoutUrl} 
              className="inline-block bg-amber hover:bg-amber-light text-dark font-medium py-4.5 px-12 rounded-md transition-all hover:-translate-y-0.5"
            >
              Garantir minha vaga por R$37 →
            </a>
            <p className="text-[13px] text-muted mt-3.5">
              Cartão, boleto, 2 cartões. Sem complicação.
            </p>
          </div>
        </Reveal>
      </section>

      <hr className="border-none border-t border-white/7 m-0" />

      {/* BONUS */}
      <section className="bg-dark-3 py-20 px-6">
        <Reveal className="max-w-[1000px] mx-auto text-center">
          <div className="text-[11px] tracking-[0.14em] uppercase text-amber font-medium mb-4">O que você leva pra casa</div>
          <h2 className="font-serif text-[clamp(28px,5vw,44px)] font-bold leading-tight text-off-white mb-12">
            Bônus exclusivos que <em className="text-amber italic not-italic">valem mais</em> que o workshop.
          </h2>
          
          <div className="space-y-10">
            {/* UNIFIED BÚSSOLA CARD */}
            <BussolaAnimation />

            {/* SECONDARY BONUS */}
            <div className="mt-10 bg-dark-card border border-white/10 rounded-2xl p-8 text-left flex flex-col md:flex-row gap-8 items-center max-w-[800px] mx-auto">
               <div className="w-20 h-20 bg-amber/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                 <PenLine className="w-10 h-10 text-amber" />
               </div>
               <div className="flex-1">
                 <div className="bg-white/10 text-off-white text-[10px] font-bold tracking-widest uppercase py-1 px-3 rounded-full w-fit mb-3">Bônus #2</div>
                 <h3 className="text-xl font-bold text-off-white mb-2">Protocolo de Desativação</h3>
                 <p className="text-[15px] text-muted leading-relaxed">O mesmo passo a passo que Bruno usa nos atendimentos. Identifica o padrão, rastreia a raiz e te mostra como desativar a doença — para adultos e crianças.</p>
               </div>
               <div className="text-right flex-shrink-0">
                 <div className="text-[13px] text-muted line-through mb-0.5">R$67,00</div>
                 <div className="font-bebas text-[32px] text-amber leading-none tracking-wider">Grátis</div>
               </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ANCHORING */}
      <section className="bg-dark py-20 px-6 text-center">
        <Reveal className="max-w-[560px] mx-auto">
          <div className="text-[11px] tracking-[0.14em] uppercase text-amber font-medium mb-4">O que você está levando</div>
          <h2 className="font-serif text-[clamp(28px,5vw,44px)] font-bold leading-tight text-off-white mb-6">
            O workshop sai <em className="text-amber italic not-italic">de graça.</em>
          </h2>
          
          <div className="my-8 border border-white/6 rounded-xl overflow-hidden">
            {[
              { name: "Workshop ao vivo (3h)", sub: "18 de abril · com Bruno Simplício", val: "R$97" },
              { name: "Ferramenta Bússola da Cura", sub: "Acesso vitalício", val: "R$47" },
              { name: "Protocolo de Desativação", sub: "Adultos e crianças", val: "R$67" }
            ].map((line, idx) => (
              <div key={idx} className="flex justify-between items-center py-4.5 px-6 border-b border-white/6 last:border-none bg-dark-card">
                <div className="text-[15px] text-left text-off-white">
                  {line.name}
                  {line.sub && <small className="block text-[12px] text-muted mt-0.5">{line.sub}</small>}
                </div>
                <div className="font-bebas text-[22px] tracking-wider whitespace-nowrap text-muted line-through">
                  {line.val}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <p className="text-sm text-muted tracking-widest uppercase mb-2">Você paga hoje</p>
            <div className="flex items-baseline justify-center gap-4">
              <span className="font-bebas text-[80px] text-amber leading-none tracking-tight">
                <sup className="font-sans text-[28px] font-light align-super leading-none">R$</sup>37
              </span>
            </div>
          </div>

          <a 
            href={checkoutUrl} 
            className="inline-block bg-amber hover:bg-amber-light text-dark font-medium py-5 px-13 rounded-md text-lg transition-all hover:-translate-y-0.5"
          >
            QUERO TUDO POR R$37 →
          </a>
          <p className="text-[13px] text-muted mt-3.5">Cartão · Boleto · 2 cartões · 30 dias de garantia</p>
        </Reveal>
      </section>

      <hr className="border-none border-t border-white/7 m-0" />

      {/* ABOUT BRUNO */}
      <section className="bg-dark-3 py-20 px-6">
        <Reveal className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 items-center">
          <div className="w-full max-w-[300px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-amber/20 mx-auto md:mx-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <img 
              src="http://brunosimplicio.com.br/wp-content/uploads/2026/01/3B3A6131.jpg" 
              alt="Bruno Simplício" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-serif text-[clamp(24px,4vw,36px)] font-bold text-off-white mb-2">Bruno Simplício</h2>
            <p className="text-[13px] text-amber tracking-widest uppercase font-medium mb-5">Terapeuta • Fundador do IAC</p>
            <p className="text-[15px] text-muted mb-4 leading-relaxed">Diferente de teóricos de palco, Bruno é um veterano de trincheira. Tudo que ele ensina foi aprendido caso a caso, atendimento por atendimento — não em livros.</p>
            <p className="text-[15px] text-muted mb-4 leading-relaxed">Com formação em psicanálise e uma história pessoal de superação de traumas, ele descobriu na prática como as emoções não tratadas se manifestam no corpo com precisão impressionante.</p>
            <p className="text-[15px] text-muted mb-4 leading-relaxed">Hoje é o primeiro homem que muitas mulheres encontram que não as feriu — mas as curou.</p>
            
            <div className="flex gap-7 mt-6 flex-wrap justify-center md:justify-start">
              <div className="text-left">
                <div className="font-bebas text-4xl text-amber leading-none">7.000+</div>
                <div className="text-[12px] text-muted uppercase tracking-wider">Atendimentos clínicos</div>
              </div>
              <div className="text-left">
                <div className="font-bebas text-4xl text-amber leading-none">30 dias</div>
                <div className="text-[12px] text-muted uppercase tracking-wider">De garantia real</div>
              </div>
              <div className="text-left">
                <div className="font-bebas text-4xl text-amber leading-none">100%</div>
                <div className="text-[12px] text-muted uppercase tracking-wider">De responsabilidade</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* GUARANTEE */}
      <section className="py-20 px-6 bg-dark">
        <Reveal className="max-w-[680px] mx-auto bg-dark-card border-1.5 border-amber/30 rounded-2xl p-10 md:p-12 text-center">
          <div className="w-20 h-20 bg-amber/12 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-10 h-10 text-amber" />
          </div>
          <h2 className="font-bebas text-[40px] text-amber tracking-wider mb-4">GARANTIA DE 30 DIAS</h2>
          <p className="text-base text-muted leading-relaxed max-w-[520px] mx-auto">Se você assistir e achar que não valeu R$37, eu devolvo tudo. Sem pergunta.</p>

          <div className="mt-7">
            <a 
              href={checkoutUrl} 
              className="inline-block bg-amber hover:bg-amber-light text-dark font-medium py-4.5 px-12 rounded-md transition-all hover:-translate-y-0.5"
            >
              Quero começar com garantia →
            </a>
          </div>
        </Reveal>
      </section>

      {/* PRICING */}
      <section className="py-20 pb-25 px-6 bg-dark-2 text-center">
        <div className="text-[11px] tracking-[0.14em] uppercase text-amber font-medium mb-4">Invista em você hoje</div>
        <h2 className="font-serif text-[clamp(28px,5vw,44px)] font-bold leading-tight text-off-white mb-10">Uma decisão. Uma noite. Uma virada.</h2>

        <Reveal className="max-w-[520px] mx-auto bg-dark-card border-2 border-amber rounded-2xl p-10 md:p-12">
          <div className="inline-block bg-danger text-white text-[12px] font-medium tracking-widest uppercase py-1.5 px-4 rounded-full mb-7">⚡ 80% das vagas preenchidas</div>

          <div className="text-sm text-muted tracking-wider uppercase mb-2">Workshop Bússola da Cura • 18 de abril</div>
          <div className="font-bebas text-[88px] text-off-white leading-none tracking-tight">
            <sup className="font-sans text-[32px] font-light align-super leading-none text-muted">R$</sup>37
          </div>
          <div className="text-[15px] text-muted mt-2 mb-8">pagamento único • acesso imediato</div>

          <ul className="text-left space-y-0 mb-9">
            {[
              "3 horas de workshop ao vivo com Bruno",
              "Ferramenta Diagnóstico Emocional Instantâneo",
              "Protocolo completo de rastreio da causa",
              "Garantia de 30 dias (devolução total)"
            ].map((item, idx) => (
              <li key={idx} className="text-[15px] text-off-white py-2.5 border-b border-white/6 last:border-none flex items-center gap-2.5">
                <div className="w-[18px] h-[18px] bg-amber/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-amber" />
                </div>
                {item}
              </li>
            ))}
          </ul>

          <a 
            href={checkoutUrl} 
            className="block w-full bg-amber hover:bg-amber-light text-dark font-medium py-5 rounded-md text-lg transition-all hover:-translate-y-0.5"
          >
            GARANTIR MINHA VAGA AGORA
          </a>

          <div className="mt-5 flex justify-center gap-4 flex-wrap text-[13px] text-muted">
            <span className="flex items-center gap-1.5"><CreditCard className="w-3.5 h-3.5" /> Cartão de crédito</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Boleto</span>
            <span className="flex items-center gap-1.5"><CreditCard className="w-3.5 h-3.5" /> 2 cartões</span>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 bg-dark text-center border-t border-white/5">
        <p className="text-[13px] text-muted">© 2026 Bruno Simplício. Todos os direitos reservados.</p>
        <p className="text-[13px] text-muted mt-2">Este workshop não substitui acompanhamento médico. Caso você esteja em tratamento, continue com seu médico.</p>
      </footer>

      {/* STICKY BAR - MINIMALIST CARD STYLE */}
      <div className="fixed bottom-4 left-4 right-4 z-50 pointer-events-none">
        <div className="max-w-[500px] mx-auto py-3 px-5 bg-dark-card/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] pointer-events-auto">
          <div className="text-center mb-2">
            <div className="flex items-center justify-center gap-1.5 text-muted font-medium text-[10px] uppercase tracking-wider">
              <Users className="w-3 h-3 text-amber/60" />
              {visitors} pessoas lendo agora
            </div>
          </div>

          <div className="relative h-2 bg-dark/60 rounded-full overflow-hidden border border-white/5 mb-2">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="h-full bg-amber relative"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[shimmer_2s_linear_infinite]" />
            </motion.div>
          </div>

          <div className="text-center">
            <div className="text-[11px] tracking-[0.1em] uppercase text-amber font-bold">
              {Math.floor(progress)}% das vagas Preenchidas
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
