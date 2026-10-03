// TUDO que precisa de confirmação com a cliente está marcado com CONFIRMAR.
export const site = {
  nome: "Madux Beauty", // CONFIRMAR: Madux Lash, Madux Beauty ou Madux Brow
  profissional: "Eduarda", // CONFIRMAR como ela quer ser chamada
  whatsapp: "5541900000000", // CONFIRMAR: só dígitos, com 55 + DDD
  cidade: "São José dos Pinhais/PR", // CONFIRMAR se mostra a cidade
  instagram: "madux_lash",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://exemplo.com.br", // CONFIRMAR: domínio final
};

// CONFIRMAR: assumi que as fotos são da Eduarda. Troque os arquivos em public/fotos/ quando quiser.
export const imagens = {
  topo: { src: "/fotos/inicio.webp", w: 900, h: 1062, alt: "Eduarda, profissional de cílios e sobrancelhas" },
  sobre: { src: "/fotos/sobre.webp", w: 900, h: 1047, alt: "Retrato de Eduarda" },
};

export const estilos = ["Boneca", "Esquilo", "Gatinho"];

export type Servico = { nome: string; opcoes?: string[]; preco?: number; manutencao?: number };
// CONFIRMAR: preços e manutenções vêm do catálogo antigo (só onde o nome bate).
// Sem preço = o site mostra "Valor no WhatsApp".
export const grupos: { titulo: string; itens: Servico[] }[] = [
  { titulo: "Extensão de cílios", itens: [
    { nome: "Efeito Suave", opcoes: ["Preto", "Marrom", "Califórnia"] },
    { nome: "Efeito Lami" },
    { nome: "Fox Eyes", opcoes: ["Preto", "Marrom"], preco: 150, manutencao: 120 },
    { nome: "Efeito Árabe" },
    { nome: "Efeito Delineado", preco: 150, manutencao: 120 },
    { nome: "Volume Brasileiro", opcoes: ["Preto", "Marrom"], preco: 140, manutencao: 110 },
    { nome: "Volume Luxo" },
  ]},
  { titulo: "Cílios e sobrancelhas", itens: [
    { nome: "Lash Lift Coreano", preco: 130 }, // CONFIRMAR: o catálogo antigo diz só "Lash Lift"
    { nome: "Brow Lamination", preco: 130 },
  ]},
  { titulo: "Design de sobrancelha", itens: [
    { nome: "Design Spa" },
    { nome: "Design com Henna", preco: 55 },
  ]},
];

// Cole aqui os feedbacks reais (autor opcional). Vazio = mostra espaços reservados.
export const feedbacks: { texto: string; autor?: string }[] = [];

export const pagamentos = ["Pix", "Dinheiro", "Débito", "Crédito"];
export const certificacoes = ["Visagismo — formação internacional"]; // CONFIRMAR e completar

export const faq = [
  { p: "O que é visagismo?", r: "É a análise do formato do olho e do rosto para escolher o efeito e o desenho de cílios que mais combinam com cada pessoa." },
  { p: "Como faço para agendar?", r: "Escolha o serviço aqui no site e toque em Agendar. A conversa abre no WhatsApp já com o serviço escolhido, e é só combinar o horário." },
  { p: "Quais são as formas de pagamento?", r: "Pix, dinheiro, débito e crédito." },
];
