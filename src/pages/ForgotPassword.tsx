import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Link } from "react-router-dom";
import { Mail, Shield, ArrowLeft, RotateCcw } from "lucide-react";

const forgotPasswordSchema = z.object({
  email: z.string().email("Adresse email invalide"),
  captcha: z.string().min(1, "Veuillez compléter le captcha")
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState({ question: "", answer: "" });
  const [captchaInput, setCaptchaInput] = useState("");

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
      captcha: "",
    },
  });

  // Generate captcha question
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let answer;
    let question;
    
    switch(operation) {
      case '+':
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
        break;
      case '-':
        answer = Math.max(num1, num2) - Math.min(num1, num2);
        question = `${Math.max(num1, num2)} - ${Math.min(num1, num2)}`;
        break;
      case '*':
        answer = num1 * num2;
        question = `${num1} × ${num2}`;
        break;
      default:
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
    }
    
    setCaptchaQuestion({ question, answer: answer.toString() });
  };

  // Generate captcha on mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const onSubmit = async (data: ForgotPasswordFormData) => {
    // Verify captcha
    if (captchaInput !== captchaQuestion.answer) {
      form.setError("captcha", { message: "Réponse incorrecte au captcha" });
      generateCaptcha(); // Generate new captcha
      setCaptchaInput("");
      return;
    }

    setIsLoading(true);
    // TODO: Implémenter la logique de récupération de mot de passe avec Supabase
    console.log("Forgot password data:", data);
    
    // Simulation d'une requête
    setTimeout(() => {
      setIsLoading(false);
      setIsEmailSent(true);
    }, 1500);
  };

  if (isEmailSent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero px-4 py-8 relative overflow-hidden">
        {/* Background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gaming-cyan/5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gaming-purple/5 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-primary/5 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gaming-orange/5 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="w-full max-w-md relative z-10">
          <Card className="bg-gradient-card backdrop-blur-xl border border-border/50 shadow-glow hover:shadow-elegant transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            
            <CardHeader className="text-center space-y-6 pb-8 relative z-10">
              <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-10 h-10 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Email envoyé !
                  </span>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Vérifiez votre boîte mail pour réinitialiser votre mot de passe
                </CardDescription>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6 relative z-10">
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  Un email avec les instructions de réinitialisation a été envoyé à votre adresse email.
                </p>
                <p className="text-sm text-muted-foreground">
                  Si vous ne recevez pas l'email dans les prochaines minutes, vérifiez votre dossier spam.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <Button variant="gaming" size="lg" asChild>
                  <Link to="/login" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Retour à la connexion
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => {
                    setIsEmailSent(false);
                    form.reset();
                    setCaptchaInput("");
                    generateCaptcha();
                  }}
                  className="flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Renvoyer l'email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero px-4 py-8 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gaming-cyan/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gaming-purple/5 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-primary/5 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gaming-orange/5 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
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
            <div className="mx-auto w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-foreground mb-2">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Mot de passe oublié
                </span>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Saisissez votre email pour réinitialiser votre mot de passe
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8 relative z-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gaming-orange" />
                        Adresse email
                      </FormLabel>
                      <FormControl>
                        <div className="relative group">
                          <Input
                            type="email"
                            placeholder="votre@email.com"
                            className="h-12 bg-secondary/50 border-border/50 backdrop-blur-sm focus:bg-secondary/70 focus:border-gaming-orange/50 transition-all duration-300 pl-4 text-foreground placeholder:text-muted-foreground group-hover:shadow-card"
                            {...field}
                          />
                          <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-focus-within:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Captcha */}
                <FormField
                  control={form.control}
                  name="captcha"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Shield className="w-4 h-4 text-gaming-purple" />
                        Vérification humaine
                      </FormLabel>
                      <div className="space-y-3">
                        <div className="bg-secondary/30 border border-border/30 rounded-lg p-4 text-center">
                          <p className="text-lg font-mono text-foreground mb-2">
                            Combien font : <span className="text-gaming-cyan font-bold">{captchaQuestion.question}</span> ?
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              generateCaptcha();
                              setCaptchaInput("");
                              form.setValue("captcha", "");
                            }}
                            className="text-sm text-gaming-orange hover:text-gaming-orange/80 transition-colors"
                          >
                            Générer une nouvelle question
                          </button>
                        </div>
                        <FormControl>
                          <div className="relative group">
                            <Input
                              type="number"
                              placeholder="Votre réponse"
                              className="h-12 bg-secondary/50 border-border/50 backdrop-blur-sm focus:bg-secondary/70 focus:border-gaming-purple/50 transition-all duration-300 pl-4 text-foreground placeholder:text-muted-foreground group-hover:shadow-card"
                              value={captchaInput}
                              onChange={(e) => {
                                setCaptchaInput(e.target.value);
                                field.onChange(e.target.value);
                              }}
                            />
                            <div className="absolute inset-0 rounded-lg bg-gradient-accent opacity-0 group-focus-within:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                          </div>
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-bold shadow-glow hover:shadow-elegant transition-all duration-300 relative group overflow-hidden"
                  variant="gaming"
                  disabled={isLoading}
                >
                  <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        <span>Envoyer le lien de réinitialisation</span>
                      </>
                    )}
                  </div>
                </Button>
              </form>
            </Form>

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border/30" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-gradient-card px-4 text-muted-foreground font-medium">Vous vous souvenez ?</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="cyber" size="lg" asChild>
                  <Link to="/login" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Se connecter
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/register" className="flex items-center gap-2">
                    S'inscrire
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Info message */}
        <div className="mt-8 text-center space-y-2">
          <div className="flex items-center justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 text-gaming-cyan">
              <div className="w-2 h-2 bg-gaming-cyan rounded-full animate-pulse"></div>
              Récupération sécurisée
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-gaming-cyan">Emails chiffrés</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;