import React from 'react';

const DataPresentationSection: React.FC = () => (
  <section className="bg-[#2d0a12] text-[#f5e9dc] py-16 px-4 flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8 text-[#7b2230]">Présentation des données</h2>
    <p className="text-lg font-light mb-8 text-center max-w-2xl">
      Cette section accueillera prochainement des visualisations interactives pour explorer le dataset de vins et les recommandations générées par l'IA.
    </p>
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center items-center">
      <div className="bg-[#1a0d0a] border-2 border-[#a03c50] rounded-xl w-72 h-56 flex flex-col items-center justify-center opacity-70">
        <span className="text-2xl mb-2">📊</span>
        <span className="text-md">Bar chart<br/>(à venir)</span>
      </div>
      <div className="bg-[#1a0d0a] border-2 border-[#a03c50] rounded-xl w-72 h-56 flex flex-col items-center justify-center opacity-70">
        <span className="text-2xl mb-2">🕸️</span>
        <span className="text-md">Radar chart<br/>(à venir)</span>
      </div>
    </div>
  </section>
);

export default DataPresentationSection; 