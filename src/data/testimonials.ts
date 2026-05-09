export interface Testimonial {
  id: number;
  nome: string;
  cidade: string;
  texto: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    nome: 'Maria S.',
    cidade: 'Palhoça, SC',
    texto: 'Fiz tudo pelo WhatsApp, em 2 dias já estava com meu Onix na porta. O FGTS facilitou demais a entrada!',
    rating: 5,
  },
  {
    id: 2,
    nome: 'João P.',
    cidade: 'São José, SC',
    texto: 'Atendimento diferenciado, sem enrolação. O financiamento foi aprovado na hora e a garantia de 1 ano me deu muita segurança.',
    rating: 5,
  },
  {
    id: 3,
    nome: 'Ana L.',
    cidade: 'Biguaçu, SC',
    texto: 'Troquei meu carro antigo e ainda usei o FGTS. Saí de lá com um HB20 zero preocupação. Recomendo!',
    rating: 5,
  },
  {
    id: 4,
    nome: 'Carlos R.',
    cidade: 'Florianópolis, SC',
    texto: 'Loja de confiança da região. Preço justo, carro revisado, e o pós-venda é excelente.',
    rating: 5,
  },
  {
    id: 5,
    nome: 'Fernanda M.',
    cidade: 'Santo Amaro, SC',
    texto: 'Minha primeira compra de carro e fui muito bem orientada. Parcela cabe no bolso e o carro é ótimo.',
    rating: 5,
  },
  {
    id: 6,
    nome: 'Pedro H.',
    cidade: 'Gov. Celso Ramos, SC',
    texto: 'Simulei no site, fui à loja e saí com o carro no mesmo dia. Processo rápido e transparente.',
    rating: 5,
  },
];
