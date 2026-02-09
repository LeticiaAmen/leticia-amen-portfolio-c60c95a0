import { Code2, Database, Shield, Cloud } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Lenguajes",
      items: ["Java", "Python", "SQL", "HTML/CSS"],
    },
    {
      icon: Database,
      title: "Frameworks & Tools",
      items: ["Spring Boot", "GitHub", "IntelliJ IDEA", "Eclipse", "Android Studio"],
    },
    {
      icon: Cloud,
      title: "Cloud",
      items: ["AWS", "Google Cloud"],
    },
    {
      icon: Shield,
      title: "Seguridad",
      items: ["Cisco Cybersecurity", "CCNA"],
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Sobre mí
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

          <div className="space-y-6 text-lg text-muted-foreground mb-12">
            <p>
              Soy <span className="text-foreground font-semibold">Técnica Superior en Tecnologías de la Información</span> y
              estudiante de la <span className="text-foreground font-semibold">Licenciatura en TI en UTEC</span> (Uruguay).
            </p>
            <p>
              A lo largo de mis estudios y proyectos personales trabajé en aplicaciones web completas, participando en análisis de requerimientos, desarrollo, pruebas y documentación.
              Tengo interés en roles de desarrollo web, full-stack junior, testing funcional o áreas afines, donde pueda seguir desarrollando mis habilidades técnicas y ganar experiencia profesional real.
              Me adapto rápido a nuevas herramientas, disfruto entender cómo funcionan los sistemas de punta a punta y valoro el trabajo colaborativo.
            </p>
            <p className="text-foreground font-semibold text-xl">
              Mi objetivo es construir software escalable, seguro y de impacto, mientras sigo creciendo en el mundo IT.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-accent group"
                >
                  <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                    <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">{skill.title}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
