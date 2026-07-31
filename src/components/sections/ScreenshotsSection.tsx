import AnimatedSection from "@/components/AnimatedSection";
import PhoneMockup from "@/components/PhoneMockup";
import { APP_NAME } from "@/lib/constants";
import screen1 from "@/assets/astrolok/Screen 1.png";
import screen2 from "@/assets/astrolok/Screen 2.png";
import screen3 from "@/assets/astrolok/Screen 3.png";
import screen4 from "@/assets/astrolok/Screen 4.png";

const screenshots = [
  { src: screen1, alt: `${APP_NAME} Kundali Screen` },
  { src: screen2, alt: `${APP_NAME} Horoscope Screen` },
  { src: screen3, alt: `${APP_NAME} Compatibility Screen` },
  { src: screen4, alt: `${APP_NAME} Astrologer Consult Screen` },
];

const ScreenshotsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-xs uppercase tracking-widest font-body">
            App Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2">
            Inside the {APP_NAME} App
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg max-w-xl mx-auto mt-4">
            Designed for clarity, elegance, and deep spiritual insights.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="flex justify-center">
                <PhoneMockup src={s.src} alt={s.alt} label={s.alt} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
