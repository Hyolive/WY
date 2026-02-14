
import React, { useState } from 'react';
import Home from './components/Home';
import Story from './components/Story';
import HeartBackground from './components/HeartBackground';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateToStory = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage('story');
  };

  const navigateToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'home' && (
        <>
          <HeartBackground />
          <Home onStartStory={navigateToStory} />
        </>
      )}
      
      {currentPage === 'story' && (
        <Story onBack={navigateToHome} />
      )}
    </div>
  );
};

export default App;
