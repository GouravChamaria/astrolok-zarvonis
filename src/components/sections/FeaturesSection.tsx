import { Compass, MessageSquare, Sun, Sparkles, Globe, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { APP_NAME } from "@/lib/constants";

const features = [
  {
    icon: Compass,
    title: "Precise Kundli & Birth Charts",
    description: "Calculate exact astrological birth charts based on your full name, date, time, and city of birth.",
  },
  {
    icon: MessageSquare,
    title: "AI Pandit Ji Guidance",
    description: "Chat 24/7 with Sastri Ji to receive instant, personalized advice for career, marriage, health, and partner compatibility.",
  },
  {
    icon: Sun,
    title: "Daily Horoscope Predictions",
    description: "Stay aligned with divine planetary transits through tailored daily horoscope readings and insights.",
  },
  {
    icon: Sparkles,
    title: "Planetary & Dasha Analysis",
    description: "Understand the placement of major planets in your houses to unlock peace and overcome life obstacles.",
  },
  {
    icon: Globe,
    title: "Bilingual Chat (Hindi & English)",
    description: "Switch seamlessly between Hindi and English to consult AI Pandit Ji in your preferred language.",
  },
  {
    icon: ShieldCheck,
    title: "100% Private & Confidential",
    description: "Your birth details and personal questions remain strictly encrypted, private, and confidential.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-amber-600 font-bold text-xs uppercase tracking-widest font-body">
            Why Choose {APP_NAME}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2">
            Ancient Wisdom, Modern AI Convenience
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto mt-4">
            Everything you need for spiritual alignment, horoscopes, and astrological clarity in one serene experience.
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
