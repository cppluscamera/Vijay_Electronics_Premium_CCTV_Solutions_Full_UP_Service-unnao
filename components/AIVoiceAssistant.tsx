
import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AIVoiceAssistant: React.FC = () => {
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const speakHindi = () => {
        if (isPlaying) return;

        const text = "Namaste! Vijay Electronics mein aapka swagat hai. Hum Unnao, Kanpur, Lucknow, Bangarmau, Safipur aur Nawabganj mein professional CCTV installation, repair aur maintenance ki suvidhayein dete hain. Behtar suraksha aur bharosemand service ke liye aaj hi humse sampark karein. Dhanyawad!";

        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.lang = 'hi-IN';
        msg.rate = 0.9;
        msg.pitch = 1;

        // Try to find an Indian Female voice
        const voices = window.speechSynthesis.getVoices();
        const hindiVoice = voices.find(v => v.lang.includes('hi-IN') && (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('google')));

        if (hindiVoice) {
            msg.voice = hindiVoice;
        }

        msg.onstart = () => setIsPlaying(true);
        msg.onend = () => setIsPlaying(false);
        msg.onerror = () => setIsPlaying(false);

        window.speechSynthesis.speak(msg);
    };

    useEffect(() => {
        const handleFirstInteraction = () => {
            if (!hasInteracted) {
                setHasInteracted(true);
                // We don't want to startle the user immediately, maybe after a small delay or just wait for them to click a button
                // But the user asked for it to play. Let's try to trigger it once on the first interaction.
                // Actually, let's keep it to a button for better UX, or play it after 1 second of interaction.
                setTimeout(speakHindi, 1000);
                window.removeEventListener('click', handleFirstInteraction);
            }
        };

        window.addEventListener('click', handleFirstInteraction);
        return () => window.removeEventListener('click', handleFirstInteraction);
    }, [hasInteracted]);

    return (
        <div className="fixed bottom-24 right-6 z-40">
            <button
                onClick={speakHindi}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${isPlaying ? 'bg-[#00d2ff] scale-110 animate-pulse' : 'bg-white/10 hover:bg-[#00d2ff]/20 border border-white/20'
                    }`}
                title="AI Voice Assistant (Hindi)"
            >
                {isPlaying ? (
                    <Volume2 className="w-6 h-6 text-[#0f172a]" />
                ) : (
                    <VolumeX className="w-6 h-6 text-[#00d2ff]" />
                )}

                {/* Pulsing rings when acting as an assistant */}
                {isPlaying && (
                    <>
                        <div className="absolute inset-0 rounded-full bg-[#00d2ff] animate-ping opacity-25" />
                        <div className="absolute -inset-2 rounded-full border border-[#00d2ff] animate-pulse opacity-20" />
                    </>
                )}
            </button>

            {/* Tooltip */}
            {!isPlaying && !hasInteracted && (
                <div className="absolute bottom-full right-0 mb-4 bg-[#00d2ff] text-[#0f172a] px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap animate-bounce shadow-xl">
                    Click for AI Voice (Hindi)
                    <div className="absolute top-full right-6 border-8 border-transparent border-t-[#00d2ff]" />
                </div>
            )}
        </div>
    );
};

export default AIVoiceAssistant;
