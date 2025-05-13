import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-[#2d0a12] to-[#1a0d0a] text-[#f5e9dc] px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-[#7b2230] drop-shadow-lg text-center">
        Découvrez le vin autrement grâce à l'IA
      </h1>
      <p className="text-lg md:text-2xl font-light mb-8 text-center max-w-2xl">
        Notre système recommande des bouteilles similaires à une bouteille donnée grâce à l'intelligence artificielle et au machine learning.
      </p>
      <button className="bg-[#7b2230] hover:bg-[#a03c50] text-[#f5e9dc] font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-200 text-lg">
        Essayez la démo
      </button>
    </section>
  );
};

export default LandingPage; 