import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Gym Management System",
      description: "Sistema web  para la gestión integral de gimnasios, diseñado para automatizar procesos administrativos, control de membresías, pagos, seguimiento de asistencias y generación de reportes.",
      technologies: ["Spring Boot", "JPA/Hibernate", "PostgreSQL", "REST API"],
      github: "#",
      icon: "🏋️‍♀️",
    },
    {
      title: "Proyecto Final – UTEC (2024)",
      description: "Aplicación web para la gestión de usuarios y reclamos con backend en Java, base de datos en Oracle y app móvil integrada (Android Studio + Retrofit). Incluye consultas SQL, dashboards en Power BI y simulación de infraestructura corporativa en GNS3.",
      technologies: ["Java EE", "Oracle DB", "SQL Developer", "Power BI", "Android Studio", "Retrofit"],
      icon: "📊",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
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
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
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
