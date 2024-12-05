import React from 'react';
import { Target, Users, Clock, Heart } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: "Treino Personalizado",
    description: "Programas adaptados às suas metas e necessidades específicas"
  },
  {
    icon: Users,
    title: "Treino em Grupo",
    description: "Sessões energéticas e motivadoras em pequenos grupos"
  },
  {
    icon: Clock,
    title: "Horários Flexíveis",
    description: "Disponibilidade adaptada à sua rotina"
  },
  {
    icon: Heart,
    title: "Avaliação Física",
    description: "Acompanhamento detalhado do seu progresso"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Nossos <span className="text-red-600">Serviços</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg text-white hover:transform hover:scale-105 transition-transform">
              <service.icon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}