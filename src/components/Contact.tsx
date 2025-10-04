import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "letiamen23@gmail.com",
      href: "mailto:letiamen23@gmail.com",
      color: "text-accent",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Conectar en LinkedIn",
      href: "https://www.linkedin.com/in/leticia-amen-lorenzo-7a442613b",
      color: "text-primary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Ver repositorios",
      href: "https://github.com/LeticiaAmen",
      color: "text-secondary",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            ¿Quieres colaborar conmigo en un proyecto o conocer más sobre mi experiencia?
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group"
                >
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="inline-flex p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <Icon className={`h-8 w-8 ${contact.color}`} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">
                      {contact.label}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </a>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              ¿Listo para trabajar juntos?
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Estoy abierta a nuevas oportunidades y colaboraciones
            </p>
            <Button
              size="lg"
              className="bg-card text-primary hover:bg-card/90 shadow-lg"
              asChild
            >
              <a href="mailto:letiamen23@gmail.com">
                <Send className="mr-2 h-5 w-5" />
                Enviar un mensaje
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
