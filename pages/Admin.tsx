
import React, { useState, useEffect } from 'react';
import { Lock, LogOut, Trash2, Calendar, Phone, MapPin, User, Mail, Database, ShieldCheck, Volume2 } from 'lucide-react';
import { getInquiries, deleteInquiry } from '../services/storageService.ts';
import { ServiceInquiry } from '../types.ts';

const Admin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [leads, setLeads] = useState<ServiceInquiry[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      setLeads(getInquiries().sort((a, b) => b.timestamp - a.timestamp));
    }
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple simulation
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const handleVoiceWelcome = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = "Welcome Administrator.";
    msg.rate = 0.9;
    msg.pitch = 1;
    
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      msg.voice = voices.find(v => v.lang.includes('en-GB') || v.lang.includes('en-US')) || voices[0];
    }
    window.speechSynthesis.speak(msg);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      deleteInquiry(id);
      setLeads(getInquiries().sort((a, b) => b.timestamp - a.timestamp));
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="glass-card p-10 rounded-3xl w-full max-w-md border border-white/10 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#00d2ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-[#00d2ff]" />
            </div>
            <h2 className="text-3xl font-bold text-white">Admin Login</h2>
            <p className="text-gray-400 text-sm mt-2">Manage your customer inquiries</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Dashboard Password</label>
              <input 
                type="password" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00d2ff] transition-colors text-white"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-xs font-medium">{error}</p>}
            <button className="w-full bg-[#00d2ff] text-[#0f172a] py-4 rounded-xl font-bold btn-glow transition-all">
              Enter Dashboard
            </button>
          </form>
          <p className="text-center text-gray-600 text-[10px] mt-8 uppercase tracking-widest">Authorized Access Only</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 animate-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-3 text-white">
            <Database className="text-[#00d2ff]" /> Lead Dashboard
          </h1>
          <p className="text-gray-400 mt-2">Total {leads.length} customer requests received.</p>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleVoiceWelcome}
            className="flex items-center justify-center space-x-2 bg-[#00d2ff]/10 border border-[#00d2ff]/20 px-6 py-3 rounded-xl hover:bg-[#00d2ff]/20 transition-colors text-[#00d2ff]"
            title="Trigger AI Voice Welcome"
          >
            <Volume2 className="w-5 h-5" />
            <span className="font-bold">Voice Greeting</span>
          </button>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center justify-center space-x-2 bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition-colors text-white"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {leads.length === 0 ? (
          <div className="glass-card p-20 rounded-3xl text-center text-gray-500">
            No inquiries found yet. All customer form submissions will appear here.
          </div>
        ) : (
          leads.map((lead) => (
            <div key={lead.id} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all group animate-in">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-[#00d2ff]/10 flex items-center justify-center text-[#00d2ff]">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-tighter font-bold">Customer</p>
                      <p className="font-bold text-white">{lead.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-tighter font-bold">Contact</p>
                      <a href={`tel:${lead.phone}`} className="font-bold text-white hover:text-[#00d2ff]">{lead.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-tighter font-bold">Location</p>
                      <p className="font-bold text-white">{lead.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-tighter font-bold">Requirement</p>
                      <span className="inline-block bg-[#00d2ff]/10 text-[#00d2ff] px-2 py-0.5 rounded text-xs font-bold">{lead.serviceType}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-tighter font-bold">Date</p>
                      <p className="text-xs text-white">{new Date(lead.timestamp).toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="max-w-[150px] truncate">
                      <p className="text-xs text-gray-500 uppercase tracking-tighter font-bold">Email</p>
                      <p className="text-xs truncate text-white">{lead.email}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-6">
                  <button 
                    onClick={() => handleDelete(lead.id)}
                    className="p-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
                    title="Delete Lead"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {lead.message && (
                <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Message</p>
                  <p className="text-gray-300 text-sm italic">{lead.message}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;
