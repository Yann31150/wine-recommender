import SearchSection from './components/SearchSection';
import WineResults from './components/WineResults';
import WineVisualizations from './components/WineVisualizations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1a0d0a]">
      {/* Header façon Wild Code School */}
      <header className="flex items-center justify-center py-8 bg-[#1a0d0a]">
        {/* Logo stylisé */}
        <div className="mr-6">
          {/* Logo Wild façon WCS */}
          <svg width="70" height="40" viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 40 Q10 10 40 40 T70 40 Q70 10 100 40 T130 40" stroke="#ff4a7d" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <path d="M40 40 Q40 70 70 40 Q70 70 100 40" stroke="#ff4a7d" strokeWidth="8" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        {/* Texte titre */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold font-sans tracking-tight flex items-center">
            <span className="text-[#ff4a7d] mr-2 drop-shadow-lg">W</span>
            <span className="text-[#fff] mr-2">INE</span>
            <span className="text-[#ff4a7d] mr-2 drop-shadow-lg">C</span>
            <span className="text-[#fff] mr-2">ELLAR</span>
            <span className="text-[#ff4a7d] mr-2 drop-shadow-lg">S</span>
            <span className="text-[#fff]">ELECTION</span>
          </h1>
          <p className="text-[#a03c50] text-lg mt-2 font-light">Découvrez des vins exceptionnels adaptés à vos goûts grâce à notre sélection intelligente</p>
        </div>
      </header>

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
