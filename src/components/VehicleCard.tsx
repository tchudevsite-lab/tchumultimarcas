'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Vehicle } from '@/data/vehicles';

interface VehicleCardProps {
  vehicle: Vehicle;
  index?: number;
}

export default function VehicleCard({ vehicle, index = 0 }: VehicleCardProps) {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link
        href={`/estoque/${vehicle.slug}`}
        className="group block bg-tchu-surface rounded-card shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5 border border-tchu-border-color"
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
          <img
            src={vehicle.imagem}
            alt={`${vehicle.marca} ${vehicle.modelo} ${vehicle.ano_modelo}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {vehicle.destaque && (
            <div className="absolute top-3 right-3 bg-tchu-navy/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-badge flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              Destaque
            </div>
          )}
          {vehicle.aceita_fgts && (
            <div className="absolute top-3 left-3 bg-tchu-fgts-badge text-white text-xs font-semibold px-2.5 py-1 rounded-badge">
              FGTS
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-tchu-text-primary truncate mb-1">
            {vehicle.marca} {vehicle.modelo}
          </h3>
          <p className="text-sm text-tchu-text-secondary mb-3">
            {vehicle.ano_modelo} · {formatKm(vehicle.km)} km · {vehicle.combustivel} · {vehicle.transmissao}
          </p>

          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-tchu-red">
              {formatPrice(vehicle.preco)}
            </span>
          </div>
          {vehicle.parcela && (
            <p className="text-sm text-tchu-text-muted mt-1">
              ou {formatPrice(vehicle.parcela)}/mês
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
