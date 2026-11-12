export const site = {
  brand: "PEMURA",
  tagline: "O futuro diante de seus olhos.",
  promise: "Eu falo. A Pemura entende. A Pemura age.",
  interfaceDescription: "A Pemura não é um fone Bluetooth com formato de óculos. É a camada entre você e o computador: uma interface vestível que conecta sua voz, o celular e a inteligência artificial.",
  status: "Protótipo em desenvolvimento",
  hero: {
    eyebrow: "ÓCULOS INTELIGENTES COM IA",
    title: "O futuro diante de seus olhos.",
    description: "Um óculos inteligente que deixa você interagir com o mundo digital usando só a voz.",
  },
  nav: [
    { label: "Loja", href: "/loja" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Hardware", href: "#hardware" },
    { label: "Especificações", href: "#especificacoes" },
    { label: "Futuro", href: "#futuro" },
    { label: "Criadores", href: "#criadores" },
  ],
  social: [] as { label: string; href: string }[],
  product: {
    name: "Pemura One",
    edition: "PRIMEIRA EDIÇÃO · CONCEITO",
    retailPrice: "R$ 899,90",
    costRange: "R$ 450–600",
    description: "Óculos inteligente com interação por voz, áudio integrado e conexão com o smartphone. A primeira versão prioriza uma experiência leve, sem tela no visor.",
    priceNote: "Preço sugerido para planejamento escolar, não é oferta de venda nem orçamento fechado. O custo estimado depende da seleção final dos componentes, armação, montagem, impostos e testes.",
  },
  progress: { label: "VOZ → BLUETOOTH", value: 0 /* AJUSTAR: substituir quando houver percentual real validado */ },
  privacy: "Usaremos seu e-mail apenas para avisar sobre a Pemura.",
  footer: "O futuro diante de seus olhos.",
};

export const flow = [
  ["VOCÊ", "A intenção começa na sua voz."],
  ["PEMURA", "A interface que acompanha você."],
  ["IA", "A inteligência interpreta o pedido."],
  ["MUNDO DIGITAL", "O celular conecta aos serviços."],
] as const;

export const steps = [
  ["Você fala", "Diga naturalmente o que precisa."],
  ["O Pemura capta sua voz", "O microfone integrado recebe o comando."],
  ["O Bluetooth conecta ao celular", "Os óculos enviam o áudio ao smartphone."],
  ["O app Pemura processa", "O aplicativo organiza a solicitação."],
  ["A IA entende a intenção", "A inteligência interpreta o contexto e o pedido."],
  ["O sistema executa a ação", "O celular conversa com os serviços disponíveis."],
  ["O Pemura responde para você", "A resposta chega pelo áudio dos óculos."],
] as const;

export const hardware = [
  ["MICROFONE", "Capta sua voz para que a interação comece sem procurar uma tela."],
  ["ALTO-FALANTES", "Som perto do ouvido. O mundo continua ao seu redor."],
  ["BLUETOOTH", "Uma conexão sem fio entre você e o celular."],
  ["BOTÃO FÍSICO", "Um comando direto quando você quiser controlar a experiência."],
  ["CONEXÃO COM O CELULAR", "O cérebro fica no seu bolso. Os óculos são a interface."],
] as const;

export const moments = [
  { id: "messages", title: "MENSAGENS", text: "Responda sem interromper o que está fazendo.", kind: "message" },
  { id: "audio", title: "MÚSICA", text: "Sua trilha acompanha o ritmo do dia.", kind: "audio" },
  { id: "route", title: "NAVEGAÇÃO", text: "Peça uma rota e receba a orientação pelo celular.", kind: "route" },
  { id: "calls", title: "LIGAÇÕES", text: "Converse sem precisar segurar o aparelho.", kind: "call" },
  { id: "assistant", title: "PERGUNTAS À IA", text: "Transforme uma dúvida em uma conversa.", kind: "assistant" },
  { id: "translate", title: "TRADUÇÃO", text: "Uma nova forma de pedir ajuda com idiomas.", kind: "translate" },
  { id: "delivery", title: "SERVIÇOS", text: "Prepare ações e confirme antes de concluir.", kind: "service" },
] as const;

export const futureStages = [
  { status: "HOJE · PRIMEIRA VERSÃO PLANEJADA", title: "Voz. Áudio. Conexão.", text: "Microfone, alto-falante, Bluetooth, botão físico e conexão com Android e iPhone.", label: "HOJE", state: "today" },
  { status: "AMANHÃ · PLANEJADO", title: "Mais percepção.", text: "Câmera, visão computacional, tradução avançada e novas interações.", label: "EM DESENVOLVIMENTO", state: "planned" },
  { status: "FUTURO · VISÃO", title: "Uma nova camada computacional.", text: "Display e realidade aumentada: uma nova camada computacional diante dos seus olhos.", label: "VISÃO", state: "vision" },
] as const;

export const disclaimers = {
  demo: "Simulação ilustrativa da experiência. As ações dependem das integrações e permissões disponíveis.",
  compatibility: "Disponibilidade de recursos varia conforme o sistema do celular e as permissões concedidas. No Android, algumas automações podem depender de recursos como Accessibility Service; no iPhone, há limitações próprias do sistema. Ações sensíveis sempre pedem sua confirmação.",
  future: "Recursos futuros estão em fase de conceito e podem mudar. Não há datas de lançamento anunciadas.",
  hardware: "Primeira versão: voz, áudio e conexão.",
};

export const specifications = [
  { category: "PLACA PRINCIPAL", name: "Seeed Studio XIAO ESP32S3 Sense", detail: "Unidade central do protótipo, com ESP32-S3, Wi-Fi e Bluetooth Low Energy. A versão Sense reúne conectividade e recursos para câmera e áudio.", status: "BASE DO PROJETO" },
  { category: "CÂMERA", name: "OV2640 — módulo da XIAO ESP32S3 Sense", detail: "Sensor de imagem compacto associado à placa Sense. A captura de imagem é uma possibilidade de desenvolvimento; visão computacional ainda depende de software e testes.", status: "RECURSO EM AVALIAÇÃO" },
  { category: "MICROFONE", name: "MEMS integrado à XIAO ESP32S3 Sense", detail: "A placa Sense já oferece microfone digital integrado. O SPH0645LM4H é uma alternativa externa I²S caso os testes indiquem necessidade de outro posicionamento ou captação.", status: "INTEGRADO / ALTERNATIVA" },
  { category: "ÁUDIO", name: "MAX98357A + alto-falante miniatura 8 Ω / 1 W", detail: "Amplificador de áudio digital I²S e pequeno alto-falante para respostas sonoras. O formato físico, volume e consumo precisam ser validados na armação.", status: "COMPONENTES PROPOSTOS" },
  { category: "CONECTIVIDADE", name: "Bluetooth Low Energy integrado — ESP32-S3", detail: "Conexão sem fio com o smartphone. Um módulo Bluetooth Ebyte separado fica como alternativa, não como componente obrigatório da primeira arquitetura.", status: "INTEGRADO À PLACA" },
  { category: "BATERIA", name: "Bateria Li-Po 3,7 V", detail: "A capacidade final ainda precisa ser definida com base no consumo real, autonomia desejada, dimensões e proteção elétrica. Não há autonomia confirmada.", status: "A DIMENSIONAR" },
  { category: "RECARGA", name: "Módulo carregador Li-Po USB-C", detail: "Referência de circuito de carga para bateria de célula única. A placa exata, proteção e integração mecânica precisam ser verificadas antes da montagem.", status: "A VALIDAR" },
  { category: "CONTROLES", name: "Botão tátil 6 mm + sensor touch TTP223", detail: "O botão físico pode ativar uma função direta. O TTP223 é uma alternativa para toque capacitivo; a decisão entre botão, touch ou ambos depende do espaço e dos testes.", status: "OPÇÕES DE INTERAÇÃO" },
  { category: "CHAVE", name: "Chave miniatura SPDT", detail: "Possível chave física de alimentação. É necessário conferir dimensões, corrente suportada e posição na haste.", status: "PROPOSTA" }
] as const;

export const softwareSpecifications = [
  { category: "FIRMWARE", name: "ESP-IDF ou Arduino framework", detail: "Software embarcado responsável por controlar a placa, os periféricos e a comunicação. A plataforma final ainda será escolhida." },
  { category: "CONEXÃO", name: "Bluetooth Low Energy (BLE)", detail: "Canal de comunicação entre os óculos e o aplicativo no celular." },
  { category: "APLICATIVO", name: "Aplicativo Pemura para Android e iOS", detail: "Interface no smartphone para configurações, permissões e integração com serviços. Ainda é parte do desenvolvimento." },
  { category: "INTELIGÊNCIA ARTIFICIAL", name: "Integração com serviço de IA", detail: "Interpreta solicitações e organiza respostas. O provedor e a arquitetura de nuvem ainda não estão definidos." },
  { category: "VOZ", name: "Reconhecimento de fala e síntese de voz", detail: "Transforma áudio em texto e respostas em áudio. A solução final dependerá de testes de latência, qualidade, custo e privacidade." }
] as const;
