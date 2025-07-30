import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border/50 py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gaming-cyan/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                FiveM Los Santos
              </span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              La meilleure expérience de roleplay FiveM vous attend. Rejoignez notre 
              communauté pour vivre des aventures inoubliables dans Los Santos.
            </p>
            <div className="flex space-x-4">
              <Button variant="gaming" size="sm">
                Rejoindre Discord
              </Button>
              <Button variant="outline" size="sm">
                Voir les règles
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Liens rapides</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Métiers disponibles
                </a>
              </li>
              <li>
                <a href="#apropos" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Notre communauté
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Nous contacter
                </a>
              </li>
              <li>
                <a href="/rules" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Règlement serveur
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Communauté</h4>
            <div className="space-y-4">
              <a href="#" className="flex items-center space-x-3 text-muted-foreground hover:text-gaming-purple transition-colors duration-300 group">
                <div className="bg-gaming-purple/20 rounded-lg p-2 group-hover:bg-gaming-purple/30 transition-colors duration-300">
                  <span className="text-gaming-purple">💬</span>
                </div>
                <span>Discord</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-muted-foreground hover:text-gaming-cyan transition-colors duration-300 group">
                <div className="bg-gaming-cyan/20 rounded-lg p-2 group-hover:bg-gaming-cyan/30 transition-colors duration-300">
                  <span className="text-gaming-cyan">📺</span>
                </div>
                <span>Twitch</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-muted-foreground hover:text-gaming-orange transition-colors duration-300 group">
                <div className="bg-gaming-orange/20 rounded-lg p-2 group-hover:bg-gaming-orange/30 transition-colors duration-300">
                  <span className="text-gaming-orange">📱</span>
                </div>
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 FiveM Los Santos. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-muted-foreground">Serveur en ligne 24/7</span>
              <span className="text-sm text-gaming-cyan">200+ joueurs actifs</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;