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
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 md:py-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-10" />

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 md:space-y-10 lg:space-y-12 animate-fade-in-up">
            <div className="space-y-6 md:space-y-8">
              <p className="text-text-secondary text-xl md:text-2xl lg:text-3xl font-medium">Nice To Meet You!</p>

              <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="text-text-primary">MY NAME</span>
                <br />
                <span className="text-text-primary">IS </span>
                <span className={`gradient-text ${isTyping ? "typing-animation" : ""}`}>{displayText}</span>
                {isTyping && <span className="animate-blink">|</span>}
              </h1>

              <p className="text-xl md:text-2xl lg:text-3xl text-text-secondary font-medium">
                Creative Technologist | AI-Driven Designer & Web Developer
              </p>

              <p className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed">Based In Tunisia</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Button
                asChild
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 md:px-10 py-3 md:py-4 rounded-lg transition-all duration-300 hover-glow text-base md:text-lg"
              >
                <a
                  href="https://github.com/Mahmoud-Benahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center"
                >
                  View My GitHub
                  <ExternalLink size={20} />
                </a>
              </Button>

              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 md:px-10 py-3 md:py-4 rounded-lg transition-all duration-300 text-base md:text-lg bg-transparent"
              >
                <MessageCircle size={20} className="mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 pt-8 md:pt-12">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-card border border-card-border flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} className="text-accent" />
                </div>
                <div>
                  <p className="text-text-muted text-sm md:text-base">Age</p>
                  <p className="text-text-primary font-medium text-lg md:text-xl">22 yrs</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-card border border-card-border flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                </div>
                <div>
                  <p className="text-text-muted text-sm md:text-base">Location</p>
                  <p className="text-text-primary font-medium text-lg md:text-xl">Sousse, Tunisia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-slide-in-right flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Gradient Background Shape */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full transform rotate-6 scale-110 opacity-20" />
              <div className="absolute inset-0 bg-gradient-secondary rounded-full transform -rotate-12 scale-105 opacity-15" />

              {/* Profile Image - Increased size for better visibility */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                <img
                  src={profileImage || "/placeholder.svg"}
                  alt="Mahmoud Ben Ahmed"
                  className="w-full h-full object-cover rounded-full border-4 md:border-8 border-accent/20 shadow-2xl"
                />
              </div>

              {/* Floating Elements */}
              <div
                className="absolute top-10 right-10 w-20 h-20 md:w-28 md:h-28 bg-gradient-primary rounded-lg opacity-80 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute bottom-10 left-10 w-16 h-16 md:w-24 md:h-24 bg-gradient-secondary rounded-full opacity-60 animate-bounce"
                style={{ animationDelay: "1s" }}
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-card border border-card-border rounded-lg p-4 md:p-6 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-2xl md:text-4xl font-bold gradient-text">1+</p>
                <p className="text-xs md:text-sm text-text-muted">Years experience...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 md:mt-20 lg:mt-24 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <blockquote className="bg-card border border-card-border rounded-xl p-8 md:p-10 lg:p-12 text-center backdrop-blur-sm">
            <p className="text-lg md:text-xl lg:text-2xl text-text-secondary italic leading-relaxed">
              "I'm a multimedia and web developer passionate about creating smart, human-centered digital products"
            </p>
            <cite className="block mt-6 md:mt-8 text-accent font-semibold text-base md:text-lg">
              - Mahmoud Ben Ahmed
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
