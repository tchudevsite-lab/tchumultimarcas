'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import VehicleCard from '@/components/VehicleCard';
import { getFeaturedVehicles } from '@/data/vehicles';

export default function FeaturedVehicles() {
  const vehicles = getFeaturedVehicles();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      align: 'start', 
      slidesToScroll: 1,
      containScroll: 'trimSnaps',
      loop: true,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-tchu-surface-alt py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-tchu-text-primary mb-2">
              Destaques do Estoque
            </h2>
            <p className="text-tchu-text-secondary">
              Os melhores seminovos selecionados para você
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/estoque"
              className="text-tchu-red font-medium hover:underline flex items-center gap-1 transition-colors"
            >
              Ver todo o estoque
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {vehicles.map((vehicle, index) => (
                <div 
                  key={vehicle.id} 
                  className="flex-none w-[85%] sm:w-[45%] lg:w-[23%] min-w-0"
                >
                  <VehicleCard vehicle={vehicle} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute -left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-tchu-surface border border-tchu-border-color rounded-full shadow-card flex items-center justify-center text-tchu-text-secondary hover:border-tchu-red hover:text-tchu-red transition-colors z-10 hidden lg:flex"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-tchu-surface border border-tchu-border-color rounded-full shadow-card flex items-center justify-center text-tchu-text-secondary hover:border-tchu-red hover:text-tchu-red transition-colors z-10 hidden lg:flex"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
