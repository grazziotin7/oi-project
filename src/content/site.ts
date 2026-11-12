export const site = {
  brand: "PEMURA",
  tagline: "O futuro diante de seus olhos.",
  status: "Protótipo em desenvolvimento",
  hero: {
    eyebrow: "ÓCULOS INTELIGENTES COM IA",
    title: "O futuro diante de seus olhos.",
    description: "Um óculos inteligente que deixa você interagir com o mundo digital usando só a voz.",
  },
  nav: [
    { label: "Experiência", href: "#experiencia" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Hardware", href: "#hardware" },
    { label: "Futuro", href: "#futuro" },
    { label: "Criadores", href: "#criadores" },
  ],
  social: [] as { label: string; href: string }[],
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
  { status: "FUTURO · VISÃO", title: "Uma nova camada computacional.", text: "Uma nova camada computacional diante dos seus olhos.", label: "VISÃO", state: "vision" },
] as const;

export const disclaimers = {
  demo: "Simulação ilustrativa da experiência. As ações dependem das integrações e permissões disponíveis.",
  compatibility: "Disponibilidade de recursos varia conforme o sistema do celular e as permissões concedidas. No Android, algumas automações podem depender de recursos como Accessibility Service; no iPhone, há limitações próprias do sistema. Ações sensíveis sempre pedem sua confirmação.",
  future: "Recursos futuros estão em fase de conceito e podem mudar. Não há datas de lançamento anunciadas.",
  hardware: "Primeira versão: voz, áudio e conexão.",
};
