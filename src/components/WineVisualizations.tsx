import React from 'react';

const WineVisualizations: React.FC = () => {
  return (
    <section className="bg-[#2d0a12] text-[#f5e9dc] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold mb-8 text-[#7b2230] text-center">
          Visualisations des données
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Distribution des prix */}
          <div className="bg-[#1a0d0a] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Distribution des prix</h3>
            <div className="h-64 bg-[#2d0a12] rounded-lg flex items-center justify-center">
              <p className="text-[#a03c50]">Graphique en barres à venir</p>
            </div>
          </div>

          {/* Répartition par région */}
          <div className="bg-[#1a0d0a] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Répartition par région</h3>
            <div className="h-64 bg-[#2d0a12] rounded-lg flex items-center justify-center">
              <p className="text-[#a03c50]">Carte de France à venir</p>
            </div>
          </div>

          {/* Notes moyennes par type */}
          <div className="bg-[#1a0d0a] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Notes moyennes par type</h3>
            <div className="h-64 bg-[#2d0a12] rounded-lg flex items-center justify-center">
              <p className="text-[#a03c50]">Graphique radar à venir</p>
            </div>
          </div>

          {/* Tendance des prix */}
          <div className="bg-[#1a0d0a] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Tendance des prix</h3>
            <div className="h-64 bg-[#2d0a12] rounded-lg flex items-center justify-center">
              <p className="text-[#a03c50]">Graphique linéaire à venir</p>
            </div>
          </div>
        </div>

        {/* Légende */}
        <div className="mt-8 text-center text-sm text-[#a03c50]">
          Les visualisations seront mises à jour en temps réel avec les données du dataset
        </div>
      </div>
    </section>
  );
};

export default WineVisualizations; 