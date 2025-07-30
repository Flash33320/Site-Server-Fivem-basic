import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-60 h-60 bg-gaming-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gaming-orange/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 relative">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Rejoignez-nous
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary rounded-full"></div>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Prêt à vivre l'aventure Los Santos ? Contactez-nous pour rejoindre notre communauté FiveM.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <Card className="bg-gradient-card border-border/50 shadow-glow hover:shadow-elegant transition-all duration-500 group relative overflow-hidden">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl bg-gradient-primary bg-clip-text text-transparent">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom" className="text-foreground font-medium">Nom d'utilisateur</Label>
                    <Input id="nom" placeholder="Votre pseudo" className="bg-secondary/50 border-border/50 backdrop-blur-sm" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">Discord</Label>
                    <Input id="email" placeholder="username#1234" className="bg-secondary/50 border-border/50 backdrop-blur-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sujet" className="text-foreground font-medium">Sujet</Label>
                  <Input id="sujet" placeholder="Candidature / Question / Problème" className="bg-secondary/50 border-border/50 backdrop-blur-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Décrivez votre demande..." 
                    className="min-h-[120px] bg-secondary/50 border-border/50 backdrop-blur-sm"
                  />
                </div>
                <Button variant="gaming" className="w-full">
                  Envoyer le message
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-in delay-300">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-8">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Rejoignez notre serveur
                  </span>
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gaming-purple/20 rounded-xl p-4 group-hover:bg-gaming-purple/30 transition-colors duration-300">
                      <div className="text-gaming-purple text-2xl">💬</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-gaming-purple transition-colors duration-300">Discord</h4>
                      <p className="text-muted-foreground">discord.gg/lossantos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gaming-cyan/20 rounded-xl p-4 group-hover:bg-gaming-cyan/30 transition-colors duration-300">
                      <div className="text-gaming-cyan text-2xl">🎮</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-gaming-cyan transition-colors duration-300">IP Serveur</h4>
                      <p className="text-muted-foreground">connect 192.168.1.100:30120</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gaming-orange/20 rounded-xl p-4 group-hover:bg-gaming-orange/30 transition-colors duration-300">
                      <div className="text-gaming-orange text-2xl">🌐</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-gaming-orange transition-colors duration-300">Site Web</h4>
                      <p className="text-muted-foreground">www.lossantos-rp.fr</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-card rounded-2xl p-6 border border-border/50 shadow-card group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <h4 className="font-semibold text-foreground mb-3 relative z-10">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Disponibilité 24/7
                  </span>
                </h4>
                <p className="text-muted-foreground relative z-10">
                  Notre serveur est disponible 24h/24 et 7j/7. Une équipe de modération 
                  active assure une expérience de jeu optimale à tout moment.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="cyber" className="w-full" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Discord
                  </a>
                </Button>
                <Button variant="outline" className="w-full">
                  Règlement
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;