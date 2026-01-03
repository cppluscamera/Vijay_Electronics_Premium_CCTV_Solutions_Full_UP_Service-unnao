
import React from 'react';
import { Camera, ShieldCheck, Zap, Monitor, ArrowRight, Check } from 'lucide-react';

const Installation: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="relative py-24 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d2ff]/10 to-transparent -z-10" />
        <h1 className="text-5xl lg:text-7xl font-bold mb-6">CCTV <span className="text-[#00d2ff]">Installation</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          From basic home security to high-end industrial IP solutions. We are the top choice for CCTV installation in Unnao, Lucknow, and surrounding districts.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Comprehensive Setup Solutions</h2>
          <p className="text-gray-400 leading-relaxed">
            At Vijay Electronics, we don't just hang cameras; we design security ecosystems. Our team analyzes your property's blind spots and ensures maximum coverage.
          </p>
          <div className="space-y-4">
            {[
              'Professional cabling with high-quality conduits',
              'Remote mobile monitoring setup on all devices',
              'High-definition IP, Analog, and Wireless solutions',
              'Motion detection and night vision calibration',
              'Free training for system operation'
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="bg-[#00d2ff]/20 p-1 rounded-full mt-1">
                  <Check className="w-4 h-4 text-[#00d2ff]" />
                </div>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          <a href="/#inquiry" className="inline-flex items-center space-x-3 bg-[#00d2ff] text-[#0f172a] px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
            <span>Get a Free Site Survey</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-8">
            <div className="glass-card p-6 rounded-2xl">
              <Camera className="w-10 h-10 text-[#00d2ff] mb-4" />
              <h4 className="font-bold mb-2">4K Ultra HD</h4>
              <p className="text-xs text-gray-500">Crystal clear identification</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <Zap className="w-10 h-10 text-[#00d2ff] mb-4" />
              <h4 className="font-bold mb-2">Solar Powered</h4>
              <p className="text-xs text-gray-500">Off-grid security solutions</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="glass-card p-6 rounded-2xl">
              <Monitor className="w-10 h-10 text-[#00d2ff] mb-4" />
              <h4 className="font-bold mb-2">Centralized Monitoring</h4>
              <p className="text-xs text-gray-500">Multi-location viewing</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <ShieldCheck className="w-10 h-10 text-[#00d2ff] mb-4" />
              <h4 className="font-bold mb-2">2-Year Warranty</h4>
              <p className="text-xs text-gray-500">On all Hikvision & CP Plus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Popular Packages</h2>
          <p className="text-gray-400">Choose a configuration that fits your space.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Home Basic', cameras: '2 Dome Cameras', storage: '500GB HDD', price: '₹9,999' },
            { title: 'Shop Expert', cameras: '4 HD Cameras', storage: '1TB HDD', price: '₹14,999' },
            { title: 'Industry Pro', cameras: '8 IP Cameras', storage: '4TB HDD', price: 'Contact Us' }
          ].map((p, i) => (
            <div key={i} className="glass-card p-10 rounded-3xl text-center flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-6">{p.title}</h3>
              <div className="text-[#00d2ff] text-4xl font-bold mb-8">{p.price}</div>
              <ul className="space-y-4 text-gray-400 mb-8 text-sm">
                <li>{p.cameras}</li>
                <li>{p.storage}</li>
                <li>Full Mobile Integration</li>
                <li>Includes Installation</li>
              </ul>
              <a href="/#inquiry" className="w-full bg-white/5 border border-white/10 py-3 rounded-xl font-bold hover:bg-[#00d2ff] hover:text-[#0f172a] transition-all">Select Plan</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Installation;
