import { useState } from 'react';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer'; 
import GamesDashboard from './components/games/GamesDashboard';
import StartModal from './components/StartModal';
import './index.css';

function App() {

    const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <HeroSection onStart={() => setOpenModal(true)} />
      <FeatureSection onStart={() => setOpenModal(true)}/>
      <GamesDashboard />
      <Footer />
      <StartModal
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
  
</>
  );
}

export default App;
 