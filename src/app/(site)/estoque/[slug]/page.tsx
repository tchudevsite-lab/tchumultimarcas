'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, MessageCircle, Copy, Check,
  Calendar, Gauge, Fuel, Cog, Palette, DoorOpen, Car, Hash,
  CheckCircle2, Calculator
} from 'lucide-react';
import { useState } from 'react';
import { getVehicleBySlug, vehicles } from '@/data/vehicles';
import VehicleCard from '@/components/VehicleCard';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { toast } from 'sonner';

export default function VehicleDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const vehicle = getVehicleBySlug(slug || '');
  const [copied, setCopied] = useState(false);

  // Related vehicles (same brand or similar price)
  const relatedVehicles = vehicles
    .filter(v => v.id !== vehicle?.id && !v.vendido)
    .slice(0, 3);

  if (!vehicle) {
    return (
      <main className="min-h-screen pt-28 pb-16 bg-tchu-bg flex items-center justify-center">
        <div className="text-center">
          <Car className="w-16 h-16 text-tchu-text-muted mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-tchu-text-primary mb-2">
            Veículo não encontrado
          </h1>
          <p className="text-tchu-text-secondary mb-6">
            O veículo que você procura não está mais disponível.
          </p>
          <Link
            href="/estoque"
            className="bg-tchu-red text-tchu-navy px-6 py-2.5 rounded-button font-medium hover:bg-tchu-red-hover transition-colors"
          >
            Ver estoque
          </Link>
        </div>
      </main>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatKm = (km: number) => {
    return new Intl.NumberFormat('pt-BR').format(km);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast.success('Link copiado!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    const text = `Olha esse carro na Tchu Multimarcas: ${vehicle.marca} ${vehicle.modelo} ${vehicle.ano_modelo} - ${formatPrice(vehicle.preco)}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + window.location.href)}`, '_blank');
  };

  const specs = [
    { label: 'Ano', value: `${vehicle.ano_modelo}`, icon: Calendar },
    { label: 'KM', value: `${formatKm(vehicle.km)}`, icon: Gauge },
    { label: 'Combustível', value: vehicle.combustivel, icon: Fuel },
    { label: 'Câmbio', value: vehicle.transmissao, icon: Cog },
    { label: 'Cor', value: vehicle.cor, icon: Palette },
    { label: 'Portas', value: `${vehicle.portas}`, icon: DoorOpen },
    { label: 'Carroceria', value: vehicle.carroceria, icon: Car },
    { label: 'Final Placa', value: `${vehicle.placa_final}`, icon: Hash },
  ];

  const whatsappMessage = `Olá, tenho interesse no ${vehicle.marca} ${vehicle.modelo} ${vehicle.ano_modelo}!`;

  return (
    <main className="min-h-screen pt-24 lg:pt-28 pb-16 bg-tchu-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-sm text-tchu-text-muted mb-6"
        >
          <Link href="/" className="hover:text-tchu-red transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/estoque" className="hover:text-tchu-red transition-colors">Estoque</Link>
          <span className="mx-2">/</span>
          <Link href={`/estoque?marca=${vehicle.marca.toLowerCase()}`} className="hover:text-tchu-red transition-colors">
            {vehicle.marca}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-tchu-text-secondary">{vehicle.modelo}</span>
        </motion.div>

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-tchu-text-secondary hover:text-tchu-text-primary mb-6 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Voltar
        </motion.button>

        <div className="grid lg:grid-cols-[60%_40%] gap-8">
          {/* Left - Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main Image */}
            <div className="relative rounded-card overflow-hidden bg-white shadow-card mb-4" style={{ aspectRatio: '16/10' }}>
              <img
                src={vehicle.imagem}
                alt={`${vehicle.marca} ${vehicle.modelo} ${vehicle.ano_modelo}`}
                className="w-full h-full object-cover"
              />
              {vehicle.destaque && (
                <div className="absolute top-4 right-4 bg-tchu-navy/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-badge">
                  Destaque
                </div>
              )}
              {vehicle.aceita_fgts && (
                <div className="absolute top-4 left-4 bg-tchu-fgts-badge text-white text-xs font-semibold px-3 py-1.5 rounded-badge">
                  Aceita FGTS
                </div>
              )}
            </div>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {/* Title */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-tchu-text-primary mb-2">
                {vehicle.marca} {vehicle.modelo} {vehicle.versao} {vehicle.ano_modelo}
              </h1>
              <p className="text-tchu-text-secondary text-sm">
                {formatKm(vehicle.km)} km · {vehicle.combustivel} · {vehicle.transmissao} · {vehicle.cor}
              </p>
            </div>

            {/* Price */}
            <div className="bg-tchu-surface rounded-card border border-tchu-border-color p-6 shadow-card mb-6">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-3xl font-bold text-tchu-red">
                  {formatPrice(vehicle.preco)}
                </span>
                {vehicle.preco_promocional && (
                  <span className="text-lg text-tchu-text-muted line-through">
                    {formatPrice(vehicle.preco_promocional)}
                  </span>
                )}
              </div>
              {vehicle.parcela && (
                <p className="text-sm text-tchu-text-secondary">
                  ou a partir de {formatPrice(vehicle.parcela)}/mês
                </p>
              )}
              <div className="flex gap-2 mt-4">
                {vehicle.aceita_fgts && (
                  <span className="bg-tchu-fgts-badge/15 text-tchu-fgts-badge text-xs font-semibold px-2.5 py-1 rounded-badge">
                    FGTS
                  </span>
                )}
                <span className="bg-tchu-guarantee-badge/15 text-tchu-guarantee-badge text-xs font-semibold px-2.5 py-1 rounded-badge">
                  Garantia 1 ano
                  </span>
                <span className="bg-tchu-success/15 text-tchu-success text-xs font-semibold px-2.5 py-1 rounded-badge">
                  Seminovo
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 mb-6">
              <a
                href={`https://wa.me/5548991195070?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-tchu-red hover:bg-tchu-red-hover text-tchu-navy font-semibold py-4 rounded-button shadow-button transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp sobre este carro
              </a>
              <Link
                href="/#financiamento"
                className="flex items-center justify-center gap-2 w-full border-2 border-tchu-border-color text-tchu-text-primary font-semibold py-3.5 rounded-button hover:border-tchu-red hover:text-tchu-red transition-colors"
              >
                <Calculator className="w-4 h-4" />
                Simular financiamento
              </Link>
            </div>

            {/* Share */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-tchu-text-muted">Compartilhar:</span>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 text-sm text-tchu-text-secondary hover:text-tchu-text-primary transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copiado' : 'Copiar link'}
              </button>
              <button
                onClick={handleShareWhatsApp}
                className="flex items-center gap-1.5 text-sm text-tchu-success hover:underline transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
            </div>
          </motion.div>
        </div>

        {/* Specs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <h2 className="text-xl font-bold text-tchu-text-primary mb-5">
            Especificações
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="bg-tchu-surface rounded-card border border-tchu-border-color p-4 shadow-card"
              >
                <spec.icon className="w-5 h-5 text-tchu-text-muted mb-2" />
                <p className="text-xs text-tchu-text-muted uppercase tracking-wide mb-1">
                  {spec.label}
                </p>
                <p className="text-sm font-semibold text-tchu-text-primary">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Optional Extras */}
        {vehicle.opcionais.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <h2 className="text-xl font-bold text-tchu-text-primary mb-5">
              Opcionais
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {vehicle.opcionais.map((opcional) => (
                <div
                  key={opcional}
                  className="flex items-center gap-2 bg-tchu-surface rounded-card border border-tchu-border-color p-3 shadow-card"
                >
                  <CheckCircle2 className="w-4 h-4 text-tchu-success flex-shrink-0" />
                  <span className="text-sm text-tchu-text-primary">{opcional}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <h2 className="text-xl font-bold text-tchu-text-primary mb-4">
            Descrição
          </h2>
          <div className="bg-tchu-surface rounded-card border border-tchu-border-color p-6 shadow-card">
            <p className="text-tchu-text-secondary leading-relaxed">
              {vehicle.descricao}
            </p>
          </div>
        </motion.div>

        {/* Related Vehicles */}
        {relatedVehicles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mt-14"
          >
            <h2 className="text-2xl font-bold text-tchu-text-primary mb-6">
              Veículos similares
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedVehicles.map((v, index) => (
                <VehicleCard key={v.id} vehicle={v} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <WhatsAppFloat message={whatsappMessage} />
    </main>
  );
}
