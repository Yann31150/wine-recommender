import SearchSection from './components/SearchSection';
import WineResults from './components/WineResults';
import WineVisualizations from './components/WineVisualizations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1a0d0a]">
      {/* Header façon Wild Code School */}
      <header className="flex items-center justify-center py-8 bg-[#1a0d0a]">
        {/* Logo W Wild Code School exact */}
        <div className="mr-6">
          <svg width="120" height="48" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5 18.5C18.5 18.5 18.5 101.5 58.5 101.5C98.5 101.5 98.5 18.5 98.5 18.5C98.5 18.5 98.5 101.5 138.5 101.5C178.5 101.5 178.5 18.5 178.5 18.5C178.5 18.5 178.5 101.5 218.5 101.5C258.5 101.5 258.5 18.5 258.5 18.5" stroke="#ff4a7d" strokeWidth="16" strokeLinecap="round" fill="none"/>
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
