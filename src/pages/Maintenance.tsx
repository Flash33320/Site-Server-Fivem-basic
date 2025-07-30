import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, Home, Wrench } from "lucide-react";

const Maintenance = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero px-4 py-8 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gaming-cyan/5 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gaming-purple/5 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gaming-pink/5 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="w-full max-w-lg relative z-10">
        {/* Header with logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block group">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              FiveM LS
            </h1>
            <div className="w-12 h-1 bg-gradient-primary mx-auto mt-2 rounded-full group-hover:w-16 transition-all duration-300"></div>
          </Link>
        </div>

        <Card className="bg-gradient-card backdrop-blur-xl border border-border/50 shadow-glow hover:shadow-elegant transition-all duration-500 group relative overflow-hidden">
          {/* Card glow effect */}
          <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
          
          <CardHeader className="text-center space-y-6 pb-8 relative z-10">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-gaming-orange to-gaming-pink rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
              <Wrench className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-3xl font-bold text-foreground mb-2">
                <span className="bg-gradient-to-r from-gaming-orange to-gaming-pink bg-clip-text text-transparent">
                  Maintenance en cours
                </span>
              </CardTitle>
              <CardDescription className="text-muted-foreground text-lg">
                Les inscriptions sont temporairement suspendues
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8 relative z-10 text-center">
            <div className="bg-secondary/30 border border-gaming-orange/30 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-center gap-3 text-gaming-orange">
                <AlertTriangle className="w-6 h-6" />
                <span className="text-lg font-semibold">Service temporairement indisponible</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Nous effectuons actuellement une maintenance sur notre système d'inscription pour améliorer votre expérience. 
                Les nouvelles inscriptions sont temporairement suspendues.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-gaming-cyan">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">Maintenance en cours...</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                Que faire en attendant ?
              </h3>
              
              <div className="grid gap-4 text-left">
                <div className="bg-secondary/20 rounded-lg p-4 border border-border/30">
                  <h4 className="font-semibold text-gaming-cyan mb-2">🎮 Déjà joueur ?</h4>
                  <p className="text-sm text-muted-foreground">
                    Vous pouvez toujours vous connecter avec votre compte existant
                  </p>
                </div>
                
                <div className="bg-secondary/20 rounded-lg p-4 border border-border/30">
                  <h4 className="font-semibold text-gaming-purple mb-2">📋 Nouveau joueur ?</h4>
                  <p className="text-sm text-muted-foreground">
                    Consultez nos règles et découvrez notre serveur en attendant
                  </p>
                </div>
                
                <div className="bg-secondary/20 rounded-lg p-4 border border-border/30">
                  <h4 className="font-semibold text-gaming-pink mb-2">💬 Restez informé</h4>
                  <p className="text-sm text-muted-foreground">
                    Suivez nos annonces sur Discord pour connaître la reprise des inscriptions
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button variant="gaming" size="lg" asChild>
                <Link to="/login" className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Se connecter
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Retour à l'accueil
                </Link>
              </Button>
            </div>

            <div className="text-center pt-4">
              <Link 
                to="/rules" 
                className="text-sm text-gaming-cyan hover:text-gaming-cyan/80 transition-colors duration-300"
              >
                📖 Consulter les règles du serveur
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Server status */}
        <div className="mt-8 text-center space-y-2">
          <div className="flex items-center justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 text-gaming-cyan">
              <div className="w-2 h-2 bg-gaming-cyan rounded-full animate-pulse"></div>
              Serveur en ligne
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-gaming-cyan">200+ joueurs</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-gaming-orange">Maintenance inscriptions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;