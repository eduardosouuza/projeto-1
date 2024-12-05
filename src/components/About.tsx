import React from 'react';
import { Target, Award, Users } from 'lucide-react';
import { Image } from './Image';

export function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 w-full md:w-auto">
            <Image
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop"
              alt="Personal Trainer em ação"
              className="rounded-lg shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center md:text-left">
              Sobre a <span className="text-red-600">Elite Fitness</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-4">
              Com mais de uma década de experiência, a Elite Fitness se destaca por oferecer um serviço de personal trainer verdadeiramente personalizado. Nossa missão é transformar vidas através do exercício físico, combinando ciência e dedicação para alcançar resultados extraordinários.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-6">
              Nosso método único integra avaliação física detalhada, planejamento nutricional e treinos adaptados às necessidades individuais de cada aluno. Atendemos desde atletas em busca de alta performance até pessoas iniciando sua jornada fitness.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <Target className="w-8 md:w-10 h-8 md:h-10 text-red-600 mb-2" />
                <h3 className="font-semibold">Foco em Resultados</h3>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <Award className="w-8 md:w-10 h-8 md:h-10 text-red-600 mb-2" />
                <h3 className="font-semibold">Profissionais Certificados</h3>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <Users className="w-8 md:w-10 h-8 md:h-10 text-red-600 mb-2" />
                <h3 className="font-semibold">Atendimento Exclusivo</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}