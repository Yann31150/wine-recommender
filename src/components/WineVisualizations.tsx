import React from 'react';
import { Bar, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement
);

// Données de démonstration (doivent correspondre à celles de WineResults)
const demoWines = [
  {
    id: 1,
    name: "Château Margaux 2015",
    type: "Rouge",
    region: "Bordeaux",
    price: 850,
    rating: 4.8,
    image: "https://placehold.co/200x300/7b2230/f5e9dc?text=Château+Margaux",
    description: "Grand cru classé de Margaux, ce vin rouge est réputé pour sa complexité et son élégance.",
    characteristics: { body: 4, tannins: 5, acidity: 3, sweetness: 2 }
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
    characteristics: { body: 3, tannins: 4, acidity: 4, sweetness: 2 }
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
    characteristics: { body: 4, tannins: 5, acidity: 3, sweetness: 2 }
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
    characteristics: { body: 5, tannins: 4, acidity: 3, sweetness: 2 }
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
    characteristics: { body: 4, tannins: 5, acidity: 3, sweetness: 2 }
  }
];

// Bar Chart : Distribution des prix
const priceRanges = ['<1000€', '1000-5000€', '5000-10000€', '>10000€'];
const priceCounts = [
  demoWines.filter(w => w.price < 1000).length,
  demoWines.filter(w => w.price >= 1000 && w.price < 5000).length,
  demoWines.filter(w => w.price >= 5000 && w.price < 10000).length,
  demoWines.filter(w => w.price >= 10000).length
];
const barData = {
  labels: priceRanges,
  datasets: [
    {
      label: 'Nombre de vins',
      data: priceCounts,
      backgroundColor: '#a03c50',
      borderRadius: 8
    }
  ]
};
const barOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false }
  },
  scales: {
    x: { grid: { color: '#7b2230' }, ticks: { color: '#f5e9dc' } },
    y: { grid: { color: '#7b2230' }, ticks: { color: '#f5e9dc' }, beginAtZero: true }
  }
};

// Radar Chart : Caractéristiques moyennes par type
const types = Array.from(new Set(demoWines.map(w => w.type)));
const characteristics = ['Corps', 'Tanins', 'Acidité', 'Sucre'];
const radarData = {
  labels: characteristics,
  datasets: types.map((type, idx) => {
    const winesOfType = demoWines.filter(w => w.type === type);
    const avg = (key: keyof typeof demoWines[0]['characteristics']) =>
      winesOfType.reduce((sum, w) => sum + (w.characteristics?.[key] || 0), 0) / winesOfType.length;
    return {
      label: type,
      data: [avg('body'), avg('tannins'), avg('acidity'), avg('sweetness')],
      backgroundColor: `rgba(160,60,80,${0.2 + idx * 0.2})`,
      borderColor: '#a03c50',
      pointBackgroundColor: '#a03c50',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#a03c50'
    };
  })
};
const radarOptions = {
  responsive: true,
  plugins: {
    legend: { labels: { color: '#f5e9dc' } },
    title: { display: false }
  },
  scales: {
    r: {
      angleLines: { color: '#7b2230' },
      grid: { color: '#7b2230' },
      pointLabels: { color: '#f5e9dc' },
      ticks: { color: '#f5e9dc', stepSize: 1, min: 0, max: 5 }
    }
  }
};

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
              <Bar data={barData} options={barOptions} />
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
              <Radar data={radarData} options={radarOptions} />
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
          Les visualisations sont générées à partir des données de démonstration
        </div>
      </div>
    </section>
  );
};

export default WineVisualizations; 