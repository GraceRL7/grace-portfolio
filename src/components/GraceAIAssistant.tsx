import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import GraceRobotCanvas from './GraceRobotCanvas';
import { getAIResponse } from '../data/portfolioKnowledge';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

export default function GraceAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: "Hey 👋\n\nI'm Grace AI.\n\nI know everything about Grace's projects, skills, experience, achievements, and journey.\n\nAsk me anything.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Web Audio API Synthesizer for futuristic robot blips & chimes
  const playRobotSound = (type: 'hover' | 'open' | 'send' | 'reply') => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      if (type === 'hover') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === 'open') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      } else if (type === 'send') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(260, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } else if (type === 'reply') {
        const now = ctx.currentTime;
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        osc1.type = 'sine';
        osc2.type = 'sine';
        osc1.frequency.setValueAtTime(587.33, now); // D5
        osc2.frequency.setValueAtTime(880, now + 0.08); // A5
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.08);
        osc2.start(now + 0.08);
        osc2.stop(now + 0.2);
      }
    } catch {
      // Audio context fallbacks
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
    };

    playRobotSound('send');
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Instant bot action responses matching exact prompt specifications
    setTimeout(() => {
      let replyText = '';
      let actionSection = '';

      const lower = query.toLowerCase();
      if (lower.includes('project')) {
        replyText = 'Opening Projects.';
        actionSection = '#projects';
      } else if (lower.includes('achievement')) {
        replyText = 'Opening Achievements.';
        actionSection = '#achievements';
      } else if (lower.includes('skill')) {
        replyText = 'Opening Skills.';
        actionSection = '#skills';
      } else if (lower.includes('contact') || lower.includes('reach') || lower.includes('email')) {
        replyText = 'Taking you to the Contact section.';
        actionSection = '#contact';
      } else {
        const res = getAIResponse(query);
        replyText = res.reply;
        actionSection = res.actionSection || '';
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: replyText,
      };

      setMessages((prev) => [...prev, botMsg]);
      playRobotSound('reply');

      if (actionSection) {
        setTimeout(() => {
          const el = document.querySelector(actionSection);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    }, 300);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-4 pointer-events-auto">
      {/* Slide-Out Glassmorphic Black-and-White AI Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-[90vw] sm:w-[380px] h-[520px] rounded-3xl bg-[#0A0A0A]/95 border border-white/20 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden text-white"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-black">
              <div>
                <h3 className="font-['Bebas_Neue',sans-serif] text-2xl font-normal tracking-[0.1em] text-white leading-none">
                  GRACE AI
                </h3>
                <span className="text-[11px] font-mono text-[#BFBFBF] tracking-widest uppercase mt-1 block">
                  3D Portfolio Assistant
                </span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Container (Dark & Lighter Rounded Cards) */}
            <div className="flex-1 p-5 overflow-y-auto space-y-4 font-['Inter',sans-serif] text-sm leading-relaxed">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-[#262626] border border-white/15 text-white font-medium shadow-md'
                        : 'bg-[#141414] border border-white/10 text-[#D4D4D4] font-light'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Chips (Monochrome Black/White) */}
            <div className="px-4 py-2.5 flex items-center gap-2 overflow-x-auto border-t border-white/10 bg-black no-scrollbar">
              <button
                onClick={() => handleSend('Show Projects')}
                className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 text-[11px] font-mono text-white/80 shrink-0 hover:bg-white hover:text-black transition-all"
              >
                Show Projects
              </button>
              <button
                onClick={() => handleSend('Show Skills')}
                className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 text-[11px] font-mono text-white/80 shrink-0 hover:bg-white hover:text-black transition-all"
              >
                Show Skills
              </button>
              <button
                onClick={() => handleSend('Show Achievements')}
                className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 text-[11px] font-mono text-white/80 shrink-0 hover:bg-white hover:text-black transition-all"
              >
                Show Achievements
              </button>
              <button
                onClick={() => handleSend('Contact Grace')}
                className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 text-[11px] font-mono text-white/80 shrink-0 hover:bg-white hover:text-black transition-all"
              >
                Contact Grace
              </button>
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-white/10 bg-black flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Grace AI..."
                className="flex-1 bg-[#121212] border border-white/20 rounded-full px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="p-2.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating 3D Robot Interactive Character */}
      <div
        onMouseEnter={() => {
          setIsHovered(true);
          playRobotSound('hover');
        }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          playRobotSound('open');
          setIsOpen(!isOpen);
        }}
        className="relative cursor-pointer transition-transform hover:scale-105"
        title="Click to talk to Grace AI"
      >
        <GraceRobotCanvas isHovered={isHovered} />
      </div>
    </div>
  );
}
