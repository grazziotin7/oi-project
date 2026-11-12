import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Cpu, Camera, Mic, Volume2, BatteryCharging, Bluetooth, Smartphone, Bot, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/loja")({
  head: () => ({ meta: [
    { title: "Loja Pemura — Pemura One" },
    { name: "description", content: "Conheça o primeiro conceito de óculos inteligentes Pemura." },
  ]}),
  component: PemuraStore,
});

const parts = [
  { icon: Cpu, code: "01 / PROCESSAMENTO", name: "Seeed Studio XIAO ESP32S3 Sense", text: "Placa principal com ESP32-S3, Wi-Fi e Bluetooth Low Energy.", status: "BASE DO PROJETO" },
  { icon: Camera, code: "02 / CÂMERA", name: "OV2640", text: "Módulo de câmera associado à placa Sense. Captura de imagem em avaliação para futuras funções.", status: "EM AVALIAÇÃO" },
  { icon: Mic, code: "03 / MICROFONE", name: "MEMS integrado à XIAO ESP32S3 Sense", text: "Capta a voz. Um microfone I²S externo pode ser testado como alternativa.", status: "INTEGRADO / ALTERNATIVA" },
  { icon: Volume2, code: "04 / ÁUDIO", name: "MAX98357A + mini alto-falante 8 Ω / 1 W", text: "Amplificador digital e alto-falante miniatura para reproduzir respostas sonoras.", status: "PROPOSTA" },
  { icon: BatteryCharging, code: "05 / ENERGIA", name: "Bateria Li-Po 3,7 V + carregador USB-C", text: "Capacidade, circuito de proteção e autonomia dependem de medições do protótipo.", status: "A VALIDAR" },
  { icon: Bluetooth, code: "06 / CONEXÃO", name: "Bluetooth Low Energy + Wi-Fi", text: "Conectividade prevista para comunicação com o smartphone e serviços.", status: "INTEGRADO À PLACA" },
  { icon: Smartphone, code: "07 / APLICATIVO", name: "Aplicativo Pemura para Android e iOS", text: "App planejado para configurações, permissões e integração com serviços.", status: "EM DESENVOLVIMENTO" },
  { icon: Bot, code: "08 / INTELIGÊNCIA", name: "Serviço de IA + reconhecimento e síntese de voz", text: "Interpreta comandos e gera respostas faladas. Provedor e arquitetura ainda não definidos.", status: "EM DESENVOLVIMENTO" },
];

function ProductGlasses() {
  return <div className="store-product-art" aria-label="Ilustração conceitual dos óculos Pemura">
    <div className="store-art-orbit orbit-one"/><div className="store-art-orbit orbit-two"/>
    <div className="store-art-glasses">
      <svg viewBox="0 0 900 360" role="img" aria-label="Óculos inteligentes pretos com detalhes violeta">
        <defs>
          <linearGradient id="storeMetal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#c4c9d5"/><stop offset=".3" stopColor="#252b3b"/><stop offset=".7" stopColor="#788197"/><stop offset="1" stopColor="#111522"/></linearGradient>
          <linearGradient id="storeLens" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#34405d" stopOpacity=".8"/><stop offset="1" stopColor="#090b14"/></linearGradient>
          <linearGradient id="storeEdge"><stop stopColor="#4b8bff"/><stop offset=".5" stopColor="#a78bfa"/><stop offset="1" stopColor="#4b8bff"/></linearGradient>
        </defs>
        <g stroke="url(#storeMetal)" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
          <path d="M82 129 Q48 114 23 82 Q12 69 22 57" fill="none"/><path d="M818 129 Q852 114 877 82 Q888 69 878 57" fill="none"/>
          <path d="M80 110 Q83 79 120 76 L358 76 Q399 78 405 117 L394 244 Q389 279 351 282 L139 282 Q97 279 91 244 Z" fill="url(#storeLens)"/>
          <path d="M495 117 Q501 78 542 76 L780 76 Q817 79 820 110 L809 244 Q803 279 761 282 L549 282 Q511 279 506 244 Z" fill="url(#storeLens)"/>
          <path d="M405 128 Q450 103 495 128" fill="none" strokeWidth="15"/>
        </g>
        <g fill="none" stroke="url(#storeEdge)" strokeWidth="3"><path d="M93 114 Q96 84 126 84 L354 84 Q389 86 395 119"/><path d="M505 119 Q511 86 546 84 L774 84 Q804 84 807 114"/></g>
        <circle cx="95" cy="119" r="7" fill="#73a7ff"/><circle cx="95" cy="119" r="20" fill="#73a7ff" opacity=".15"/>
      </svg>
    </div>
    <span className="store-art-caption">PEMURA / PRODUCT STUDY 001</span>
  </div>;
}

function PemuraStore() {
  const [expanded, setExpanded] = useState(false);
  return <main className="store-page">
    <header className="store-header">
      <Link to="/" className="store-logo" aria-label="Voltar ao início">PEMURA<span>.</span></Link>
      <nav><Link to="/">Início</Link><a className="store-nav-active" href="#produto">Loja</a></nav>
      <Link to="/" className="store-back"><ArrowLeft size={15}/> Voltar ao site</Link>
    </header>
    <section className="store-hero" id="produto">
      <div className="store-hero-glow"/>
      <div className="store-hero-copy">
        <p className="store-eyebrow">PEMURA STORE / PRIMEIRA EDIÇÃO</p>
        <h1>O primeiro<br/><i>Pemura.</i></h1>
        <p>Conheça o Pemura One: uma proposta de óculos inteligente com interação por voz, áudio integrado e conexão com o smartphone.</p>
        <a className="store-primary-cta" href="#detalhes">Descobrir o produto <ArrowRight size={16}/></a>
        <span className="store-release">CONCEITO EM DESENVOLVIMENTO · PMR / 001</span>
      </div>
      <ProductGlasses/>
      <div className="store-hero-index">01 — PEMURA ONE</div>
    </section>
    <section className="store-product-section" id="detalhes">
      <div className="store-section-head"><div><p className="store-eyebrow">01 / O PRODUTO</p><h2>Conheça o <i>Pemura One.</i></h2></div><p>Uma experiência pensada para deixar a tecnologia mais próxima, sem precisar tirar o celular do bolso.</p></div>
      <article className="store-product-panel">
        <div className="store-product-summary"><span className="store-product-tag">PRIMEIRA EDIÇÃO · CONCEITO</span><h3>Pemura One</h3><p>Óculos inteligente com microfone, áudio e conectividade. A primeira versão prioriza comandos de voz e integração com o celular — sem tela no visor.</p>
          <div className="store-price"><small>PREÇO DE VENDA SUGERIDO</small><strong>R$ 899,90</strong><span>Valor de referência para o projeto escolar</span></div>
          <button className="store-expand" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>{expanded ? "Recolher especificações" : "Ver todas as especificações"} <ChevronDown className={expanded ? "turned" : ""} size={17}/></button>
        </div>
        <div className="store-summary-art"><ProductGlasses/></div>
        {expanded && <div className="store-specifications">
          <div className="store-spec-head"><p className="store-eyebrow">POR DENTRO DO PEMURA</p><h3>Peças, software e funcionamento.</h3><p>Esta é a arquitetura planejada para o protótipo. Os componentes marcados como proposta ou em avaliação ainda precisam de seleção, compra e testes de compatibilidade.</p></div>
          <div className="store-parts-grid">{parts.map((part) => { const Icon = part.icon; return <article className="store-part" key={part.code}><div className="store-part-top"><Icon size={18}/><span>{part.code}</span></div><h4>{part.name}</h4><p>{part.text}</p><small>{part.status}</small></article>; })}</div>
          <div className="store-how-it-works"><p className="store-eyebrow">COMO FUNCIONA</p><div><span>01</span><p><b>Você fala</b> e o microfone capta o comando.</p></div><div><span>02</span><p><b>A placa processa</b> e se comunica com o smartphone.</p></div><div><span>03</span><p><b>O aplicativo conecta</b> o pedido ao serviço de IA.</p></div><div><span>04</span><p><b>A resposta retorna</b> em áudio pelo alto-falante dos óculos.</p></div></div>
          <div className="store-cost-row"><div><small>CUSTO ESTIMADO DE FABRICAÇÃO</small><strong>R$ 450–600</strong><p>Estimativa preliminar por unidade, sujeita a cotações, montagem, impostos e testes.</p></div><div><small>PREÇO DE VENDA SUGERIDO</small><strong>R$ 899,90</strong><p>Preço ilustrativo de planejamento, não oferta de venda nem valor final aprovado.</p></div></div>
          <p className="store-disclaimer">O produto ainda é um conceito em desenvolvimento. Dimensões, peso, autonomia, compatibilidade elétrica e encaixe dos componentes na armação precisam ser validados em protótipo.</p>
        </div>}
      </article>
    </section>
    <footer className="store-footer"><Link to="/"><span>PEMURA.</span> O futuro diante de seus olhos.</Link><span>CONCEITO · 2026</span><Link to="/" className="store-footer-link">Voltar para a página inicial <ArrowUpRight size={14}/></Link></footer>
  </main>;
}
