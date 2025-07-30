import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/gta-hero.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gaming-cyan/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gaming-purple/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 relative z-10">
                Bienvenue sur{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent relative">
                  FiveM Los Santos
                  <div className="absolute -inset-2 bg-gradient-primary blur-2xl opacity-20 animate-pulse"></div>
                </span>
              </h1>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-accent rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed backdrop-blur-sm">
              Découvrez l'expérience de roleplay ultime dans Los Santos. Rejoignez notre 
              communauté FiveM et vivez des aventures uniques dans l'univers de GTA V.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 relative group">
                <span className="relative z-10">Rejoindre le serveur</span>
                <div className="absolute inset-0 bg-gradient-glow rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button variant="cyber" size="lg" className="text-lg px-8" asChild>
                <Link to="/rules">Voir les règles</Link>
              </Button>
            </div>
          </div>
          
          <div className="animate-fade-in delay-300">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-card rounded-2xl p-2 shadow-glow">
                <img 
                  src={heroImage} 
                  alt="Los Santos FiveM" 
                  className="rounded-xl shadow-card animate-float w-full hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-2 bg-gradient-glow rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;