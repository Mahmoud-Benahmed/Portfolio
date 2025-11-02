import { User, MapPin, Calendar, Briefcase } from "lucide-react"

const AboutSection = () => {
  const aboutDetails = [
    { icon: User, label: "Name", value: "Mahmoud Ben Ahmed" },
    { icon: Calendar, label: "Age", value: "22 years old" },
    { icon: MapPin, label: "Location", value: "Sousse, Tunisia" },
    { icon: Briefcase, label: "Status", value: "Final-Year IT Student" },
  ]

  return (
    <section id="about" className="py-8 sm:py-12 md:py-20 lg:py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-5" />

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
          <p className="text-accent font-medium mb-2 sm:mb-3 md:mb-4 tracking-wide uppercase text-xs sm:text-sm">
            Nice To Meet You!
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-text-primary">WELCOME TO</span>
            <span className="gradient-text">...</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Content - About Details */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="grid gap-3 sm:gap-4 md:gap-6">
              {aboutDetails.map((detail, index) => (
                <div
                  key={detail.label}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-card-border hover:border-accent/30 transition-all duration-300 hover-glow"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-gradient-primary/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <detail.icon size={18} className="sm:size-5 md:size-6 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-text-muted text-xs sm:text-sm font-medium">{detail.label}</p>
                    <p className="text-text-primary font-semibold text-sm sm:text-base truncate">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="space-y-2 pt-4 sm:pt-6 border-t border-card-border"></div>
          </div>

          {/* Right Content - Description & Experience */}
          <div
            className="space-y-6 sm:space-y-8 md:space-y-10 animate-slide-in-right"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Years of Experience */}
            <div className="text-center lg:text-right">
              <div className="inline-block">
                <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold gradient-text">1+</h3>
                <p className="text-text-muted font-medium mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
                  Years experience...
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div>
                <p className="text-text-primary text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">
                  Hello there! My name is <span className="gradient-text">Mahmoud Ben Ahmed</span>.
                </p>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base md:text-lg">
                  I’m a multimedia and web developer passionate about creating smart, human-centered digital products. I integrate AI tools into design workflows to boost creativity and usability, while also exploring visual storytelling through photography.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="bg-gradient-subtle/50 border border-accent/20 rounded-lg p-4 sm:p-5 md:p-6 backdrop-blur-sm">
                <p className="text-text-secondary italic mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
                  "Design is not just what it looks like and feels like.Design is how it works."
                </p>
                <cite className="text-text-muted text-xs sm:text-sm">Steve Jobs</cite>
              </blockquote>
            </div>

            {/* Professional Description */}
            <div className="bg-card border border-card-border rounded-xl p-4 sm:p-5 md:p-6">
              <h4 className="text-text-primary font-semibold mb-2 sm:mb-3 text-base sm:text-lg">About My Work</h4>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                I blend creativity, design, and emerging AI tools to craft interactive and intelligent digital experiences that feel more human while also capturing visual stories through my passion for photography
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
