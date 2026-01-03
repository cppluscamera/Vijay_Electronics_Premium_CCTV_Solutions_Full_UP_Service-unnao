
import React from 'react';
import { Settings, ShieldCheck, Activity, Calendar, FileText } from 'lucide-react';

const Maintenance: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="relative py-24 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d2ff]/10 to-transparent -z-10" />
        <h1 className="text-5xl lg:text-7xl font-bold mb-6">AMC <span className="text-[#00d2ff]">Maintenance</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Prevent failures before they happen. Our AMC packages ensure your security system is always recording when it matters most.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-3xl font-bold">What's Included in AMC?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Routine Cleaning', icon: <Settings />, desc: 'Periodic cleaning of camera lenses and DVR fans.' },
              { title: 'Health Checks', icon: <Activity />, desc: 'Testing HDD health and recording consistency.' },
              { title: 'Priority Support', icon: <ShieldCheck />, desc: 'Get service requests handled on top priority.' },
              { title: 'Scheduled Visits', icon: <Calendar />, desc: 'Quarterly visits for system inspection.' }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl flex items-start space-x-4">
                <div className="text-[#00d2ff] shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-10 rounded-3xl border-[#00d2ff]/20 flex flex-col items-center justify-center text-center space-y-6">
          <FileText className="w-16 h-16 text-[#00d2ff]" />
          <h3 className="text-2xl font-bold">Standard AMC Starts at</h3>
          <div className="text-5xl font-bold text-[#00d2ff]">₹2,500<span className="text-sm text-gray-500 font-normal">/year</span></div>
          <p className="text-gray-400 text-sm">Perfect for small shops and residential setups across Lucknow, Unnao, and Raibareli.</p>
          <a href="/#inquiry" className="w-full bg-[#00d2ff] text-[#0f172a] py-4 rounded-xl font-bold btn-glow">Get AMC Quote</a>
        </div>
      </section>
    </div>
  );
};

export default Maintenance;
