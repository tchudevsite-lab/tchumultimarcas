import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Tchu Multimarcas — Seminovos em Biguaçu/SC',
    template: '%s | Tchu Multimarcas',
  },
  description:
    'Seminovos com 1 ano de garantia, FGTS aceito e financiamento aprovado em 10 minutos. Atendemos toda a Grande Florianópolis.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#1A1A1A',
              color: '#EBEBEB',
              border: '1px solid #2E2E2E',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.40)',
            },
          }}
        />
      </body>
    </html>
  );
}
