'use client';

import { Shield, Car, Wallet, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: 'Garantia de 1 ano',
    description: '100 itens cobertos pela garantia. Tranquilidade total na sua compra.',
    color: 'bg-tchu-red/15 text-tchu-red',
    borderColor: 'hover:border-t-tchu-red',
  },
  {
    icon: Car,
    title: 'Sai com seguro',
    description: 'Corretora interna — seu carro já sai da loja segurado, sem complicação.',
    color: 'bg-tchu-red/15 text-tchu-red',
    borderColor: 'hover:border-t-tchu-red',
  },
  {
    icon: Wallet,
    title: 'Use seu FGTS',
    description: 'Aceite do FGTS como parte da entrada. Facilidade que só a Tchu oferece.',
    color: 'bg-tchu-red/15 text-tchu-red',
    borderColor: 'hover:border-t-tchu-red',
  },
  {
    icon: Landmark,
    title: 'Financiamento facilitado',
    description: 'Aprovação com as menores taxas do mercado. Trabalhamos com +15 bancos parceiros.',
    color: 'bg-tchu-red/15 text-tchu-red',
    borderColor: 'hover:border-t-tchu-red',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="sobre" className="bg-tchu-bg py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-tchu-text-primary mb-3">

            Por que escolher a <span className="text-tchu-red italic">Tchu?</span>
          </h2>
          <p className="text-tchu-text-secondary max-w-xl mx-auto">
            Diferenciais que fazem da Tchu Multimarcas a melhor escolha na Grande Florianópolis.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className={`bg-tchu-surface rounded-card p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover border border-tchu-border-color border-t-4 border-t-transparent ${feature.borderColor}`}
            >
              <div className={`w-16 h-16 mx-auto rounded-full ${feature.color} flex items-center justify-center mb-5`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-tchu-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-tchu-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
