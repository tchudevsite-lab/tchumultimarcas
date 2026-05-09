'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function LocationContact() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    mensagem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Mensagem enviada! Entraremos em contato em até 24h.');
    setFormData({ nome: '', telefone: '', mensagem: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="bg-tchu-surface-alt py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-card overflow-hidden shadow-card h-[300px] lg:h-[450px] bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.8!2d-48.61!3d-27.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM2JzM2LjAiUyA0OMKwMzYnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.2)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Tchu Multimarcas"
              />
            </div>
          </motion.div>

          {/* Contact Info + Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-tchu-text-primary mb-2">
              Venha nos visitar
            </h2>
            <p className="text-tchu-text-secondary mb-8">
              Estamos prontos para te ajudar a sair de carro novo
            </p>

            {/* Info Blocks */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-tchu-text-muted mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-tchu-text-primary">Endereço</p>
                  <p className="text-sm text-tchu-text-secondary">Av. Santa Catarina, 1234 — Centro, Biguaçu/SC</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-tchu-text-muted mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-tchu-text-primary">Telefone</p>
                  <a href="tel:+5548991195070" className="text-sm text-tchu-text-secondary hover:text-tchu-red transition-colors">
                    (48) 99119-5070
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-tchu-success mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-tchu-text-primary">WhatsApp</p>
                  <a 
                    href="https://wa.me/5548991195070" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-tchu-success hover:underline"
                  >
                    (48) 98888-8888
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-tchu-text-muted mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-tchu-text-primary">Horário</p>
                  <p className="text-sm text-tchu-text-secondary">Seg–Sex: 8h–18h / Sáb: 9h–14h</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Seu nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                required
                className="h-12 bg-tchu-surface border-tchu-border-color rounded-input text-tchu-text-primary"
              />
              <Input
                placeholder="Seu telefone"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                required
                className="h-12 bg-tchu-surface border-tchu-border-color rounded-input text-tchu-text-primary"
              />
              <Textarea
                placeholder="Como podemos ajudar?"
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                rows={3}
                className="bg-tchu-surface border-tchu-border-color rounded-input resize-none text-tchu-text-primary"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-tchu-red hover:bg-tchu-red-hover disabled:opacity-60 text-tchu-navy font-semibold py-3.5 rounded-button shadow-button transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              </button>
              <p className="text-xs text-tchu-text-muted text-center">
                Seus dados estão seguros. Respondemos em até 24h.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
