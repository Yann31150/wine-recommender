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
  characteristics?: {
    body: number;
    tannins: number;
    acidity: number;
    sweetness: number;
  };
}

const WineResults: React.FC = () => {
  const [selectedWines] = useState<Wine[]>([]);
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null);
  
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
      description: "Grand cru classé de Margaux, ce vin rouge est réputé pour sa complexité et son élégance.",
      characteristics: {
        body: 4,
        tannins: 5,
        acidity: 3,
        sweetness: 2
      }
    },
    {
      id: 2,
      name: "Domaine de la Romanée-Conti 2018",
      type: "Rouge",
      region: "Bourgogne",
      price: 15000,
      rating: 4.9,
      image: "https://placehold.co/200x300/7b2230/f5e9dc?text=DRC",
      description: "Un des vins les plus prestigieux de Bourgogne, connu pour sa finesse et sa complexité.",
      characteristics: {
        body: 3,
        tannins: 4,
        acidity: 4,
        sweetness: 2
      }
    },
    {
      id: 3,
      name: "Château Lafite Rothschild 2016",
      type: "Rouge",
      region: "Bordeaux",
      price: 1200,
      rating: 4.7,
      image: "https://placehold.co/200x300/7b2230/f5e9dc?text=Lafite",
      description: "Premier grand cru classé de Pauillac, un vin d'une grande finesse et d'une longue garde.",
      characteristics: {
        body: 4,
        tannins: 5,
        acidity: 3,
        sweetness: 2
      }
    },
    {
      id: 4,
      name: "Château Haut-Brion 2017",
      type: "Rouge",
      region: "Bordeaux",
      price: 950,
      rating: 4.6,
      image: "https://placehold.co/200x300/7b2230/f5e9dc?text=Haut-Brion",
      description: "Premier grand cru classé de Pessac-Léognan, un vin puissant et complexe.",
      characteristics: {
        body: 5,
        tannins: 4,
        acidity: 3,
        sweetness: 2
      }
    },
    {
      id: 5,
      name: "Château Mouton Rothschild 2018",
      type: "Rouge",
      region: "Bordeaux",
      price: 1100,
      rating: 4.7,
      image: "https://placehold.co/200x300/7b2230/f5e9dc?text=Mouton",
      description: "Premier grand cru classé de Pauillac, un vin riche et opulent.",
      characteristics: {
        body: 4,
        tannins: 5,
        acidity: 3,
        sweetness: 2
      }
    },
    {
      id: 6,
      name: "Pierre Zéro Prestige",
      type: "Sans alcool",
      region: "Languedoc-Roussillon",
      price: 12,
      rating: 4.2,
      image: "https://placehold.co/200x300/7b2230/f5e9dc?text=Pierre+Zero",
      description: "Vin effervescent sans alcool, idéal pour profiter de l'expérience du vin sans modération.",
      characteristics: { body: 2, tannins: 1, acidity: 3, sweetness: 4 }
    }
  ];

  const handleWineClick = (wine: Wine) => {
    setSelectedWine(wine);
  };

  // Fonction pour trouver les vins similaires (à remplacer par l'algorithme de recommandation)
  const findSimilarWines = (wine: Wine): Wine[] => {
    const similar = demoWines
      .filter(w => w.id !== wine.id && w.type !== 'Sans alcool')
      .sort((a, b) => {
        // Calcul simple de similarité basé sur les caractéristiques
        const similarityA = Math.abs((a.characteristics?.body || 0) - (wine.characteristics?.body || 0)) +
                          Math.abs((a.characteristics?.tannins || 0) - (wine.characteristics?.tannins || 0)) +
                          Math.abs((a.characteristics?.acidity || 0) - (wine.characteristics?.acidity || 0)) +
                          Math.abs((a.characteristics?.sweetness || 0) - (wine.characteristics?.sweetness || 0));
        const similarityB = Math.abs((b.characteristics?.body || 0) - (wine.characteristics?.body || 0)) +
                          Math.abs((b.characteristics?.tannins || 0) - (wine.characteristics?.tannins || 0)) +
                          Math.abs((b.characteristics?.acidity || 0) - (wine.characteristics?.acidity || 0)) +
                          Math.abs((b.characteristics?.sweetness || 0) - (wine.characteristics?.sweetness || 0));
        return similarityA - similarityB;
      })
      .slice(0, 4);
    // Ajoute toujours un vin sans alcool en suggestion
    const nonAlcoholic = demoWines.find(w => w.type === 'Sans alcool');
    if (nonAlcoholic) similar.push(nonAlcoholic);
    return similar;
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
              onClick={() => handleWineClick(wine)}
            >
              <div className="flex flex-col items-center p-4">
                <img 
                  src={wine.image} 
                  alt={wine.name}
                  className="w-28 h-40 object-cover rounded shadow mb-4 border-2 border-[#7b2230] bg-white"
                  style={{ background: '#fff' }}
                />
                <h3 className="text-xl font-semibold mb-2 text-center">{wine.name}</h3>
                <div className="flex justify-between text-sm mb-2 w-full">
                  <span>{wine.type}</span>
                  <span>{wine.region}</span>
                </div>
                <div className="flex justify-between items-center w-full">
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
                <div key={wine.id} className="bg-[#1a0d0a] p-4 rounded-lg flex flex-col items-center">
                  <img 
                    src={wine.image} 
                    alt={wine.name}
                    className="w-20 h-32 object-cover rounded shadow mb-2 border border-[#7b2230] bg-white"
                  />
                  <h4 className="text-lg font-semibold mb-2 text-center">{wine.name}</h4>
                  <p className="text-sm mb-2 text-center">{wine.description}</p>
                  <div className="flex justify-between text-sm w-full">
                    <span>{wine.type} - {wine.region}</span>
                    <span>{wine.price}€</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section des vins similaires */}
        {selectedWine && (
          <div className="mt-12 bg-[#2d0a12] rounded-lg p-6">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-[#7b2230]">
              Vins similaires à {selectedWine.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {findSimilarWines(selectedWine).map(wine => (
                <div 
                  key={wine.id} 
                  className={`bg-[#1a0d0a] p-4 rounded-lg cursor-pointer hover:bg-[#3d1a22] transition-colors flex flex-col items-center ${wine.type === 'Sans alcool' ? 'ring-2 ring-[#ff4a7d] border-2 border-[#ff4a7d]' : ''}`}
                  onClick={() => handleWineClick(wine)}
                >
                  <img 
                    src={wine.image} 
                    alt={wine.name}
                    className="w-20 h-32 object-cover rounded shadow mb-2 border border-[#7b2230] bg-white"
                  />
                  <h4 className="text-lg font-semibold mb-2 text-center flex items-center gap-2">
                    {wine.name}
                    {wine.type === 'Sans alcool' && (
                      <span className="bg-[#ff4a7d] text-white text-xs px-2 py-1 rounded-full ml-2">Sans alcool</span>
                    )}
                  </h4>
                  <p className="text-sm mb-2 text-center">{wine.description}</p>
                  <div className="flex justify-between text-sm w-full">
                    <span>{wine.type} - {wine.region}</span>
                    <span>{wine.price}€</span>
                  </div>
                  {wine.characteristics && (
                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs w-full">
                      <div>Corps: {'★'.repeat(wine.characteristics.body)}</div>
                      <div>Tanins: {'★'.repeat(wine.characteristics.tannins)}</div>
                      <div>Acidité: {'★'.repeat(wine.characteristics.acidity)}</div>
                      <div>Sucre: {'★'.repeat(wine.characteristics.sweetness)}</div>
                    </div>
                  )}
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