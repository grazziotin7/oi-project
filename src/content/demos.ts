export const demos = [
  { title: "Pedir comida", messages: [
    ["Você", "Pemura, peça um hambúrguer."], ["Pemura", "Qual você prefere?"], ["Você", "O de sempre."], ["Pemura", "Pedido pronto para confirmar. Posso finalizar?"], ["Você", "Pode."], ["Pemura", "Pedido confirmado."]
  ], confirmation: true },
  { title: "Mandar mensagem", messages: [
    ["Você", "Pemura, manda uma mensagem para o João dizendo que estou chegando."], ["Pemura", "Mensagem pronta. Quer enviar?"], ["Você", "Enviar."], ["Pemura", "Enviada."]
  ], confirmation: true },
  { title: "Chamar transporte", messages: [
    ["Você", "Pemura, chama um carro para casa."], ["Pemura", "Encontrei uma opção chegando em poucos minutos. Confirma?"], ["Você", "Confirma."], ["Pemura", "Corrida solicitada."]
  ], confirmation: true },
  { title: "Música", messages: [
    ["Você", "Pemura, toca minha playlist de foco."], ["Pemura", "Tocando."]
  ], confirmation: false },
  { title: "Navegação", messages: [
    ["Você", "Pemura, como chego ao shopping?"], ["Pemura", "Abri a rota no seu celular. Siga em frente por duzentos metros."]
  ], confirmation: false },
  { title: "Traduzir", messages: [
    ["Você", "Pemura, como se diz 'a conta, por favor' em inglês?"], ["Pemura", "'The check, please.'"]
  ], confirmation: false },
] as const;
