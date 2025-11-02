"use client"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PromptEngineeringImage from "@/assets/Certificates/Prompt engineering.png"
import GenerativeAIImage from "@/assets/Certificates/Generative ai.png"

interface Certificate {
  id: number
  name: string
  image: string
}

const CertificatesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const certificates: Certificate[] = [
    {
      id: 1,
      name: "Prompt Engineering",
      image: PromptEngineeringImage,
    },
    {
      id: 2,
      name: "Generative AI in Design",
      image: GenerativeAIImage,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length)
    setIsAutoPlay(false)
  }

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % certificates.length)
    }, 5000)

    return () => clearTimeout(timer)
  }, [currentSlide, isAutoPlay, certificates.length])

  useEffect(() => {
    if (isAutoPlay) return

    const timer = setTimeout(() => {
      setIsAutoPlay(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [isAutoPlay])

  return (
    <div className="w-full py-4 md:py-6">
      <div className="relative group perspective">
        {/* Horizontal Slider Container - Much Bigger */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Certificate Display */}
          <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
            <div className="relative w-full h-full" style={{ perspective: "1200px" }}>
              {certificates.map((cert, index) => {
                const offset = (index - currentSlide + certificates.length) % certificates.length
                const isActive = offset === 0
                const rotateY = isActive ? 0 : offset > 0 ? 35 : -35
                const translateZ = isActive ? 0 : -500
                const opacity = isActive ? 1 : 0.4

                return (
                  <div
                    key={cert.id}
                    className="absolute inset-0 transition-all duration-500 ease-out"
                    style={{
                      transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
                      opacity,
                      zIndex: isActive ? 10 : 0,
                    }}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/30 bg-gradient-subtle/50 backdrop-blur-sm">
                      <img
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-8 lg:p-12">
                        <p className="text-white font-bold text-xl md:text-3xl lg:text-4xl text-balance">{cert.name}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Controls Below */}
          <div className="flex flex-col items-center gap-6 md:gap-8">
            {/* Navigation Buttons - Centered Below */}
            <div className="flex items-center justify-center gap-6 md:gap-8">
              <button
                onClick={prevSlide}
                className="bg-gradient-primary hover:shadow-lg text-white rounded-full p-3 md:p-4 transition-all duration-300 transform hover:scale-110 z-20"
                aria-label="Previous certificate"
              >
                <ChevronLeft size={28} className="md:w-7 md:h-7" />
              </button>

              {/* Dot Navigation */}
              <div className="flex justify-center items-center gap-3 md:gap-4">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index)
                      setIsAutoPlay(false)
                    }}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-gradient-primary w-4 md:w-5 h-4 md:h-5"
                        : "bg-accent/30 hover:bg-accent/60 w-3 md:w-4 h-3 md:h-4"
                    }`}
                    aria-label={`Go to certificate ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-gradient-primary hover:shadow-lg text-white rounded-full p-3 md:p-4 transition-all duration-300 transform hover:scale-110 z-20"
                aria-label="Next certificate"
              >
                <ChevronRight size={28} className="md:w-7 md:h-7" />
              </button>
            </div>

            {/* Slide Counter */}
            <div className="text-text-secondary text-base md:text-lg font-semibold">
              {currentSlide + 1} / {certificates.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificatesSlider
