import React, { useEffect } from 'react';
import { ChevronLeft, MapPin, Coffee, ListCheck, ArrowRight } from 'lucide-react';

interface CoffeeExplorationProps {
  onBack: () => void;
}

const CoffeeExploration: React.FC<CoffeeExplorationProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const embedUrl = "https://www.google.com/maps/d/u/0/embed?mid=1b_g_cAwjv-wqtWO0ik4vjqTU7xb56RU&ehbc=2E312F&noprof=1";

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] selection:bg-gray-100 font-sans tracking-tight">
      <nav className="max-w-4xl mx-auto px-6 pt-16 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="group flex items-center gap-1 text-gray-400 hover:text-black transition-all"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium uppercase tracking-widest">Back Home</span>
        </button>

        <div className="flex items-center gap-2 text-gray-400 select-none">
          <Coffee size={18} strokeWidth={2} />
          <span className="text-sm font-medium uppercase tracking-widest">Coffee Shop Exploration</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24 space-y-12">
        
        <header className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-black leading-none">
            Coffee Shop Exploration
          </h1>
          
          <div className="space-y-8">
            <p className="text-gray-600 leading-relaxed text-lg font-medium max-w-3xl">
              I started drinking coffee after moving to Toronto for the first time, and it quickly became my favourite way to explore the city. I love discovering new neighbourhoods through local cafes—plus, they’re always the best spots to catch up with friends, family, or just about anyone. I’m excited to keep the search going for new spots as I travel to new cities! :)
            </p>
            
            <div className="group flex items-center gap-4 px-6 py-4 border border-gray-100 rounded-[20px] w-fit bg-white hover:border-black hover:shadow-sm transition-all duration-300 cursor-default">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 border-r border-gray-100 pr-4 group-hover:text-black transition-colors">
                Current Go-to
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-black">
                Iced Mocha with Oat Milk
              </span>
            </div>
          </div>
        </header>

        <section className="space-y-6 pt-2">
          <div className="flex flex-col gap-2 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-gray-400" />
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">The Map</h2>
            </div>
            <p className="text-sm text-gray-500 font-medium italic">Take a look at all the places I've explored so far!</p>
          </div>
          
          <div className="relative w-full h-[500px] rounded-[32px] overflow-hidden border border-gray-100 bg-gray-50 shadow-xl shadow-gray-200/30 group">
            <iframe 
              src={embedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0, marginTop: '-65px' }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Coffee Map"
              className="grayscale-[0.1] contrast-[1.02] group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </section>

        <section className="space-y-6 pt-4">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
            <ListCheck size={16} className="text-gray-400" />
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">The Queue</h2>
          </div>

          <a 
            href="https://maps.app.goo.gl/WwGEyx3DQxtHqXGQA" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block p-10 rounded-[32px] border border-gray-100 bg-white hover:border-black transition-all duration-500 overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-gray-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-black rounded-lg text-white">
                     <ListCheck size={18} />
                   </div>
                   <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Next Stops</span>
                </div>
                <h3 className="text-3xl font-semibold tracking-tighter">The To-Try List</h3>
                <p className="text-gray-500 text-lg font-medium max-w-md">
                  My ongoing collection of the next coffee shops on my radar.
                </p>
              </div>

              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest bg-gray-50 group-hover:bg-black group-hover:text-white px-8 py-5 rounded-2xl transition-all duration-300">
                View Collection
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        </section>

        <footer className="text-center pt-12 border-t border-gray-50">
          <p className="text-gray-300 text-[10px] uppercase tracking-[0.3em] font-bold italic">
          </p>
        </footer>
      </main>
    </div>
  );
};

export default CoffeeExploration;