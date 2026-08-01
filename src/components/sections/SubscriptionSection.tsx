import { Check, Download, ShieldCheck, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { PLAY_STORE_URL, APP_NAME } from "@/lib/constants";

const benefits = [
  "Unlimited 24/7 consultation with AI Pandit Ji (Sastri Ji)",
  "Full Kundli calculation & astrological chart analysis",
  "Daily personalized horoscope readings",
  "Career, marriage, health, and relationship guidance",
  "Ad-free & distraction-free peaceful app experience",
  "Seamless Hindi & English language support",
];

const SubscriptionSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/60 text-amber-950 font-bold text-xs tracking-wide uppercase font-body mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Transparent Trial Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Unlock Divine Guidance with {APP_NAME}
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
              Get complete unlimited access for just ₹1 for your introductory trial, then continue your journey seamlessly.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-card rounded-3xl border-2 border-amber-500/30 p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Highlight Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-slate-950 text-xs font-black uppercase px-6 py-1.5 rounded-bl-2xl tracking-wider shadow-md">
                Introductory Trial
              </div>

              {/* Pricing Hero Box */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 mb-8 border-b border-border/80">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-700 font-body block mb-1">
                    Special Launch Trial
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-display font-black text-foreground">₹1</span>
                    <span className="text-lg font-semibold text-muted-foreground font-body">introductory trial</span>
                  </div>
                  <p className="text-sm font-medium text-amber-800 mt-1 font-body flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-600" />
                    Personalized readings • Vedic Astrology • Accurate Charts
                  </p>
                </div>

                <div className="w-full md:w-auto text-center md:text-right">
                  <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full md:w-auto">
                    <Button className="w-full md:w-auto rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 hover:scale-[1.03] transition-all shadow-lg px-8 py-6 text-base font-bold">
                      <Download className="w-5 h-5 mr-2" />
                      Start ₹1 Trial Now
                    </Button>
                  </a>
                  <span className="text-[11px] text-muted-foreground mt-2 block font-body">
                    Cancel anytime in Google Play
                  </span>
                </div>
              </div>

              {/* Plan Benefits */}
              <h3 className="text-base font-bold text-foreground mb-4 font-display">
                Everything Included in Your Trial:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100/90 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5 text-amber-800" />
                    </div>
                    <span className="text-foreground font-body text-sm font-medium">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Guarantee */}
              <div className="pt-6 border-t border-border/60 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-body">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Secure Billing via Google Play</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>No Long-term Contract</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
