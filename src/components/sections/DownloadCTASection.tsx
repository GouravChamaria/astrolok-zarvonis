import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { PLAY_STORE_URL, APP_NAME } from "@/lib/constants";

const DownloadCTASection = () => {
  return (
    <section id="download" className="py-20 lg:py-28 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 relative overflow-hidden">
      <div className="absolute inset-0 mandala-bg opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-amber-950 mb-4">
            Begin Your Journey With Peace Today.
          </h2>
          <p className="text-amber-950/80 font-body text-lg mb-8 max-w-xl mx-auto font-medium">
            Download {APP_NAME} free on Android devices and consult AI Pandit Ji anytime.
          </p>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full bg-slate-950 text-amber-400 hover:bg-slate-900 hover:scale-[1.04] transition-transform shadow-xl px-10 py-6 text-base font-bold">
              <Download className="w-5 h-5 mr-2" />
              Google Play Store
            </Button>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DownloadCTASection;
