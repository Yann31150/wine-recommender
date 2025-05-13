import React from 'react';

const steps = [
  {
    title: 'Entrée',
    description: 'Une bouteille de référence',
    icon: '🍷',
  },
  {
    title: 'Traitement',
    description: 'Analyse via le modèle ML',
    icon: '🤖',
  },
  {
    title: 'Sortie',
    description: 'Suggestions de vins similaires',
    icon: '✨',
  },
];

const HowItWorksSection: React.FC = () => (
  <section className="bg-[#1a0d0a] text-[#f5e9dc] py-16 px-4 flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-10 text-[#7b2230]">Fonctionnement</h2>
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center">
      {steps.map((step, idx) => (
        <div key={step.title} className="flex flex-col items-center max-w-xs">
          <div className="text-6xl mb-4">{step.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-[#a03c50]">{step.title}</h3>
          <p className="text-md text-center font-light">{step.description}</p>
          {idx < steps.length - 1 && (
            <div className="hidden md:block h-0.5 w-16 bg-[#a03c50] my-6" />
          )}
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorksSection; 