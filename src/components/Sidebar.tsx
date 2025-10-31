import { useState } from 'react';
import { Github, Linkedin, Instagram, Facebook, Sun, Moon, Menu, X } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/Mahmoud-Benahmed', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/mahmoud-ben-ahmed-497b072a6/', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://www.instagram.com/mahmoud.ben_ahmed/', label: 'Instagram' },
    { icon: Facebook, url: 'https://www.facebook.com/Ba.Mahmoud.26', label: 'Facebook' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onSectionChange(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 md:hidden p-2 rounded-lg bg-card border border-card-border hover:bg-card/80 transition-colors"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-screen w-64 bg-sidebar-bg border-r border-sidebar-border z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold gradient-text italic">MBA</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-6">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      w-full text-left text-lg font-medium transition-colors duration-200
                      ${activeSection === item.id 
                        ? 'nav-active' 
                        : 'text-text-secondary hover:text-text-primary'
                      }
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          {/* Copyright */}
          <div className="mt-8 pt-4 border-t border-sidebar-border">
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;