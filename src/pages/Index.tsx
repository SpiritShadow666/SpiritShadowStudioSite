import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Gamepad2, Smartphone, Users, Rocket } from "lucide-react";
import studioLogo from "@/assets/studio-logo.png";
import comingSoonGame from "@/assets/coming-soon-game.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <img 
              src={studioLogo} 
              alt="Spirit Shadow Studio Logo" 
              className="w-24 h-24 mx-auto mb-6 animate-float"
            />
            <h1 className="text-6xl font-bold text-gradient mb-6">
              Spirit Shadow Studio
            </h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Crafting immersive Android gaming experiences that captivate players worldwide. 
              We blend innovative gameplay with cutting-edge technology to create unforgettable adventures.
            </p>
          </div>
        </div>
      </section>
      
      {/* Coming Soon Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Rocket className="w-8 h-8 text-primary mr-3 animate-float" />
              <h2 className="text-4xl font-bold text-gradient">
                Coming Soon
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get ready for our most ambitious project yet
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="card-gradient overflow-hidden border-border hover-lift">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={comingSoonGame} 
                    alt="Cosmic Odyssey - Coming Soon Game" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:hidden"></div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gradient mb-4">
                    Vanguard
                  </h3>
                  <p className="text-foreground/90 mb-6 leading-relaxed">
                    a fantasy-themed card game where players summon powerful creatures, cast spells, and battle across immersive campaigns. Build your custom deck, unlock legendary cards, and conquer challenging foes in both PvE and competitive modes.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Gamepad2 className="w-4 h-4 mr-1" />
                      Action/Adventure
                    </span>
                    <span className="flex items-center">
                      <Smartphone className="w-4 h-4 mr-1" />
                      Android Optimized
                    </span>
                  </div>
                  <div className="mt-6">
                    <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      Launch: Q2 2024
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Why Choose Spirit Shadow?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're passionate about creating games that bring joy and excitement to millions of Android users
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-gradient p-8 text-center hover-lift border-border">
              <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mobile-First Design</h3>
              <p className="text-muted-foreground">
                Every game is meticulously crafted for the Android platform, ensuring smooth performance and intuitive touch controls.
              </p>
            </Card>
            
            <Card className="card-gradient p-8 text-center hover-lift border-border">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Player-Centric</h3>
              <p className="text-muted-foreground">
                We listen to our community and continuously update our games based on player feedback and emerging trends.
              </p>
            </Card>
            
            <Card className="card-gradient p-8 text-center hover-lift border-border">
              <Gamepad2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation Driven</h3>
              <p className="text-muted-foreground">
                Using the latest technologies and creative storytelling to push the boundaries of mobile gaming.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
