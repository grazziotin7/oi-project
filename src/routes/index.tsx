import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, AudioLines, Battery, Bluetooth, Camera, Check, ChevronDown, Cpu, Eye, Menu, Mic, MoveUpRight, Radio, ShieldCheck, Smartphone, Sparkles, X, Zap, HardDrive, CircuitBoard, Speaker, Usb, Wifi, MemoryStick } from "lucide-react";

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
          <a href="#produto" onClick={() => setMenuOpen(false)}>O produto</a><a href="#tecnologia" onClick={() => setMenuOpen(false)}>Tecnologia</a><a href="#componentes" onClick={() => setMenuOpen(false)}>Especificações</a><a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a><a href="#faq" onClick={() => setMenuOpen(false)}>Dúvidas</a>
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


    <section className="build-section" id="componentes">
      <div className="container section">
        <div className="section-kicker">06 — FICHA TÉCNICA</div>
        <div className="build-heading"><div><span className="neon-overline">PEMURA / HARDWARE MAP</span><h2>Construído peça<br/>por <span>peça.</span></h2></div><p>Esta é a lista técnica de referência reunida durante o planejamento. Ela separa a placa-base, módulos e alternativas pesquisadas. Compatibilidade física, elétrica, firmware e autonomia precisam ser testadas antes da montagem final.</p></div>
        <div className="core-board">
          <div className="core-board-visual"><div className="chip-frame"><CircuitBoard size={42}/><span>ESP32-S3</span><strong>XIAO</strong></div><div className="core-pulse pulse-a"/><div className="core-pulse pulse-b"/></div>
          <div className="core-board-copy"><span className="spec-tag">PLATAFORMA PRINCIPAL EM AVALIAÇÃO</span><h3>Seeed Studio XIAO ESP32S3 Sense</h3><p>Placa compacta para prototipagem, com ESP32-S3, conectividade Wi-Fi e Bluetooth LE e suporte a câmera e microfone por meio do conjunto Sense. É a base escolhida para explorar o primeiro protótipo; não equivale a um produto final miniaturizado para armação.</p><a className="component-link" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank" rel="noreferrer">Ver placa e documentação <MoveUpRight size={14}/></a></div>
        </div>
        <div className="component-table-wrap">
          <div className="component-table-title"><span>LISTA DE COMPONENTES</span><span>BASE DE PROJETO • 20 CATEGORIAS</span></div>
          <div className="component-table">
            <div className="component-row component-header"><span>ÁREA</span><span>COMPONENTE / ESPECIFICAÇÃO DE REFERÊNCIA</span><span>QTD.</span><span>OBSERVAÇÃO</span></div>
            <div className="component-row"><span className="component-kind">01 / CÉREBRO</span><strong>Seeed XIAO ESP32S3 Sense</strong><span>1</span><small>Placa de desenvolvimento; candidata à prototipagem.</small></div>
            <div className="component-row"><span className="component-kind">02 / CÂMERA</span><strong>OV2640 / OV3660 ou Sony IMX219 / OV5640</strong><span>1</span><small>Alternativas de câmera pesquisadas. O módulo precisa ser escolhido junto da placa e da interface compatível.</small></div>
            <div className="component-row"><span className="component-kind">03 / MICROFONES</span><strong>MEMS digital (I²S / PDM)</strong><span>2</span><small>Captação estéreo/voz; TDK e Knowles foram pesquisadas como referências.</small></div>
            <div className="component-row"><span className="component-kind">04 / ÁUDIO</span><strong>Drivers compactos 8–10 mm + MAX98357A</strong><span>2 + 1</span><small>Alto-falantes e amplificador classe D em avaliação; verificar tamanho e consumo.</small></div>
            <div className="component-row"><span className="component-kind">05 / BATERIA</span><strong>Li-Po 3,7 V — referência de 150 mAh</strong><span>1–2</span><small>Capacidade final depende do espaço, corrente de pico e autonomia desejada.</small></div>
            <div className="component-row"><span className="component-kind">06 / CARGA</span><strong>Carregador Li-Po + proteção / gerenciamento</strong><span>1</span><small>Necessário dimensionar para a célula escolhida; circuito de carga não é opcional.</small></div>
            <div className="component-row"><span className="component-kind">07 / MEMÓRIA</span><strong>Memória da placa + expansão microSD / flash</strong><span>1</span><small>Armazenamento local ainda a definir. 32 GB foi estudado como opção de flash externa; não está confirmado no protótipo.</small></div>
            <div className="component-row"><span className="component-kind">08 / BLUETOOTH</span><strong>Bluetooth LE integrado / EBYTE BT60SP2 ou BT60SP3</strong><span>1</span><small>Os módulos EBYTE são alternativas de avaliação, não itens para instalar junto sem validar a arquitetura.</small></div>
            <div className="component-row"><span className="component-kind">09 / ÁUDIO BT</span><strong>EBYTE BT3040 / solução QCC3040</strong><span>1</span><small>Alternativa para áudio sem fio; pode ser redundante com a placa-base e exige integração específica.</small></div>
            <div className="component-row"><span className="component-kind">10 / WI-FI</span><strong>Wi-Fi 2,4 GHz integrado ao ESP32-S3</strong><span>1</span><small>Conexão de dados; consumo e alcance dependem da antena e do uso.</small></div>
            <div className="component-row"><span className="component-kind">11 / ANTENA</span><strong>Antena compacta Wi-Fi / Bluetooth</strong><span>1</span><small>Projeto RF e posição na haste precisam ser testados.</small></div>
            <div className="component-row"><span className="component-kind">12 / PLACA</span><strong>PCB customizada</strong><span>1</span><small>Integração elétrica compacta, fabricação após validação do protótipo.</small></div>
            <div className="component-row"><span className="component-kind">13 / CONEXÕES</span><strong>Cabos FPC / flex</strong><span>Conforme montagem</span><small>Interligação de câmera, hastes e módulos.</small></div>
            <div className="component-row"><span className="component-kind">14 / CONTROLES</span><strong>Botões físicos + sensor touch</strong><span>1 conjunto</span><small>Comandos de ligar, parear e controlar funções.</small></div>
            <div className="component-row"><span className="component-kind">15 / INDICAÇÃO</span><strong>LED RGB / LED de gravação</strong><span>1</span><small>Indicador de estado; luz de gravação deve ser clara e visível.</small></div>
            <div className="component-row"><span className="component-kind">16 / ESTRUTURA</span><strong>Armação customizada com hastes técnicas</strong><span>1</span><small>Espessura de referência 8–11 mm; ergonomia e espaço interno a validar.</small></div>
            <div className="component-row"><span className="component-kind">17 / LENTES</span><strong>Par de lentes com proteção UV400</strong><span>2</span><small>Escolha óptica e encaixe dependem da armação.</small></div>
            <div className="component-row"><span className="component-kind">18 / TÉRMICA</span><strong>Isolamento e dissipação térmica</strong><span>1 conjunto</span><small>Evitar pontos quentes em contato com pele e têmporas.</small></div>
            <div className="component-row"><span className="component-kind">19 / ESTOJO</span><strong>Estojo de proteção / possível estojo de carga</strong><span>1</span><small>Estojo de carga requer projeto elétrico próprio; não presumir que já esteja integrado.</small></div>
            <div className="component-row"><span className="component-kind">20 / SOFTWARE</span><strong>Firmware ESP32 + aplicativo móvel + serviços de IA</strong><span>1 conjunto</span><small>Controle dos módulos, pareamento, comandos e comunicação com serviços externos.</small></div>
          </div>
        </div>
        <div className="memory-audio-grid">
          <article><div className="mini-spec-icon"><MemoryStick/></div><span>MEMÓRIA / ARMAZENAMENTO</span><h3>Memória para sistema e arquivos.</h3><p>A placa utiliza memória interna para firmware e execução. Para guardar fotos/arquivos, a proposta considera expansão microSD ou flash externa. A opção de 32 GB apareceu na pesquisa de uma arquitetura premium, mas ainda não é uma especificação fechada da versão XIAO.</p><a href="https://www.micron.com/" target="_blank" rel="noreferrer">Referência de memória Micron <MoveUpRight size={13}/></a></article>
          <article><div className="mini-spec-icon"><Battery/></div><span>ENERGIA / 150 mAh</span><h3>Bateria pequena, autonomia a medir.</h3><p>Foi pesquisada uma Li-Po de 150 mAh e também uma referência de 3,7 V. A autonomia real depende da câmera, microfones, rádio, áudio e ciclos de uso. Não divulgar horas de bateria antes de medir o protótipo.</p><a href="https://thepihut.com/products/150mah-3-7v-lipo-battery" target="_blank" rel="noreferrer">Bateria de referência 150 mAh <MoveUpRight size={13}/></a></article>
          <article><div className="mini-spec-icon"><Camera/></div><span>IMAGEM / CÂMERA</span><h3>Sensor não é o módulo inteiro.</h3><p>OV2640/OV3660, OV5640, Sony IMX219 e IMX681 surgiram como opções em pesquisas diferentes. A IMX681 de 12 MP foi listada em uma alternativa premium com módulo e lente integrados. Não misturar sensores e interfaces sem conferir compatibilidade.</p><a href="https://www.unionimage.com/productdes/346.html" target="_blank" rel="noreferrer">Referência do módulo UI12-IMX681 <MoveUpRight size={13}/></a></article>
          <article><div className="mini-spec-icon"><Speaker/></div><span>ÁUDIO / SAÍDA</span><h3>Som compacto nas hastes.</h3><p>O plano de protótipo considera dois mini alto-falantes e amplificador MAX98357A. Também foram pesquisadas soluções open-ear da Goertek. A escolha depende de volume, qualidade, privacidade sonora, espaço e consumo.</p><a href="https://www.adafruit.com/product/3006" target="_blank" rel="noreferrer">MAX98357A — referência Adafruit <MoveUpRight size={13}/></a></article>
        </div>
        <div className="source-links"><span>DOCUMENTAÇÃO E REFERÊNCIAS</span><a href="https://docs.omi.me/doc/hardware/omiGlass" target="_blank" rel="noreferrer">Guia omiGlass <MoveUpRight size={13}/></a><a href="https://www.adafruit.com/products/1317" target="_blank" rel="noreferrer">Li-Po Adafruit <MoveUpRight size={13}/></a><a href="https://www.ti.com/power-management/battery-management/overview.html" target="_blank" rel="noreferrer">Gerenciamento de bateria TI <MoveUpRight size={13}/></a><a href="https://www.knowles.com/" target="_blank" rel="noreferrer">Knowles MEMS <MoveUpRight size={13}/></a><a href="https://www.goertek.com/" target="_blank" rel="noreferrer">Goertek áudio <MoveUpRight size={13}/></a></div>
        <p className="technical-warning"><ShieldCheck size={16}/> <span><strong>Transparência técnica:</strong> esta tabela registra requisitos e opções pesquisadas, não uma lista de compra final. Módulos Bluetooth adicionais, placa XIAO, áudio, câmera e memória podem ser alternativas entre si ou exigir circuitos diferentes. Confirmar pinagem, tensão, dimensões, firmware, disponibilidade e segurança antes de comprar.</span></p>
      </div>
    </section>
\n    <section className="vision-section">
      <div className="container vision-inner"><div className="vision-copy"><div className="section-kicker">04 — PRÓXIMOS PASSOS</div><span className="vision-label">CONCEITO FUTURO</span><h2>Imagine informação<br/>no seu <span>olhar.</span></h2><p>Pemura Vision é uma possibilidade de evolução: uma versão com recursos visuais exibidos diretamente nas lentes. Essa experiência ainda exige pesquisa de telas, óptica, consumo de energia e ergonomia.</p><a className="button-light" href="#contato">Acompanhe a visão <ArrowRight size={17}/></a></div><div className="vision-art"><div className="vision-ring ring-a"/><div className="vision-ring ring-b"/><div className="vision-chip"><Eye size={28}/><span>VISION / FUTURE CONCEPT</span><strong>See what’s next.</strong></div><span className="vision-cross">+</span></div></div>
    </section>

    <section className="section container faq-section" id="faq"><div className="section-kicker">05 — PERGUNTAS</div><div className="faq-grid"><h2>É bom<br/>saber<span>.</span></h2><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${openFaq===i?"faq-active":""}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown size={18}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></div></section>

    <footer id="contato"><div className="container footer-main"><div><a className="brand footer-brand" href="#inicio"><span className="brand-mark">P</span> PEMURA<span className="brand-dot">.</span></a><h2>Uma nova perspectiva<br/>começa aqui<span>.</span></h2></div><div className="footer-side"><p>Projeto de inovação e tecnologia desenvolvido para explorar novas possibilidades de interação entre pessoas e inteligência artificial.</p><div className="team-block"><span>IDEALIZAÇÃO E DESENVOLVIMENTO</span><strong>Pedro <i>•</i> Rafael <i>•</i> Murilo</strong></div><a className="button-primary" href="#inicio">Voltar ao início <ArrowRight size={17}/></a></div></div><div className="container footer-bottom"><span>© 2026 PEMURA — PROJETO CONCEITUAL</span><span>TECNOLOGIA • DESIGN • POSSIBILIDADES</span><a href="#inicio">VOLTAR AO TOPO ↑</a></div></footer>
  </main>;
}
