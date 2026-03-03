import React from 'react';
import { Linkedin, Github, Mail, FileText, MapPin } from 'lucide-react';
import SocialLink from './SocialLink';
import myHeadshot from '../assets/headshot.jpg';

const Header: React.FC = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 md:items-center gap-8 md:gap-0">
        <div className="md:col-span-8">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-black leading-tight">
              Lauren Lidhar
            </h1>
            
            <div className="space-y-8"> 
              <div className="text-gray-600 leading-relaxed text-base md:text-lg max-w-4xl font-medium">
                <p>Hi, I'm Lauren! I first discovered my interest in tech through the Technovation Girls Challenge, where an unexpected semi-finalist win turned a "for fun" project into a career path. I’ve spent the last few years building on that curiosity and am currently looking for my next full-time challenge.</p>
                <p className="mt-4">Outside of my academic and professional life, you can find me on the frisbee field or finding a new coffee shop. I’m open to new opportunities -feel free to reach out, I’d love to chat!</p>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-2">
                <SocialLink href="https://linkedin.com/in/lauren-lidhar/" icon={Linkedin} label="LinkedIn" />
                <SocialLink href="https://github.com/laurenlidhar" icon={Github} label="GitHub" />
                <SocialLink href="mailto:lidharlauren@gmail.com" icon={Mail} label="Email" />
                <SocialLink href="/resume.pdf" icon={FileText} label="Resume" />
                <SocialLink icon={MapPin} label="Vancouver, BC" isStatic />
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 flex justify-end">
          <div className="w-40 h-60 md:w-52 md:h-78 overflow-hidden border border-gray-100 bg-gray-50 shrink-0">
            <img src={myHeadshot} alt="Lauren Lidhar" className="w-full h-full object-cover block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;