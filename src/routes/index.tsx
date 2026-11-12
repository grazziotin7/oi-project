import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Battery, Bluetooth, Camera,
  Check, ChevronDown, Cpu, Eye, Menu, Mic, Radio, Smartphone, Speaker,
  X, Zap, Waves, CircuitBoard, ShieldCheck, Wifi, HardDrive, Box,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PEMURA — Tecnologia que acompanha você" },
      { name: "description", content: "Conheça o PEMURA: óculos inteligentes conectados ao smartphone, com câmera, áudio e interação por voz." },
      { property: "og:title", content: "PEMURA — Tecnologia que acompanha você" },
      { property: "og:description", content: "Um novo jeito de estar conectado ao mundo." },
    ],
  }),
  component: Index,
});

const parts = [
  { n: "01", group: "PLATAFORMA", name: "Seeed XIAO ESP32S3 Sense", detail: "A placa principal do protótipo. Reúne o ESP32-S3 e oferece Wi-Fi, Bluetooth LE e suporte ao conjunto de câmera e microfone.", qty: "01 UN.", icon: Cpu, note: "Placa de desenvolvimento usada como base do primeiro protótipo." },
  { n: "02", group: "IMAGEM", name: "Câmera OV2640", detail: "Módulo de câmera associado à plataforma XIAO ESP32S3 Sense para captura de imagem em primeira pessoa.", qty: "01 UN.", icon: Camera, note: "A versão e o encaixe final dependem do módulo fornecido com a placa." },
  { n: "03", group: "CAPTAÇÃO", name: "ICS-43434 MEMS", detail: "Microfone digital I²S para captação de voz. O SPH0645 foi pesquisado como alternativa, não como peça adicional obrigatória.", qty: "01 UN.", icon: Mic, note: "Alternativa pesquisada: SPH0645." },
  { n: "04", group: "ÁUDIO", name: "MAX98357A", detail: "Amplificador de áudio classe D que recebe áudio digital e alimenta os pequenos alto-falantes do conjunto.", qty: "01 UN.", icon: Waves, note: "A integração exige conferir alimentação, ligação e dissipação." },
  { n: "05", group: "ÁUDIO", name: "Alto-falantes ovais 8 Ω / 1 W", detail: "Dois alto-falantes compactos previstos para áudio próximo ao ouvido, instalados nas hastes.", qty: "02 UN.", icon: Speaker, note: "Formato oval; dimensões finais precisam caber na armação." },
  { n: "06", group: "CONECTIVIDADE", name: "EBYTE EWM104-BT60SP2", detail: "Módulo Bluetooth considerado para a comunicação de áudio. A solução BT3040/QCC3040 aparece como alternativa de arquitetura.", qty: "01 UN.", icon: Bluetooth, note: "BT3040 é alternativa; não somar os dois sem necessidade." },
  { n: "07", group: "ENERGIA", name: "Li-Po 3,7 V — 150 mAh", detail: "Bateria recarregável compacta considerada para o protótipo. A autonomia real ainda depende da medição do consumo do conjunto.", qty: "01 UN.", icon: Battery, note: "Capacidade de referência do projeto; autonomia não testada." },
  { n: "08", group: "ENERGIA", name: "Micro Lipo USB-C", detail: "Módulo de carregamento para a bateria Li-Po, com conexão USB-C.", qty: "01 UN.", icon: Zap, note: "A proteção e a compatibilidade com a célula devem ser confirmadas." },
  { n: "09", group: "CONTROLES", name: "Botão slim 6 mm", detail: "Botão físico compacto para uma ação direta, como ligar ou acionar uma função.", qty: "01 UN.", icon: Radio, note: "A função final será definida no firmware." },
  { n: "10", group: "CONTROLES", name: "Sensor touch TTP223", detail: "Sensor capacitivo para permitir comandos por toque na haste dos óculos.", qty: "01 UN.", icon: Check, note: "Área sensível e posição dependem do material da armação." },
  { n: "11", group: "CONTROLES", name: "Chave SPDT", detail: "Chave de seleção comutável para controle físico do circuito.", qty: "01 UN.", icon: CircuitBoard, note: "Definir posição e função na montagem." },
  { n: "12", group: "ESTRUTURA", name: "Armação PETG / nylon + TPU", detail: "Estrutura planejada para acomodar os módulos nas hastes, com partes flexíveis em TPU onde fizer sentido.", qty: "01 CONJ.", icon: Box, note: "Material e geometria ainda precisam de protótipo físico." },
  { n: "13", group: "ÓPTICA", name: "Lentes UV400", detail: "Par de lentes com proteção UV400, dimensionadas para a armação escolhida.", qty: "02 UN.", icon: Eye, note: "Não são telas; o PEMURA base não projeta imagens nas lentes." },
  { n: "14", group: "ESTRUTURA", name: "Dobradiças, fios e conexões", detail: "Peças mecânicas e ligações internas necessárias para unir frente, hastes e componentes eletrônicos.", qty: "01 CONJ.", icon: CircuitBoard, note: "Comprimentos e conectores dependem do layout interno." },
];

const faqs = [
  ["O PEMURA já está pronto para venda?", "Ainda não. O PEMURA é um projeto em desenvolvimento. A lista desta página representa a configuração de protótipo definida e as alternativas identificadas, não um produto certificado ou pronto para comercialização."],
  ["Onde a inteligência artificial é processada?", "A proposta é usar o smartphone como central de processamento e conexão com serviços de IA. Os óculos captam imagem e voz e se comunicam com o celular."],
  ["A câmera e o microfone ficam sempre ligados?", "O projeto deve ter controles claros para ativar e desativar as funções, além de um indicador visível quando houver captura. O comportamento final será definido no desenvolvimento."],
  ["Quanto tempo dura a bateria?", "A bateria de referência é Li-Po 3,7 V e 150 mAh. Ainda não existe autonomia medida: ela depende do consumo da câmera, áudio, Bluetooth e frequência de uso."],
  ["O PEMURA tem tela nas lentes?", "Não na versão apresentada. As lentes são UV400 convencionais. Uma versão com informações projetadas nas lentes seria um conceito futuro separado."],
];

function GlassesVisual() {
  return <div className="product-visual" aria-label="Representação conceitual dos óculos PEMURA">
    <div className="visual-stamp">P / 001<br/>PROTOTYPE STUDY</div>
    <svg viewBox="0 0 820 430" role="img" aria-label="Óculos inteligentes pretos PEMURA, ilustração conceitual">
      <defs>
        <linearGradient id="frameMetal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#777b86"/><stop offset=".28" stopColor="#171a22"/><stop offset=".62" stopColor="#353a46"/><stop offset="1" stopColor="#090b10"/></linearGradient>
        <linearGradient id="lensShade" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#6f67a8" stopOpacity=".2"/><stop offset=".55" stopColor="#141927" stopOpacity=".75"/><stop offset="1" stopColor="#05070b" stopOpacity=".9"/></linearGradient>
        <filter id="shadow"><feGaussianBlur stdDeviation="18"/></filter>
      </defs>
      <ellipse cx="420" cy="325" rx="270" ry="38" fill="#000" opacity=".72" filter="url(#shadow)"/>
      <g transform="translate(70 30) rotate(-5 340 180)" stroke="url(#frameMetal)" strokeWidth="17" strokeLinecap="round" strokeLinejoin="round">
        <path d="M48 165 Q15 146 0 104 Q-6 88 12 78 L45 72" fill="none"/>
        <path d="M640 159 Q690 130 724 96 Q738 81 727 69" fill="none"/>
        <path d="M288 153 Q340 128 390 153" fill="none" strokeWidth="19"/>
        <path d="M36 92 Q43 67 77 66 L264 71 Q298 74 303 108 L292 238 Q287 282 247 285 L90 280 Q45 277 39 234 Z" fill="url(#lensShade)"/>
        <path d="M420 108 Q425 74 459 71 L646 66 Q680 67 687 92 L684 234 Q678 277 632 280 L475 285 Q435 282 430 238 Z" fill="url(#lensShade)"/>
        <path d="M66 100 Q140 78 228 97" fill="none" stroke="#a7a9b2" strokeOpacity=".22" strokeWidth="5"/>
        <path d="M454 97 Q545 78 630 100" fill="none" stroke="#a7a9b2" strokeOpacity=".2" strokeWidth="5"/>
        <circle cx="82" cy="105" r="21" fill="#080b12" stroke="#777f90" strokeWidth="7"/>
        <circle cx="82" cy="105" r="9" fill="#9c83ff" stroke="none"/>
        <path d="M303 154 Q340 143 390 154" fill="none" stroke="#777b86" strokeWidth="8"/>
        <path d="M640 77 L724 69" fill="none" stroke="#242936" strokeWidth="12"/>
      </g>
      <g fill="#a99aff" fontFamily="monospace" fontSize="11" letterSpacing="2">
        <text x="90" y="365">CAMERA MODULE</text><path d="M190 350 L150 250" stroke="#a99aff" strokeWidth="1" fill="none"/>
        <text x="590" y="365">AUDIO INTEGRADO</text><path d="M650 350 L660 230" stroke="#a99aff" strokeWidth="1" fill="none"/>
      </g>
    </svg>
    <div className="visual-caption"><span>DESIGN CONCEPT / 2026</span><span>BLACK FRAME · OPEN AUDIO</span></div>
  </div>;
}

function Index() {
  const [activePart, setActivePart] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const PartIcon = parts[activePart].icon;
  const go = () => setMenuOpen(false);

  return <main>
    <header className="site-header">
      <nav className="nav-shell">
        <a className="wordmark" href="#top" aria-label="PEMURA início">PEMURA<span>®</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X/> : <Menu/>}</button>
        <div className={`nav-menu ${menuOpen ? "is-open" : ""}`}>
          <a href="#produto" onClick={go}>O projeto</a><a href="#experiencia" onClick={go}>Experiência</a><a href="#hardware" onClick={go}>Hardware</a><a href="#faq" onClick={go}>FAQ</a>
        </div>
        <a className="nav-contact" href="#equipe">Conheça o PEMURA <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="overline"><span className="overline-mark"/> SMART GLASSES / BRAZIL</div>
          <h1>O mundo<br/>não espera.<br/><em>Você também</em><br/><em>não precisa.</em></h1>
          <p>Óculos inteligentes pensados para aproximar tecnologia da vida real. Capture, conecte e interaja — sem transformar cada momento em uma tela.</p>
          <div className="hero-links"><a className="solid-link" href="#produto">Descubra o projeto <ArrowDownRight size={17}/></a><span>01 — 04 <i/></span></div>
        </div>
        <GlassesVisual/>
        <div className="hero-side-note">DESIGNED TO MOVE WITH YOU<br/>PEMURA / CONCEPT PROJECT</div>
      </div>
      <div className="hero-bottom"><span>TECNOLOGIA VESTÍVEL</span><span>DESENVOLVIDO POR PEDRO, RAFAEL E MURILO</span><span>2026 ©</span></div>
    </section>

    <section className="manifesto section-pad" id="produto">
      <div className="section-index"><span>01</span> / A IDEIA</div>
      <div className="manifesto-grid">
        <h2>Não é sobre<br/>ter mais uma<br/><span>tela.</span></h2>
        <div className="manifesto-text"><p className="lead">É sobre ter a tecnologia mais perto — e o celular um pouco mais longe.</p><p>O PEMURA é um conceito de óculos inteligentes com câmera, captação de voz e áudio integrado. A proposta é conectar os óculos ao smartphone, que funciona como ponte para o aplicativo, a internet e os recursos de inteligência artificial.</p><a href="#experiencia" className="underlined-link">Entenda como funciona <ArrowUpRight size={16}/></a></div>
      </div>
      <div className="manifesto-bottom"><span>01 / VISÃO</span><span>02 / VOZ</span><span>03 / CONEXÃO</span><span>04 / LIBERDADE</span></div>
    </section>

    <section className="experience" id="experiencia">
      <div className="experience-top"><div className="section-index"><span>02</span> / NA PRÁTICA</div><h2>Feito para<br/><i>acompanhar.</i></h2><p>Uma experiência simples na forma, construída a partir de pequenas interações que fazem sentido no cotidiano.</p></div>
      <div className="experience-list">
        <article><span>01</span><div><h3>Olhe.</h3><p>A câmera permite capturar imagens em primeira pessoa e abre caminho para experiências de visão computacional.</p></div><Camera/></article>
        <article><span>02</span><div><h3>Fale.</h3><p>O microfone recebe comandos de voz. O áudio integrado permite ouvir respostas sem depender de um fone separado.</p></div><Mic/></article>
        <article><span>03</span><div><h3>Conecte.</h3><p>Bluetooth e Wi-Fi fazem a ponte entre os óculos, o smartphone e os serviços conectados.</p></div><Bluetooth/></article>
        <article><span>04</span><div><h3>Continue.</h3><p>O celular assume o processamento mais pesado e o acesso à IA. Os óculos ficam com a interação e a captura.</p></div><Smartphone/></article>
      </div>
      <div className="experience-foot"><span>PEMURA SYSTEM</span><span>ÓCULOS → SMARTPHONE → SERVIÇOS</span></div>
    </section>

    <section className="hardware section-pad" id="hardware">
      <div className="hardware-head"><div><div className="section-index"><span>03</span> / POR DENTRO</div><h2>Peças reais.<br/><i>Uma ideia em construção.</i></h2></div><p>Esta é a configuração de componentes definida para orientar o protótipo. Alternativas aparecem identificadas separadamente — não como peças extras obrigatórias.</p></div>
      <div className="hardware-feature">
        <div className="board-art"><div className="board-orbit"/><div className="board-chip"><CircuitBoard size={34}/><b>XIAO</b><small>ESP32S3 SENSE</small></div><span className="board-label">MAIN CONTROL / 001</span></div>
        <div className="board-copy"><span className="micro-label">01 / PLATAFORMA PRINCIPAL</span><h3>Seeed XIAO<br/>ESP32S3 Sense</h3><p>O ponto central do protótipo. A placa reúne o ESP32-S3 e oferece conectividade sem fio, além do suporte para câmera e microfone. A IA fica prevista no smartphone, não embarcada nessa placa.</p><a href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank" rel="noreferrer">Documentação da placa <ArrowUpRight size={15}/></a></div>
      </div>
      <div className="parts-header"><span>COMPONENTES DO PROTÓTIPO</span><span>14 ITENS / CONFIGURAÇÃO DE REFERÊNCIA</span></div>
      <div className="parts-browser">
        <div className="parts-list">{parts.map((p, i) => { const Icon = p.icon; return <button key={p.n} className={activePart === i ? "part-active" : ""} onClick={() => setActivePart(i)}><span>{p.n}</span><Icon size={17}/><b>{p.name}</b><ArrowRight className="part-arrow" size={15}/></button>; })}</div>
        <div className="part-detail"><div className="part-detail-top"><span>{parts[activePart].group}</span><span>{parts[activePart].qty}</span></div><div className="part-detail-icon"><PartIcon size={32}/></div><div className="part-detail-number">{parts[activePart].n} / 14</div><h3>{parts[activePart].name}</h3><p>{parts[activePart].detail}</p><div className="part-note"><ShieldCheck size={15}/>{parts[activePart].note}</div></div>
      </div>
      <div className="alternatives"><div><span>ALTERNATIVAS MAPEADAS</span><strong>BT3040 / QCC3040</strong><p>Alternativa de módulo para áudio Bluetooth em relação ao EBYTE BT60SP2.</p></div><div><span>ALTERNATIVAS MAPEADAS</span><strong>SPH0645</strong><p>Alternativa de microfone digital em relação ao ICS-43434.</p></div><div><span>ARMAZENAMENTO</span><strong>microSD / memória da placa</strong><p>O armazenamento depende da configuração do conjunto Sense e da necessidade de guardar arquivos. 32 GB não é uma especificação confirmada desta montagem.</p></div></div>
      <p className="hardware-disclaimer"><ShieldCheck size={16}/> Transparência: componentes selecionados para planejamento do protótipo. Compatibilidade elétrica, dimensões internas, temperatura, autonomia e qualidade de áudio/imagem ainda precisam ser validadas na montagem física.</p>
    </section>

    <section className="connection">
      <div className="section-pad connection-inner"><div className="section-index"><span>04</span> / COMO SE CONECTA</div><h2>O óculos capta.<br/><i>O celular conecta.</i></h2><div className="connection-flow"><div><span>01</span><Camera/><b>PEMURA</b><small>Imagem + voz</small></div><ArrowRight/><div><span>02</span><Bluetooth/><b>SMARTPHONE</b><small>App + conexão</small></div><ArrowRight/><div><span>03</span><Zap/><b>IA / SERVIÇOS</b><small>Processamento</small></div></div><p className="connection-note">A proposta é distribuir as tarefas: os óculos cuidam da captura e da interação; o smartphone concentra a conectividade, o aplicativo e o acesso aos serviços inteligentes.</p></div>
    </section>

    <section className="future section-pad"><div className="future-copy"><div className="section-index"><span>05</span> / O QUE VEM DEPOIS</div><h2>Começa com<br/>o essencial.<br/><i>Vai além.</i></h2><p>O primeiro foco é fazer câmera, voz, áudio e conexão funcionarem juntos em uma armação confortável. Recursos mais avançados, como informações exibidas nas lentes, ficam como pesquisa para uma possível evolução — não fazem parte da versão atual.</p></div><div className="future-mark"><span>PEMURA</span><b>001</b><small>BUILD THE NEXT<br/>POINT OF VIEW</small></div></section>

    <section className="faq section-pad" id="faq"><div className="section-index"><span>06</span> / PERGUNTAS DIRETAS</div><div className="faq-layout"><h2>Sem mistério.</h2><div className="faq-list">{faqs.map(([q,a],i)=><div className={faqOpen===i ? "faq-open" : ""} key={q}><button onClick={()=>setFaqOpen(faqOpen===i ? null : i)}>{q}<ChevronDown size={18}/></button>{faqOpen===i && <p>{a}</p>}</div>)}</div></div></section>

    <footer id="equipe"><div className="footer-main"><a className="wordmark" href="#top">PEMURA<span>®</span></a><div className="footer-statement">Tecnologia que<br/><i>acompanha você.</i></div><div className="footer-team"><span>IDEALIZAÇÃO E DESENVOLVIMENTO</span><b>Pedro <i>·</i> Rafael <i>·</i> Murilo</b></div></div><div className="footer-bottom"><span>© 2026 PEMURA / PROJETO CONCEITUAL</span><span>BRASIL</span><a href="#top">VOLTAR AO TOPO ↑</a></div></footer>
  </main>;
}
