import { useEffect, useRef, useState } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
  { name: 'HTML', percentage: 90 },
  { name: 'Tailwind CSS', percentage: 85 },
  { name: 'Blender', percentage: 70 },
  { name: 'Unity', percentage: 65 },
  { name: 'Adobe Illustrator', percentage: 70 },
  { name: 'React Native', percentage: 50 },
  { name: 'Android Studio', percentage: 85 },
  { name: 'Figma', percentage: 90 },
  { name: 'WordPress', percentage: 75 },
  { name: 'Odoo', percentage: 65 },
  { name: 'Spring Boot', percentage: 80 },
  { name: 'N8N', percentage: 60},
  { name: '.NET', percentage: 40 },
];

const skillCards = [
  { name: 'HTML', icon: '🔥', color: 'from-orange-500 to-red-500' },
  { name: 'Tailwind CSS', icon: '🌊', color: 'from-teal-400 to-blue-500' },
  { name: 'React Native', icon: '📱', color: 'from-cyan-500 to-blue-600' },
  { name: 'Android Studio', icon: '🤖', color: 'from-green-500 to-emerald-500' },
  { name: 'Adobe Illustrator', icon: '🎨', color: 'from-orange-500 to-pink-500' },
  { name: 'Spring Boot', icon: '🌱', color: 'from-green-600 to-green-800' },
  { name: 'Odoo', icon: '🟣', color: 'from-purple-500 to-purple-700' },
  { name: 'Blender', icon: '🎭', color: 'from-orange-500 to-yellow-500' },
  { name: 'Unity', icon: '🎮', color: 'from-gray-600 to-gray-800' },
  { name: 'Figma', icon: '🎨', color: 'from-purple-500 to-pink-500' },
  { name: 'WordPress', icon: '📝', color: 'from-blue-600 to-indigo-600' },
  { name: '.NET', icon: '💠', color: 'from-blue-600 to-indigo-500' },
  { name: 'N8N',  icon: '🤖', color: 'from-orange-400 to-amber-500' },
];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-accent font-medium mb-4 tracking-wide uppercase">Skills</p>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text">
            MY SKILLS
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Skill Cards Grid */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skillCards.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group bg-card border border-card-border rounded-xl p-6 text-center hover:border-accent/30 transition-all duration-300 hover-glow animate-scale-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="text-3xl mb-3">{skill.icon}</div>
                  <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          {/* Right Side - Skill Progress Bars */}
          <div className="space-y-6 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">Proficiency Levels</h3>
              <p className="text-text-secondary">
                Here's a breakdown of my technical skills and productivity levels in various technologies and tools.
              </p>
            </div>

            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index + 0.5}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-text-primary">{skill.name}</span>
                  <span className="text-accent font-semibold">{skill.percentage}%</span>
                </div>
                <div className="skill-bar h-3">
                  <div
                    className="skill-progress h-full rounded-lg transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${0.1 * index + 0.5}s`
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-subtle/30 border border-accent/20 rounded-xl backdrop-blur-sm">
              <h4 className="font-semibold text-text-primary mb-2">Continuous Learning</h4>
              <p className="text-text-secondary text-sm">
               I'm constantly expanding my skill set and exploring how AI and emerging technologies can enhance web development, mobile experiences, and digital design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;