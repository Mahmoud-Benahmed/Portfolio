import { User, MapPin, Calendar, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const aboutDetails = [
    { icon: User, label: 'Name', value: 'Mahmoud Ben Ahmed' },
    { icon: Calendar, label: 'Age', value: '22 years old' },
    { icon: MapPin, label: 'Location', value: 'Sousse, Tunisia' },
    { icon: Briefcase, label: 'Status', value: 'IT Student & Developer' },
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-accent font-medium mb-4 tracking-wide uppercase">Nice To Meet You!</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-text-primary">WELCOME TO</span>
            <span className="gradient-text">...</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - About Details */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid gap-6">
              {aboutDetails.map((detail, index) => (
                <div 
                  key={detail.label}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-card-border hover:border-accent/30 transition-all duration-300 hover-glow"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 border border-accent/20 flex items-center justify-center">
                    <detail.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm font-medium">{detail.label}</p>
                    <p className="text-text-primary font-semibold">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="space-y-4 pt-6 border-t border-card-border">
              <div className="flex items-center gap-3">
               
              </div>
              <div className="flex items-center gap-3">
             
                
              </div>
            </div>
          </div>

          {/* Right Content - Description & Experience */}
          <div className="space-y-8 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            {/* Years of Experience */}
            <div className="text-center lg:text-right">
              <div className="inline-block">
                <h3 className="text-6xl lg:text-7xl font-bold gradient-text">1+</h3>
                <p className="text-text-muted font-medium mt-2">Years experience...</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <div>
                <p className="text-text-primary text-lg font-semibold mb-4">
                  Hello there! My name is{' '}
                  <span className="gradient-text">Mahmoud Ben Ahmed</span>.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  I’m a multimedia and web developer passionate about 
                  creating smart, human-centered digital products.
                   My focus is on integrating AI tools into design workflows to enhance creativity and usability
                </p>
              </div>

              {/* Quote */}
              <blockquote className="bg-gradient-subtle/50 border border-accent/20 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-text-secondary italic mb-4">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </p>
                <cite className="text-text-muted text-sm">- Steve Jobs</cite>
              </blockquote>
            </div>

            {/* Professional Description */}
            <div className="bg-card border border-card-border rounded-xl p-6">
              <h4 className="text-text-primary font-semibold mb-3">About My Work</h4>
              <p className="text-text-secondary leading-relaxed">
                I blend creativity, design, and emerging AI tools to craft interactive and intelligent digital experiences that make technology feel more human
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;