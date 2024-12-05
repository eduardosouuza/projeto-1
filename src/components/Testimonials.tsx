import React from 'react';
import { Image } from './Image';

const testimonials = [
  {
    name: "Carlos Silva",
    text: "Em apenas 3 meses, consegui resultados que nunca imaginei serem possíveis. Profissionalismo e dedicação incomparáveis!",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&auto=format&fit=crop"
  },
  {
    name: "Ana Paula",
    text: "O melhor investimento que já fiz em minha saúde. O acompanhamento personalizado fez toda diferença.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop"
  },
  {
    name: "Roberto Martins",
    text: "Metodologia eficiente e resultados reais. Recomendo para todos que buscam uma mudança verdadeira.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 md:mb-12">
          O que dizem nossos <span className="text-red-600">alunos</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-4 md:p-6 rounded-lg text-white">
              <div className="w-20 h-20 mx-auto mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full object-cover w-full h-full"
                  sizes="80px"
                />
              </div>
              <p className="text-base md:text-lg text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-red-500">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}