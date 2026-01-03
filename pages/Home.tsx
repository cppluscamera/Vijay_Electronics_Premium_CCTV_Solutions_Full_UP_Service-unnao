
import React, { useState } from 'react';
// Changed Tool to Wrench as Tool is not exported by lucide-react
import { Shield, Settings, Wrench, CheckCircle, ArrowRight, User, Star } from 'lucide-react';
import { saveInquiry } from '../services/storageService.ts';

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Installation' as const,
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveInquiry(formData);
    setSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: 'Installation',
      location: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const services = [
    {
      title: 'Expert Installation',
      desc: 'High-definition IP & Analog camera setups for homes, shops, and industries in Unnao & Kanpur.',
      icon: <Shield className="w-10 h-10 text-[#00d2ff]" />,
      link: '/#/installation'
    },
    {
      title: 'Fast Repairs',
      desc: 'Facing issues with DVR/NVR or fuzzy footage? We offer same-day repair services in Kanpur Jajmau.',
      // Changed Tool to Wrench
      icon: <Wrench className="w-10 h-10 text-[#00d2ff]" />,
      link: '/#/repair'
    },
    {
      title: 'AMC Support',
      desc: 'Keep your systems running 24/7 with our affordable Annual Maintenance Contracts (AMC).',
      icon: <Settings className="w-10 h-10 text-[#00d2ff]" />,
      link: '/#/maintenance'
    }
  ];

  return (
    <div className="space-y-32 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 lg:pt-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d2ff] rounded-full blur-[128px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full blur-[128px]" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-8 animate-in">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-[#00d2ff]">
              <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-pulse" />
              <span>Serving Unnao, Kanpur, Lucknow & Major UP Areas</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Secure Your World with <span className="text-gradient">Precision.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              Vijay Electronics brings state-of-the-art security solutions. From Unnao and Kanpur to Lucknow, Bangarmau, and Raibareli — we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#inquiry" className="bg-[#00d2ff] text-[#0f172a] px-8 py-4 rounded-xl font-bold text-center hover:scale-105 transition-all btn-glow flex items-center justify-center space-x-2">
                <span>Book Free Inspection</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/#/installation" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-white/10 transition-all">
                View Solutions
              </a>
            </div>
          </div>
          <div className="relative animate-in">
            <img
              src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800"
              alt="CCTV Setup"
              className="rounded-3xl shadow-2xl border border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-2xl hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="bg-[#00d2ff] p-3 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-[#0f172a]" />
                </div>
                <div>
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-xs text-gray-400">Installations Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our Core Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Specialized security and electronics services tailored for residential and commercial spaces.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="glass-card p-10 rounded-3xl hover:border-[#00d2ff]/30 transition-all group">
              <div className="mb-6 bg-white/5 w-fit p-4 rounded-2xl group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 mb-8 text-sm leading-relaxed">{s.desc}</p>
              <a href={s.link} className="flex items-center space-x-2 text-[#00d2ff] font-bold hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-[40px] overflow-hidden grid lg:grid-cols-2 border border-white/10">
          <div className="p-12 bg-gradient-to-br from-[#00d2ff]/10 to-transparent flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">Request a Quote</h2>
            <p className="text-gray-400 mb-8">Fill out the form and our expert technician will contact you within 2 hours. Service available in Unnao, Kanpur, Lucknow, Bangarmau, Safipur, Raibareli, and Nawabganj.</p>

            <div className="space-y-6">
              {[
                'Free on-site consultation',
                'Transparent pricing - no hidden costs',
                'Certified equipment & warranty',
                '24/7 technical support'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#00d2ff]" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-12 bg-[#0f172a]/50">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Sent Successfully!</h3>
                <p className="text-gray-400">We will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00d2ff] transition-colors text-white"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00d2ff] transition-colors text-white"
                      placeholder="10 digit number"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00d2ff] transition-colors text-white"
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Service Needed</label>
                    <select
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00d2ff] transition-colors text-white"
                      value={formData.serviceType}
                      onChange={e => setFormData({ ...formData, serviceType: e.target.value as any })}
                    >
                      <option className="bg-[#0f172a]" value="Installation">CCTV Installation</option>
                      <option className="bg-[#0f172a]" value="Repair">System Repair</option>
                      <option className="bg-[#0f172a]" value="Maintenance">AMC Maintenance</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Location</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00d2ff] transition-colors text-white"
                      placeholder="e.g. Purani Bazar"
                      value={formData.location}
                      onChange={e => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Additional Details</label>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00d2ff] transition-colors min-h-[100px] text-white"
                    placeholder="Describe your requirement..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button className="w-full bg-[#00d2ff] text-[#0f172a] py-4 rounded-xl font-bold hover:scale-[1.02] transition-all btn-glow">
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Trusted by Hundreds</h2>
          <p className="text-gray-400">What our clients in Unnao and Kanpur say about us.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Amit Sharma', loc: 'Purani Bazar, Unnao', text: 'Excellent CCTV installation. The quality of cameras and cabling is very professional.' },
            { name: 'Siddharth Singh', loc: 'Unnao City Center', text: 'Vijay Electronics fixed our complex NVR issue in just 2 hours. Highly recommended for repairs!' },
            { name: 'Priya Gupta', loc: 'Maswanpur, Kanpur', text: 'We have an AMC with them for our office. Very reliable service and prompt response.' }
          ].map((t, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl relative">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#00d2ff] text-[#00d2ff]" />)}
              </div>
              <p className="text-gray-300 mb-6 italic">"{t.text}"</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-[#00d2ff]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
