'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, MessageCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Estoque', href: '/estoque' },
  { label: 'Financiamento', href: '/#financiamento' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Contato', href: '/#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-tchu-surface/95 backdrop-blur-md border-b border-tchu-border-color shadow-sm'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className={`text-xl lg:text-2xl font-bold tracking-tight transition-colors ${
              isTransparent ? 'text-white' : 'text-tchu-text-primary'
            }`}>
              Tchu Multimarcas
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[15px] font-medium transition-colors hover:opacity-80 ${
                  isTransparent ? 'text-white' : 'text-tchu-text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+5548991195070"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isTransparent ? 'text-white' : 'text-tchu-text-secondary'
              }`}
            >
              <Phone className="w-4 h-4" />
              (48) 99119-5070
            </a>
            <a
              href="https://wa.me/5548991195070?text=Olá!%20Gostaria%20de%20encontrar%20um%20carro."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tchu-red hover:bg-tchu-red-hover text-tchu-navy text-sm font-semibold px-4 py-2.5 rounded-button shadow-button transition-all hover:scale-[1.03] flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className={`p-2 rounded-lg transition-colors ${
                    isTransparent ? 'text-white' : 'text-tchu-text-primary'
                  }`}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-tchu-surface p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 border-b border-tchu-border-color">
                    <span className="text-xl font-bold text-tchu-text-primary">Menu</span>
                  </div>
                  <nav className="flex flex-col p-6 gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-lg font-medium text-tchu-text-primary py-3 px-4 rounded-lg hover:bg-tchu-surface-alt/50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto p-6 border-t border-tchu-border-color flex flex-col gap-3">
                    <a
                      href="tel:+5548991195070"
                      className="flex items-center justify-center gap-2 text-tchu-text-secondary py-3"
                    >
                      <Phone className="w-4 h-4" />
                      (48) 99119-5070
                    </a>
                    <a
                      href="https://wa.me/5548991195070?text=Olá!%20Gostaria%20de%20encontrar%20um%20carro."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-tchu-red hover:bg-tchu-red-hover text-tchu-navy font-semibold py-3 px-6 rounded-button flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Falar no WhatsApp
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
