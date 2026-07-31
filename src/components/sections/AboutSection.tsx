import AnimatedSection from "@/components/AnimatedSection";
import { COMPANY_DETAILS, APP_NAME } from "@/lib/constants";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-xs uppercase tracking-widest font-body">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2">
              Guided by Tradition, Powered by Innovation
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-amber-500/10 shadow-lg space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                <strong className="text-foreground">{APP_NAME}</strong> is a premiere mobile application developed by{" "}
                <strong className="text-foreground">{COMPANY_DETAILS.name}</strong>, aimed at bringing the timeless wisdom of Vedic astrology, Janam Kundali readings, and personalized spiritual guidance to millions of users globally.
              </p>
              <p>
                Whether you are seeking clarity on your career, love, health, or personal growth, AstroLok provides accurate astrological calculations and empathetic guidance to illuminate your path.
              </p>

              <div className="pt-6 border-t border-border/60 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-bold text-foreground font-display text-base mb-1">Company Details</h4>
                  <p>{COMPANY_DETAILS.legalName}</p>
                  <p className="text-xs text-muted-foreground mt-1">{COMPANY_DETAILS.fullAddress}</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground font-display text-base mb-1">Contact Information</h4>
                  <p>Email: {COMPANY_DETAILS.email}</p>
                  <p>Phone: {COMPANY_DETAILS.phoneFormatted}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
