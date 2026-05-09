export interface Vehicle {
  id: string;
  slug: string;
  marca: string;
  modelo: string;
  versao: string;
  ano_fabricacao: number;
  ano_modelo: number;
  km: number;
  combustivel: string;
  transmissao: string;
  cor: string;
  portas: number;
  carroceria: string;
  preco: number;
  preco_promocional?: number;
  aceita_fgts: boolean;
  aceita_troca: boolean;
  destaque: boolean;
  vendido: boolean;
  descricao: string;
  opcionais: string[];
  placa_final: number;
  imagem: string;
  parcela?: number;
}

export const vehicles: Vehicle[] = [
  {
    id: '1',
    slug: 'volkswagen-t-cross-2022',
    marca: 'Volkswagen',
    modelo: 'T-Cross',
    versao: '200 TSI Comfortline',
    ano_fabricacao: 2022,
    ano_modelo: 2022,
    km: 45000,
    combustivel: 'Flex',
    transmissao: 'Automático',
    cor: 'Branco',
    portas: 4,
    carroceria: 'SUV',
    preco: 89900,
    aceita_fgts: true,
    aceita_troca: true,
    destaque: true,
    vendido: false,
    descricao: 'Excelente estado, único dono, revisões em concessionária. Completo com multimídia, ar digital, rodas de liga leve.',
    opcionais: ['Ar-condicionado', 'Direção elétrica', 'Vidros elétricos', 'Trava elétrica', 'Air bag', 'ABS', 'Som', 'Roda de liga leve', 'Computador de bordo'],
    placa_final: 3,
    imagem: '/cars/vw-tcross-2022.jpg',
    parcela: 1847,
  },
  {
    id: '2',
    slug: 'chevrolet-onix-plus-2023',
    marca: 'Chevrolet',
    modelo: 'Onix Plus',
    versao: '1.0 Turbo LT',
    ano_fabricacao: 2023,
    ano_modelo: 2023,
    km: 28000,
    combustivel: 'Flex',
    transmissao: 'Manual',
    cor: 'Prata',
    portas: 4,
    carroceria: 'Sedan',
    preco: 72500,
    aceita_fgts: false,
    aceita_troca: true,
    destaque: true,
    vendido: false,
    descricao: 'Perfeito para aplicativo ou família. Baixo consumo, motor turbo eficiente.',
    opcionais: ['Ar-condicionado', 'Direção elétrica', 'Vidros elétricos', 'Trava elétrica', 'Air bag', 'ABS', 'Som'],
    placa_final: 7,
    imagem: '/cars/onix-plus-2023.jpg',
    parcela: 1489,
  },
  {
    id: '3',
    slug: 'hyundai-hb20-2022',
    marca: 'Hyundai',
    modelo: 'HB20',
    versao: '1.0 Vision',
    ano_fabricacao: 2022,
    ano_modelo: 2022,
    km: 35000,
    combustivel: 'Flex',
    transmissao: 'Automático',
    cor: 'Vermelho',
    portas: 4,
    carroceria: 'Hatch',
    preco: 68900,
    aceita_fgts: true,
    aceita_troca: true,
    destaque: true,
    vendido: false,
    descricao: 'Automático completo, ideal para o dia a dia na cidade. Revisado e com garantia.',
    opcionais: ['Ar-condicionado', 'Direção elétrica', 'Vidros elétricos', 'Trava elétrica', 'Air bag', 'ABS', 'Som', 'Computador de bordo'],
    placa_final: 1,
    imagem: '/cars/hb20-2022.jpg',
    parcela: 1415,
  },
  {
    id: '4',
    slug: 'fiat-strada-2023',
    marca: 'Fiat',
    modelo: 'Strada',
    versao: 'Freedom 1.3',
    ano_fabricacao: 2023,
    ano_modelo: 2023,
    km: 22000,
    combustivel: 'Flex',
    transmissao: 'Manual',
    cor: 'Branco',
    portas: 2,
    carroceria: 'Pickup',
    preco: 82000,
    aceita_fgts: false,
    aceita_troca: true,
    destaque: true,
    vendido: false,
    descricao: 'Cabine dupla, perfeita para trabalho e lazer. Capota marítima inclusa.',
    opcionais: ['Ar-condicionado', 'Direção elétrica', 'Vidros elétricos', 'Trava elétrica', 'Air bag', 'ABS', 'Som'],
    placa_final: 9,
    imagem: '/cars/strada-2023.jpg',
    parcela: 1685,
  },
  {
    id: '5',
    slug: 'toyota-corolla-2021',
    marca: 'Toyota',
    modelo: 'Corolla',
    versao: '2.0 XEI',
    ano_fabricacao: 2021,
    ano_modelo: 2021,
    km: 55000,
    combustivel: 'Flex',
    transmissao: 'Automático',
    cor: 'Prata',
    portas: 4,
    carroceria: 'Sedan',
    preco: 112900,
    aceita_fgts: true,
    aceita_troca: true,
    destaque: true,
    vendido: false,
    descricao: 'O sedan mais confiável do Brasil. Baixa depreciação, excelente revenda.',
    opcionais: ['Ar-condicionado', 'Direção elétrica', 'Vidros elétricos', 'Trava elétrica', 'Air bag', 'ABS', 'Som', 'Sensor de ré', 'Câmera de ré', 'Roda de liga leve', 'Computador de bordo'],
    placa_final: 5,
    imagem: '/cars/corolla-2021.jpg',
    parcela: 2319,
  },
  {
    id: '6',
    slug: 'renault-kwid-2023',
    marca: 'Renault',
    modelo: 'Kwid',
    versao: 'Intense 1.0',
    ano_fabricacao: 2023,
    ano_modelo: 2023,
    km: 15000,
    combustivel: 'Flex',
    transmissao: 'Manual',
    cor: 'Branco',
    portas: 4,
    carroceria: 'Hatch',
    preco: 52900,
    aceita_fgts: false,
    aceita_troca: true,
    destaque: true,
    vendido: false,
    descricao: 'Econômico e fácil de dirigir. Ótimo para primeiro carro.',
    opcionais: ['Ar-condicionado', 'Direção elétrica', 'Vidros elétricos', 'Trava elétrica', 'Air bag', 'ABS', 'Som'],
    placa_final: 0,
    imagem: '/cars/kwid-2023.jpg',
    parcela: 1086,
  },
  {
    id: '7',
    slug: 'honda-hr-v-2022',
    marca: 'Honda',
    modelo: 'HR-V',
    versao: 'EX 1.8',
    ano_fabricacao: 2022,
    ano_modelo: 2022,
    km: 40000,
    combustivel: 'Flex',
    transmissao: 'Automático',
    cor: 'Cinza',
    portas: 4,
    carroceria: 'SUV',
    preco: 105900,
    aceita_fgts: false,
    aceita_troca: true,
    destaque: true,
    vendido: false,
    descricao: 'SUV compacta com excelente espaço interno. Banco mágico Honda exclusivo.',
    opcionais: ['Ar-condicionado', 'Direção elétrica', 'Vidros elétricos', 'Trava elétrica', 'Air bag', 'ABS', 'Som', 'Sensor de ré', 'Roda de liga leve', 'Computador de bordo'],
    placa_final: 4,
    imagem: '/cars/hrv-2022.jpg',
    parcela: 2174,
  },
  {
    id: '8',
    slug: 'jeep-compass-2021',
    marca: 'Jeep',
    modelo: 'Compass',
    versao: 'Sport 2.0',
    ano_fabricacao: 2021,
    ano_modelo: 2021,
    km: 60000,
    combustivel: 'Flex',
    transmissao: 'Automático',
    cor: 'Preto',
    portas: 4,
    carroceria: 'SUV',
    preco: 125900,
    aceita_fgts: true,
    aceita_troca: true,
    destaque: true,
    vendido: false,
    descricao: 'SUV médio com presença de estrada. Completo e revisado na concessionária.',
    opcionais: ['Ar-condicionado', 'Direção elétrica', 'Vidros elétricos', 'Trava elétrica', 'Air bag', 'ABS', 'Som', 'Sensor de ré', 'Câmera de ré', 'Roda de liga leve', 'Computador de bordo'],
    placa_final: 8,
    imagem: '/cars/compass-2021.jpg',
    parcela: 2585,
  },
];

export const getVehicleBySlug = (slug: string): Vehicle | undefined => {
  return vehicles.find(v => v.slug === slug);
};

export const getFeaturedVehicles = (): Vehicle[] => {
  return vehicles.filter(v => v.destaque && !v.vendido);
};

export const getAllVehicles = (): Vehicle[] => {
  return vehicles.filter(v => !v.vendido);
};

export const getVehiclesByBrand = (brand: string): Vehicle[] => {
  return vehicles.filter(v => v.marca.toLowerCase() === brand.toLowerCase() && !v.vendido);
};
