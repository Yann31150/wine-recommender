import React from 'react';

const AboutSection: React.FC = () => (
  <section className="bg-[#2d0a12] text-[#f5e9dc] py-12 px-4 flex justify-center">
    <div className="max-w-3xl text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-[#7b2230]">À propos du projet</h2>
      <p className="text-lg md:text-xl font-light">
        Ce site s'appuie sur un dataset de vins (à intégrer prochainement) et un modèle de machine learning pour recommander des bouteilles similaires à partir d'une référence. L'objectif est d'offrir une expérience de découverte personnalisée et innovante du vin grâce à l'IA.
      </p>
    </div>
  </section>
);

export default AboutSection; 