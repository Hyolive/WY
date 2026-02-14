
import React, { useState } from 'react';
import { Heart, Sparkles, Music, Volume2, VolumeX } from 'lucide-react';

interface HomeProps {
  onStartStory: () => void;
}

const Home: React.FC<HomeProps> = ({ onStartStory }) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-12 overflow-x-hidden">
      {/* Floating UI Elements */}
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="p-3 bg-white/50 backdrop-blur-sm rounded-full border border-pink-100 text-pink-500 hover:bg-pink-50 transition-all shadow-sm"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="animate-bounce" />}
        </button>
      </div>

      <div className="max-w-3xl w-full bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-8 sm:p-16 border border-pink-50 z-10 space-y-10 relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/50 rounded-bl-[5rem] -mr-10 -mt-10"></div>
        
        <header className="text-center space-y-6 relative">
          <div className="flex justify-center items-center space-x-3 text-pink-500">
            <Heart className="fill-current w-6 h-6 animate-pulse" />
            <span className="font-romantic text-3xl font-bold tracking-wide">Joyeux 1 an</span>
            <Heart className="fill-current w-6 h-6 animate-pulse" />
          </div>
          <h1 className="font-serif-elegant text-5xl sm:text-7xl text-gray-800 font-bold tracking-tight">
            Yacine <span className="text-pink-400">&</span> Wala
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <div className="h-0.5 w-12 bg-pink-200"></div>
            <Sparkles className="text-pink-300 w-4 h-4" />
            <div className="h-0.5 w-12 bg-pink-200"></div>
          </div>
        </header>

        <section className="space-y-8 text-gray-700 leading-relaxed text-lg font-light">
          <p className="font-romantic text-4xl text-pink-600 font-semibold text-center mb-8 drop-shadow-sm">
            💖 Mon amour 💖
          </p>
          
          <div className="space-y-6">
            <p>
              Tu es incroyable… plus belle que tous les couchers de soleil que j’ai vus, plus douce que toutes les musiques qui réchauffent le cœur. 
              Chaque jour à tes côtés me rappelle à quel point je suis chanceux de t’avoir dans ma vie. Ton sourire illumine mes journées, et ta voix est la mélodie que je pourrais écouter éternellement.
            </p>

            <p>
              Tu es unique, extraordinaire, et je ne cesserai jamais de te dire à quel point je t’admire. Chaque petit geste, chaque rire, chaque regard me rend encore plus amoureux de toi.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-[2rem] border border-pink-100 shadow-inner italic relative group">
            <div className="absolute -top-4 -left-4 bg-pink-400 text-white p-2 rounded-xl rotate-[-10deg] shadow-lg text-xs font-bold px-3">NOTE SPÉCIALE</div>
            <p className="mb-4 font-bold text-pink-700 not-italic">💖 Joyeux 1 an mon amour 💖</p>
            <p className="text-gray-600">
              Normalement, je devais te donner ton cadeau aujourd'hui… mais comme le 19/02 est tombé pendant le Ramadan, j’ai dû m’adapter un peu 😅 
              <span className="block mt-2 font-bold text-pink-600 not-italic">3tithomlk yamat 9bl normalement 😂</span>
            </p>
          </div>

          <div className="space-y-6">
            <p>
              Sache que j’ai vraiment essayé de faire quelque chose de spécial pour ce site. J’avais plein d’idées dans la tête… mais les réaliser, c’était une autre histoire 😂
              Tu te rappelles le projet <span className="font-semibold text-pink-500 underline decoration-pink-200 decoration-2 underline-offset-4">“Est‑ce que tu m’aimes ?”</span> ? J’ai essayé.
              Le musée en 3D avec nos photos ? J’ai essayé aussi 😂
            </p>

            <p>
              Alors même si ce n’est pas parfait, tout ce que tu vois ici vient du cœur. Merci d’être dans ma vie, merci pour ton amour, ta patience, ton sourire et ta douceur.
            </p>
          </div>

          <div className="text-center pt-10 border-t border-pink-50">
            <p className="font-romantic text-3xl text-pink-500 mb-2">Je t’aime plus que les mots peuvent l’expliquer…</p>
            <p className="font-bold text-gray-800 text-xl">Toujours et pour toujours, bnty ❤️</p>
          </div>
        </section>

        <footer className="pt-10 text-center relative">
          <div className="absolute inset-0 bg-pink-100 blur-3xl opacity-20 -z-10 rounded-full scale-150"></div>
          <button 
            onClick={onStartStory}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl focus:outline-none hover:shadow-[0_20px_50px_rgba(244,114,182,0.4)] transform hover:-translate-y-2 active:scale-95"
          >
            <Sparkles className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-500" />
            <span className="text-lg">✨ Quelqu’un veut vous parler…</span>
          </button>
        </footer>
      </div>
      
      {/* Background decoration elements */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};

export default Home;
