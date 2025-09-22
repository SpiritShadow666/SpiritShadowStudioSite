import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gamepad2, Smartphone, Users } from "lucide-react";
import studioLogo from "@/assets/studio-logo.png";

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
              alt="GameForge Studio Logo" 
              className="w-24 h-24 mx-auto mb-6 animate-float"
            />
            <h1 className="text-6xl font-bold text-gradient mb-6">
              GameForge Studio
            </h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Crafting immersive Android gaming experiences that captivate players worldwide. 
              We blend innovative gameplay with cutting-edge technology to create unforgettable adventures.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg hover-lift glow-primary"
            >
              <Gamepad2 className="mr-2 h-5 w-5" />
              Explore Our Games
            </Button>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Why Choose GameForge?
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
