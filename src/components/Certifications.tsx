import { Award, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS",
      year: "2025",
      icon: "☁️",
    },
    {
      title: "Google Cloud Computing Foundations",
      issuer: "Google",
      year: "2025",
      icon: "🌐",
    },
    {
      title: "Backend Development with Java & Spring Boot",
      issuer: "Digital House",
      year: "2025",
      icon: "☕",
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco",
      year: "2024",
      icon: "🔒",
    },
    {
      title: "CCNA: Enterprise Networking, Security, and Automation",
      issuer: "Cisco",
      year: "2023",
      icon: "🌐",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2022",
      icon: "💻",
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Certificaciones
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-bl-full -z-0 group-hover:scale-150 transition-transform duration-500" />
                
                <CardHeader className="relative z-10">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-secondary transition-colors">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground font-semibold">{cert.issuer}</span>
                    <span className="text-accent font-bold">{cert.year}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-xs font-semibold">Verificado</span>
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

export default Certifications;
