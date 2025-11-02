"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"
import { useState } from "react"
import setup3dImg from "@/assets/Projects/Setup3d.png"
import MareAlbs from "@/assets/Projects/MareAlbs.png"
import YoungWomanImage from "@/assets/Portrait/women.png"
import FlowerMacroImage from "@/assets/Portrait/flower.jpg"
import BourgoMallImage from "@/assets/Street/BourgoMall street.jpg"
import landscapejijelImage from "@/assets/Street/LandScapeJijel.jpg"
import beachJerbaImage from "@/assets/Nature/BeachJerba.jpg"
import jijelNatureImage from "@/assets/Nature/NatureJijel.jpg"
import ElectricSkyImage from "@/assets/Sunset/ElectricSky.jpg"
import SilhouetteSunsetImage from "@/assets/Sunset/SilhouetteImage.jpg"
import TwilightGradientImage from "@/assets/Sunset/TwilightGradient.jpg"

type Project = {
  id: string
  title: string
  description: string
  image?: string | null
  technologies: string[]
  status: string
  githubUrl?: string
}

const ProjectsSection = () => {
  const [previewModal, setPreviewModal] = useState<{
    type: "image" | "video"
    src: string
    title: string
  } | null>(null)

  // Web Development Projects
  const webProjects: Project[] = [
    {
      id: "marealbs",
      title: "MareAlbs",
      description:
        "Centre de contrôle des Marealbs. Gérez et surveillez vos opérations avec précision et facilité. Accédez aux données en temps réel et aux systèmes de contrôle depuis n'importe où. This mobile app provides a comprehensive control center for monitoring and managing operations.",
      image: MareAlbs,
      technologies: ["React Native", "SQL Lite"],
      githubUrl: "https://github.com/Mahmoud-Benahmed/MareAlbs",
      status: "Completed",
    },
    {
      id: "locationimmobiler",
      title: "LocationImmobiler",
      description: "Interactive real estate rental project with modern architecture and database management.",
      image: null,
      technologies: ["SpringBoot", "Angular", "MySQL"],
      status: "In Development",
    },
    {
      id: "triply",
      title: "TripLy",
      description: "Flutter application with modern UI/UX design and real-time features for travel planning.",
      image: null,
      technologies: [".NET", "Angular", "MongoDB"],
      status: "Coming Soon",
    },
  ]

  // Multimedia Projects
  const multimediaProjects: Project[] = [
    {
      id: "setup3d",
      title: "Setup 3D",
      description:
        "A fully designed 3D setup created in Blender, combining realistic modeling, lighting, and textures to bring a digital environment to life. This project demonstrates advanced 3D design and visualization skills.",
      image: setup3dImg,
      technologies: ["Blender", "3D Modeling", "Rendering"],
      status: "Completed",
    },
  ]

  // Photography Projects
  const photographyProjects: Project[] = [
    {
      id: "portrait1",
      title: "Portrait of young woman",
      description:
        "A dreamy cinematic portrait of a young woman in golden sunlight, soft focus, natural shadows, shallow depth of field, cinematic color grading, high detail",
      image: YoungWomanImage,
      technologies: ["PhoneCamera", "Remini Enhancement"],
      status: "Completed",
    },
    {
      id: "flower1",
      title: "Beauty of flower Jijel",
      description: "Macro flower with vibrant colors",
      image: FlowerMacroImage,
      technologies: ["PhoneCamera", "Remini Enhancement"],
      status: "Completed",
    },
    {
      id: "street1",
      title: "Shopping BourgoMall at Dusk",
      description: "A bustling shopping mall scene at dusk, with vibrant colors and dynamic lighting.",
      image: BourgoMallImage,
      technologies: ["PhoneCamera", "GeminiAI Enhancement"],
      status: "Completed",
    },
    {
      id: "landscape1",
      title: "Landscape Jijel",
      description: "A breathtaking view of the Jijel landscape, showcasing its natural beauty and vibrant colors.",
      image: landscapejijelImage,
      technologies: ["PhoneCamera", "Remini Enhancement"],
      status: "Completed",
    },
    {
      id: "nature1",
      title: "Beach Jerba",
      description: "A vibrant and colorful view of a beach sunset with trees in the foreground, capturing the serene beauty of nature.",
      image: beachJerbaImage,
      technologies: ["PhoneCamera", "Remini Enhancement"],
      status: "Completed",
    },
    {
      id: "nature2",
      title: "Jijel Nature",
      description: "A vibrant and colorful view of the Jijel landscape with trees in the foreground",
      image: jijelNatureImage,
      technologies: ["PhoneCamera", "Remini Enhancement"],
      status: "Completed",
    },
    {
      id: "sunset1",
      title: "Electric Sky",
      description:
        "A powerful lightning bolt splits the stormy night sky, capturing nature's raw energy in a single dramatic moment.",
      image: ElectricSkyImage,
      technologies: ["PhoneCamera", "Dalle-2 Enhancement"],
      status: "Completed",
    },
    {
      id: "sunset2",
      title: "Silhouette Sunset",
      description:
        "Power lines, a communications tower, and trees create stark silhouettes against a spectacular sunset sky painted in shades of orange, pink, and purple.",
      image: SilhouetteSunsetImage,
      technologies: ["PhoneCamera", "GeminiAI Enhancement"],
      status: "Completed",
    },
    {
      id: "sunset3",
      title: "Twilight Gradient",
      description:
        "The sky transforms into a natural canvas of color as dusk settles over the landscape, displaying nature's daily masterpiece of light and atmosphere.",
      image: TwilightGradientImage,
      technologies: ["PhoneCamera", "GeminiAI Enhancement"],
      status: "Completed",
    },
  ]

  // Render function
  const renderProjects = (projects: Project[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="bg-card border border-card-border rounded-xl p-3 sm:p-4 md:p-6 hover:border-accent/30 transition-all duration-300 hover-glow animate-scale-in flex flex-col h-full"
          style={{ animationDelay: `${0.1 * index}s` }}
        >
          {/* Preview */}
          <div className="mb-4">
            <div className="h-48 md:h-56 bg-gradient-primary/10 border border-accent/20 rounded-lg flex items-center justify-center overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                  onClick={() =>
                    setPreviewModal({ type: "image", src: project.image!, title: project.title })
                  }
                />
              ) : (
                <div className="text-text-muted text-xs md:text-sm text-center px-4">
                  No preview available
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-2 flex-grow">
            <h4 className="text-lg md:text-xl font-bold text-text-primary">{project.title}</h4>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">{project.description}</p>
            {project.technologies && (
              <div>
                <p className="text-text-muted text-xs md:text-sm font-medium mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent/10 border border-accent/20 rounded text-xs text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Status */}
          <div className="pt-4 mt-4 border-t border-card-border">
            <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded text-xs text-green-400 font-medium inline-block">
              {project.status}
            </span>
          </div>

          {/* Github button if available */}
          {project.githubUrl && project.githubUrl !== "#" && (
            <div className="pt-2 mt-2 border-t border-card-border">
              <Button
                asChild
                className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold text-xs sm:text-sm md:text-base py-2 md:py-3"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github size={16} />
                  Code
                </a>
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <section id="projects" className="py-8 sm:py-12 md:py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5" />
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">MY PROJECTS</h2>
        </div>

        {/* Web Development */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-6 sm:mb-8 animate-fade-in-up">
            Web Development
          </h3>
          {renderProjects(webProjects)}
        </div>

        {/* Multimedia */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-6 sm:mb-8 animate-fade-in-up">
            Multimedia & Design
          </h3>
          {renderProjects(multimediaProjects)}
        </div>

        {/* Photography */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-6 sm:mb-8 animate-fade-in-up">
            Photography
          </h3>
          {renderProjects(photographyProjects)}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="bg-gradient-subtle/30 border border-accent/20 rounded-xl p-4 sm:p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-text-primary mb-3 sm:mb-4">
              More Projects Coming Soon!
            </h3>
            <p className="text-text-secondary mb-4 sm:mb-6 max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
              I continue to experiment with emerging technologies and AI tools to design intelligent, user-centered
              digital solutions for the future
            </p>
            <Button
              asChild
              className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-lg transition-all duration-300 text-xs sm:text-sm md:text-base inline-flex"
            >
              <a
                href="https://github.com/Mahmoud-Benahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center"
              >
                <Github size={16} />
                View All on GitHub
                <ExternalLink size={14} />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {previewModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setPreviewModal(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setPreviewModal(null)}
              className="absolute -top-8 right-0 text-white hover:text-gray-300 text-2xl font-bold"
            >
              ✕
            </button>
            <img
              src={previewModal.src || "/placeholder.svg"}
              alt={previewModal.title}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-xs sm:text-sm md:text-base">{previewModal.title}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
