import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatProps {
  message?: string;
}

export default function WhatsAppFloat({ 
  message = 'Olá, quero saber sobre os carros disponíveis!' 
}: WhatsAppFloatProps) {
  const whatsappUrl = `https://wa.me/5548991195070?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] bg-whatsapp text-white rounded-full shadow-floating flex items-center justify-center animate-pulse-whatsapp hover:scale-110 transition-transform"
      aria-label="Fale conosco pelo WhatsApp"
      title="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-white" />
    </a>
  );
}
