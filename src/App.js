import { useState } from 'react';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import GamesDashboard from './components/games/GamesDashboard';
import StartModal from './components/StartModal';
import ChatBot from './components/ChatBot';
import RightsIdentifierModal from './components/RightsIdentifierModal';
import './index.css';

function App() {
  const [openModal, setOpenModal] = useState(false);   // نافذة الخيارات
  const [openChat, setOpenChat] = useState(false);      // الدردشة
  const [openRights, setOpenRights] = useState(false);  // معرفة الحقوق

  // دالة موحّدة لفتح أي خدمة
  const openService = (service) => {
    setOpenModal(false);
    if (service === 'chat') {
      setOpenChat(true);
    } else if (service === 'rights') {
      setOpenRights(true);
    } else if (service === 'quiz') {
      document
        .getElementById('game-section')
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HeroSection onStart={() => setOpenModal(true)} />
      <FeatureSection onStart={openService} />
      <GamesDashboard />
      <Footer />

      {/* نافذة اختيار الخدمة */}
      <StartModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        onServiceSelect={openService}
      />

      {/* الخدمات تُفتح الآن من App مباشرة */}
      {openChat && <ChatBot onClose={() => setOpenChat(false)} />}
      {openRights && (
        <RightsIdentifierModal onClose={() => setOpenRights(false)} />
      )}
    </>
  );
}

export default App;