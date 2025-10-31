import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/Mahmoud-Benahmed', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/mahmoud-ben-ahmed-497b072a6/', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://www.instagram.com/mahmoud.ben_ahmed/', label: 'Instagram' },
    { icon: Facebook, url: 'https://www.facebook.com/Ba.Mahmoud.26', label: 'Facebook' },
  ];

  return (
    <footer className="py-12 border-t border-card-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          
          {/* Logo */}
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text italic">MBA</h3>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-card border border-card-border hover:bg-accent/10 hover:border-accent/20 flex items-center justify-center transition-all duration-300 hover-glow group"
                aria-label={social.label}
              >
                <social.icon 
                  size={20} 
                  className="text-text-secondary group-hover:text-accent transition-colors" 
                />
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-8">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-accent transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-card-border w-full">
            <p className="text-text-muted text-sm">
                   Copyright ©2025 MBA-Stack.All rights reserved.</p>
            <p className="text-text-muted text-xs mt-1">
             
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;