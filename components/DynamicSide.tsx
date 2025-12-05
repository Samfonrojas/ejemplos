import React, { useEffect, useState } from 'react';
import { TEAM_MEMBERS, PROCESS_STEPS, HISTORY_MILESTONES } from '../types';

interface DynamicSideProps {
  startAnimations: boolean;
}

export const DynamicSide: React.FC<DynamicSideProps> = ({ startAnimations }) => {
  const [visible, setVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (!startAnimations) return;

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = (entry.target as HTMLElement).dataset.id;
          if (id) {
            setVisible((prev) => ({ ...prev, [id]: true }));
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [startAnimations]);

  return (
    <div className="bg-white">
      <section className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700">
        <div className="text-center max-w-3xl" data-id="hero">
          <h1 className={`text-7xl md:text-8xl font-serif text-gold-200 mb-6 transition-all duration-1000 ${startAnimations && visible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Elegancia
          </h1>
          <p className={`text-2xl text-stone-300 font-light tracking-wide transition-all duration-1000 delay-300 ${startAnimations && visible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Cada paso cuenta una historia
          </p>
        </div>
      </section>

      <section className="py-24 px-8 bg-stone-50" data-id="philosophy">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${startAnimations && visible['philosophy'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-serif mb-6 text-stone-900">Nuestra Filosofía</h2>
          <p className="text-lg text-stone-600 leading-8">
            No fabricamos zapatos. Creamos obras de arte que desafían el tiempo. Cada par es testimonio de un siglo de dedicación artesanal.
          </p>
        </div>
      </section>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-5xl font-serif text-center mb-16 text-stone-900 transition-all duration-700 ${startAnimations && visible['team'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-id="team">
            El Equipo
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={member.id}
                data-id={`team-${member.id}`}
                className={`transition-all duration-700 ${startAnimations && visible[`team-${member.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="bg-stone-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group">
                  <div className="relative overflow-hidden h-80">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif text-stone-900 mb-1">{member.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-gold-600 mb-4">{member.role}</p>
                    <p className="text-stone-600 leading-7">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-5xl font-serif text-center mb-16 text-gold-200 transition-all duration-700 ${startAnimations && visible['process'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-id="process">
            El Proceso
          </h2>
          <div className="space-y-20">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.id}
                data-id={`process-${step.id}`}
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center transition-all duration-700 ${startAnimations && visible[`process-${step.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="flex-1">
                  <img src={step.image} alt={step.title} className="w-full h-80 object-cover rounded-lg shadow-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-serif text-gold-200 mb-4">{step.title}</h3>
                  <p className="text-stone-300 leading-8 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-5xl font-serif text-center mb-16 text-stone-900 transition-all duration-700 ${startAnimations && visible['history'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-id="history">
            Nuestra Historia
          </h2>
          <div className="relative pl-8 border-l-2 border-gold-400">
            {HISTORY_MILESTONES.map((milestone, idx) => (
              <div
                key={milestone.year}
                data-id={`milestone-${milestone.year}`}
                className={`mb-12 transition-all duration-700 ${startAnimations && visible[`milestone-${milestone.year}`] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              >
                <div className="absolute -left-4 w-6 h-6 bg-gold-600 rounded-full border-4 border-white"></div>
                <div className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-2">{milestone.year}</div>
                <h3 className="text-2xl font-serif text-stone-900 mb-3">{milestone.title}</h3>
                <p className="text-stone-600 leading-7">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-stone-900">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${startAnimations && visible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-id="cta">
          <h2 className="text-4xl font-serif text-gold-200 mb-6">Narrativa Visual Elegante</h2>
          <p className="text-lg text-stone-300 mb-12 leading-8">
            Las animaciones fluidas revelan el contenido progresivamente, guiando tu mirada a través de una experiencia memorable.
          </p>
          <button className="px-12 py-4 bg-gold-600 hover:bg-gold-500 text-white font-serif tracking-widest text-sm uppercase rounded-sm transition-all duration-300 shadow-lg shadow-gold-900/50 hover:shadow-2xl hover:scale-105">
            Explorar Colección
          </button>
        </div>
      </section>
    </div>
  );
};
