
import React from 'react';
// Changed Tool to Wrench as Tool is not exported by lucide-react
import { Wrench, Search, ShieldAlert, Cpu, CheckCircle } from 'lucide-react';

const Repair: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="relative py-24 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d2ff]/10 to-transparent -z-10" />
        <h1 className="text-5xl lg:text-7xl font-bold mb-6">Expert <span className="text-[#00d2ff]">Repair</span> Services</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Fast troubleshooting for fuzzy footage, power issues, or broken DVRs. Professional repair in Unnao, Lucknow, Nawabganj, and across UP.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: 'No Signal Fix', icon: <ShieldAlert className="w-8 h-8" />, desc: 'Resolving connection and cabling failures.' },
          { title: 'DVR/NVR Repair', icon: <Cpu className="w-8 h-8" />, desc: 'Motherboard and hard drive troubleshooting.' },
          { title: 'Fuzzy Images', icon: <Search className="w-8 h-8" />, desc: 'Cleaning lenses and optimizing video quality.' },
          // Changed Tool usage to Wrench
          { title: 'Software Issues', icon: <Wrench className="w-8 h-8" />, desc: 'App setup and firmware updates.' }
        ].map((item, i) => (
          <div key={i} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-[#00d2ff]/20 transition-all">
            <div className="text-[#00d2ff] mb-6">{item.icon}</div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-32 glass-card p-12 rounded-[40px] text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Vijay Electronics for Repair?</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="space-y-3">
            <CheckCircle className="w-8 h-8 text-[#00d2ff] mx-auto" />
            <p className="font-bold">Genuine Parts</p>
            <p className="text-xs text-gray-500">Only original spare parts</p>
          </div>
          <div className="space-y-3">
            <CheckCircle className="w-8 h-8 text-[#00d2ff] mx-auto" />
            <p className="font-bold">Same Day Service</p>
            <p className="text-xs text-gray-500">Quick response time</p>
          </div>
          <div className="space-y-3">
            <CheckCircle className="w-8 h-8 text-[#00d2ff] mx-auto" />
            <p className="font-bold">Transparent Bills</p>
            <p className="text-xs text-gray-500">No hidden charges</p>
          </div>
        </div>
        <div className="mt-12">
          <a href="tel:+918090090051" className="bg-[#00d2ff] text-[#0f172a] px-12 py-4 rounded-xl font-bold text-lg btn-glow inline-block">
            Call Technician Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Repair;
