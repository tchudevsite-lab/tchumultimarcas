import Link from 'next/link';
import { MapPin, Phone, MessageCircle, Clock, Instagram, Facebook } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Estoque', href: '/estoque' },
  { label: 'Financiamento', href: '/#financiamento' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Contato', href: '/#contato' },
];

const serviceLinks = [
  { label: 'Seminovos', href: '/estoque' },
  { label: 'Financiamento', href: '/#financiamento' },
  { label: 'Consórcio', href: '/#contato' },
  { label: 'Venda seu carro', href: '/#contato' },
];

export default function Footer() {
  return (
    <footer className="bg-tchu-navy text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Tchu Multimarcas</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Seminovos de qualidade em Biguaçu e toda a Grande Florianópolis. 
              Confiança e segurança na sua compra.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/tchumultimarcas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/tchumultimarcas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5548991195070"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-5">
              Serviços
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-5">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/60">
                  Av. Santa Catarina, 1234 — Centro, Biguaçu/SC
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white/60 flex-shrink-0" />
                <a href="tel:+5548991195070" className="text-sm text-white/60 hover:text-white transition-colors">
                  (48) 99119-5070
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-white/60 flex-shrink-0" />
                <a href="https://wa.me/5548991195070" className="text-sm text-white/60 hover:text-white transition-colors">
                  (48) 98888-8888
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-white/60 flex-shrink-0" />
                <span className="text-sm text-white/60">
                  Seg–Sex: 8h–18h / Sáb: 9h–14h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © 2025 Tchu Multimarcas. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-xs text-white/40 hover:text-white/60 transition-colors">
                Política de Privacidade
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/" className="text-xs text-white/40 hover:text-white/60 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
