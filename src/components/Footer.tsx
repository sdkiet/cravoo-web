import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">C</span>
              </div>
              <span className="text-white font-bold text-xl">Cravoo</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              The future of food delivery is coming. Fast, fresh, and always delicious.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:hello@cravoo.app" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Learn More</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Download App (Grayed out) */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Download App</h4>
            <div className="space-y-3">
              <div className="opacity-50 cursor-not-allowed">
                <div className="bg-black rounded-lg px-4 py-3 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-xs font-bold">📱</span>
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Coming Soon</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>
              </div>
              <div className="opacity-50 cursor-not-allowed">
                <div className="bg-black rounded-lg px-4 py-3 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-xs font-bold">📱</span>
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Coming Soon</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 Cravoo. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;