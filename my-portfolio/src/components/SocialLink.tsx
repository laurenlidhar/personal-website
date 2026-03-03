import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href?: string;
  icon: LucideIcon;
  label: string;
  isStatic?: boolean;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label, isStatic }) => {
  const baseStyles = `
    flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-300
    bg-transparent border-transparent text-gray-500
    hover:border-black hover:text-black
  `;

  const content = (
    <div className={baseStyles}>
      <Icon size={16} />
      <span className="text-xs font-semibold tracking-wide uppercase">{label}</span>
    </div>
  );

  if (isStatic) {
    return <div className="cursor-default">{content}</div>;
  }

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="no-underline"
    >
      {content}
    </a>
  );
};

export default SocialLink;