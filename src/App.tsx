import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AIDemo from './components/AIDemo';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import ChatInterface from './components/ChatInterface';
import FolkloreGuide from './components/FolkloreGuide';
import HistoryStories from './components/HistoryStories';
import CulturalKnowledge from './components/CulturalKnowledge';
import CulturalRoutes from './components/CulturalRoutes';
import DongpingRoutes from './components/DongpingRoutes';
import LocalChroniclesSearch from './components/LocalChroniclesSearch';

function App() {
  const [showChatInterface, setShowChatInterface] = useState(false);
  const [showFolkloreGuide, setShowFolkloreGuide] = useState(false);
  const [showHistoryStories, setShowHistoryStories] = useState(false);
  const [showCulturalKnowledge, setShowCulturalKnowledge] = useState(false);
  const [showCulturalRoutes, setShowCulturalRoutes] = useState(false);
  const [showDongpingRoutes, setShowDongpingRoutes] = useState(false);
  const [showLocalChroniclesSearch, setShowLocalChroniclesSearch] = useState(false);

  if (showChatInterface) {
    return <ChatInterface onBack={() => setShowChatInterface(false)} />;
  }

  if (showFolkloreGuide) {
    return <FolkloreGuide onBack={() => setShowFolkloreGuide(false)} />;
  }

  if (showHistoryStories) {
    return <HistoryStories onBack={() => setShowHistoryStories(false)} />;
  }

  if (showCulturalKnowledge) {
    return <CulturalKnowledge onBack={() => setShowCulturalKnowledge(false)} />;
  }

  if (showCulturalRoutes) {
    return <CulturalRoutes onBack={() => setShowCulturalRoutes(false)} />;
  }

  if (showDongpingRoutes) {
    return <DongpingRoutes onBack={() => setShowDongpingRoutes(false)} />;
  }

  if (showLocalChroniclesSearch) {
    return <LocalChroniclesSearch onBack={() => setShowLocalChroniclesSearch(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Header onChatClick={() => setShowChatInterface(true)} />
      <Hero />
      <Features
        onChatClick={() => setShowChatInterface(true)}
        onFolkloreClick={() => setShowFolkloreGuide(true)}
        onHistoryClick={() => setShowHistoryStories(true)}
        onCulturalKnowledgeClick={() => setShowCulturalKnowledge(true)}
        onRoutesClick={() => setShowCulturalRoutes(true)}
        onDongpingRoutesClick={() => setShowDongpingRoutes(true)}
        onLocalChroniclesSearchClick={() => setShowLocalChroniclesSearch(true)}
      />
      <AIDemo />
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;