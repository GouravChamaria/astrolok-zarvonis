import { Sun, Compass, HeartHandshake, Sparkles, Shield, Moon } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { APP_NAME } from "@/lib/constants";

const features = [
  {
    icon: Compass,
    title: "Accurate Janam Kundali",
    description: "Generate instant, in-depth Vedic birth charts with precise planetary positions, Bhavas, and Dasha calculations.",
  },
  {
    icon: Sun,
    title: "Daily & Planetary Horoscopes",
    description: "Receive personalized daily, weekly, and monthly astrological forecasts customized for your Rashi and Nakshatra.",
  },
  {
    icon: HeartHandshake,
    title: "Gun Milan & Compatibility",
    description: "Comprehensive Ashta Koota marriage and relationship matching with clear analysis and guidance.",
  },
  {
    icon: Moon,
    title: "Dasha & Transit Predictions",
    description: "Stay ahead of major planetary movements including Shani Sade Sati, Rahu-Ketu transits, and Mahadasha cycles.",
  },
  {
    icon: Sparkles,
    title: "Vedic Remedies & Gemstones",
    description: "Authentic Vedic remedies, gemstone suggestions, auspicious Muhurats, and powerful mantra recommendations.",
  },
  {
    icon: Shield,
    title: "Verified Astrologers",
    description: "Connect with experienced Vedic astrologers for confidential, empathetic, and one-on-one personal guidance.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-xs uppercase tracking-widest font-body">
            Why Choose {APP_NAME}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2">
            Ancient Wisdom, Modern Convenience
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto mt-4">
            Everything you need for spiritual alignment, horoscopes, and astrological clarity in one beautifully crafted app.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-8 border border-amber-500/10 hover:border-amber-500/30 transition-all hover:shadow-lg group">
                <div className="w-12 h-12 rounded-xl bg-amber-100/80 flex items-center justify-center mb-6 text-amber-700 group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
