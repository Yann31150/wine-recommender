import React from 'react';
import SearchSection from './components/SearchSection';
import WineResults from './components/WineResults';
import WineVisualizations from './components/WineVisualizations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1a0d0a]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/wine-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#f5e9dc] mb-4">
            Wine Recommender
          </h1>
          <p className="text-xl text-[#a03c50] max-w-2xl mx-auto">
            Découvrez des vins exceptionnels adaptés à vos goûts grâce à notre système de recommandation intelligent
          </p>
        </div>
      </section>

      {/* Search Section */}
      <SearchSection />

      {/* Results Section */}
      <WineResults />

      {/* Visualizations Section */}
      <WineVisualizations />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
