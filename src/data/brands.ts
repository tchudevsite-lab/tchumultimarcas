export interface Brand {
  nome: string;
  slug: string;
  count: number;
}

export const brands: Brand[] = [
  { nome: 'Volkswagen', slug: 'volkswagen', count: 12 },
  { nome: 'Chevrolet', slug: 'chevrolet', count: 9 },
  { nome: 'Fiat', slug: 'fiat', count: 8 },
  { nome: 'Hyundai', slug: 'hyundai', count: 7 },
  { nome: 'Toyota', slug: 'toyota', count: 6 },
  { nome: 'Honda', slug: 'honda', count: 5 },
  { nome: 'Renault', slug: 'renault', count: 5 },
  { nome: 'Ford', slug: 'ford', count: 4 },
  { nome: 'Jeep', slug: 'jeep', count: 4 },
  { nome: 'Nissan', slug: 'nissan', count: 3 },
  { nome: 'Peugeot', slug: 'peugeot', count: 2 },
  { nome: 'Citroën', slug: 'citroen', count: 2 },
];
