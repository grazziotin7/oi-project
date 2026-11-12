import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, AudioLines, Battery, Bluetooth, Camera, Check, ChevronDown, Cpu, Eye, Menu, Mic, MoveUpRight, Radio, ShieldCheck, Smartphone, Sparkles, X, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pemura — Inteligência em uma nova perspectiva" },
      { name: "description", content: "Conheça Pemura, o conceito de óculos inteligentes com câmera, áudio e inteligência artificial conectada ao seu smartphone." },
      { property: "og:title", content: "Pemura — Inteligência em uma nova perspectiva" },
      { property: "og:description", content: "Tecnologia que acompanha o seu olhar." },
    ],
  }),
  component: Index,
});

const specs = [
  { icon: Camera, name: "Câmera", tag: "VISÃO COMPUTACIONAL", title: "O mundo em primeira pessoa.", body: "Módulo de câmera compacto baseado na família OV2640 / OV3660, integrado à plataforma de desenvolvimento XIAO ESP32S3 Sense. A configuração final ainda será validada no protótipo." },
  { icon: Mic, name: "Microfone", tag: "CAPTAÇÃO DE VOZ", title: "Sua voz é o comando.", body: "Microfone digital MEMS com interface I²S ou PDM em avaliação para captar comandos de voz com um conjunto compacto e de baixo consumo." },
  { icon: Cpu, name: "Processamento", tag: "ESP32-S3", title: "Pequeno no tamanho. Essencial no sistema.", body: "O ESP32-S3 é a plataforma candidata para controlar os módulos, gerenciar conexões e fazer a comunicação com o aplicativo." },
  { icon: Battery, name: "Bateria", tag: "ENERGIA", title: "Energia para acompanhar o dia.", body: "Bateria recarregável Li-Po de célula única (3,7 V nominal). Capacidade, autonomia, proteção e recarga serão definidas após testes de consumo." },
  { icon: Bluetooth, name: "Conectividade", tag: "BLUETOOTH + WI-FI", title: "Conectado ao que importa.", body: "Bluetooth Low Energy para comunicação com o smartphone. Wi-Fi pode ser utilizado em tarefas que exigem maior transferência de dados." },
  { icon: AudioLines, name: "Áudio", tag: "EXPERIÊNCIA SONORA", title: "Interação sem tirar o celular do bolso.", body: "Sistema de saída de áudio compacto em estudo. Alto-falante, amplificação e posicionamento serão escolhidos conforme conforto, clareza e espaço na armação." },
  { icon: Radio, name: "Sensores", tag: "MOVIMENTO", title: "Entendendo cada movimento.", body: "Um módulo IMU com acelerômetro e giroscópio poderá reconhecer orientação e movimentos, caso seja necessário para as funções do produto." },
  { icon: ShieldCheck, name: "Armação", tag: "DESIGN INDUSTRIAL", title: "Tecnologia que veste bem.", body: "Estrutura ergonômica com compartimentos internos planejados para eletrônica, bateria e cabos. Peso e dimensões finais dependem da montagem física." },
];

const faqs = [
  ["O Pemura já está sendo comercializado?", "Não. O Pemura é um projeto-conceito em desenvolvimento para uma proposta de produto. As especificações apresentadas são componentes candidatos e decisões em avaliação."],
  ["Como a inteligência artificial funciona?", "A proposta é conectar os óculos a um aplicativo no smartphone. O celular poderá processar solicitações e utilizar serviços de IA, reduzindo a necessidade de colocar todo o processamento nos óculos."],
  ["O Pemura precisa de internet?", "Algumas funções poderão depender de internet e dos serviços conectados. A disponibilidade de recursos offline ainda será definida durante o desenvolvimento."],
  ["Como a privacidade será tratada?", "A proposta deve incluir controles claros para câmera e microfone, indicação de quando estiverem ativos e respeito às pessoas ao redor. As regras de armazenamento, envio e exclusão de dados precisarão ser definidas antes de qualquer lançamento."],
  ["Qual será o preço, peso e autonomia?", "Esses dados ainda não foram definidos. Eles dependem da escolha final dos componentes, da armação e dos testes de consumo, conforto e fabricação."],
  ["O que é o Pemura Vision?", "É uma possibilidade futura de evolução com informações exibidas diretamente nas lentes. Não faz parte da versão-base proposta e exige pesquisa adicional de óptica, energia e segurança."],
];

function GlassesArt() {
  return <svg viewBox="0 0 720 360" role="img" aria-label="Ilustração conceitual dos óculos Pemura" className="glasses-art">
    <defs>
      <linearGradient id="lens" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#a78bfa" stopOpacity=".28"/><stop offset="1" stopColor="#7c3aed" stopOpacity=".04"/></linearGradient>
      <linearGradient id="frame" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#eee9ff"/><stop offset=".48" stopColor="#9b87d7"/><stop offset="1" stopColor="#51446e"/></linearGradient>
      <filter id="glow"><feGaussianBlur stdDeviation="12"/></filter>
    </defs>
    <ellipse cx="360" cy="190" rx="250" ry="105" fill="#8b5cf6" opacity=".16" filter="url(#glow)"/>
    <g transform="translate(70 45) rotate(-5 290 130)" stroke="url(#frame)" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M42 116 L9 94 Q-2 88 0 75" opacity=".8"/>
      <path d="M606 113 L650 89 Q662 82 660 68" opacity=".8"/>
      <path d="M290 119 Q329 91 370 119" />
      <path d="M18 77 Q22 53 52 51 L242 54 Q272 55 279 87 L268 189 Q263 230 221 232 L71 226 Q31 222 25 182 Z" fill="url(#lens)" />
      <path d="M382 87 Q390 55 420 54 L608 51 Q638 53 642 77 L635 182 Q629 222 590 226 L439 232 Q397 230 391 189 Z" fill="url(#lens)" />
      <path d="M44 80 Q110 64 176 78" stroke="#fff" strokeOpacity=".3" strokeWidth="4"/>
      <path d="M411 80 Q480 64 545 78" stroke="#fff" strokeOpacity=".3" strokeWidth="4"/>
      <circle cx="84" cy="91" r="17" fill="#160f27" stroke="#c4b5fd" strokeWidth="5"/>
      <circle cx="84" cy="91" r="7" fill="#8b5cf6" stroke="none"/>
      <path d="M280 123 Q330 106 380 123" stroke="#d8ccff" strokeWidth="8"/>
    </g>
    <text x="360" y="330" textAnchor="middle" fill="#b9a9e8" fontSize="12" letterSpacing="5">PEMURA / CONCEPT DESIGN</text>
  </svg>;
}

function Index() {
  const [active, setActive] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const ActiveIcon = specs[active].icon;

  return <main>
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#inicio" aria-label="Pemura início"><span className="brand-mark">P</span> PEMURA<span className="brand-dot">.</span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X/> : <Menu/>}</button>
        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#produto" onClick={() => setMenuOpen(false)}>O produto</a><a href="#tecnologia" onClick={() => setMenuOpen(false)}>Tecnologia</a><a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a><a href="#faq" onClick={() => setMenuOpen(false)}>Dúvidas</a>
        </div>
        <a className="nav-cta" href="#contato">Conheça o projeto <MoveUpRight size={15}/></a>
      </nav>
    </header>

    <section className="hero container" id="inicio">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line"/> TECNOLOGIA NO SEU CAMPO DE VISÃO</div>
        <h1>O futuro não<br/>precisa esperar<span className="purple">.</span></h1>
        <p className="hero-lead">Uma nova forma de interagir com o mundo. Conheça Pemura: o conceito de óculos inteligentes que aproxima você da inteligência artificial.</p>
        <div className="hero-actions"><a className="button-primary" href="#produto">Descobrir Pemura <ArrowRight size={17}/></a><a className="text-link" href="#tecnologia">Explorar tecnologia <ArrowDown size={15}/></a></div>
        <div className="hero-note"><span className="live-dot"/> PROJETO-CONCEITO EM DESENVOLVIMENTO</div>
      </div>
      <div className="hero-visual"><div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/><div className="visual-label label-top">01 / DESIGN INTELIGENTE</div><GlassesArt/><div className="visual-label label-bottom">PEMURA SMART GLASSES <span>— 001</span></div></div>
      <div className="hero-index">01 <span/> 04</div>
    </section>

    <div className="ticker"><div className="ticker-track"><span>INTELIGÊNCIA ARTIFICIAL</span><i>✳</i><span>DESIGN FUNCIONAL</span><i>✳</i><span>TECNOLOGIA VESTÍVEL</span><i>✳</i><span>INTELIGÊNCIA ARTIFICIAL</span><i>✳</i><span>DESIGN FUNCIONAL</span><i>✳</i><span>TECNOLOGIA VESTÍVEL</span><i>✳</i></div></div>

    <section className="section container intro" id="produto">
      <div className="section-kicker">01 — A IDEIA</div>
      <div className="intro-grid"><h2>Mais que óculos.<br/><span>Uma extensão</span><br/>da sua rotina.</h2><div className="intro-text"><p>Pemura nasce de uma pergunta simples: e se a tecnologia estivesse mais próxima, sem exigir que você olhe para uma tela o tempo todo?</p><p>A proposta combina uma armação discreta, captura de imagem, comandos de voz e conexão com o smartphone para criar uma experiência inteligente e natural.</p><a className="under-link" href="#como-funciona">Entenda a proposta <ArrowRight size={16}/></a></div></div>
      <div className="feature-grid">
        <article className="feature-card"><div className="feature-icon"><Eye/></div><span>01 / PERCEPÇÃO</span><h3>Veja além.</h3><p>Câmera integrada como base para experiências de visão computacional.</p></article>
        <article className="feature-card"><div className="feature-icon"><Mic/></div><span>02 / INTERAÇÃO</span><h3>Fale naturalmente.</h3><p>Comandos de voz pensados para uma interação mais simples.</p></article>
        <article className="feature-card"><div className="feature-icon"><Sparkles/></div><span>03 / INTELIGÊNCIA</span><h3>IA ao seu lado.</h3><p>Conexão com o smartphone para acessar recursos inteligentes.</p></article>
      </div>
    </section>


    <section className="use-section container">
      <div className="section-kicker">01.1 — POSSIBILIDADES</div>
      <div className="use-heading"><h2>Tecnologia que se adapta<br/><span>ao seu momento.</span></h2><p>As experiências abaixo representam caminhos de uso que orientam o desenvolvimento. A disponibilidade de cada recurso dependerá do aplicativo, dos serviços conectados e dos testes do protótipo.</p></div>
      <div className="use-grid">
        <article className="use-card"><span>01 / APRENDIZADO</span><Eye/><h3>Aprender explorando</h3><p>Uma proposta de apoio para consultar informações e tirar dúvidas sobre o que está ao redor.</p></article>
        <article className="use-card"><span>02 / ROTINA</span><AudioLines/><h3>Assistência por voz</h3><p>Interações rápidas com um assistente conectado, sem depender de digitar no celular a cada solicitação.</p></article>
        <article className="use-card"><span>03 / REGISTRO</span><Camera/><h3>Captura em primeira pessoa</h3><p>Possibilidade de registrar imagens por meio da câmera integrada, sempre com atenção à privacidade de outras pessoas.</p></article>
        <article className="use-card"><span>04 / CONECTIVIDADE</span><Smartphone/><h3>Seu celular como central</h3><p>O smartphone reúne aplicativo, conexão com a internet e acesso aos serviços de inteligência artificial.</p></article>
      </div>
    </section>

    <section className="tech-section" id="tecnologia">
      <div className="container section">
        <div className="section-kicker">02 — ENGENHARIA</div>
        <div className="tech-heading"><div><h2>Por dentro da<br/><span>experiência.</span></h2></div><p>Cada componente tem uma função. A arquitetura abaixo apresenta as tecnologias candidatas e os pontos que ainda serão validados na construção do protótipo.</p></div>
        <div className="tech-layout">
          <div className="spec-list">{specs.map((item, i) => { const Icon = item.icon; return <button key={item.name} className={`spec-button ${active === i ? "selected" : ""}`} onClick={() => setActive(i)}><span className="spec-number">0{i+1}</span><Icon size={19}/><span>{item.name}</span><ArrowRight className="spec-arrow" size={16}/></button>; })}</div>
          <div className="spec-detail"><div className="spec-detail-top"><span>COMPONENTE / 0{active+1}</span><span className="spec-tag">{specs[active].tag}</span></div><div className="detail-icon"><ActiveIcon size={28}/></div><h3>{specs[active].title}</h3><p>{specs[active].body}</p><div className="detail-foot"><span>PEMURA ENGINEERING</span><span>0{active+1} / 08</span></div></div>
        </div>
        <p className="disclaimer"><ShieldCheck size={15}/> Especificações preliminares. Componentes, dimensões, autonomia e desempenho dependem de integração e testes do protótipo.</p>
      </div>
    </section>

    <section className="section container process" id="como-funciona">
      <div className="section-kicker">03 — ECOSSISTEMA</div>
      <div className="process-heading"><h2>Simples na forma.<br/><span>Inteligente na conexão.</span></h2><p>O conceito Pemura distribui as tarefas entre os óculos e o smartphone conectado.</p></div>
      <div className="steps">
        <article><div className="step-top"><span>01</span><Camera/></div><h3>Capture</h3><p>A câmera e o microfone recebem informações do ambiente e comandos do usuário.</p></article>
        <div className="step-connector"><ArrowRight/></div>
        <article><div className="step-top"><span>02</span><Bluetooth/></div><h3>Conecte</h3><p>Os óculos se comunicam com o smartphone por conexão sem fio.</p></article>
        <div className="step-connector"><ArrowRight/></div>
        <article><div className="step-top"><span>03</span><Zap/></div><h3>Interaja</h3><p>O aplicativo pode encaminhar solicitações a serviços de IA e devolver respostas.</p></article>
      </div>
      <div className="phone-note"><Smartphone size={20}/><p><strong>O smartphone é parte do sistema.</strong> Ele funciona como ponte de conectividade e processamento para os recursos de inteligência artificial previstos no projeto.</p></div>
    </section>


    <section className="roadmap-section">
      <div className="container section">
        <div className="section-kicker">04.1 — DESENVOLVIMENTO</div>
        <div className="roadmap-heading"><h2>Da ideia ao<br/><span>protótipo.</span></h2><p>O Pemura está em fase de concepção. O caminho de desenvolvimento prioriza testar a integração real antes de anunciar números ou prometer recursos.</p></div>
        <div className="roadmap-grid">
          <article><span>ETAPA 01</span><strong>Definição</strong><p>Escolha da arquitetura, dos componentes candidatos e das funções prioritárias.</p><em>PLANEJAMENTO</em></article>
          <article><span>ETAPA 02</span><strong>Integração</strong><p>Montagem dos módulos, comunicação com o celular e desenvolvimento do aplicativo.</p><em>PRÓXIMA VALIDAÇÃO</em></article>
          <article><span>ETAPA 03</span><strong>Testes</strong><p>Avaliação de conforto, qualidade de áudio e imagem, temperatura, consumo e autonomia.</p><em>A VALIDAR</em></article>
          <article><span>ETAPA 04</span><strong>Refinamento</strong><p>Ajustes de armação, segurança elétrica, experiência de uso e viabilidade de produção.</p><em>EVOLUÇÃO CONTÍNUA</em></article>
        </div>
        <p className="roadmap-note"><ShieldCheck size={15}/> Nenhuma etapa representa certificação ou produto pronto para venda. Resultados só serão divulgados após testes documentados.</p>
      </div>
    </section>

    <section className="vision-section">
      <div className="container vision-inner"><div className="vision-copy"><div className="section-kicker">04 — PRÓXIMOS PASSOS</div><span className="vision-label">CONCEITO FUTURO</span><h2>Imagine informação<br/>no seu <span>olhar.</span></h2><p>Pemura Vision é uma possibilidade de evolução: uma versão com recursos visuais exibidos diretamente nas lentes. Essa experiência ainda exige pesquisa de telas, óptica, consumo de energia e ergonomia.</p><a className="button-light" href="#contato">Acompanhe a visão <ArrowRight size={17}/></a></div><div className="vision-art"><div className="vision-ring ring-a"/><div className="vision-ring ring-b"/><div className="vision-chip"><Eye size={28}/><span>VISION / FUTURE CONCEPT</span><strong>See what’s next.</strong></div><span className="vision-cross">+</span></div></div>
    </section>

    <section className="section container faq-section" id="faq"><div className="section-kicker">05 — PERGUNTAS</div><div className="faq-grid"><h2>É bom<br/>saber<span>.</span></h2><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${openFaq===i?"faq-active":""}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown size={18}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></div></section>

    <footer id="contato"><div className="container footer-main"><div><a className="brand footer-brand" href="#inicio"><span className="brand-mark">P</span> PEMURA<span className="brand-dot">.</span></a><h2>Uma nova perspectiva<br/>começa aqui<span>.</span></h2></div><div className="footer-side"><p>Projeto de inovação e tecnologia desenvolvido para explorar novas possibilidades de interação entre pessoas e inteligência artificial.</p><a className="button-primary" href="#inicio">Voltar ao início <ArrowRight size={17}/></a></div></div><div className="container footer-bottom"><span>© 2026 PEMURA — PROJETO CONCEITUAL</span><span>TECNOLOGIA • DESIGN • POSSIBILIDADES</span><a href="#inicio">VOLTAR AO TOPO ↑</a></div></footer>
  </main>;
}
