
import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b111e] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-2 mb-6">
            <ShieldCheck className="w-8 h-8 text-[#00d2ff]" />
            <span className="text-xl font-bold tracking-tight">VIJAY <span className="text-[#00d2ff]">ELECTRONICS</span></span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Leading experts in CCTV Installation, repair, and security solutions across Unnao, Lucknow, Kanpur, and surrounding districts. Your safety is our priority.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="/#/installation" className="hover:text-[#00d2ff] transition-colors">CCTV Installation Unnao</a></li>
            <li><a href="/#/repair" className="hover:text-[#00d2ff] transition-colors">Camera Repair Unnao</a></li>
            <li><a href="/#/maintenance" className="hover:text-[#00d2ff] transition-colors">AMC Services</a></li>
            <li><a href="/#/admin" className="hover:text-[#00d2ff] transition-colors">Admin Portal</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">Service Areas</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Unnao & Purani Bazar</li>
            <li>Kanpur & Maswanpur</li>
            <li>Lucknow City</li>
            <li>Bangarmau & Safipur</li>
            <li>Nawabganj & Raibareli</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">Get in Touch</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-[#00d2ff] shrink-0" />
              <span>Vijay Electronics, Purani Bazar, Unnao, UP</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#00d2ff] shrink-0" />
              <a href="tel:+918090090051">+91 8090090051</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#00d2ff] shrink-0" />
              <a href="mailto:info@vijayelectronics.com">info@vijayelectronics.com</a>
            </li>
            <li className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-[#00d2ff] shrink-0" />
              <span>24/7 Security Support</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Vijay Electronics. All rights reserved. Professional CCTV installation and maintenance across UP.
      </div>
    </footer>
  );
};

export default Footer;
