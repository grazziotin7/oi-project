import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Menu, Pause, Play, X } from "lucide-react";
import { site, flow, steps, hardware, moments, futureStages, disclaimers } from "../content/site";
import { creators } from "../content/creators";
import { demos } from "../content/demos";
import { submitEmail } from "../lib/waitlist";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PEMURA — O futuro diante de seus olhos" },
      { name: "description", content: "Óculos inteligentes com IA que você controla pela voz. Fale, a Pemura entende e age. Conheça o futuro diante dos seus olhos." },
      { property: "og:title", content: "PEMURA — O futuro diante de seus olhos" },
      { property: "og:description", content: "Óculos inteligentes com IA que você controla pela voz. Fale, a Pemura entende e age." },
      { property: "og:image", content: "/og-image.svg" },
      { name: "twitter:image", content: "/og-image.svg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#05060A" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "canonical", href: "https://pemura.com.br/" },
    ],
  }),
  component: PemuraHome,
});

function Logo() {
  const [failed, setFailed] = useState(false);
  // SUBSTITUIR PELO ASSET OFICIAL quando a logo vetorial for adicionada ao projeto.
  return failed
    ? <span className="logo-word">PEMURA<span className="logo-dot">.</span></span>
    : <img className="logo-image" src="/src/assets/pemura-logo.svg" alt="PEMURA" onError={() => setFailed(true)} />;
}

function GlassesVisual({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? "glasses-visual glasses-compact" : "glasses-visual"} aria-label="Ilustração conceitual de óculos inteligentes">
    <div className="glasses-halo" />
    <svg viewBox="0 0 900 360" role="img" aria-label="Silhueta minimalista de óculos pretos com reflexos azul-violeta">
      <defs>
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#9da6b7"/><stop offset=".2" stopColor="#222a38"/><stop offset=".55" stopColor="#687184"/><stop offset="1" stopColor="#111722"/></linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#27334a" stopOpacity=".48"/><stop offset=".55" stopColor="#111722" stopOpacity=".82"/><stop offset="1" stopColor="#070910" stopOpacity=".94"/></linearGradient>
        <linearGradient id="rim" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#3D7BFF" stopOpacity=".05"/><stop offset=".5" stopColor="#8B5CFF" stopOpacity=".9"/><stop offset="1" stopColor="#3D7BFF" stopOpacity=".1"/></linearGradient>
        <filter id="blurGlow"><feGaussianBlur stdDeviation="15"/></filter>
      </defs>
      <ellipse cx="450" cy="292" rx="270" ry="24" fill="#3D7BFF" opacity=".16" filter="url(#blurGlow)"/>
      <g stroke="url(#metal)" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
        <path d="M82 129 Q48 114 23 82 Q12 69 22 57" fill="none"/>
        <path d="M818 129 Q852 114 877 82 Q888 69 878 57" fill="none"/>
        <path d="M80 110 Q83 79 120 76 L358 76 Q399 78 405 117 L394 244 Q389 279 351 282 L139 282 Q97 279 91 244 Z" fill="url(#glass)"/>
        <path d="M495 117 Q501 78 542 76 L780 76 Q817 79 820 110 L809 244 Q803 279 761 282 L549 282 Q511 279 506 244 Z" fill="url(#glass)"/>
        <path d="M405 128 Q450 103 495 128" fill="none" strokeWidth="15"/>
        <path d="M111 107 Q213 83 327 104" fill="none" stroke="#dbe4f7" strokeOpacity=".18" strokeWidth="4"/>
        <path d="M573 104 Q687 83 789 107" fill="none" stroke="#dbe4f7" strokeOpacity=".18" strokeWidth="4"/>
        <path d="M84 124 L56 111" fill="none" strokeWidth="17"/>
        <path d="M816 124 L844 111" fill="none" strokeWidth="17"/>
      </g>
      <g fill="none" stroke="url(#rim)" strokeWidth="2">
        <path d="M93 114 Q96 84 126 84 L354 84 Q389 86 395 119"/>
        <path d="M505 119 Q511 86 546 84 L774 84 Q804 84 807 114"/>
      </g>
      <circle cx="95" cy="119" r="7" fill="#3D7BFF"/><circle cx="95" cy="119" r="17" fill="#3D7BFF" opacity=".18"/>
      <circle cx="806" cy="119" r="4" fill="#8B5CFF"/>
      <path d="M165 111 Q230 90 312 105" stroke="#fff" strokeOpacity=".12" strokeWidth="3" fill="none"/>
      <path d="M584 105 Q666 90 735 111" stroke="#fff" strokeOpacity=".12" strokeWidth="3" fill="none"/>
    </svg>
    <span className="connection-light" aria-hidden="true" />
    <span className="glasses-caption">PEMURA / DESIGN STUDY</span>
  </div>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.classList.add("is-visible"); observer.disconnect(); }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

const schema = z.object({ email: z.string().trim().email("Digite um e-mail válido.") });
type FormValues = z.infer<typeof schema>;

function PemuraHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scenario, setScenario] = useState(0);
  const [paused, setPaused] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [activeHardware, setActiveHardware] = useState(0);
  const [sent, setSent] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key === "Tab" && menuRef.current) {
        const items = menuRef.current.querySelectorAll<HTMLElement>("a,button");
        if (!items.length) return;
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setScenario((current) => (current + 1) % demos.length), 10000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const currentDemo = demos[scenario];
  const onSubmit = async (values: FormValues) => {
    await submitEmail(values.email);
    setSent(true);
  };
  const closeMenu = () => setMenuOpen(false);
  const nav = site.nav;

  return <main id="top">
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="header">
      <div className="header-inner">
        <a href="#top" className="brand" aria-label="Pemura, início"><Logo /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">{nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
        <a className="header-cta" href="#acompanhar">Conhecer a Pemura <ArrowUpRight size={15}/></a>
        <button className="menu-button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>
    {menuOpen && <div className="mobile-menu" ref={menuRef} role="dialog" aria-modal="true" aria-label="Menu principal">
      <div className="mobile-menu-top"><Logo/><button className="menu-button" onClick={closeMenu} aria-label="Fechar menu"><X/></button></div>
      <nav>{nav.map((item, index) => <a key={item.href} style={{ transitionDelay: `${index * 70}ms` }} href={item.href} onClick={closeMenu}>{item.label}<ArrowUpRight/></a>)}</nav>
      <a className="pill-button menu-cta" href="#acompanhar" onClick={closeMenu}>Quero acompanhar <ArrowRight/></a>
    </div>}

    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-light hero-light-one"/><div className="hero-light hero-light-two"/>
      <div className="hero-inner" id="conteudo">
        <div className="hero-visual-wrap"><GlassesVisual/></div>
        <div className="hero-copy">
          <div className="status-pill"><span className="status-dot"/> {site.status}</div>
          <Eyebrow>{site.hero.eyebrow}</Eyebrow>
          <h1 id="hero-title"><span>PEMURA</span><span className="outline">O FUTURO</span><em>diante de seus olhos<span className="blue-period">.</span></em></h1>
          <p>{site.hero.description}</p>
          <div className="hero-actions"><a className="pill-button" href="#experiencia">Conhecer a Pemura <ArrowRight/></a><a className="text-link" href="#como-funciona">Ver como funciona <ArrowDown/></a></div>
        </div>
      </div>
      <a className="scroll-cue" href="#interface"><span>ROLE PARA DESCOBRIR</span><span className="scroll-line"/></a>
      <span className="hero-index">PEMURA / 001 — INTERFACE VESTÍVEL</span>
    </section>

    <section className="section interface-section" id="interface" aria-labelledby="interface-title">
      <div className="container">
        <Reveal><Eyebrow>01 — INTERFACE</Eyebrow><h2 id="interface-title">Não é apenas um óculos.<br/>É uma nova <i>interface.</i></h2>
          <p className="section-intro">A Pemura é a camada entre você e o computador. Uma forma mais natural de acessar a inteligência e os serviços digitais sem viver diante de uma tela.</p></Reveal>
        <div className="flow-line" aria-label="Fluxo: você, Pemura, inteligência artificial e mundo digital">
          {flow.map(([label, text], index) => <div className="flow-node" key={label}><span className="node-index">0{index + 1}</span><span className="node-orb"><i/></span><strong>{label}</strong><small>{text}</small></div>)}
        </div>
        <p className="flow-caption">VOZ <span>→</span> ÓCULOS <span>→</span> BLUETOOTH <span>→</span> APP PEMURA <span>→</span> IA <span>→</span> CELULAR / SERVIÇOS</p>
      </div>
    </section>

    <section className="section demo-section" id="experiencia" aria-labelledby="demo-title" ref={demoRef}>
      <div className="container">
        <Reveal className="demo-heading"><div><Eyebrow>02 — EM AÇÃO</Eyebrow><h2 id="demo-title">Fale. <i>Veja acontecer.</i></h2></div><p>Uma conversa natural pode iniciar uma ação. Quando ela exige uma decisão sua, a Pemura pede confirmação.</p></Reveal>
        <div className="demo-shell">
          <aside className="demo-sidebar" aria-label="Cenários da demonstração">
            <span className="eyebrow">ESCOLHA UMA CENA</span>
            <div className="scenario-tabs">{demos.map((demo, index) => <button key={demo.title} className={scenario === index ? "scenario active" : "scenario"} onClick={() => { setScenario(index); setConfirmed(false); setPaused(false); }}><span>0{index + 1}</span>{demo.title}<ArrowUpRight size={15}/></button>)}</div>
          </aside>
          <div className="demo-device">
            <div className="device-top"><span className="device-brand">PEMURA / VOICE</span><span className="device-state"><i/> CONECTADO</span></div>
            <div className="waveform" aria-hidden="true">{Array.from({ length: 35 }, (_, i) => <i key={i} style={{ "--bar": `${10 + ((i * 17) % 35)}px`, animationDelay: `${i * 22}ms` } as React.CSSProperties}/>)}</div>
            <div className="conversation" aria-live="polite" aria-atomic="true">
              {currentDemo.messages.map(([speaker, message], index) => <div key={index} style={{ animationDelay: `${index * 260}ms` }} className={speaker === "Você" ? "message user-message" : "message pemura-message"}><span>{speaker === "Você" ? "VOCÊ" : "PEMURA"}</span><p>{message}</p></div>)}
              {currentDemo.confirmation && <div className="confirm-note"><span className="confirm-indicator"/> {confirmed ? "CONFIRMAÇÃO REGISTRADA · SIMULAÇÃO" : "AÇÃO SENSÍVEL · CONFIRMAÇÃO DO USUÁRIO"} {!confirmed && <button onClick={() => { setConfirmed(true); setPaused(true); }}>Confirmar</button>}</div>}
            </div>
            <div className="demo-bottom"><span><i/> {currentDemo.confirmation && !confirmed ? "AGUARDANDO CONFIRMAÇÃO" : "CONCLUÍDO"}</span><button className="pause-button" onClick={() => setPaused(!paused)} aria-label={paused ? "Retomar demonstração" : "Pausar demonstração"}>{paused ? <Play size={14}/> : <Pause size={14}/>} {paused ? "RETOMAR" : "PAUSAR"}</button></div>
          </div>
        </div>
        <p className="demo-disclaimer">{disclaimers.demo}</p>
      </div>
    </section>

    <section className="section intelligence-section" aria-labelledby="intelligence-title">
      <div className="container">
        <Reveal><Eyebrow>03 — INTELIGÊNCIA</Eyebrow><h2 id="intelligence-title">Você fala. A Pemura <i>entende.</i></h2><p className="section-intro">Não é um comando decorado. É uma interface natural entre você, a IA e os serviços digitais.</p></Reveal>
        <div className="intelligence-flow">{[["01","FALAR","Sua voz inicia a conversa."],["02","ENTENDER","A intenção ganha contexto."],["03","DECIDIR","O sistema prepara o próximo passo."],["04","AGIR","A ação segue para o serviço conectado."]].map(([n,t,d],i)=><Reveal key={n} className="intelligence-step"><span>{n}</span><div className={`step-symbol symbol-${i}`}>{i===0?<div className="mini-wave"><i/><i/><i/><i/><i/></div>:i===1?<div className="converge"><i/><i/><i/><b/></div>:i===2?<div className="decision"><i/><i/><b/></div>:<div className="pulse-out"><i/></div>}</div><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
      </div>
    </section>

    <section className="section pocket-section" aria-labelledby="pocket-title">
      <div className="container">
        <Reveal><Eyebrow>04 — LIBERDADE</Eyebrow><h2 id="pocket-title">Menos tela. <i>Mais vida.</i></h2><p className="section-intro">Menos tempo olhando para uma tela, mais tempo vivendo o momento.</p></Reveal>
        <div className="bento-grid">
          {moments.map((item,index)=><article key={item.id} className={`bento-tile tile-${index+1} tile-${item.kind}`}><div className="tile-top"><span>0{index+1} / PEMURA</span><ArrowUpRight size={16}/></div><div className="tile-art" aria-hidden="true">{item.kind==="message"?<div className="chat-art"><i>Estou chegando.</i><b>Mensagem pronta</b></div>:item.kind==="audio"?<div className="equalizer">{Array.from({length:17},(_,i)=><i key={i}/>)}</div>:item.kind==="route"?<div className="route-art"><svg viewBox="0 0 180 90"><path d="M10 70 Q45 65 54 30 T105 40 T170 12" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 5"/><circle cx="10" cy="70" r="4" fill="currentColor"/><circle cx="170" cy="12" r="4" fill="currentColor"/></svg></div>:item.kind==="call"?<div className="call-art"><span>•••</span><i/></div>:item.kind==="assistant"?<div className="ai-art">?</div>:item.kind==="translate"?<div className="translate-art">Olá <span>↔</span> Hello</div>:<div className="service-art"><span>PRONTO</span><Check/></div>}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}
          <article className="bento-tile tile-concept"><span className="eyebrow">UMA NOVA INTERAÇÃO</span><strong>0</strong><p>toques no celular para iniciar uma conversa por voz.</p><small>*Ilustração de conceito, não uma métrica medida.</small></article>
          <article className="bento-tile tile-ring"><div className="progress-ring"><svg viewBox="0 0 140 140"><circle cx="70" cy="70" r="60"/><circle className="ring-progress" cx="70" cy="70" r="60"/></svg><div><span>ETAPA</span><strong>VOZ</strong><small>→ BLUETOOTH</small></div></div><p>SEM PEGAR O CELULAR</p><a href="#como-funciona">VER A HISTÓRIA <ArrowUpRight size={13}/></a></article>
        </div>
      </div>
    </section>

    <section className="section hardware-section" id="hardware" aria-labelledby="hardware-title">
      <div className="container">
        <Reveal className="hardware-heading"><div><Eyebrow>05 — ENGENHARIA</Eyebrow><h2 id="hardware-title">Engenharia que <i>desaparece.</i></h2></div><p>A primeira versão prioriza o essencial: uma interface vestível, simples de usar e conectada ao seu celular.</p></Reveal>
        <div className="hardware-layout"><div className="hardware-visual"><GlassesVisual compact/><div className="hotspot hotspot-1"/><div className="hotspot hotspot-2"/><div className="hotspot hotspot-3"/><div className="hotspot hotspot-4"/><div className="hotspot hotspot-5"/></div>
          <div className="hardware-list">{hardware.map(([title,desc],index)=><button key={title} className={activeHardware===index?"hardware-point selected":"hardware-point"} onClick={()=>setActiveHardware(index)}><span>0{index+1}</span><strong>{title}</strong><ArrowUpRight size={15}/>{activeHardware===index&&<span className="hardware-detail">{desc}</span>}</button>)}</div>
        </div>
        <p className="hardware-note">{disclaimers.hardware} <a href="#futuro">O restante da plataforma vem depois <ArrowUpRight size={13}/></a></p>
      </div>
    </section>

    <section className="section architecture-section" id="como-funciona" aria-labelledby="architecture-title">
      <div className="container">
        <Reveal><Eyebrow>06 — ARQUITETURA</Eyebrow><h2 id="architecture-title">Do que você diz ao que <i>acontece.</i></h2></Reveal>
        <div className="architecture-layout">
          <div className="architecture-visual"><div className="arch-node active"><span>01</span><strong>ÓCULOS</strong><small>INTERFACE</small></div><i>⇄</i><div className="arch-node"><span>02</span><strong>CELULAR</strong><small>COMPUTADOR</small></div><i>⇄</i><div className="arch-node"><span>03</span><strong>IA</strong><small>CÉREBRO</small></div><i>⇄</i><div className="arch-node"><span>04</span><strong>SERVIÇOS</strong><small>CONEXÕES</small></div></div>
          <div className="timeline">{steps.map(([title,desc],index)=><Reveal key={title} className="timeline-step"><span className="timeline-number">0{index+1}</span><div><h3>{title}</h3><p>{desc}</p></div></Reveal>)}</div>
        </div>
        <p className="architecture-manifesto">Os óculos são a interface.<br/>O celular é o computador.<br/><i>A IA é o cérebro.</i></p>
        <p className="fine-print">{disclaimers.compatibility}</p>
      </div>
    </section>

    <section className="section future-section" id="futuro" aria-labelledby="future-title">
      <div className="container">
        <Reveal><Eyebrow>07 — O QUE VEM</Eyebrow><h2 id="future-title">A primeira versão é só o <i>começo.</i></h2></Reveal>
        <div className="future-track">
          {futureStages.map((stage) => <article key={stage.state} className={`future-stage ${stage.state}`}><span className="stage-marker"/><small>{stage.status}</small><h3>{stage.title}</h3><p>{stage.text}</p><b>{stage.label}</b></article>)}
        </div>
        <p className="fine-print">{disclaimers.future}</p>
      </div>
    </section>

    <section className="vision-section" aria-label="Visão da Pemura">
      <div className="vision-glow"/>
      <div className="vision-copy"><Eyebrow>VISÃO — UMA OUTRA RELAÇÃO COM A TECNOLOGIA</Eyebrow><p>A tecnologia não deveria exigir que você olhe para ela o tempo inteiro.</p><p>Ela deveria <i>desaparecer</i> na experiência.</p><p>A Pemura coloca inteligência à sua disposição sem interromper o mundo ao seu redor.</p></div>
    </section>

    <section className="section creators-section" id="criadores" aria-labelledby="creators-title">
      <div className="container">
        <Reveal><Eyebrow>08 — QUEM CONSTRÓI</Eyebrow><h2 id="creators-title">Feito por quem <i>acredita</i> nisso.</h2><p className="section-intro">Três criadores. Uma ideia: tirar a tecnologia do caminho.</p></Reveal>
        <div className="creator-grid">{creators.map((person,index)=><Reveal key={person.initials} className="creator-tile"><div className="creator-avatar">{person.photo?<img src={person.photo} alt={person.name} loading="lazy" width="128" height="128"/>:<span>{person.initials}</span>}</div><span className="creator-index">PEMURA / 0{index+1}</span><h3>{person.name}</h3><p>{person.role || "CRIADOR · PEMURA"}</p><div className="creator-links">{Object.entries(person.links).map(([label, url]) => <a key={label} href={url} target="_blank" rel="noreferrer">{label}</a>)}</div></Reveal>)}</div>
        <p className="creator-signoff">Pemura nasceu de uma pergunta simples: <i>por que o futuro ainda cabe só na palma da mão?</i></p>
      </div>
    </section>

    <section className="final-section" id="acompanhar" aria-labelledby="final-title">
      <div className="final-beam"/>
      <div className="final-inner"><div className="status-pill"><span className="status-dot"/>{site.status}</div><Eyebrow>O PRÓXIMO CAPÍTULO COMEÇA AQUI</Eyebrow><h2 id="final-title">O futuro está <i>diante dos seus olhos.</i></h2><p>Conheça a Pemura.</p>
        {!sent ? <form className="waitlist-form" onSubmit={handleSubmit(onSubmit)} noValidate><label htmlFor="email">SEU E-MAIL</label><div className="email-row"><input id="email" type="email" placeholder="voce@email.com" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email?"email-error":"email-help"} {...register("email")}/><button type="submit" disabled={isSubmitting}>Quero acompanhar a Pemura <ArrowRight size={17}/></button></div>{errors.email&&<p className="form-error" id="email-error" role="alert">{errors.email.message}</p>}<p className="form-privacy" id="email-help">{site.privacy}</p></form>:<div className="success-message" role="status"><Check/> Obrigado. Você será avisado quando houver novidades.</div>}
      </div>
    </section>

    <footer className="footer">
      <div className="footer-main"><a href="#top" className="brand"><Logo/></a><p>{site.footer}</p><nav aria-label="Links do rodapé">{nav.map((item)=><a key={item.href} href={item.href}>{item.label}</a>)}</nav><a href="#top" className="back-top">VOLTAR AO TOPO ↑</a></div>
      <div className="footer-bottom"><span>© 2026 PEMURA. TODOS OS DIREITOS RESERVADOS.</span><span>FEITO NO BRASIL.</span></div>
    </footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "PEMURA", description: "Óculos inteligentes com IA controlados por voz.", url: "https://pemura.com.br/" }) }} />
  </main>;
}
