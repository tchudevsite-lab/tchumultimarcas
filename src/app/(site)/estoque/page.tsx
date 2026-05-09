'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import VehicleCard from '@/components/VehicleCard';
import { getAllVehicles } from '@/data/vehicles';
import { brands } from '@/data/brands';
import WhatsAppFloat from '@/components/WhatsAppFloat';

interface Filters {
  marca: string[];
  precoMin: number;
  precoMax: number;
  combustivel: string[];
  transmissao: string[];
  carroceria: string[];
}

export default function Estoque() {
  const searchParams = useSearchParams();
  const marcaParam = searchParams.get('marca');

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recentes' | 'preco-asc' | 'preco-desc' | 'km-asc'>('recentes');
  const [filters, setFilters] = useState<Filters>({
    marca: marcaParam ? [marcaParam] : [],
    precoMin: 0,
    precoMax: 300000,
    combustivel: [],
    transmissao: [],
    carroceria: [],
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const allVehicles = getAllVehicles();

  const toggleFilter = (category: keyof Filters, value: string) => {
    setFilters(prev => {
      const current = prev[category] as string[];
      if (current.includes(value)) {
        return { ...prev, [category]: current.filter(v => v !== value) };
      }
      return { ...prev, [category]: [...current, value] };
    });
  };

  const clearFilters = () => {
    setFilters({
      marca: [],
      precoMin: 0,
      precoMax: 300000,
      combustivel: [],
      transmissao: [],
      carroceria: [],
    });
    setSearchTerm('');
  };

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.marca.length) count += filters.marca.length;
    if (filters.precoMin > 0 || filters.precoMax < 300000) count += 1;
    if (filters.combustivel.length) count += filters.combustivel.length;
    if (filters.transmissao.length) count += filters.transmissao.length;
    if (filters.carroceria.length) count += filters.carroceria.length;
    if (searchTerm) count += 1;
    return count;
  }, [filters, searchTerm]);

  const filteredVehicles = useMemo(() => {
    let result = [...allVehicles];

    // Search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(v => 
        v.marca.toLowerCase().includes(term) ||
        v.modelo.toLowerCase().includes(term) ||
        v.versao.toLowerCase().includes(term)
      );
    }

    // Brand filter
    if (filters.marca.length) {
      result = result.filter(v => filters.marca.includes(v.marca.toLowerCase()));
    }

    // Price filter
    result = result.filter(v => v.preco >= filters.precoMin && v.preco <= filters.precoMax);

    // Fuel filter
    if (filters.combustivel.length) {
      result = result.filter(v => filters.combustivel.includes(v.combustivel.toLowerCase()));
    }

    // Transmission filter
    if (filters.transmissao.length) {
      result = result.filter(v => filters.transmissao.includes(v.transmissao.toLowerCase()));
    }

    // Body type filter
    if (filters.carroceria.length) {
      result = result.filter(v => filters.carroceria.includes(v.carroceria.toLowerCase()));
    }

    // Sort
    switch (sortBy) {
      case 'preco-asc':
        result.sort((a, b) => a.preco - b.preco);
        break;
      case 'preco-desc':
        result.sort((a, b) => b.preco - a.preco);
        break;
      case 'km-asc':
        result.sort((a, b) => a.km - b.km);
        break;
      default:
        break;
    }

    return result;
  }, [allVehicles, filters, searchTerm, sortBy]);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Marca */}
      <div>
        <h4 className="font-semibold text-tchu-text-primary mb-3">Marca</h4>
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand.slug} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={filters.marca.includes(brand.slug)}
                onCheckedChange={() => toggleFilter('marca', brand.slug)}
              />
              <span className="text-sm text-tchu-text-secondary">{brand.nome}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Preço */}
      <div>
        <h4 className="font-semibold text-tchu-text-primary mb-3">Faixa de Preço</h4>
        <Slider
          value={[filters.precoMax]}
          onValueChange={(v) => setFilters(prev => ({ ...prev, precoMax: v[0] }))}
          min={0}
          max={300000}
          step={10000}
          className="py-2"
        />
        <div className="flex justify-between text-xs text-tchu-text-muted mt-1">
          <span>R$ 0</span>
          <span>R$ {filters.precoMax.toLocaleString('pt-BR')}</span>
        </div>
      </div>

      {/* Combustível */}
      <div>
        <h4 className="font-semibold text-tchu-text-primary mb-3">Combustível</h4>
        <div className="space-y-2">
          {['Flex', 'Gasolina', 'Diesel', 'Híbrido'].map(fuel => (
            <label key={fuel} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={filters.combustivel.includes(fuel.toLowerCase())}
                onCheckedChange={() => toggleFilter('combustivel', fuel.toLowerCase())}
              />
              <span className="text-sm text-tchu-text-secondary">{fuel}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Transmissão */}
      <div>
        <h4 className="font-semibold text-tchu-text-primary mb-3">Câmbio</h4>
        <div className="space-y-2">
          {['Manual', 'Automático', 'CVT'].map(trans => (
            <label key={trans} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={filters.transmissao.includes(trans.toLowerCase())}
                onCheckedChange={() => toggleFilter('transmissao', trans.toLowerCase())}
              />
              <span className="text-sm text-tchu-text-secondary">{trans}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Carroceria */}
      <div>
        <h4 className="font-semibold text-tchu-text-primary mb-3">Carroceria</h4>
        <div className="space-y-2">
          {['Hatch', 'Sedan', 'SUV', 'Pickup'].map(body => (
            <label key={body} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={filters.carroceria.includes(body.toLowerCase())}
                onCheckedChange={() => toggleFilter('carroceria', body.toLowerCase())}
              />
              <span className="text-sm text-tchu-text-secondary">{body}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={clearFilters}
        className="w-full py-2.5 text-sm text-tchu-red border border-tchu-red rounded-button hover:bg-tchu-red hover:text-white transition-colors"
      >
        Limpar filtros
      </button>
    </div>
  );

  return (
    <main className="min-h-screen pt-24 lg:pt-28 pb-16 bg-tchu-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="text-sm text-tchu-text-muted mb-4">
          <Link href="/" className="hover:text-tchu-red transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-tchu-text-secondary">Estoque</span>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-tchu-text-primary mb-2">
            Nosso Estoque
          </h1>
          <p className="text-tchu-text-secondary">
            {filteredVehicles.length} veículos disponíveis
          </p>
        </motion.div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-auto flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tchu-text-muted" />
            <Input
              placeholder="Buscar por marca, modelo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-11 bg-tchu-surface border-tchu-border-color rounded-input w-full text-tchu-text-primary"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-tchu-text-muted hover:text-tchu-text-primary"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Mobile Filters */}
            <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden flex items-center gap-2 h-11 px-4 bg-tchu-surface border border-tchu-border-color rounded-button text-sm font-medium text-tchu-text-primary">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filtros
                  {activeFilterCount > 0 && (
                    <span className="bg-tchu-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[90vh] rounded-t-2xl">
                <SheetHeader>
                  <SheetTitle>Filtros</SheetTitle>
                </SheetHeader>
                <div className="mt-6 overflow-y-auto h-[calc(90vh-80px)]">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>

            {/* Sort */}
            <div className="relative flex-1 sm:flex-initial">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="h-11 px-4 pr-10 bg-tchu-surface border border-tchu-border-color rounded-button text-sm text-tchu-text-primary appearance-none cursor-pointer w-full"
              >
                <option value="recentes">Mais recentes</option>
                <option value="preco-asc">Menor preço</option>
                <option value="preco-desc">Maior preço</option>
                <option value="km-asc">Menor KM</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tchu-text-muted pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {filters.marca.map(m => {
              const brand = brands.find(b => b.slug === m);
              return (
                <span key={m} className="inline-flex items-center gap-1 bg-tchu-red text-white text-xs px-3 py-1.5 rounded-badge">
                  {brand?.nome || m}
                  <button onClick={() => toggleFilter('marca', m)}><X className="w-3 h-3" /></button>
                </span>
              );
            })}
            {(filters.precoMin > 0 || filters.precoMax < 300000) && (
              <span className="inline-flex items-center gap-1 bg-tchu-red text-white text-xs px-3 py-1.5 rounded-badge">
                Até R$ {filters.precoMax.toLocaleString('pt-BR')}
                <button onClick={() => setFilters(p => ({ ...p, precoMax: 300000 }))}><X className="w-3 h-3" /></button>
              </span>
            )}
            <button
              onClick={clearFilters}
              className="text-xs text-tchu-text-muted hover:text-tchu-red transition-colors"
            >
              Limpar todos
            </button>
          </div>
        )}

        {/* Content */}
        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-tchu-surface rounded-card p-6 shadow-card sticky top-28 border border-tchu-border-color">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-tchu-text-primary">Filtros</h3>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-tchu-red hover:underline"
                  >
                    Limpar
                  </button>
                )}
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* Vehicle Grid */}
          <div className="flex-1">
            {filteredVehicles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle, index) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Search className="w-16 h-16 text-tchu-text-muted mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-tchu-text-primary mb-2">
                  Nenhum veículo encontrado
                </h3>
                <p className="text-tchu-text-secondary mb-6">
                  Tente ajustar seus filtros
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-tchu-red text-tchu-navy px-6 py-2.5 rounded-button font-medium hover:bg-tchu-red-hover transition-colors"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <WhatsAppFloat message="Olá, vi o estoque no site e quero mais informações!" />
    </main>
  );
}
