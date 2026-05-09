'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { brands } from '@/data/brands';

export default function BrowseByBrands() {
  return (
    <section className="bg-tchu-surface-alt py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-tchu-text-primary mb-2">
            O que você está <span className="text-tchu-red italic">procurando?</span>
          </h2>
          <p className="text-tchu-text-secondary">
            Escolha a marca e veja os veículos disponíveis.
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link
                href={`/estoque?marca=${brand.slug}`}
                className="group block bg-tchu-surface border border-tchu-border-color rounded-card p-6 text-center transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 hover:border-t-4 hover:border-t-tchu-red"
              >
                <h3 className="text-lg font-semibold text-tchu-text-primary mb-1 group-hover:text-tchu-red transition-colors">
                  {brand.nome}
                </h3>
                <p className="text-sm text-tchu-text-muted">
                  {brand.count} veículos
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
