import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, MessageCircle } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullName = 'Mahmoud Ben Ahmed';
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-10" />
      
      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-text-secondary text-lg font-medium">
                Nice To Meet You!
              </p>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-text-primary">MY NAME</span><br />
                <span className="text-text-primary">IS </span>
                <span className={`gradient-text ${isTyping ? 'typing-animation' : ''}`}>
                  {displayText}
                </span>
                {isTyping && <span className="animate-blink">|</span>}
              </h1>
              
              <p className="text-xl text-text-secondary font-medium">
                Creative Technologist | AI-Driven Designer & Web Developer
              </p>
              
              <p className="text-text-secondary max-w-xl leading-relaxed">
                Based In Tunisia
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover-glow"
              >
                <a 
                  href="https://github.com/Mahmoud-Benahmed" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  View My GitHub
                  <ExternalLink size={18} />
                </a>
              </Button>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                <MessageCircle size={18} className="mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center">
                  <MessageCircle size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">Age</p>
                  <p className="text-text-primary font-medium">22 yrs</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">Location</p>
                  <p className="text-text-primary font-medium">Sousse, Tunisia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Gradient Background Shape */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full transform rotate-6 scale-110 opacity-20" />
              <div className="absolute inset-0 bg-gradient-secondary rounded-full transform -rotate-12 scale-105 opacity-15" />
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 mx-auto">
                <img
                  src={profileImage}
                  alt="Mahmoud Ben Ahmed"
                  className="w-full h-full object-cover rounded-full border-4 border-accent/20 shadow-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-primary rounded-lg opacity-80 animate-bounce" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-secondary rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }} />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute bottom-4 right-4 bg-card border border-card-border rounded-lg p-4 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">1+</p>
                <p className="text-sm text-text-muted">Years experience...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <blockquote className="bg-card border border-card-border rounded-xl p-8 text-center backdrop-blur-sm">
            <p className="text-lg text-text-secondary italic">
              "I’m a multimedia and web developer passionate about creating smart, human-centered digital products"
            </p>
            <cite className="block mt-4 text-accent font-semibold">- Mahmoud Ben Ahmed</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;