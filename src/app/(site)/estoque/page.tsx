import { Suspense } from 'react';
import EstoqueContent from './EstoqueContent';

export const metadata = {
  title: 'Estoque',
  description:
    'Confira todos os seminovos disponíveis na Tchu Multimarcas. Filtre por marca, preço, combustível e câmbio.',
};

function EstoqueLoading() {
  return (
    <main className="min-h-screen pt-24 lg:pt-28 pb-16 bg-tchu-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-tchu-text-secondary">Carregando estoque…</div>
      </div>
    </main>
  );
}

export default function EstoquePage() {
  return (
    <Suspense fallback={<EstoqueLoading />}>
      <EstoqueContent />
    </Suspense>
  );
}
