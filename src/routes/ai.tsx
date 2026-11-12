import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUp, BrainCircuit, CircleHelp, History, Menu, Mic, Plus, Send,
  Settings2, Sparkles, Volume2, VolumeX, X
} from "lucide-react";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "Pemura AI — Assistente pessoal" },
      { name: "description", content: "Protótipo do assistente pessoal Pemura AI." },
      { name: "theme-color", content: "#09070f" },
    ],
  }),
  component: PemuraAI,
});

type Message = { id: number; role: "user" | "assistant"; text: string; time: string };

const starterPrompts = [
  { icon: "✦", title: "Organize meu dia", prompt: "Me ajude a organizar meu dia com prioridades." },
  { icon: "⌁", title: "Me explique um assunto", prompt: "Explique inteligência artificial de um jeito simples." },
  { icon: "◷", title: "Crie um lembrete", prompt: "Me ajude a criar um lembrete para amanhã." },
  { icon: "↗", title: "Planeje uma tarefa", prompt: "Quero planejar uma tarefa passo a passo." },
];

function localReply(input: string) {
  const q = input.toLocaleLowerCase("pt-BR");
  if (/(oi|olá|ola|bom dia|boa tarde|boa noite)/.test(q)) {
    return "Olá! Eu sou a Pemura. Posso ajudar você a organizar ideias, planejar tarefas, estudar e encontrar caminhos para resolver problemas. O que vamos fazer?";
  }
  if (/(organiza|meu dia|prioridade|rotina)/.test(q)) {
    return "Vamos organizar isso. Primeiro, separe o que é urgente do que pode esperar. Minha sugestão é escolher até três prioridades para hoje, estimar o tempo de cada uma e reservar pequenos intervalos. Me diga quais tarefas você tem e eu monto uma ordem para elas.";
  }
  if (/(lembrete|lembrar|amanhã|amanha|horário|horario)/.test(q)) {
    return "Posso ajudar a estruturar esse lembrete. Me informe o que você precisa lembrar e o dia e horário. Neste protótipo, ainda não envio notificações reais; por enquanto, organizo a informação aqui na conversa.";
  }
  if (/(estuda|estudar|prova|explica|matéria|materia)/.test(q)) {
    return "Claro! Posso explicar o assunto em etapas, resumir os pontos principais e depois criar perguntas para você praticar. Qual é a matéria ou o tema?";
  }
  if (/(pedido|ifood|comprar|encomendar|lanchonete)/.test(q)) {
    return "Entendi o que você quer fazer. No produto final, a Pemura poderá ajudar a preparar tarefas em aplicativos compatíveis. Este protótipo ainda não controla o iFood nem realiza compras. Posso organizar os detalhes do pedido para você revisar antes de abrir o aplicativo.";
  }
  if (/(óculos|oculos|pemura one)/.test(q)) {
    return "A visão do Pemura é conectar esta inteligência ao Pemura One. O celular pode cuidar do processamento e da conexão, enquanto os óculos captam sua voz e reproduzem as respostas. A integração dependerá do hardware escolhido e das permissões do fabricante.";
  }
  return "Entendi. Posso ajudar a transformar isso em um plano, explicar opções ou organizar os próximos passos. Me conte um pouco mais sobre o resultado que você quer alcançar.";
}

function nowLabel() {
  return new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit" }).format(new Date());
}

function PemuraAI() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: "assistant", text: "Olá! Eu sou a Pemura AI. Estou aqui para ajudar você a pensar, organizar e realizar tarefas. O que posso fazer por você?", time: nowLabel() },
  ]);
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  useEffect(() => {
    try {
      const saved = localStorage.getItem("pemura-ai-history");
      if (saved) {
        const parsed = JSON.parse(saved) as Message[];
        if (Array.isArray(parsed) && parsed.length) setMessages(parsed);
      }
    } catch { /* ignore unavailable local storage */ }
  }, []);
  useEffect(() => {
    try { localStorage.setItem("pemura-ai-history", JSON.stringify(messages.slice(-60))); } catch { /* ignore */ }
  }, [messages]);

  function speak(text: string) {
    if (!speaking || typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  }

  function sendMessage(value = input) {
    const text = value.trim();
    if (!text) return;
    const userMessage: Message = { id: Date.now(), role: "user", text, time: nowLabel() };
    const answer = localReply(text);
    const assistantMessage: Message = { id: Date.now() + 1, role: "assistant", text: answer, time: nowLabel() };
    setMessages((current) => [...current, userMessage, assistantMessage]);
    setInput("");
    speak(answer);
  }

  function startListening() {
    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setShowInfo(true);
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "pt-BR";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event: any) => {
      const transcript = event.results?.[0]?.[0]?.transcript || "";
      setListening(false);
      if (transcript) sendMessage(transcript);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
    setListening(true);
    recognition.start();
  }

  function newChat() {
    window.speechSynthesis?.cancel();
    setMessages([{ id: Date.now(), role: "assistant", text: "Conversa nova iniciada. O que você gostaria de fazer?", time: nowLabel() }]);
    setMenuOpen(false);
  }

  return (
    <main className="min-h-screen bg-[#09070f] text-[#f7f4fb] flex overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        .pemura-app{font-family:'DM Sans',sans-serif}.pemura-display{font-family:'Space Grotesk',sans-serif}
        .pemura-glow{background:radial-gradient(circle,rgba(151,91,255,.22),rgba(89,42,153,.08) 42%,transparent 72%)}
        .pemura-scroll::-webkit-scrollbar{width:5px}.pemura-scroll::-webkit-scrollbar-thumb{background:#352747;border-radius:9px}
        .pemura-message{animation:messageIn .28s ease-out}@keyframes messageIn{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:translateY(0)}}
        .pemura-orb{box-shadow:0 0 55px rgba(143,83,255,.2),inset 0 0 25px rgba(255,255,255,.05)}
        .pemura-dots span{animation:pulseDot 1.2s infinite ease-in-out}.pemura-dots span:nth-child(2){animation-delay:.15s}.pemura-dots span:nth-child(3){animation-delay:.3s}
        @keyframes pulseDot{0%,80%,100%{opacity:.25;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}
      `}</style>
      <aside className={`fixed inset-y-0 left-0 z-30 w-[270px] border-r border-white/[.07] bg-[#0d0a14] p-5 transition-transform md:static md:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between">
          <a href="/ai" className="pemura-display text-[21px] font-bold tracking-[.18em]">PEMURA<span className="text-violet-400">.</span></a>
          <button onClick={() => setMenuOpen(false)} className="rounded-lg p-2 text-white/50 hover:bg-white/5 md:hidden" aria-label="Fechar menu"><X size={18}/></button>
        </div>
        <button onClick={newChat} className="mt-9 flex w-full items-center gap-3 rounded-xl border border-violet-400/30 bg-violet-500/[.10] px-4 py-3 text-sm font-semibold text-violet-100 hover:bg-violet-500/[.17]"><Plus size={17}/> Nova conversa</button>
        <div className="mt-9">
          <p className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-[.2em] text-white/35">Seu espaço</p>
          <div className="flex items-center gap-3 rounded-lg bg-white/[.045] px-3 py-3 text-sm text-white/75"><History size={16} className="text-violet-300"/> Conversa atual</div>
          <button onClick={() => setShowInfo(true)} className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-white/50 hover:bg-white/[.04]"><Settings2 size={16}/> Sobre o protótipo</button>
        </div>
        <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/[.07] bg-white/[.025] p-3">
          <div className="flex items-center gap-2 text-xs font-semibold"><span className="h-2 w-2 rounded-full bg-emerald-400"/> Protótipo ativo</div>
          <p className="mt-1 text-[11px] leading-relaxed text-white/40">Modo de demonstração · sem cobrança de API</p>
        </div>
      </aside>
      {menuOpen && <button aria-label="Fechar menu" className="fixed inset-0 z-20 bg-black/60 md:hidden" onClick={() => setMenuOpen(false)}/>}
      <section className="pemura-app relative flex min-w-0 flex-1 flex-col">
        <header className="flex h-[68px] shrink-0 items-center justify-between border-b border-white/[.07] px-4 sm:px-7">
          <div className="flex items-center gap-3">
            <button onClick={() => setMenuOpen(true)} className="rounded-lg p-2 text-white/60 hover:bg-white/5 md:hidden" aria-label="Abrir menu"><Menu size={19}/></button>
            <div><p className="text-sm font-semibold">Pemura AI</p><p className="text-[10px] tracking-wide text-white/35">ASSISTENTE PESSOAL</p></div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/[.08] bg-white/[.03] px-3 py-1.5 text-[10px] text-white/55"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Demonstração</div>
        </header>
        <div className="pemura-scroll flex-1 overflow-y-auto px-4 pb-8 pt-8 sm:px-8">
          <div className="mx-auto max-w-[790px]">
            {messages.length <= 1 ? (
              <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
                <div className="pemura-glow relative mb-7 flex h-32 w-32 items-center justify-center rounded-full">
                  <div className="pemura-orb flex h-[82px] w-[82px] items-center justify-center rounded-[27px] border border-violet-300/25 bg-gradient-to-br from-[#34204f] to-[#151020]"><BrainCircuit size={38} strokeWidth={1.35} className="text-violet-200"/></div>
                  <span className="absolute right-5 top-4 h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_14px_4px_rgba(167,120,255,.5)]"/>
                </div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.28em] text-violet-300/80">INTELIGÊNCIA AO SEU ALCANCE</p>
                <h1 className="pemura-display text-3xl font-semibold tracking-tight sm:text-[42px]">O que vamos <span className="bg-gradient-to-r from-violet-200 to-purple-500 bg-clip-text text-transparent">resolver</span> hoje?</h1>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/45">Converse, organize suas ideias e transforme pedidos em próximos passos.</p>
                <div className="mt-9 grid w-full max-w-[650px] grid-cols-1 gap-2 sm:grid-cols-2">
                  {starterPrompts.map((item) => <button key={item.title} onClick={() => sendMessage(item.prompt)} className="group flex items-center gap-3 rounded-xl border border-white/[.08] bg-white/[.025] p-4 text-left transition hover:border-violet-400/35 hover:bg-violet-500/[.07]"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-400/10 text-lg text-violet-200">{item.icon}</span><span className="flex-1 text-xs font-medium text-white/75">{item.title}</span><ArrowUp size={14} className="rotate-45 text-white/25 transition group-hover:text-violet-200"/></button>)}
                </div>
              </div>
            ) : (
              <div className="space-y-7 pb-10">
                {messages.map((message) => <div key={message.id} className={`pemura-message flex gap-3 sm:gap-4 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${message.role === "assistant" ? "border border-violet-300/20 bg-violet-500/15 text-violet-200" : "bg-white/10 text-white/65"}`}>{message.role === "assistant" ? <Sparkles size={15}/> : <span className="text-[10px] font-bold">VOCÊ</span>}</div>
                  <div className={`max-w-[82%] ${message.role === "user" ? "text-right" : ""}`}>
                    <div className={`inline-block rounded-2xl px-4 py-3 text-[13px] leading-7 ${message.role === "assistant" ? "rounded-tl-md border border-white/[.07] bg-[#15111e] text-white/85" : "rounded-tr-md bg-violet-600/80 text-white"}`}>{message.text}</div>
                    <p className="mt-1.5 px-1 text-[9px] text-white/25">{message.time}</p>
                  </div>
                </div>)}
                <div ref={bottomRef}/>
              </div>
            )}
          </div>
        </div>
        <div className="shrink-0 px-3 pb-[max(16px,env(safe-area-inset-bottom))] pt-3 sm:px-8">
          <div className="mx-auto max-w-[790px]">
            <div className="rounded-2xl border border-white/[.10] bg-[#14101c] p-2 shadow-[0_15px_60px_rgba(0,0,0,.25)] transition focus-within:border-violet-400/40">
              <textarea value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }} rows={2} placeholder="Converse com a Pemura..." className="max-h-32 min-h-[54px] w-full resize-none bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/30"/>
              <div className="flex items-center justify-between px-1 pb-1">
                <div className="flex items-center gap-1">
                  <button onClick={startListening} className={`flex h-9 items-center gap-2 rounded-xl px-3 text-xs transition ${listening ? "bg-rose-500/15 text-rose-300" : "text-white/45 hover:bg-white/[.06] hover:text-white/80"}`}><Mic size={15}/><span className="hidden sm:inline">{listening ? "Ouvindo..." : "Falar"}</span></button>
                  <button onClick={() => setSpeaking(!speaking)} className="flex h-9 items-center gap-2 rounded-xl px-3 text-xs text-white/40 hover:bg-white/[.06] hover:text-white/80" title={speaking ? "Desativar voz" : "Ativar voz"}>{speaking ? <Volume2 size={15}/> : <VolumeX size={15}/>}<span className="hidden sm:inline">Voz</span></button>
                </div>
                <button onClick={() => sendMessage()} disabled={!input.trim()} className="flex h-9 w-10 items-center justify-center rounded-xl bg-violet-500 text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-30" aria-label="Enviar mensagem"><Send size={16}/></button>
              </div>
            </div>
            <p className="mt-3 text-center text-[9px] leading-5 text-white/25">A Pemura pode cometer erros. Este protótipo usa respostas demonstrativas, não uma IA conectada.</p>
          </div>
        </div>
      </section>
      {showInfo && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setShowInfo(false)}><div className="w-full max-w-md rounded-2xl border border-violet-300/15 bg-[#15101e] p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="flex items-center justify-between"><div className="flex items-center gap-2 text-sm font-semibold"><CircleHelp size={17} className="text-violet-300"/> Sobre este protótipo</div><button onClick={() => setShowInfo(false)} className="rounded-lg p-2 text-white/50 hover:bg-white/5"><X size={17}/></button></div><p className="mt-4 text-sm leading-7 text-white/65">Esta primeira versão demonstra a interface, o histórico local, a entrada por texto, o reconhecimento de voz quando o navegador oferece suporte e a leitura das respostas em voz alta.</p><p className="mt-3 text-sm leading-7 text-white/65">As respostas são regras demonstrativas. Para conectar uma IA real, será necessário configurar um serviço de IA e uma integração segura no servidor. Não coloque chaves secretas no aplicativo.</p><button onClick={() => setShowInfo(false)} className="mt-5 w-full rounded-xl bg-violet-500 py-3 text-sm font-semibold text-white hover:bg-violet-400">Entendi</button></div></div>}
    </main>
  );
}
