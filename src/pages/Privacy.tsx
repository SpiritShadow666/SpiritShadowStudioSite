import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-gradient mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              How we collect, use, and protect your information
            </p>
          </div>
          
          {/* Privacy Policy Content */}
          <Card className="card-gradient p-8 border-border">
            <div className="prose prose-invert max-w-none space-y-8">
              
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  GameForge Studio collects minimal information necessary to provide and improve our gaming experiences. This may include device information, gameplay statistics, and crash reports to ensure optimal performance across Android devices.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  The information we collect is used to enhance your gaming experience, fix bugs, improve game performance, and develop new features. We never sell your personal information to third parties.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  3. Data Storage and Security
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  Your data is stored securely using industry-standard encryption methods. We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  4. Third-Party Services
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  Our games may integrate with third-party services such as Google Play Games, advertising networks, and analytics providers. These services have their own privacy policies, and we encourage you to review them.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  5. Children's Privacy
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  We are committed to protecting the privacy of children. Our games do not knowingly collect personal information from children under 13 years of age without parental consent.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  6. Your Rights
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  You have the right to access, update, or delete your personal information. You can also opt out of certain data collection practices through your device settings or by contacting us directly.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  7. Contact Us
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at: 
                  <span className="text-accent font-medium"> privacy@gameforge-studio.com</span>
                </p>
              </section>
              
              <section className="border-t border-border pt-6">
                <p className="text-muted-foreground text-sm">
                  Last updated: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </section>
              
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Privacy;