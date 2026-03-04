import React, { useEffect } from 'react';
import { ChevronLeft, Mountain, MapPin, Disc, Snowflake, Waves, ArrowRight, LucideIcon } from 'lucide-react';

interface Experience {
  name: string;
  meta: string;
}

interface Category {
  title: string;
  icon: LucideIcon;
  color: string;
  experiences: Experience[];
  goals: string[];
}

interface OutdoorTrackerProps {
  onBack: () => void;
}

const OutdoorTracker: React.FC<OutdoorTrackerProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const categories: Category[] = [
    {
      title: "Ultimate Frisbee",
      icon: Disc,
      color: "bg-blue-50 text-blue-500",
      experiences: [
        { name: "Summer Recreational League", meta: "Toronto, ON" },
        { name: "University Intramural", meta: "Kingston, ON" },
        { name: "BC Regionals", meta: "Vancouver, BC" },
        { name: "High School Team", meta: "Vancouver, BC" }
      ],
      goals: ["Beach Tournament"]
    },
    {
      title: "Hiking",
      icon: Mountain,
      color: "bg-emerald-50 text-emerald-500",
      experiences: [
        { name: "Tunnel Bluffs", meta: "Squamish, BC" },
        { name: "The Chief", meta: "Squamish, BC" },
        { name: "Sea to Summit", meta: "Squamish, BC" },
        { name: "Cabin Lake", meta: "West Vancouver, BC" },
        { name: "Grouse Grind", meta: "Vancouver, BC" }
      ],
      goals: ["Acatenango Volcano, Guatemala", "West Coast Trail, BC"]
    },
    {
      title: "Skiing",
      icon: Snowflake,
      color: "bg-cyan-50 text-cyan-500",
      experiences: [
        { name: "Whistler Blackcomb", meta: "Whistler, BC" },
        { name: "Cypress Mountain", meta: "West Vancouver, BC" },
        { name: "Grouse Mountain", meta: "North Vancouver, BC" }
      ],
      goals: ["Banff Sunshine, AB", "Mont-Tremblant, QC"]
    },
    {
      title: "Surfing",
      icon: Waves,
      color: "bg-indigo-50 text-indigo-500",
      experiences: [
        { name: "Honolulu", meta: "Oahu, HI" },
        { name: "Tofino", meta: "Vancouver Island, BC" }
      ],
      goals: ["Ericeira, Portugal", "Tofino, BC Return"]
    }
  ];

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

        <div className="!hidden md:!flex items-center gap-2 text-gray-400 select-none">
          <Mountain size={18} strokeWidth={2} />
          <span className="text-sm font-medium uppercase tracking-widest">Outdoor Tracker</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24 space-y-12">
        <header className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-black leading-none">
            Outdoor Tracker
          </h1>
          
          <div className="space-y-8">
            <p className="text-gray-600 leading-relaxed text-lg font-medium max-w-3xl">
             I’ve always loved staying active, but recently I’ve fallen out of touch with it. One of my 2026 goals is to be more active and this is my space to track that journey and document what I get up to!
            </p>
            
            <div className="group flex items-center gap-4 px-6 py-4 border border-gray-100 rounded-[20px] w-fit bg-white hover:border-black transition-all duration-300">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 border-r border-gray-100 pr-4 group-hover:text-black">
                Current Focus
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-black">
                Hiking
              </span>
            </div>
          </div>
        </header>

        <section className="space-y-8 pt-4">
          <div className="flex flex-col gap-2 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-gray-400" />
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">Activity Log</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat, i) => (
              <div 
                key={i} 
                className="group relative p-8 rounded-[32px] border border-gray-100 bg-white 
                           hover:border-black hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-100/40 
                           transition-all duration-500 ease-out flex flex-col"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-2 rounded-lg ${cat.color} transition-transform duration-500 group-hover:scale-110`}>
                    <cat.icon size={18} />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tighter">{cat.title}</h3>
                </div>

                <div className="space-y-8 border-t border-gray-50 pt-6">
                  <div className="space-y-4">
                    <h4 className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em]">History</h4>
                    <ul className="space-y-3">
                      {cat.experiences.map((exp, idx) => (
                        <li key={idx} className="flex items-baseline justify-between gap-4">
                          <span className="text-[14px] font-semibold text-gray-700 whitespace-nowrap">{exp.name}</span>
                          <div className="h-[1px] flex-1 border-b border-gray-50 border-dotted" />
                          <span className="text-[11px] font-medium text-gray-400 whitespace-nowrap">{exp.meta}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em]">Next</h4>
                    <ul className="space-y-2">
                      {cat.goals.map((goal, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[13px] font-medium text-gray-400 italic leading-snug">
                          <ArrowRight size={12} className="text-gray-200 shrink-0" />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center pt-12">
           <p className="text-gray-300 text-[10px] uppercase tracking-[0.4em] font-bold italic">
          </p>
        </footer>
      </main>
    </div>
  );
};

export default OutdoorTracker;