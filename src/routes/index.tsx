import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X, AudioLines, Bluetooth, Camera, Cpu, Smartphone, Sparkles, Mic2, Volume2 } from "lucide-react";
import { site, specifications, softwareSpecifications } from "../content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PEMURA — Tecnologia que acompanha você" },
      { name: "description", content: "Conheça a Pemura: óculos inteligentes com interação por voz e inteligência artificial." },
      { property: "og:title", content: "PEMURA — Tecnologia que acompanha você" },
      { property: "og:description", content: "Óculos inteligentes com interação por voz e inteligência artificial." },
      { name: "theme-color", content: "#07070b" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: PemuraHome,
});

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      node.classList.add("pemura-in");
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        node.classList.add("pemura-in");
        observer.disconnect();
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`pemura-reveal ${className}`}>{children}</div>;
}

function Glasses() {
  return <div className="minimal-glasses" aria-label="Ilustração conceitual dos óculos Pemura">
    <div className="minimal-glasses-glow" />
    <svg viewBox="0 0 900 330" role="img" aria-label="Óculos inteligentes pretos com detalhes violetas">
      <defs>
        <linearGradient id="p-frame" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#9ba0b2"/><stop offset=".35" stopColor="#343746"/><stop offset=".72" stopColor="#11131b"/><stop offset="1" stopColor="#777b91"/></linearGradient>
        <linearGradient id="p-lens" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#33384d" stopOpacity=".92"/><stop offset="1" stopColor="#090a11"/></linearGradient>
        <linearGradient id="p-glint" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#8b5cff" stopOpacity="0"/><stop offset=".5" stopColor="#b6a1ff" stopOpacity=".9"/><stop offset="1" stopColor="#8b5cff" stopOpacity="0"/></linearGradient>
        <filter id="p-shadow"><feGaussianBlur stdDeviation="16"/></filter>
      </defs>
      <ellipse cx="450" cy="276" rx="275" ry="17" fill="#7a55ff" opacity=".23" filter="url(#p-shadow)"/>
      <g stroke="url(#p-frame)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
        <path d="M93 119 Q54 95 28 62" fill="none"/><path d="M807 119 Q846 95 872 62" fill="none"/>
        <path d="M86 111 Q91 76 128 73 L353 73 Q397 75 403 116 L392 235 Q388 268 351 271 L143 271 Q103 269 96 235 Z" fill="url(#p-lens)"/>
        <path d="M497 116 Q503 75 547 73 L772 73 Q809 76 814 111 L804 235 Q797 269 757 271 L549 271 Q512 268 508 235 Z" fill="url(#p-lens)"/>
        <path d="M403 126 Q450 104 497 126" fill="none" strokeWidth="16"/>
        <path d="M110 104 Q226 78 340 101" fill="none" stroke="#fff" strokeOpacity=".16" strokeWidth="4"/>
        <path d="M560 101 Q674 78 790 104" fill="none" stroke="#fff" strokeOpacity=".16" strokeWidth="4"/>
      </g>
      <g fill="none" stroke="url(#p-glint)" strokeWidth="2"><path d="M99 112 Q105 82 132 82 L354 82 Q386 84 393 118"/><path d="M507 118 Q514 84 546 82 L768 82 Q795 82 801 112"/></g>
      <circle cx="103" cy="122" r="6" fill="#a98cff"/><circle cx="797" cy="122" r="6" fill="#a98cff"/>
    </svg>
    <span className="minimal-glasses-label">PEMURA ONE</span>
  </div>;
}

function PemuraHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllSpecs, setShowAllSpecs] = useState(false);
  const nav = [
    ["Visão geral", "#inicio"],
    ["Experiência", "#experiencia"],
    ["Tecnologia", "#tecnologia"],
    ["O projeto", "#projeto"],
  ];
  const closeMenu = () => setMenuOpen(false);

  return <div className="pemura-minimal" id="inicio">
    <header className="minimal-header">
      <a href="#inicio" className="minimal-brand" aria-label="Pemura, início">PEMURA<span>®</span></a>
      <nav className="minimal-nav" aria-label="Navegação principal">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <a className="minimal-store-link" href="/loja">Loja <ArrowUpRight size={15}/></a>
      <button className="minimal-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>
    {menuOpen && <div className="minimal-mobile-menu"><div className="minimal-mobile-top"><span className="minimal-brand">PEMURA<span>®</span></span><button onClick={closeMenu} aria-label="Fechar menu"><X/></button></div>{nav.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}<ArrowUpRight/></a>)}<a href="/loja" onClick={closeMenu}>Loja<ArrowUpRight/></a></div>}

    <main>
      <section className="minimal-hero">
        <div className="minimal-hero-copy">
          <span className="minimal-kicker"><i/> ÓCULOS INTELIGENTES COM IA</span>
          <h1>O mundo<br/>não precisa<br/>esperar sua <em>tela.</em></h1>
          <p>Uma nova forma de interagir com a tecnologia. Natural, por voz e sempre com você.</p>
          <div className="minimal-actions"><a className="minimal-primary" href="#experiencia">Descobrir a Pemura <ArrowRight size={17}/></a><a className="minimal-secondary" href="/loja">Conhecer o produto <ArrowUpRight size={16}/></a></div>
        </div>
        <div className="minimal-hero-art"><div className="minimal-orbit orbit-a"/><div className="minimal-orbit orbit-b"/><Glasses/><span className="minimal-art-note">DESIGN CONCEITUAL · PEMURA ONE</span></div>
        <span className="minimal-scroll">ROLE PARA EXPLORAR <span/></span>
      </section>

      <section className="minimal-intro" id="experiencia">
        <Reveal className="minimal-intro-inner">
          <span className="minimal-kicker">UMA NOVA EXPERIÊNCIA</span>
          <h2>Você fala.<br/><em>A Pemura entende.</em></h2>
          <p>Peça, pergunte e interaja sem precisar tirar o celular do bolso. A Pemura conecta sua voz à inteligência do smartphone.</p>
        </Reveal>
        <div className="minimal-feature-list">
          <Reveal className="minimal-feature"><span className="minimal-feature-icon"><Mic2/></span><div><h3>Interação por voz</h3><p>Fale naturalmente, sem depender de comandos complicados.</p></div><ArrowUpRight/></Reveal>
          <Reveal className="minimal-feature"><span className="minimal-feature-icon"><AudioLines/></span><div><h3>Áudio integrado</h3><p>Receba respostas e informações diretamente pelos óculos.</p></div><ArrowUpRight/></Reveal>
          <Reveal className="minimal-feature"><span className="minimal-feature-icon"><Smartphone/></span><div><h3>Conectada ao celular</h3><p>O smartphone faz a ponte com os serviços e a inteligência artificial.</p></div><ArrowUpRight/></Reveal>
        </div>
      </section>

      <section className="minimal-how" id="como-funciona">
        <Reveal className="minimal-section-heading"><span className="minimal-kicker">SIMPLES DE USAR</span><h2>Da sua voz<br/>à <em>ação.</em></h2></Reveal>
        <div className="minimal-process">
          <Reveal className="minimal-process-item"><span className="minimal-process-icon"><Mic2/></span><h3>Você fala</h3><p>O microfone capta sua solicitação.</p></Reveal>
          <Reveal className="minimal-process-item"><span className="minimal-process-icon"><Bluetooth/></span><h3>O celular conecta</h3><p>O aplicativo recebe e encaminha o pedido.</p></Reveal>
          <Reveal className="minimal-process-item"><span className="minimal-process-icon"><Sparkles/></span><h3>A IA responde</h3><p>A resposta chega pelo áudio dos óculos.</p></Reveal>
        </div>
      </section>

      <section className="minimal-tech" id="tecnologia">
        <div className="minimal-tech-head"><Reveal><span className="minimal-kicker">POR DENTRO DA PEMURA</span><h2>Tecnologia feita<br/>para <em>desaparecer.</em></h2></Reveal><p>O essencial para uma experiência leve: captação de voz, processamento, conectividade e áudio.</p></div>
        <div className="minimal-tech-feature">
          <div className="minimal-tech-visual"><div className="minimal-chip"><Cpu/><span>PEMURA</span></div><div className="minimal-chip-line line-one"/><div className="minimal-chip-line line-two"/><div className="minimal-chip-line line-three"/></div>
          <div className="minimal-tech-points">
            <div><Mic2/><span><b>Microfone MEMS</b><small>Captação digital de voz</small></span></div>
            <div><Volume2/><span><b>Áudio compacto</b><small>Respostas sonoras integradas</small></span></div>
            <div><Bluetooth/><span><b>Bluetooth Low Energy</b><small>Conexão com o smartphone</small></span></div>
            <div><Camera/><span><b>Câmera OV2640</b><small>Componente em avaliação para versões futuras</small></span></div>
          </div>
        </div>
        <div className="minimal-spec-toggle"><button onClick={() => setShowAllSpecs(!showAllSpecs)} aria-expanded={showAllSpecs}>{showAllSpecs ? "Ocultar especificações completas" : "Ver especificações completas"}<ChevronDown className={showAllSpecs ? "turned" : ""}/></button></div>
        {showAllSpecs && <div className="minimal-spec-details">
          <div><h3>Hardware</h3>{specifications.map((item) => <article key={item.name}><span>{item.category}</span><b>{item.name}</b><p>{item.detail}</p><small>{item.status}</small></article>)}</div>
          <div><h3>Software</h3>{softwareSpecifications.map((item) => <article key={item.name}><span>{item.category}</span><b>{item.name}</b><p>{item.detail}</p></article>)}</div>
          <p className="minimal-note">A Pemura está em desenvolvimento. Os componentes e recursos indicados são referências de projeto e ainda dependem de integração e testes.</p>
        </div>}
      </section>

      <section className="minimal-project" id="projeto">
        <div className="minimal-project-glow"/>
        <Reveal><span className="minimal-kicker">O PROJETO</span><h2>Mais liberdade.<br/><em>Menos distração.</em></h2><p>{site.promise}</p><a className="minimal-primary" href="/loja">Explorar Pemura One <ArrowRight size={17}/></a></Reveal>
      </section>
    </main>

    <footer className="minimal-footer"><a href="#inicio" className="minimal-brand">PEMURA<span>®</span></a><span>O futuro diante de seus olhos.</span><a href="/loja">Conheça a loja <ArrowUpRight size={15}/></a><small>© 2026 PEMURA · Projeto em desenvolvimento</small></footer>
  </div>;
}
