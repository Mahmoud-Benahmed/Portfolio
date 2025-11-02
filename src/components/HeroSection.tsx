"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, MessageCircle } from "lucide-react"
import profileImage from "@/assets/profile.jpg"

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("")
  const fullName = "Mahmoud Ben Ahmed"
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-12 md:py-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-10" />

      {/* Content Container */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 animate-fade-in-up">
            <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-text-secondary font-medium">
                Nice To Meet You!
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="text-text-primary">MY NAME</span>
                <br />
                <span className="text-text-primary">IS </span>
                <span className={`gradient-text ${isTyping ? "typing-animation" : ""}`}>{displayText}</span>
                {isTyping && <span className="animate-blink">|</span>}
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary font-medium">
                Creative Technologist | AI-Driven Designer & Web Developer
              </p>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-text-secondary leading-relaxed">
                Based In Tunisia
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col xs:flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 pt-2 sm:pt-4">
              <Button
                asChild
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 rounded-lg transition-all duration-300 hover-glow text-xs sm:text-sm md:text-base lg:text-lg"
              >
                <a
                  href="https://github.com/Mahmoud-Benahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center"
                >
                  View My GitHub
                  <ExternalLink size={18} className="sm:size-20" />
                </a>
              </Button>

              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white font-semibold px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 rounded-lg transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg bg-transparent"
              >
                <MessageCircle size={18} className="mr-2 sm:size-20" />
                Contact Me
              </Button>
            </div>

            {/* Contact Info - Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-4 sm:pt-6 md:pt-8 lg:pt-12">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg bg-card border border-card-border flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={18} className="sm:size-20 md:size-24 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-text-muted text-xs sm:text-sm md:text-base">Age</p>
                  <p className="text-text-primary font-medium text-sm sm:text-base md:text-lg lg:text-xl">22 yrs</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg bg-card border border-card-border flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-text-muted text-xs sm:text-sm md:text-base">Location</p>
                  <p className="text-text-primary font-medium text-sm sm:text-base md:text-lg lg:text-xl">
                    Sousse, Tunisia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-slide-in-right flex justify-center order-first lg:order-last">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Gradient Background Shape */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full transform rotate-6 scale-110 opacity-20" />
              <div className="absolute inset-0 bg-gradient-secondary rounded-full transform -rotate-12 scale-105 opacity-15" />

              {/* Profile Image - Mobile-friendly sizing */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
                <img
                  src={profileImage || "/placeholder.svg"}
                  alt="Mahmoud Ben Ahmed"
                  className="w-full h-full object-cover rounded-full border-2 sm:border-4 md:border-8 border-accent/20 shadow-2xl"
                />
              </div>

              {/* Floating Elements - Responsive sizing */}
              <div
                className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-gradient-primary rounded-lg opacity-80 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-gradient-secondary rounded-full opacity-60 animate-bounce"
                style={{ animationDelay: "1s" }}
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-8 md:right-8 bg-card border border-card-border rounded-lg p-2 sm:p-3 md:p-4 lg:p-6 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">1+</p>
                <p className="text-xs sm:text-sm md:text-base text-text-muted">Years exp...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div
          className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 max-w-4xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          <blockquote className="bg-card border border-card-border rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-center backdrop-blur-sm">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-text-secondary italic leading-relaxed">
              "I'm a multimedia and web developer passionate about creating smart, human-centered digital products"
            </p>
            <cite className="block mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-accent font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
              - Mahmoud Ben Ahmed
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
