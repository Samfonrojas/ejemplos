import React, { useEffect, useRef, useState } from 'react';
import { TEAM_MEMBERS, PROCESS_STEPS, HISTORY_MILESTONES } from '../types';

interface DynamicSideProps {
  startAnimations: boolean;
}

export const DynamicSide: React.FC<DynamicSideProps> = ({ startAnimations }) => {
  const [titleVisible, setTitleVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (startAnimations) {
      setTimeout(() => setTitleVisible(true), 300);
    }
  }, [startAnimations]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        if (inView) {
          el.classList.add('animate-in');
        }
      });
    };

    const container = document.querySelector('.w-1\\/2.h-full.overflow-y-auto');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [startAnimations]);

  return (
    <div className="bg-stone-50">
      <section ref={heroRef} className="min-h-screen relative flex items-center justify-center px-8 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative z-10 text-center max-w-3xl">
          <h1 className={`text-6xl md:text-8xl font-serif text-gold-200 mb-6 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Elegancia
          </h1>
          <p className={`text-xl text-stone-300 font-light tracking-wider transition-all duration-1000 delay-300 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Cada paso cuenta una historia
          </p>
        </div>
      </section>

      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto scroll-reveal opacity-0 translate-y-20 transition-all duration-700">
          <h2 className="text-5xl font-serif text-center mb-6 text-stone-900">Nuestra Filosofía</h2>
          <p className="text-lg text-stone-600 leading-relaxed text-center max-w-2xl mx-auto">
            No fabricamos zapatos. Creamos obras de arte que desafían el tiempo. Cada par es testimonio de un siglo de dedicación artesanal.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16 text-stone-900 scroll-reveal opacity-0 translate-y-20 transition-all duration-700">El Equipo</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={member.id} className="scroll-reveal opacity-0 translate-y-20 transition-all duration-700" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <img src={member.image} alt={member.name} className="w-full h-80 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-serif text-stone-900 mb-2">{member.name}</h3>
                    <p className="text-sm uppercase tracking-wider text-gold-600 mb-4">{member.role}</p>
                    <p className="text-stone-600 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16 text-gold-200 scroll-reveal opacity-0 translate-y-20 transition-all duration-700">El Proceso</h2>
          <div className="space-y-16">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.id} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center scroll-reveal opacity-0 translate-y-20 transition-all duration-700`} style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="flex-1">
                  <img src={step.image} alt={step.title} className="w-full h-64 object-cover rounded-sm shadow-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-serif text-gold-200 mb-4">{step.title}</h3>
                  <p className="text-stone-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16 text-stone-900 scroll-reveal opacity-0 translate-y-20 transition-all duration-700">Nuestra Historia</h2>
          <div className="relative border-l-2 border-gold-500 ml-8">
            {HISTORY_MILESTONES.map((milestone, idx) => (
              <div key={milestone.year} className="mb-12 ml-8 scroll-reveal opacity-0 translate-x-20 transition-all duration-700" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="absolute -left-4 w-8 h-8 bg-gold-600 rounded-full border-4 border-white"></div>
                <div className="text-sm uppercase tracking-wider text-gold-600 mb-2">{milestone.year}</div>
                <h3 className="text-2xl font-serif text-stone-900 mb-2">{milestone.title}</h3>
                <p className="text-stone-600 leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-stone-900">
        <div className="max-w-4xl mx-auto text-center scroll-reveal opacity-0 translate-y-20 transition-all duration-700">
          <h2 className="text-4xl font-serif text-gold-200 mb-6">La Diferencia Está en los Detalles</h2>
          <p className="text-xl text-stone-300 mb-10 leading-relaxed">
            Las animaciones guían tu mirada, revelan la información progresivamente, y crean una narrativa visual que conecta emocionalmente.
          </p>
          <button className="px-12 py-4 bg-gold-600 hover:bg-gold-500 text-white font-serif tracking-widest text-sm uppercase rounded-sm transition-all duration-300 shadow-lg shadow-gold-900/50 hover:shadow-xl hover:scale-105">
            Explorar Colección
          </button>
        </div>
      </section>
    </div>
  );
};
