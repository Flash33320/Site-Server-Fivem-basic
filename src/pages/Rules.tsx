import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Rules = () => {
  const rules = [
    {
      category: "Règles générales",
      items: [
        "Respecter tous les joueurs, pas d'insultes ou de harcèlement",
        "Aucun cheat, hack ou exploitation de bugs autorisé",
        "Respecter les décisions des administrateurs",
        "Pas de spam dans le chat vocal ou textuel",
        "Utiliser un nom de personnage réaliste (pas de trolls)"
      ]
    },
    {
      category: "Règles de Roleplay",
      items: [
        "Rester en personnage à tout moment (IC - In Character)",
        "Pas de métagaming (utiliser des infos OOC en IC)",
        "Pas de powergaming (forcer des actions sur d'autres joueurs)",
        "Respecter la mort de votre personnage (NLR - New Life Rule)",
        "Pas de revenge kill après une mort"
      ]
    },
    {
      category: "Règles véhicules",
      items: [
        "Conduire de manière réaliste selon votre personnage",
        "Pas de VDM (Vehicle Death Match) intentionnel",
        "Respecter le code de la route de base",
        "Pas de conduite kamikaze sans raison RP",
        "Stationner correctement vos véhicules"
      ]
    },
    {
      category: "Règles criminelles",
      items: [
        "Maximum 4 personnes par groupe criminel",
        "Attendre 15 minutes entre chaque braquage",
        "Pas de kill sans raison RP valable",
        "Négocier avant d'utiliser la violence",
        "Respecter les zones sécurisées (hôpital, commissariat)"
      ]
    },
    {
      category: "Communication",
      items: [
        "Discord obligatoire pour la communication OOC",
        "Micro de qualité correcte exigé",
        "Pas de musique dans le micro",
        "Utiliser /me pour les actions non-verbales",
        "Pas de discussions OOC en vocal in-game"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Règlement du{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Serveur FiveM
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bienvenue sur notre serveur FiveM Los Santos. Veuillez lire attentivement 
            et respecter toutes les règles ci-dessous pour garantir une expérience 
            de jeu agréable pour tous.
          </p>
        </div>

        <div className="grid gap-8">
          {rules.map((section, index) => (
            <Card key={index} className="border border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-gradient-primary/10">
                    {index + 1}
                  </Badge>
                  {section.category}
                </CardTitle>
                <CardDescription>
                  Règles essentielles à respecter dans cette catégorie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.items.map((rule, ruleIndex) => (
                    <div key={ruleIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">{rule}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-12" />

        <Card className="border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-destructive">⚠️ Sanctions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p><strong>1ère infraction :</strong> Avertissement</p>
              <p><strong>2ème infraction :</strong> Kick temporaire (1-24h)</p>
              <p><strong>3ème infraction :</strong> Ban temporaire (1-7 jours)</p>
              <p><strong>Infractions graves :</strong> Ban permanent</p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Pour toute question concernant le règlement, contactez l'équipe d'administration 
            sur notre Discord officiel.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Rules;