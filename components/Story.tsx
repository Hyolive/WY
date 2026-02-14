
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home as HomeIcon, Ghost, Zap, Heart, Star } from 'lucide-react';
import { STORY_DATA } from '../constants';

interface StoryProps {
  onBack: () => void;
}

const Story: React.FC<StoryProps> = ({ onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentSlide = STORY_DATA[currentIndex];

  const handleNext = () => {
    if (currentIndex < STORY_DATA.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setIsAnimating(false);
      }, 400);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev - 1);
        setIsAnimating(false);
      }, 400);
    }
  };

  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case 'funny': return <Ghost className="text-yellow-400" size={24} />;
      case 'epic': return <Zap className="text-blue-400" size={24} />;
      case 'romantic': return <Heart className="text-rose-400 fill-current" size={24} />;
      default: return <Star className="text-white" size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center p-4 sm:p-12 text-white overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-30">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <nav className="fixed top-8 left-8 right-8 flex justify-between items-center z-50">
        <button 
          onClick={onBack}
          className="group flex items-center space-x-3 bg-white/5 hover:bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl transition-all border border-white/10"
        >
          <HomeIcon size={20} className="group-hover:scale-110 transition-transform" />
          <span className="font-medium tracking-wide">Retour</span>
        </button>

        <div className="hidden sm:block text-center">
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-md px-6 py-2 rounded-full border border-pink-500/30 text-pink-300 font-bold tracking-widest text-xs uppercase">
            Chroniques du Futur de Yacine & Wala
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-sm font-mono text-white/50">
          0{currentIndex + 1} / 0{STORY_DATA.length}
        </div>
      </nav>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10 relative mt-16 lg:mt-0">
        <div className={`relative group transition-all duration-700 ease-out transform ${isAnimating ? 'opacity-0 scale-90 -rotate-2' : 'opacity-100 scale-100 rotate-0'}`}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-600/30 via-purple-600/30 to-blue-600/30 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 bg-slate-800">
              <img 
                src={currentSlide.imageUrl} 
                alt={currentSlide.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Fallback to a placeholder if the local file is missing
                  target.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80"></div>
              <div className="absolute top-6 left-6 flex items-center space-x-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-widest uppercase">Fichier: {currentSlide.imageUrl.replace('./', '')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`space-y-8 transition-all duration-700 delay-200 transform ${isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-white/5 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl">
              {getMoodIcon(currentSlide.mood)}
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-6xl font-serif-elegant font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-pink-200">
              {currentSlide.title}
            </h2>
          </div>
          
          <div className="relative">
            <span className="absolute -top-8 -left-4 text-7xl text-white/5 font-serif">"</span>
            <p className="text-lg sm:text-2xl text-slate-300 leading-relaxed font-light italic relative z-10 pl-2">
              {currentSlide.description}
            </p>
          </div>

          <div className="pt-12 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex space-x-4">
              <button 
                disabled={currentIndex === 0}
                onClick={handlePrev}
                className={`p-5 rounded-2xl transition-all border ${currentIndex === 0 ? 'border-white/5 text-white/5 pointer-events-none' : 'border-white/10 bg-white/5 hover:bg-white/10 text-white active:scale-90'}`}
              >
                <ChevronLeft size={28} />
              </button>
            </div>
            
            {currentIndex === STORY_DATA.length - 1 ? (
              <button 
                onClick={onBack}
                className="flex-1 group relative overflow-hidden bg-white text-black p-5 rounded-2xl font-bold transition-all transform hover:-translate-y-1 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-white to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center space-x-2">
                  <Heart className="text-rose-500 fill-current" size={20} />
                  <span>C'est notre destin ❤️</span>
                </span>
              </button>
            ) : (
              <button 
                onClick={handleNext}
                className="flex-1 group bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 p-5 rounded-2xl font-bold shadow-2xl shadow-pink-600/20 transition-all flex items-center justify-center space-x-3 transform hover:-translate-y-1 active:scale-95"
              >
                <span className="text-lg">Voir la suite du futur</span>
                <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="fixed -top-20 -right-20 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed -bottom-20 -left-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    </div>
  );
};

export default Story;
