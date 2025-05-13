import LandingPage from './components/LandingPage';
import AboutSection from './components/AboutSection';
import HowItWorksSection from './components/HowItWorksSection';
import DataPresentationSection from './components/DataPresentationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#1a0d0a] min-h-screen flex flex-col font-sans">
      <LandingPage />
      <AboutSection />
      <HowItWorksSection />
      <DataPresentationSection />
      <Footer />
    </div>
  );
}

export default App;
