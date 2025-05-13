import React, { useState } from 'react';

const SearchSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    region: '',
    type: '',
    rating: 0
  });

  const wineTypes = ['Rouge', 'Blanc', 'Rosé', 'Champagne', 'Mousseux'];
  const regions = ['Bordeaux', 'Bourgogne', 'Champagne', 'Vallée du Rhône', 'Languedoc-Roussillon', 'Provence'];

  return (
    <section className="bg-[#2d0a12] text-[#f5e9dc] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold mb-8 text-[#7b2230] text-center">
          Recherchez votre vin
        </h2>
        
        {/* Barre de recherche */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Rechercher un vin..."
            className="w-full p-4 rounded-lg bg-[#1a0d0a] border-2 border-[#7b2230] text-[#f5e9dc] focus:outline-none focus:border-[#a03c50]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filtres */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Prix */}
          <div className="bg-[#1a0d0a] p-4 rounded-lg">
            <label className="block text-sm font-medium mb-2">Prix (€)</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                max="1000"
                className="w-24 p-2 rounded bg-[#2d0a12] border border-[#7b2230]"
                value={filters.priceRange[0]}
                onChange={(e) => setFilters({...filters, priceRange: [Number(e.target.value), filters.priceRange[1]]})}
              />
              <span>-</span>
              <input
                type="number"
                min="0"
                max="1000"
                className="w-24 p-2 rounded bg-[#2d0a12] border border-[#7b2230]"
                value={filters.priceRange[1]}
                onChange={(e) => setFilters({...filters, priceRange: [filters.priceRange[0], Number(e.target.value)]})}
              />
            </div>
          </div>

          {/* Type de vin */}
          <div className="bg-[#1a0d0a] p-4 rounded-lg">
            <label className="block text-sm font-medium mb-2">Type de vin</label>
            <select
              className="w-full p-2 rounded bg-[#2d0a12] border border-[#7b2230]"
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
            >
              <option value="">Tous</option>
              {wineTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Région */}
          <div className="bg-[#1a0d0a] p-4 rounded-lg">
            <label className="block text-sm font-medium mb-2">Région</label>
            <select
              className="w-full p-2 rounded bg-[#2d0a12] border border-[#7b2230]"
              value={filters.region}
              onChange={(e) => setFilters({...filters, region: e.target.value})}
            >
              <option value="">Toutes</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>

          {/* Note */}
          <div className="bg-[#1a0d0a] p-4 rounded-lg">
            <label className="block text-sm font-medium mb-2">Note minimum</label>
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              className="w-full"
              value={filters.rating}
              onChange={(e) => setFilters({...filters, rating: Number(e.target.value)})}
            />
            <div className="text-center mt-2">{filters.rating}/5</div>
          </div>
        </div>

        {/* Bouton de recherche */}
        <div className="mt-8 text-center">
          <button className="bg-[#7b2230] hover:bg-[#a03c50] text-[#f5e9dc] font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-200">
            Rechercher
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchSection; 