import React from 'react';
import { TEAM_MEMBERS, PROCESS_STEPS, HISTORY_MILESTONES } from '../types';

export const StaticSide: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-12 px-8 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 uppercase tracking-tight">ELEGANCIA</h1>
          <p className="text-lg text-gray-300 tracking-wide">CADA PASO CUENTA UNA HISTORIA</p>
        </div>
      </section>

      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 uppercase">NUESTRA FILOSOFÍA</h2>
          <p className="text-base text-gray-700 text-center max-w-2xl mx-auto">
            No fabricamos zapatos. Creamos obras de arte que desafían el tiempo. Cada par es testimonio de un siglo de dedicación artesanal.
          </p>
        </div>
      </section>

      <section className="py-12 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 uppercase">EL EQUIPO</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="bg-white border border-gray-200">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 uppercase">EL PROCESO</h2>
          <div className="space-y-8">
            {PROCESS_STEPS.map((step) => (
              <div key={step.id} className="flex flex-col md:flex-row gap-6 items-start border-b border-gray-200 pb-8">
                <div className="w-full md:w-1/3">
                  <img src={step.image} alt={step.title} className="w-full h-48 object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 uppercase">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 uppercase">NUESTRA HISTORIA</h2>
          <div className="space-y-6">
            {HISTORY_MILESTONES.map((milestone) => (
              <div key={milestone.year} className="border-l-4 border-black pl-6">
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">{milestone.year}</div>
                <h3 className="text-xl font-bold mb-1">{milestone.title}</h3>
                <p className="text-sm text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 uppercase">LA INFORMACIÓN AL INSTANTE</h2>
          <p className="text-base text-gray-300 mb-8">
            Sin animaciones ni distracciones. Toda la información disponible inmediatamente para tomar decisiones rápidas.
          </p>
          <button className="px-10 py-3 bg-white text-black font-bold uppercase text-sm hover:bg-gray-200 transition-colors">
            EXPLORAR COLECCIÓN
          </button>
        </div>
      </section>
    </div>
  );
};
