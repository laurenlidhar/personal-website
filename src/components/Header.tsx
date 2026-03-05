import React, { useState, useEffect } from 'react';
import { 
  Linkedin, Github, Mail, MapPin, Menu, X 
} from 'lucide-react';
import SocialLink from './SocialLink';
import myHeadshot from '../assets/headshot.jpg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Adventures', href: '#adventures' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false); 
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className="fixed top-6 left-0 w-full z-[110] h-0 pointer-events-none">
        <div className="w-full pl-6 pr-4 md:px-12 flex justify-end items-start">
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden pointer-events-auto px-3 py-2 text-black active:scale-95 transition-all bg-white/40 backdrop-blur-md rounded-xl z-[120]"
          >
            {isMenuOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
          </button>

          <div className="hidden md:flex items-center gap-1 pointer-events-auto bg-white/40 backdrop-blur-md p-1 rounded-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="px-4 py-1.5 text-xs font-semibold tracking-wide uppercase border border-transparent text-gray-500 hover:border-black hover:text-black rounded-lg transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className={`
          fixed inset-0 bg-white transition-all duration-500 ease-in-out md:hidden pointer-events-auto
          ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}
          z-[115] flex flex-col justify-center items-center
        `}>
          <div className="flex flex-col items-center gap-10 text-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-2xl font-semibold tracking-widest uppercase text-gray-500 active:text-black transition-colors"
              >
                {item.name}
              </a>
            ))}

            <div className="flex items-center gap-8 mt-8">
              <a href="https://linkedin.com/in/lauren-lidhar/" target="_blank" rel="noreferrer" 
                 className="text-black hover:opacity-70 transition-opacity">
                <Linkedin size={28} />
              </a>
              <a href="https://github.com/laurenlidhar" target="_blank" rel="noreferrer"
                 className="text-black hover:opacity-70 transition-opacity">
                <Github size={28} />
              </a>
              <a href="mailto:lidharlauren@gmail.com"
                 className="text-black hover:opacity-70 transition-opacity">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="w-full space-y-8">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-black leading-tight text-center md:text-left">
          Lauren Lidhar
        </h1>

        <div className="flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-6 md:items-center">
          <div className="order-1 md:order-2 md:col-span-9 flex flex-col justify-center">
            <div className="space-y-6"> 
              <div className="text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl font-medium text-center md:text-left px-2">
                <p>Hi, I'm Lauren! I first discovered my interest in tech through the Technovation Girls Challenge, where an unexpected semi-finalist win turned a "for fun" project into a career path. I’ve spent the last few years building on that curiosity and am currently looking for my next full-time challenge.</p>
                <p className="mt-4">Outside of my academic and professional life, you can find me on the frisbee field or finding a new coffee shop. I’m open to new opportunities—feel free to reach out, I’d love to chat!</p>
              </div>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
                <SocialLink href="https://linkedin.com/in/lauren-lidhar/" icon={Linkedin} label="LinkedIn" />
                <SocialLink href="https://github.com/laurenlidhar" icon={Github} label="GitHub" />
                <SocialLink href="mailto:lidharlauren@gmail.com" icon={Mail} label="Email" />
                <SocialLink icon={MapPin} label="Vancouver, BC" isStatic />
              </div>
            </div>
          </div>

          <div className="order-2 md:order-1 md:col-span-3 flex justify-center md:justify-start pt-4 md:pt-0">
            <div className="w-[85%] md:w-full max-w-[320px] md:max-w-[200px] aspect-[4/5] md:h-full md:max-h-[260px] overflow-hidden rounded-none md:rounded-[32px] border border-gray-100 bg-gray-50 shadow-sm pointer-events-none">
              <img src={myHeadshot} alt="Lauren Lidhar" className="w-full h-full object-cover block" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;