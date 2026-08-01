import { Link } from "react-router-dom";
import logo from "@/assets/astrorekha/logo.png";
import { COMPANY_DETAILS, APP_NAME } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-amber-100/80 py-16 font-body">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-amber-900/60">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt={APP_NAME} className="h-10 w-10 rounded-xl object-cover" />
              <span className="font-display text-2xl font-bold text-white">{APP_NAME}</span>
            </div>
            <p className="text-sm max-w-sm text-amber-200/70">
              Vedic Astrology, Janam Kundali readings, Daily Horoscopes & Spiritual Guidance for personal alignment and life direction.
            </p>
            <p className="text-xs text-amber-300/60">
              Developed & Maintained by <strong className="text-white">{COMPANY_DETAILS.name}</strong>
            </p>
          </div>

          <div>
            <h4 className="font-display text-white font-bold mb-4 text-sm tracking-wider uppercase">Legal & Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-amber-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white font-bold mb-4 text-sm tracking-wider uppercase">Corporate Office</h4>
            <p className="text-xs text-amber-200/70 leading-relaxed">
              {COMPANY_DETAILS.fullAddress}
            </p>
            <p className="text-xs text-amber-200/70 mt-2">GSTIN: {COMPANY_DETAILS.gstin}</p>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-amber-400/50">
          <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
