import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsappButton() {
  const phoneNumber = "5185928931"; // Replace with actual phone number
  const message = "Olá! Gostaria de saber mais sobre os treinos personalizados.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
    >
      <MessageCircle className="w-5 h-5" />
      Entrar em Contato
    </a>
  );
}