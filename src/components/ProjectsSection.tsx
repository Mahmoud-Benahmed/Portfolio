"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from "react"
import setup3dImg from "@/assets/Setup3d.png"
import MareAlbs from "@/assets/MareAlbs.png"

const ProjectsSection = () => {
  const [previewModal, setPreviewModal] = useState<{
    type: "image" | "video"
    src: string
    title: string
  } | null>(null)

  const webProjects = [
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
      githubUrl: "#",
      status: "In Development",
    },
    {
      id: "triply",
      title: "TripLy",
      description: "Flutter application with modern UI/UX design and real-time features for travel planning.",
      image: null,
      technologies: [".NET", "Angular", "MongoDB"],
      githubUrl: "#",
      status: "Coming Soon",
    },
  ]

  const multimediaProjects = [
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

  return (
    <section id="projects" className="py-8 sm:py-12 md:py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5" />
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">MY PROJECTS</h2>
        </div>

        {/* Web Development Projects */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-6 sm:mb-8 animate-fade-in-up">
            Web Development
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {webProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-card border border-card-border rounded-xl p-3 sm:p-4 md:p-6 hover:border-accent/30 transition-all duration-300 hover-glow animate-scale-in flex flex-col h-full"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Preview Tab */}
                <div className="mb-3 sm:mb-4">
                  <Tabs defaultValue="preview" className="w-full">
                    <TabsList className="mb-2 sm:mb-3 w-full">
                      <TabsTrigger value="preview" className="flex-1 flex items-center gap-2 text-xs sm:text-sm">
                        <Eye size={14} />
                        Preview
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="preview" className="mt-2 sm:mt-3">
                      <div className="h-32 sm:h-40 md:h-48 lg:h-56 bg-gradient-primary/10 border border-accent/20 rounded-lg flex items-center justify-center overflow-hidden">
                        {project.image ? (
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                            onClick={() =>
                              setPreviewModal({ type: "image", src: project.image!, title: project.title })
                            }
                          />
                        ) : (
                          <div className="text-text-muted text-xs text-center px-2">No preview available yet</div>
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Project Info */}
                <div className="space-y-2 sm:space-y-3 flex-grow">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-text-primary truncate">
                      {project.title}
                    </h4>
                    <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/20 rounded text-xs text-orange-400 font-medium whitespace-nowrap">
                      {project.status}
                    </span>
                  </div>

                  <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <p className="text-text-muted text-xs font-medium mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
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
                </div>

                {/* Actions */}
                <div className="pt-2 sm:pt-3 md:pt-4 mt-3 sm:mt-4 border-t border-card-border">
                  {project.githubUrl !== "#" ? (
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
                  ) : (
                    <Button
                      disabled
                      className="w-full border-accent/30 text-accent/30 cursor-not-allowed bg-transparent text-xs sm:text-sm"
                    >
                      <Github size={16} className="mr-2" />
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Multimedia Projects */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-6 sm:mb-8 animate-fade-in-up">
            Multimedia & Design
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {multimediaProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-card border border-card-border rounded-xl p-3 sm:p-4 md:p-6 hover:border-accent/30 transition-all duration-300 hover-glow animate-scale-in flex flex-col h-full"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Preview Tab */}
                <div className="mb-4">
                  <Tabs defaultValue="preview" className="w-full">
                    <TabsList className="mb-3 w-full">
                      <TabsTrigger value="preview" className="flex-1 flex items-center gap-2 text-xs md:text-sm">
                        <Eye size={14} />
                        Preview
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="preview" className="mt-3">
                      <div className="h-48 md:h-56 bg-gradient-primary/10 border border-accent/20 rounded-lg flex items-center justify-center overflow-hidden">
                        {project.image ? (
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                            onClick={() =>
                              setPreviewModal({ type: "image", src: project.image!, title: project.title })
                            }
                          />
                        ) : (
                          <div className="text-text-muted text-xs md:text-sm text-center px-4">
                            No preview available yet
                          </div>
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Project Info */}
                <div className="space-y-3 flex-grow">
                  <h4 className="text-lg md:text-xl font-bold text-text-primary">{project.title}</h4>

                  <p className="text-text-secondary text-sm md:text-base leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div>
                    <p className="text-text-muted text-xs md:text-sm font-medium mb-2">Tools Used:</p>
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
                </div>

                {/* Status Badge */}
                <div className="pt-4 mt-4 border-t border-card-border">
                  <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded text-xs text-green-400 font-medium inline-block">
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
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
            {previewModal.type === "image" ? (
              <img
                src={previewModal.src || "/placeholder.svg"}
                alt={previewModal.title}
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <video src={previewModal.src} controls className="w-full h-auto rounded-lg" autoPlay />
            )}
            <p className="text-white text-center mt-4 text-xs sm:text-sm md:text-base">{previewModal.title}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
