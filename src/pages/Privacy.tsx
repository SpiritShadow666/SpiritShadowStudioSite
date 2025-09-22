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
                  1. Interpretation and Definitions
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  Words with initial capital letters have meanings defined under the following conditions.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  <strong>Account</strong> means a unique account created for You to access our Service. <br />
                  <strong>Application</strong> refers to Vanguard. <br />
                  <strong>Company</strong> refers to Spirit Shadow Studio (the developer of Vanguard). <br />
                  <strong>Device</strong> means any device that can access the Service such as a computer, mobile phone or tablet. <br />
                  <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual. <br />
                  <strong>Service</strong> refers to the Application. <br />
                  <strong>You</strong> means the individual accessing or using the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  2. Collecting and Using Your Personal Data
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  <strong>Personal Data:</strong> Email address, Usage Data <br />
                  <strong>Usage Data:</strong> Includes IP address, browser type, pages visited, and device information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  3. Use of Your Personal Data
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  We may use Your data to provide and maintain our services, manage accounts, contact You, analyze usage, or comply with legal obligations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  4. Sharing of Your Personal Data
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  We may share your information with service providers, affiliates, business partners, or during business transfers. Your data is never sold or rented.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  5. Retention and Deletion
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  Data is kept only as long as necessary. You can request deletion by contacting us at the email below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  6. Security
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  We take data protection seriously but no method of transmission is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  7. Children’s Privacy
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  We do not knowingly collect information from anyone under 13. If you believe your child has provided us data, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  8. External Links
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  Our app may contain links to third-party websites. We are not responsible for their content or privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  9. Changes to This Privacy Policy
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  We may update this policy and will notify users by updating the date at the top of this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  10. Contact Us
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  If you have any questions about this Privacy Policy, You can contact us:<br />
                  Email: <span className="text-accent font-medium">spiritshadow.studio@gmail.com</span>
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
