import React, { useState } from 'react';

interface Wine {
  id: number;
  name: string;
  type: string;
  region: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

const WineResults: React.FC = () => {
  // État pour les vins sélectionnés pour comparaison
  const [selectedWines, setSelectedWines] = useState<Wine[]>([]);
  
  // Données de démonstration (à remplacer par les vraies données plus tard)
  const demoWines: Wine[] = [
    {
      id: 1,
      name: "Château Margaux 2015",
      type: "Rouge",
      region: "Bordeaux",
      price: 850,
      rating: 4.8,
      image: "https://placehold.co/200x300/7b2230/f5e9dc?text=Château+Margaux",
      description: "Grand cru classé de Margaux, ce vin rouge est réputé pour sa complexité et son élégance."
    },
    {
      id: 2,
      name: "Domaine de la Romanée-Conti 2018",
      type: "Rouge",
      region: "Bourgogne",
      price: 15000,
      rating: 4.9,
      image: "https://placehold.co/200x300/7b2230/f5e9dc?text=DRC",
      description: "Un des vins les plus prestigieux de Bourgogne, connu pour sa finesse et sa complexité."
    }
  ];

  const toggleWineSelection = (wine: Wine) => {
    if (selectedWines.find(w => w.id === wine.id)) {
      setSelectedWines(selectedWines.filter(w => w.id !== wine.id));
    } else if (selectedWines.length < 3) {
      setSelectedWines([...selectedWines, wine]);
    }
  };

  return (
    <section className="bg-[#1a0d0a] text-[#f5e9dc] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold mb-8 text-[#7b2230] text-center">
          Résultats de recherche
        </h2>

        {/* Grille de résultats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoWines.map(wine => (
            <div 
              key={wine.id}
              className={`bg-[#2d0a12] rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105 cursor-pointer
                ${selectedWines.find(w => w.id === wine.id) ? 'ring-2 ring-[#a03c50]' : ''}`}
              onClick={() => toggleWineSelection(wine)}
            >
              <img 
                src={wine.image} 
                alt={wine.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{wine.name}</h3>
                <div className="flex justify-between text-sm mb-2">
                  <span>{wine.type}</span>
                  <span>{wine.region}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{wine.price}€</span>
                  <div className="flex items-center">
                    <span className="mr-2">{wine.rating}/5</span>
                    <span>⭐</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section de comparaison */}
        {selectedWines.length > 0 && (
          <div className="mt-12 bg-[#2d0a12] rounded-lg p-6">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-[#7b2230]">
              Comparaison ({selectedWines.length}/3 vins sélectionnés)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedWines.map(wine => (
                <div key={wine.id} className="bg-[#1a0d0a] p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">{wine.name}</h4>
                  <p className="text-sm mb-2">{wine.description}</p>
                  <div className="flex justify-between text-sm">
                    <span>{wine.type} - {wine.region}</span>
                    <span>{wine.price}€</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WineResults; 