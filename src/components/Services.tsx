import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      title: "Police (LSPD)",
      description: "Rejoignez les forces de l'ordre et maintenez la paix dans Los Santos.",
      features: ["Patrouilles", "Enquêtes", "Interventions"],
      icon: "🚔",
      gradient: "from-blue-500 to-blue-700",
      color: "gaming-cyan"
    },
    {
      title: "Médecins (EMS)",
      description: "Sauvez des vies en tant que médecin ou ambulancier dans la ville.",
      features: ["Urgences", "Hôpital", "Secours"],
      icon: "🚑",
      gradient: "from-red-500 to-red-700",
      color: "gaming-pink"
    },
    {
      title: "Mécanique",
      description: "Réparez et personnalisez les véhicules des joueurs.",
      features: ["Réparations", "Tuning", "Dépannage"],
      icon: "🔧",
      gradient: "from-orange-500 to-orange-700",
      color: "gaming-orange"
    },
    {
      title: "Criminel",
      description: "Explorez le côté sombre de Los Santos avec des activités illégales.",
      features: ["Braquages", "Trafic", "Gangs"],
      icon: "💀",
      gradient: "from-purple-500 to-purple-700",
      color: "gaming-purple"
    },
    {
      title: "Entrepreneur",
      description: "Créez votre empire commercial dans la ville.",
      features: ["Business", "Investissement", "Commerce"],
      icon: "💼",
      gradient: "from-green-500 to-green-700",
      color: "primary"
    },
    {
      title: "Taxi/Uber",
      description: "Transportez les citoyens à travers Los Santos.",
      features: ["Courses", "Service client", "Navigation"],
      icon: "🚖",
      gradient: "from-yellow-500 to-yellow-700",
      color: "gaming-orange"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-gaming-cyan/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 relative">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Métiers Disponibles
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary rounded-full"></div>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choisissez votre voie dans Los Santos. De nombreux métiers vous attendent pour des expériences de roleplay uniques et immersives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-glow hover:border-primary/50 transition-all duration-500 hover:scale-105 animate-fade-in group relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              
              <CardHeader className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <Badge 
                      key={featureIndex} 
                      variant="secondary"
                      className="bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 transition-colors duration-300"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;