'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      align: 'start', 
      slidesToScroll: 1,
      containScroll: 'trimSnaps',
      loop: true,
    },
    [Autoplay({ delay: 6000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-tchu-bg py-20 lg:py-24">
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
            O que nossos clientes dizem
          </h2>
          <p className="text-tchu-text-secondary">
            Histórias reais de quem saiu dirigindo
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-tchu-surface rounded-card p-7 shadow-card border border-tchu-border-color h-full"
                  >
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="relative mb-6">
                      <Quote className="w-6 h-6 text-tchu-border-color absolute -top-1 -left-1" />
                      <p className="text-tchu-text-primary leading-relaxed pl-5 italic">
                        {testimonial.texto}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-tchu-border-color pt-4">
                      <p className="font-semibold text-tchu-text-primary">
                        {testimonial.nome}
                      </p>
                      <p className="text-sm text-tchu-text-muted">
                        {testimonial.cidade}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-tchu-surface border border-tchu-border-color rounded-full shadow-card flex items-center justify-center text-tchu-text-secondary hover:border-tchu-red hover:text-tchu-red transition-colors z-10 hidden lg:flex"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-tchu-surface border border-tchu-border-color rounded-full shadow-card flex items-center justify-center text-tchu-text-secondary hover:border-tchu-red hover:text-tchu-red transition-colors z-10 hidden lg:flex"
            aria-label="Próximo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
