import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#222f3e] text-white">
      <div className="border-b border-gray-600">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter and get exclusive deals & updates
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff3b1f] focus:border-transparent"
              />
              <button className="px-6 py-3 bg-[#ff3b1f] text-white rounded-lg font-semibold hover:bg-[#e6321a] transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[#ff3b1f] mb-4">ShopHub</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted online shopping destination for quality products at
              unbeatable prices. We are committed to delivering excellence in
              every purchase.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} className="text-[#ff3b1f]" />
                <span className="text-sm">
                  123 Commerce St, City, State 12345
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone size={16} className="text-[#ff3b1f]" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail size={16} className="text-[#ff3b1f]" />
                <span className="text-sm">support@shophub.com</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "Home",
                "Shop",
                "Categories",
                "New Arrivals",
                "Best Sellers",
                "Sale",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#ff3b1f] transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {[
                "Contact Us",
                "FAQ",
                "Shipping Info",
                "Returns & Exchanges",
                "Size Guide",
                "Track Your Order",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#ff3b1f] transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">About & Legal</h4>
            <ul className="space-y-2">
              {[
                "About Us",
                "Careers",
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Accessibility",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#ff3b1f] transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <span>© 2025 lorem ipsum. Made with</span>
              <Heart size={16} className="text-[#ff3b1f] fill-current" />
              <span>All rights reserved.</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-300 text-sm">Follow us:</span>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Youtube, href: "#" },
                ].map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff3b1f] transition-colors duration-300 group"
                  >
                    <Icon
                      size={16}
                      className="text-gray-300 group-hover:text-white"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
