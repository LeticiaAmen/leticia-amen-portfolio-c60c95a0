import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { getAssetPath, getPublicAssetPath } from "@/lib/assets";

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const projects = [
    {
      title: "Americanos App",
      description: "Aplicación web para organizar torneos de pádel estilo 'Americano'. Genera automáticamente calendarios de partidos, gestiona puntuaciones y muestra clasificaciones en tiempo real. Soporta modalidad tradicional y mixta. Creada con Firebase Studio, desplegada con dominio propio y en uso activo con amigos.",
      technologies: ["Next.js", "React", "Firebase", "Tailwind CSS", "ShadCN/UI"],
      demo: "https://americanosapp.com",
      icon: "🎾",
      images: [
        getPublicAssetPath("projects/americanos-landing.png"),
        getPublicAssetPath("projects/americanos-torneo.png"),
        getPublicAssetPath("projects/americanos-real.png")
      ],
      imageDescriptions: [
        "Página de inicio con login de Google",
        "Vista de torneo con calendario de partidos y clasificación en tiempo real",
        "La app en uso real durante un americano de pádel"
      ]
    },
    {
      title: "Gym Management System",
      description: "Sistema web para la gestión integral de gimnasios, diseñado para automatizar procesos administrativos, control de membresías, pagos, seguimiento de asistencias y generación de reportes. Dashboard interactivo con métricas en tiempo real.",
      technologies: ["Java", "Spring Boot", "JPA/Hibernate", "PostgreSQL", "REST API"],
      github: "https://github.com/LeticiaAmen/gym_management",
      images: [
        getPublicAssetPath("gym-login.png"),
        getPublicAssetPath("gym-clients.png"),
        getPublicAssetPath("gym-reports.png")
      ],
      imageDescriptions: [
        "Dashboard principal con métricas de membresías e ingresos",
        "Sistema de reportes y gestión de pagos vencidos"
      ]
    },
    {
      title: "Proyecto Final – UTEC (2024)",
      description: "Aplicación web para la gestión de usuarios y reclamos con backend en Java, base de datos en Oracle y app móvil integrada (Android Studio + Retrofit). Incluye consultas SQL, dashboards en Power BI y simulación de infraestructura corporativa en GNS3.",
      technologies: ["Java EE", "Oracle DB", "SQL Developer", "Power BI", "Android Studio", "Retrofit"],
      icon: "📊",
    },
  ];

  const nextImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const handleImageError = (imageSrc: string) => {
    setImageErrors(prev => ({
      ...prev,
      [imageSrc]: true
    }));
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group"
              >
                {/* Image Carousel Section */}
                {project.images && project.images.length > 0 && (
                  <div className="relative">
                    <div className="aspect-video relative overflow-hidden bg-slate-100">
                      {imageErrors[project.images[currentImageIndex[index] || 0]] ? (
                        <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-600">
                          <div className="text-center">
                            <div className="text-4xl mb-2">{project.icon}</div>
                            <p className="text-sm">Imagen no disponible</p>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={project.images[currentImageIndex[index] || 0]}
                          alt={project.imageDescriptions?.[currentImageIndex[index] || 0] || `${project.title} screenshot`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={() => handleImageError(project.images[currentImageIndex[index] || 0])}
                          onLoad={() => console.log('Image loaded:', project.images[currentImageIndex[index] || 0])}
                        />
                      )}

                      {/* Navigation Arrows */}
                      {project.images.length > 1 && (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                            onClick={() => prevImage(index, project.images!.length)}
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                            onClick={() => nextImage(index, project.images!.length)}
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>

                          {/* Dots Indicator */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {project.images.map((_, imgIndex) => (
                              <button
                                key={imgIndex}
                                className={`w-2 h-2 rounded-full transition-colors ${(currentImageIndex[index] || 0) === imgIndex
                                  ? 'bg-white'
                                  : 'bg-white/50'
                                  }`}
                                onClick={() => setCurrentImageIndex(prev => ({
                                  ...prev,
                                  [index]: imgIndex
                                }))}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <div className="flex gap-1">
                      {project.demo && (
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="hover:bg-accent/10 hover:text-accent"
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="hover:bg-primary/10 hover:text-primary"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-6 text-muted-foreground">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
