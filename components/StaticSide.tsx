import React from 'react';
import { TEAM_MEMBERS, PROCESS_STEPS, HISTORY_MILESTONES } from '../types';

export const StaticSide: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700">
        <div className="text-center max-w-3xl">
          <h1 className="text-7xl md:text-8xl font-serif text-gold-200 mb-6">
            Elegancia
          </h1>
          <p className="text-2xl text-stone-300 font-light tracking-wide">
            Cada paso cuenta una historia
          </p>
        </div>
      </section>

      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-serif mb-6 text-stone-900">Nuestra Filosofía</h2>
          <p className="text-lg text-stone-600 leading-8">
            No fabricamos zapatos. Creamos obras de arte que desafían el tiempo. Cada par es testimonio de un siglo de dedicación artesanal.
          </p>
        </div>
      </section>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-serif text-center mb-16 text-stone-900">
            El Equipo
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id}>
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
          <h2 className="text-5xl font-serif text-center mb-16 text-gold-200">
            El Proceso
          </h2>
          <div className="space-y-20">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.id}
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
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
          <h2 className="text-5xl font-serif text-center mb-16 text-stone-900">
            Nuestra Historia
          </h2>
          <div className="relative pl-8 border-l-2 border-gold-400">
            {HISTORY_MILESTONES.map((milestone) => (
              <div key={milestone.year} className="mb-12">
                <div className="absolute -left-4 w-6 h-6 bg-gold-600 rounded-full border-4 border-white"></div>
                <div className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-2">{milestone.year}</div>
                <h3 className="text-2xl font-serif text-stone-900 mb-3">{milestone.title}</h3>
                <p className="text-stone-600 leading-7">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-serif text-stone-900 mb-6">Elegancia en Cada Detalle</h2>
              <p className="text-lg text-stone-600 leading-8 mb-8">
                Cada puntada, cada curva, cada matiz del cuero cuenta una historia de perfección artesanal. Nuestros zapatos no son simplemente accesorios, son declaraciones de carácter y refinamiento.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 text-2xl mt-1">•</span>
                  <span className="text-stone-600">Cuero premium seleccionado manualmente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 text-2xl mt-1">•</span>
                  <span className="text-stone-600">Construcción Goodyear Welt artesanal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 text-2xl mt-1">•</span>
                  <span className="text-stone-600">Hormas diseñadas para máxima comodidad</span>
                </li>
              </ul>
            </div>
            <div>
              <img src="/2020-08-07-12-14-05.jpg" alt="Elegancia en cada detalle" className="w-full rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-stone-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-gold-200 mb-6">Información Directa</h2>
          <p className="text-lg text-stone-300 mb-12 leading-8">
            Sin animaciones. Toda la información disponible al instante para explorar a tu propio ritmo.
          </p>
          <button className="px-12 py-4 bg-gold-600 hover:bg-gold-500 text-white font-serif tracking-widest text-sm uppercase rounded-sm transition-all duration-300 shadow-lg shadow-gold-900/50 hover:shadow-2xl hover:scale-105">
            Explorar Colección
          </button>
        </div>
      </section>
    </div>
  );
};
