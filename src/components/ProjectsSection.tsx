import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye, Code } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from "react"
import setup3dImg from "@/assets/setup3d.png";
import MareAlbs from "@/assets/MareAlbs.png";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<{ [key: string]: string }>({})

  const featuredProject = {
    title: "MareAlbs",
    description:
      "Centre de contrôle des Marealbs,Gérez et surveillez vos opérations avec précision et facilité. Accédez aux données en temps réel et aux systèmes de contrôle depuis n'importe où. this mobile app provides a comprehensive control center for monitoring and managing operations.",
    image: MareAlbs,
    technologies: ["React Native", "SQL Lite"],
    githubUrl: "https://github.com/Mahmoud-Benahmed/MareAlbs",
    liveUrl: "#",
    featured: false,
  }
  const otherProjects = [
    {
      title: "Setup 3D",
      description:
        "A fully designed 3D setup created in Blender, combining realistic modeling, lighting, and textures to bring a digital environment to life. This project demonstrates my skills in 3D design.",
      image: setup3dImg,
      technologies: ["Blender"],
      status: "Completed",
    },
    {
      title: "LocationImmobiler",
      description: "Interactive real estate rental project.",
      image: "",
      technologies: ["SpringBoot", "Angular", "MySQL"],
      githubUrl: "#",
      status: "In Development",
    },
    {
      title: "TripLy",
      description: "Flutter application with modern UI/UX design and real-time features.",
      image: "",
      technologies: [".NET", "Angular", "MongoDB"],
      githubUrl: "#",
      status: "Coming Soon",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">MY PROJECTS</h2>
        </div>

        {/* Featured Project */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-card border border-card-border rounded-2xl overflow-hidden hover-glow transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative bg-gradient-subtle/30 p-8">
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="mb-4 w-full">
                    <TabsTrigger value="preview" className="flex-1 flex items-center gap-2">
                      <Eye size={16} />
                      Preview
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="preview" className="mt-4">
                    <div className="h-128 bg-gradient-primary/10 border border-accent/20 rounded-xl flex items-center justify-center overflow-hidden">
                      {featuredProject.image ? (
                        <img
                          src={featuredProject.image || "/MareAlbs.png"}
                          alt={featuredProject.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-text-muted text-sm">No preview available</div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="source" className="mt-4">
                    <div className="aspect-video bg-gradient-primary/10 border border-accent/20 rounded-xl flex items-center justify-center p-4">
                      <div className="text-center">
                        <Code size={32} className="text-accent/50 mx-auto mb-2" />
                        <p className="text-text-muted text-sm">View source code on GitHub</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Project Details */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">{featuredProject.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{featuredProject.description}</p>
                </div>
                {/* Technologies */}
                <div>
                  <p className="text-text-muted text-sm font-medium mb-3">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    asChild
                    className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                  >
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card border border-card-border rounded-xl p-6 hover:border-accent/30 transition-all duration-300 hover-glow animate-scale-in"
              style={{ animationDelay: `${0.1 * index + 0.4}s` }}
            >
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="mb-4 w-full">
                  <TabsTrigger value="preview" className="flex-1 flex items-center gap-2 text-xs">
                    <Eye size={14} />
                    Preview
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="preview" className="mt-4">
                  <div className="h-96 bg-gradient-primary/10 border border-accent/20 rounded-lg flex items-center justify-center overflow-hidden mb-4">
                    {project.image ? (
                      <img
                        src={project.image || "/Setup3d.png"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-text-muted text-xs">No preview available</div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="source" className="mt-4">
                  <div className="aspect-video bg-gradient-primary/10 border border-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Code size={24} className="text-accent/50 mx-auto mb-2" />
                      <p className="text-text-muted text-xs">View source code on GitHub</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
                  <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/20 rounded text-xs text-orange-400 font-medium">
                    {project.status}
                  </span>
                </div>
                <p className="text-text-secondary">{project.description}</p>
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
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                    className="border-accent/30 text-accent/30 cursor-not-allowed bg-transparent"
                  >
                    <Github size={16} className="mr-2" />
                    Coming Soon
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="bg-gradient-subtle/30 border border-accent/20 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-text-primary mb-4">More Projects Coming Soon!</h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              I continue to experiment with emerging technologies and AI tools to design intelligent, user-centered
              digital solutions for the future
            </p>
            <Button
              asChild
              className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              <a
                href="https://github.com/Mahmoud-Benahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={18} />
                View All on GitHub
                <ExternalLink size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection