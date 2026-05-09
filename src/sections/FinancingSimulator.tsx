'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calculator } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

export default function FinancingSimulator() {
  const [vehiclePrice, setVehiclePrice] = useState(80000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [installments, setInstallments] = useState(48);
  const [useFGTS, setUseFGTS] = useState(false);

  const monthlyRate = 0.0149; // 1.49% a.m.

  const downPaymentValue = Math.round((vehiclePrice * downPaymentPercent) / 100);
  const financedAmount = vehiclePrice - downPaymentValue;

  const monthlyPayment = useMemo(() => {
    if (financedAmount <= 0) return 0;
    const pmt = (financedAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -installments));
    return Math.round(pmt);
  }, [financedAmount, installments, monthlyRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="financiamento" className="bg-tchu-surface-alt py-20 lg:py-24 border-y border-tchu-border-color">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Simule seu Financiamento
          </h2>
          <p className="text-white/70">
            Descubra em segundos quanto você vai pagar por mês
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[55%_45%] gap-10 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Vehicle Price */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-white font-medium">Valor do veículo</label>
                <span className="text-white font-bold text-lg">{formatCurrency(vehiclePrice)}</span>
              </div>
              <Slider
                value={[vehiclePrice]}
                onValueChange={(v) => setVehiclePrice(v[0])}
                min={30000}
                max={200000}
                step={1000}
                className="py-2"
              />
              <div className="flex justify-between text-white/40 text-xs mt-1">
                <span>R$ 30.000</span>
                <span>R$ 200.000</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-white font-medium">Entrada</label>
                <div className="flex items-center gap-3">
                  <span className="text-white font-bold text-lg">{formatCurrency(downPaymentValue)}</span>
                  <span className="text-white/50 text-sm">({downPaymentPercent}%)</span>
                </div>
              </div>
              <Slider
                value={[downPaymentPercent]}
                onValueChange={(v) => setDownPaymentPercent(v[0])}
                min={0}
                max={60}
                step={5}
                className="py-2"
              />
              <div className="flex justify-between text-white/40 text-xs mt-1">
                <span>0%</span>
                <span>60%</span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <Switch
                  checked={useFGTS}
                  onCheckedChange={setUseFGTS}
                />
                <span className="text-white/80 text-sm">Usar FGTS como entrada</span>
              </div>
            </div>

            {/* Installments */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-white font-medium">Parcelas</label>
                <span className="text-white font-bold text-lg">{installments}x</span>
              </div>
              <Slider
                value={[installments]}
                onValueChange={(v) => setInstallments(v[0])}
                min={12}
                max={84}
                step={6}
                className="py-2"
              />
              <div className="flex justify-between text-white/40 text-xs mt-1">
                <span>12x</span>
                <span>84x</span>
              </div>
            </div>

            <p className="text-white/50 text-sm">
              Taxa a partir de 1,49% a.m. Sujeito a análise de crédito.
            </p>

            {/* CTA */}
            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/5548991195070?text=Olá,%20quero%20aprovação%20de%20financiamento!"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-tchu-red hover:bg-tchu-red-hover text-tchu-navy font-semibold py-4 rounded-button shadow-button transition-all hover:scale-[1.02] text-center"
              >
                Quero aprovação em 10 min
              </a>
              <a
                href="https://wa.me/5548991195070"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                ou fale direto no WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Result Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-tchu-surface rounded-card p-8 shadow-card-hover sticky top-28 border border-tchu-border-color">
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="w-5 h-5 text-tchu-red" />
                <h3 className="text-lg font-semibold text-tchu-text-primary">Resultado da Simulação</h3>
              </div>

              <div className="text-center mb-6">
                <p className="text-sm text-tchu-text-secondary mb-1">Valor estimado da parcela</p>
                <p className="text-4xl font-bold text-tchu-red">
                  {formatCurrency(monthlyPayment)}
                </p>
              </div>

              <div className="border-t border-tchu-border-color pt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-tchu-text-secondary">Valor do veículo</span>
                  <span className="font-medium text-tchu-text-primary">{formatCurrency(vehiclePrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-tchu-text-secondary">Entrada</span>
                  <span className="font-medium text-tchu-text-primary">{formatCurrency(downPaymentValue)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-tchu-text-secondary">Valor financiado</span>
                  <span className="font-medium text-tchu-text-primary">{formatCurrency(financedAmount)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-tchu-text-secondary">Parcelas</span>
                  <span className="font-medium text-tchu-text-primary">{installments}x</span>
                </div>
              </div>

              <div className="mt-6">
                <span className="inline-block bg-tchu-financing-badge text-white text-xs font-semibold px-3 py-1.5 rounded-badge">
                  Aprovação em 10 min
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
