'use client';

import { motion } from 'framer-motion';
import { Search, MessageCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const marcas = ['Todas as marcas', 'Volkswagen', 'Chevrolet', 'Fiat', 'Hyundai', 'Toyota', 'Honda', 'Renault', 'Ford', 'Jeep'];
const faixasPreco = [
  { label: 'Qualquer preço', value: '0' },
  { label: 'Até R$ 50 mil', value: '50000' },
  { label: 'R$ 50–80 mil', value: '80000' },
  { label: 'R$ 80–120 mil', value: '120000' },
  { label: 'R$ 120–200 mil', value: '200000' },
];

export default function Hero() {
  const [marca, setMarca] = useState('');
  const [preco, setPreco] = useState('');

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/herosite.jpg"
          alt="Patio da Tchu Multimarcas"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.55)] to-[rgba(0,0,0,0.75)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 w-full pt-24 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white/85 text-xs sm:text-sm font-semibold uppercase tracking-[3px] mb-6 bg-white/10 border border-white/20 rounded-full px-5 py-2 inline-flex items-center gap-2"
          >
            <span className="text-tchu-red">&#10004;</span> Seminovos com Procedência
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold text-white text-shadow-hero leading-[1.05] mb-6"
          >
            Seu próximo carro está
            <br />
            aqui com <span className="text-tchu-red">1 ano de
            <br />
            garantia</span> e sem
            <br />
            burocracia
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white/70 text-base sm:text-lg font-medium mb-4 flex flex-col items-center gap-2"
          >
            <span>Financiamos e aceitamos o seu carro na troca</span>
            <span className="flex items-center gap-1.5 text-tchu-red font-semibold">
              <span>&#9989;</span> Atendimento e entrega na Grande Florianópolis
            </span>
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full max-w-[800px] mb-8"
          >
            <div className="bg-tchu-surface rounded-card p-4 sm:p-5 shadow-card-hover border border-tchu-border-color">
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Marca Select */}
                <div className="flex-1">
                  <Select value={marca} onValueChange={setMarca}>
                    <SelectTrigger className="h-[52px] bg-tchu-surface-alt border-tchu-border-color rounded-input text-tchu-text-primary">
                      <SelectValue placeholder="Todas as marcas" />
                    </SelectTrigger>
                    <SelectContent>
                      {marcas.map((m) => (
                        <SelectItem key={m} value={m.toLowerCase().replace(/\s+/g, '-')}>
                          {m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Preço Select */}
                <div className="flex-1">
                  <Select value={preco} onValueChange={setPreco}>
                    <SelectTrigger className="h-[52px] bg-tchu-surface-alt border-tchu-border-color rounded-input text-tchu-text-primary">
                      <SelectValue placeholder="Faixa de preço" />
                    </SelectTrigger>
                    <SelectContent>
                      {faixasPreco.map((f) => (
                        <SelectItem key={f.value} value={f.value}>
                          {f.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Search Button */}
                <Link
                  href="/estoque"
                  className="bg-tchu-red hover:bg-tchu-red-hover text-tchu-navy font-semibold h-[52px] px-8 rounded-button shadow-button transition-all hover:scale-[1.03] flex items-center justify-center gap-2 flex-shrink-0"
                >
                  <Search className="w-4 h-4" />
                  Buscar
                </Link>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/estoque"
              className="bg-tchu-red hover:bg-tchu-red-hover text-tchu-navy font-semibold px-8 py-3.5 rounded-button shadow-button transition-all hover:scale-[1.03] flex items-center gap-2"
            >
              Quero ver os carros disponíveis
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/5548991195070?text=Olá,%20quero%20saber%20sobre%20os%20carros%20disponíveis!"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-button hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/60"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
