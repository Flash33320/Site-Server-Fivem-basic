import aboutImage from "@/assets/fivem-community.jpg";

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gaming-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gaming-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 relative">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Notre Communauté FiveM
              </span>
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-primary rounded-full"></div>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nous sommes une communauté passionnée de joueurs FiveM dédiés à créer 
              l'expérience de roleplay la plus immersive possible dans Los Santos. 
              Notre serveur offre un environnement accueillant et des histoires captivantes.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Avec des scripts personnalisés, des événements réguliers et une équipe 
              de modération active, nous garantissons une expérience de jeu exceptionnelle 
              pour tous nos membres.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">200+</div>
                <div className="text-muted-foreground text-sm">Joueurs actifs</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-muted-foreground text-sm">Serveur en ligne</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-muted-foreground text-sm">Scripts custom</div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in delay-300">
            <div className="bg-gradient-card backdrop-blur-xl rounded-2xl p-8 shadow-glow border border-border/50 relative group overflow-hidden">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-6 relative z-10">Nos valeurs</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex items-start space-x-4 group/item">
                  <div className="bg-primary/10 rounded-xl p-3 group-hover/item:bg-primary/20 transition-colors duration-300">
                    <div className="text-primary text-2xl">🎭</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover/item:text-primary transition-colors duration-300">Roleplay Immersif</h4>
                    <p className="text-muted-foreground">Des scenarios réalistes et captivants</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group/item">
                  <div className="bg-gaming-cyan/10 rounded-xl p-3 group-hover/item:bg-gaming-cyan/20 transition-colors duration-300">
                    <div className="text-gaming-cyan text-2xl">🤝</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover/item:text-gaming-cyan transition-colors duration-300">Communauté</h4>
                    <p className="text-muted-foreground">Un environnement respectueux et accueillant</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group/item">
                  <div className="bg-gaming-purple/10 rounded-xl p-3 group-hover/item:bg-gaming-purple/20 transition-colors duration-300">
                    <div className="text-gaming-purple text-2xl">⚡</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover/item:text-gaming-purple transition-colors duration-300">Performance</h4>
                    <p className="text-muted-foreground">Serveur optimisé pour une expérience fluide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 animate-fade-in delay-500">
          <div className="relative rounded-3xl overflow-hidden shadow-glow group">
            <div className="absolute -inset-2 bg-gradient-primary rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-card p-2 rounded-3xl">
              <img 
                src={aboutImage} 
                alt="Communauté FiveM Los Santos" 
                className="w-full h-80 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-2 bg-gradient-glow rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;