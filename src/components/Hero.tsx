import React from 'react';
import { WhatsappButton } from './WhatsappButton';
import { Image } from './Image';

export function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-black to-gray-900 flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-20 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12">
        <div className="flex-1 text-white text-center md:text-left max-w-xl mx-auto md:mx-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            Transforme seu corpo,<br />
            <span className="text-red-600">transforme sua vida</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-lg mx-auto md:mx-0">
            Treinamento personalizado para alcançar seus objetivos fitness com métodos comprovados e acompanhamento exclusivo.
          </p>
          <div className="sticky bottom-4 md:relative md:bottom-0 z-10 bg-gradient-to-t from-black/80 to-transparent md:bg-none pt-4 -mx-4 px-4 md:mx-0 md:px-0 md:pt-0">
            <WhatsappButton />
          </div>
        </div>
        <div className="flex-1 w-full md:w-auto max-w-md mx-auto">
          <Image 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop"
            alt="Personal Trainer"
            className="rounded-lg shadow-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}