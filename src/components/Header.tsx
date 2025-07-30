
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-xl border-b border-border/50 sticky top-0 z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              <span className="relative">
                FiveM LS
                <div className="absolute -inset-1 bg-gradient-primary blur opacity-20"></div>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 relative group">
              <span>Accueil</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="/#services" className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 relative group">
              <span>Métiers</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="/#apropos" className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 relative group">
              <span>Communauté</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
          </nav>
          
          <Button variant="gaming" size="sm" asChild>
            <Link to="/login">Rejoindre</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
