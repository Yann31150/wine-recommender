import SearchSection from './components/SearchSection';
import WineResults from './components/WineResults';
import WineVisualizations from './components/WineVisualizations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1a0d0a]">
      {/* Hero Section centrée */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-[#1a0d0a]">
        <div className="flex items-center justify-center">
          {/* Logo WCS image */}
          <div className="mr-6 flex-shrink-0 flex items-center">
            <img src="wcs-logo.png" alt="Logo Wild Code School" className="w-20 h-20 object-contain" />
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
