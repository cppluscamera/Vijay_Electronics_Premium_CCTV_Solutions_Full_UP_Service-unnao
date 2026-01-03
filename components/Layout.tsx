import React from 'react';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import WhatsAppButton from './WhatsAppButton.tsx';
import AIVoiceAssistant from './AIVoiceAssistant.tsx';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a]">
      <Navbar />
      <main className="flex-grow pt-24 text-white">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <AIVoiceAssistant />
    </div>
  );
};

export default Layout;
