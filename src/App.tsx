import React, { useState } from 'react';
import { 
  Coffee, Mountain, BookOpen, Map as MapIcon
} from 'lucide-react';

import spLogo from './assets/sp-global.png';
import dawsonLogo from './assets/dawson.jpeg'; 
import trainerizeLogo from './assets/trainerize.png';
import qmindLogo from './assets/qmind.png';
import qwicLogo from './assets/qwic.jpeg';

import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import { SectionHeader, ExperienceItem, LeadershipItem } from './components/ExperienceItems';
import CoffeeExploration from './components/CoffeeExploration';
import OutdoorTracker from './components/OutdoorTracker';

type ViewState = 'home' | 'coffee-map' | 'outdoor-tracker';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home'); 

  const handleBack = (): void => {
    window.scrollTo(0, 0);
    setView('home');
  };

  const experiences = [
    { company: "S&P Global", role: "Software Engineer Intern", period: "Jun 2025 — Aug 2025", url: "https://www.spglobal.com/ratings/en", logo: spLogo },
    { company: "Dawson Partners", role: "Tech & Data Analyst Intern", period: "May 2024 — Dec 2024", url: "https://dawsonpartners.com/", logo: dawsonLogo },
    { company: "ABC Trainerize", role: "QA Engineering Intern", period: "Jun 2023 — Jul 2023", url: "https://www.trainerize.com/", logo: trainerizeLogo }
  ];
  
  const leadership = [
    { type: "single" as const, organization: "QMIND", role: "Managing Director of Development", period: "Mar 2025 — Present", url: "https://qmind.ca/", logo: qmindLogo },
    { 
      type: "grouped" as const, 
      organization: "Queen's Women in Computing", 
      url: "https://qwic.org/", 
      logo: qwicLogo, 
      roles: [
          { title: "Vice-Chair of Operations", period: "Mar 2025 — Present" },
          { title: "Mentorship Coordinator", period: "Apr 2024 — Apr 2025" },
          { title: "Vice-Chair of hackHer", period: "Mar 2023 — Apr 2024" }
        ]
    }
  ];

  const projects = [
    { title: "mocha mentor", tagline: "🏆 Best Use of Auth0 @ QHacks 2024", link: "https://devpost.com/software/mocha-mentor", stack: ["React", "Node.js", "Express", "MongoDB", "Python", "Scikit-Learn", "LinkedIn API"], description: "Pairs mentors and students via ML-driven cosine-similarity matching of extracted LinkedIn profile data." },
    { title: "inteflow", tagline: "🏆 3rd Place @ IgnitionHacks 2023", link: "https://devpost.com/software/inteflow", stack: ["Swift", "SwiftUI", "AVFoundation", "OpenAI API"], description: "Recognizes mathematical formulas via computer vision to generate step-by-step AI solutions." },
    { title: "yourate", tagline: "🏆 CSSS Sponsor Award @ StormHacks 2023", link: "https://devpost.com/software/yourate-mruso1", stack: ["React", "Python", "Flask", "NLP", "YouTube API"], description: "Evaluates YouTube video quality through sentiment analysis and NLP on user comment data." }
  ];

  if (view === 'coffee-map') return <CoffeeExploration onBack={handleBack} />;
  if (view === 'outdoor-tracker') return <OutdoorTracker onBack={handleBack} />;

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] selection:bg-gray-100 font-sans tracking-tight">
      <main className="max-w-[1020px] mx-auto px-6 pt-24 md:pt-44 pb-24 space-y-20 md:space-y-28">
        
        <Header />

        <div className="max-w-2xl mx-auto w-full space-y-20 md:space-y-28">
          
          <section className="space-y-6">
            <SectionHeader title="Experience" />
            <div className="space-y-2">
              {experiences.map((item, idx) => <ExperienceItem key={idx} item={item} />)}
            </div>
          </section>

          <section className="space-y-6">
            <SectionHeader title="Leadership" />
            <div className="space-y-2">
              {leadership.map((item, idx) => <LeadershipItem key={idx} item={item} />)}
            </div>
          </section>

          <section className="space-y-12">
            <SectionHeader title="Projects" />
            <div className="flex flex-col gap-10">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </section>

          <section className="space-y-12">
            <SectionHeader title="Adventures" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div 
                onClick={() => setView('coffee-map')} 
                className="space-y-4 p-5 rounded-xl hover:bg-black/[0.06] transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-base">
                    <Coffee size={20} className="text-gray-700" />
                    <span>Coffee Shop Exploration</span>
                  </div>
                  <MapIcon size={16} className="text-gray-300 group-hover:text-black transition-colors" />
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Exploring new coffee shops from Vancouver to Toronto and beyond.
                </p>
              </div>

              <div 
                onClick={() => setView('outdoor-tracker')} 
                className="space-y-4 p-5 rounded-xl hover:bg-black/[0.06] transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-base">
                    <Mountain size={20} className="text-gray-700" />
                    <span>Outdoor Tracker</span>
                  </div>
                  <BookOpen size={16} className="text-gray-300 group-hover:text-black transition-colors" />
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  A personal log tracking my return to being more active.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;