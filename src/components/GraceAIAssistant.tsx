import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Trash2, Sparkles } from 'lucide-react';
import GraceRobotCanvas from './GraceRobotCanvas';
import { useTheme } from '../context/ThemeContext';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp?: string;
  isError?: boolean;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'bot',
    text: "Welcome 👋\n\nI'm Grace AI — an autonomous portfolio assistant powered by n8n workflows & Gemini AI.\n\nAsk me about Grace's full-stack applications, AI automation pipelines, skills, or experience.",
    timestamp: 'Just now',
  },
];

const LOCAL_STORAGE_KEY = 'grace_ai_chat_history_v2';
const N8N_WEBHOOK_URL = 'https://n8n.srv965596.hstgr.cloud/webhook/grace-ai';

export default function GraceAIAssistant() {
  const { theme } = useTheme();
  const isBeach = theme === 'beach';

  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [soundEnabled] = useState(true);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_MESSAGES;
    } catch {
      return INITIAL_MESSAGES;
    }
  });

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [hasPlayedGreeting, setHasPlayedGreeting] = useState(false);

  // Voice Greeting Audio & Speech Synthesis Player
  const playVoiceGreeting = () => {
    if (hasPlayedGreeting) return;
    setHasPlayedGreeting(true);

    try {
      const audio = new Audio('/assets/hello-robot.mp3');
      audio.volume = 0.7;
      audio.play().then(() => {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance("Hello! I'm Grace AI. Welcome to Grace Lewis's portfolio. How can I help you today?");
          utterance.pitch = 1.4;
          utterance.rate = 1.05;
          utterance.volume = 0.85;
          const voices = window.speechSynthesis.getVoices();
          const preferredVoice = voices.find(v => v.lang.includes('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha')));
          if (preferredVoice) utterance.voice = preferredVoice;
          setTimeout(() => {
            window.speechSynthesis.speak(utterance);
          }, 350);
        }
      }).catch(() => {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance("Hello! I'm Grace AI. Welcome to Grace Lewis's portfolio. How can I help you today?");
          utterance.pitch = 1.4;
          utterance.rate = 1.05;
          window.speechSynthesis.speak(utterance);
        }
      });
    } catch {
      // Audio playback fallback
    }
  };

  // Audio Synthesizer
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
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
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
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
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
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
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
        osc1.frequency.setValueAtTime(587.33, now);
        osc2.frequency.setValueAtTime(880, now + 0.08);
        gain.gain.setValueAtTime(0.05, now);
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
      // Audio Context Fallback
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleClearHistory = () => {
    setMessages(INITIAL_MESSAGES);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch {
      // Storage fallback
    }
  };

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    playRobotSound('send');
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    let botResponseText = '';
    let isErr = false;

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*',
        },
        body: JSON.stringify({ chatInput: query }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const responseText = await response.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch {
        data = responseText;
      }

      if (typeof data === 'string' && data.trim()) {
        botResponseText = data;
      } else if (typeof data === 'object' && data !== null) {
        botResponseText = data.output || data.response || data.message || data.text || '';
        if (!botResponseText && Array.isArray(data) && data[0]) {
          botResponseText = data[0].output || data[0].response || data[0].message || data[0].text || (typeof data[0] === 'string' ? data[0] : '');
        }
      }

      if (!botResponseText || !botResponseText.trim()) {
        const q = query.toLowerCase();
        if (q.includes('project') || q.includes('show projects') || q.includes('work') || q.includes('built')) {
          botResponseText = "Here are Grace's top featured projects:\n\n• **El Mundo Sports** - Live sports club website built with WordPress & Elementor\n• **Vidhyardhi School** - Modern educational institution portal using React & Tailwind\n• **Svasthya Fresh** - Full-stack real-time admin management system\n• **Sportify** - Digital sports trials management web app\n• **HomiFi** - Role-based PG management platform\n\nYou can scroll down to the Projects section to explore live links & GitHub repositories!";
        } else if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language')) {
          botResponseText = "Grace's core technical stack includes:\n\n• **Frontend:** React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS\n• **Backend & DB:** MySQL, Firebase, REST APIs, PHP\n• **AI & Automation:** n8n Workflows, Google Gemini AI, Webhooks, Chatbot Integration\n• **CMS & Tools:** WordPress, Elementor, GitHub, VS Code, Postman, Vercel, Canva";
        } else if (q.includes('ai') || q.includes('automation') || q.includes('n8n') || q.includes('workflow') || q.includes('gemini')) {
          botResponseText = "Grace specializes in AI & Workflow Automation:\n\n⚡ **n8n Automation Pipelines:** Engineered end-to-end autonomous business workflows.\n🤖 **Google Gemini AI Integration:** Built smart prompt-based AI assistants and automated query handling.\n🔗 **Webhooks & APIs:** Connected frontend UIs to backend microservices, Google Sheets, Gmail API, and hostinger VPS webhooks.\n💼 **Experience:** AI Automation Intern at Jivrus Technologies.";
        } else if (q.includes('about') || q.includes('who') || q.includes('grace') || q.includes('mca')) {
          botResponseText = "Grace Reshal Lewis is a Web Developer, AI Automation Engineer, and MCA Postgraduate student based in Bengaluru, Karnataka.\n\nShe specializes in building responsive web applications, integrating APIs, automating workflows using n8n & Gemini AI, and creating digital user experiences that stand out.";
        } else if (q.includes('football') || q.includes('sport') || q.includes('athlete') || q.includes('puraskar') || q.includes('achievement')) {
          botResponseText = "Grace is a high-performance state & university athlete:\n\n• **Rajya Puraskar Award** recipient under Bharat Scouts & Guides\n• **South Zone Inter-University Football** representative for Mangalore University\n• **KSFA B-Division League** player for El Mundo FC\n• **Overall Champions** at Manoeuvre 2.0 IT Fest (2025)\n• **Co-Convenor** for SHELLS 2026 National IT Fest";
        } else if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach')) {
          botResponseText = "You can reach Grace directly:\n\n📧 **Email:** graceworkspace777@gmail.com\n💼 **LinkedIn:** linkedin.com/in/grace-reshal-lewis-5b5178290\n📍 **Location:** Bengaluru, Karnataka\n\nOr scroll to the Contact section to submit an automated query form!";
        } else {
          botResponseText = "Grace AI is here! Grace is a Web Developer & AI Automation Engineer skilled in React, TypeScript, n8n, and WordPress. Feel free to ask about her projects, skills, achievements, or contact details!";
        }
      }
    } catch {
      isErr = true;
      const q = query.toLowerCase();
      if (q.includes('project') || q.includes('show projects') || q.includes('work') || q.includes('built')) {
        botResponseText = "Here are Grace's top featured projects:\n\n• **El Mundo Sports** - Live sports club website built with WordPress & Elementor\n• **Vidhyardhi School** - Modern educational institution portal using React & Tailwind\n• **Svasthya Fresh** - Full-stack real-time admin management system\n• **Sportify** - Digital sports trials management web app\n• **HomiFi** - Role-based PG management platform\n\nYou can scroll down to the Projects section to explore live links & GitHub repositories!";
        isErr = false;
      } else if (q.includes('ai') || q.includes('automation') || q.includes('n8n') || q.includes('workflow') || q.includes('gemini')) {
        botResponseText = "Grace specializes in AI & Workflow Automation:\n\n⚡ **n8n Automation Pipelines:** Engineered end-to-end autonomous business workflows.\n🤖 **Google Gemini AI Integration:** Built smart prompt-based AI assistants and automated query handling.\n🔗 **Webhooks & APIs:** Connected frontend UIs to backend microservices, Google Sheets, Gmail API, and hostinger VPS webhooks.\n💼 **Experience:** AI Automation Intern at Jivrus Technologies.";
        isErr = false;
      } else if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language')) {
        botResponseText = "Grace's core technical stack includes:\n\n• **Frontend:** React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS\n• **Backend & DB:** MySQL, Firebase, REST APIs, PHP\n• **AI & Automation:** n8n Workflows, Google Gemini AI, Webhooks, Chatbot Integration\n• **CMS & Tools:** WordPress, Elementor, GitHub, VS Code, Postman, Vercel, Canva";
        isErr = false;
      } else if (q.includes('about') || q.includes('who') || q.includes('grace') || q.includes('mca')) {
        botResponseText = "Grace Reshal Lewis is a Web Developer, AI Automation Engineer, and MCA Postgraduate student based in Bengaluru, Karnataka.\n\nShe specializes in building responsive web applications, integrating APIs, automating workflows using n8n & Gemini AI, and creating digital user experiences that stand out.";
        isErr = false;
      } else if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach')) {
        botResponseText = "You can reach Grace directly:\n\n📧 **Email:** graceworkspace777@gmail.com\n💼 **LinkedIn:** linkedin.com/in/grace-reshal-lewis-5b5178290\n📍 **Location:** Bengaluru, Karnataka\n\nOr scroll to the Contact section to submit an automated query form!";
        isErr = false;
      } else {
        botResponseText = "Grace AI is here! Grace is a Web Developer & AI Automation Engineer skilled in React, TypeScript, n8n, and WordPress. Feel free to ask about her projects, skills, achievements, or contact details!";
        isErr = false;
      }
    } finally {
      setIsLoading(false);

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: isErr,
      };

      setMessages((prev) => [...prev, botMsg]);
      playRobotSound('reply');
    }
  };

  const quickActionChips = [
    'Tell me about Grace',
    'Show Projects',
    'AI Automation',
    'Skills & Technologies',
    'Achievements & Honors',
    'Contact Grace',
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Interactive Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ 
              opacity: 0, 
              scale: 0, 
              x: 140, 
              y: 220, 
              borderRadius: '9999px',
              transformOrigin: 'bottom right'
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              x: 0, 
              y: 0, 
              borderRadius: '24px',
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 24,
                mass: 0.8
              }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.1, 
              x: 140, 
              y: 220, 
              borderRadius: '9999px',
              transition: { duration: 0.25, ease: 'easeIn' }
            }}
            className={`w-[calc(100vw-32px)] sm:w-[380px] md:w-[420px] max-h-[80vh] sm:max-h-[85vh] h-[550px] mb-4 border rounded-3xl backdrop-blur-2xl flex flex-col overflow-hidden font-sans origin-bottom-right transition-colors duration-500 ${
              isBeach
                ? 'bg-[#FAF6F0]/95 border-[#7A4A21]/20 text-[#1C242B] shadow-[0_20px_60px_rgba(90,82,74,0.15)]'
                : 'bg-black/95 border-white/20 text-white shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(255,255,255,0.08)]'
            }`}
          >
            {/* Header */}
            <div className={`p-4 sm:p-5 border-b flex items-center justify-between transition-colors ${
              isBeach ? 'bg-[#F3ECE1]/90 border-[#7A4A21]/15' : 'bg-black/90 border-white/10'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl border ${
                  isBeach ? 'bg-[#1C6E8C]/10 border-[#1C6E8C]/20 text-[#1C6E8C]' : 'bg-white/10 border-white/20 text-white'
                }`}>
                  <Sparkles size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className={`font-['Bebas_Neue',sans-serif] text-2xl tracking-[0.1em] leading-none ${
                      isBeach ? 'text-[#1C242B]' : 'text-white'
                    }`}>
                      GRACE AI
                    </h3>
                    <span className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-mono ${
                      isBeach
                        ? 'bg-[#1C6E8C]/10 border-[#1C6E8C]/30 text-[#1C6E8C]'
                        : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isBeach ? 'bg-[#1C6E8C]' : 'bg-emerald-400'}`} />
                      ONLINE · n8n + GEMINI
                    </span>
                  </div>
                  <span className={`text-[11px] font-mono tracking-wider block mt-0.5 ${
                    isBeach ? 'text-[#5C5349]' : 'text-[#A3A3A3]'
                  }`}>
                    Autonomous Portfolio Assistant
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleClearHistory}
                  title="Clear chat history"
                  className={`p-2 rounded-full transition-colors ${
                    isBeach ? 'text-[#5C5349] hover:text-[#1C242B] hover:bg-black/5' : 'text-white/50 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Trash2 size={15} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-2 rounded-full transition-colors ${
                    isBeach ? 'text-[#5C5349] hover:text-[#1C242B] hover:bg-black/5' : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className={`flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed ${
              isBeach ? 'bg-[#FAF6F0]' : 'bg-[#050505]/40'
            }`}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 sm:p-4 rounded-2xl whitespace-pre-line ${
                      msg.sender === 'user'
                        ? isBeach
                          ? 'bg-[#1C6E8C] text-white font-medium shadow-md rounded-br-none'
                          : 'bg-white text-black font-medium shadow-lg rounded-br-none'
                        : msg.isError
                        ? 'bg-red-950/40 border border-red-500/30 text-red-200 font-light shadow-md rounded-bl-none'
                        : isBeach
                          ? 'bg-[#FFFFFF] border border-[#7A4A21]/15 text-[#1C242B] font-normal shadow-sm rounded-bl-none'
                          : 'bg-[#141414] border border-white/15 text-[#E5E5E5] font-light shadow-md rounded-bl-none'
                    }`}
                  >
                    <div>{msg.text}</div>
                    {msg.timestamp && (
                      <div
                        className={`text-[9px] font-mono mt-2 text-right ${
                          msg.sender === 'user'
                            ? 'text-white/70'
                            : isBeach ? 'text-[#7A4A21]/60' : 'text-white/40'
                        }`}
                      >
                        {msg.timestamp}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Thinking / Typing Animation */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className={`px-4 py-3 rounded-2xl rounded-bl-none border flex items-center gap-3 ${
                    isBeach
                      ? 'bg-[#FFFFFF] border-[#7A4A21]/15 text-[#1C242B]'
                      : 'bg-[#141414] border-white/15 text-[#E5E5E5]'
                  }`}>
                    <span className={`text-xs font-mono animate-pulse ${isBeach ? 'text-[#1C6E8C]' : 'text-emerald-400'}`}>
                      Grace AI is thinking...
                    </span>
                    <div className="flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full animate-bounce ${isBeach ? 'bg-[#1C6E8C]' : 'bg-white'}`} style={{ animationDelay: '0ms' }} />
                      <span className={`w-1.5 h-1.5 rounded-full animate-bounce ${isBeach ? 'bg-[#1C6E8C]' : 'bg-white'}`} style={{ animationDelay: '150ms' }} />
                      <span className={`w-1.5 h-1.5 rounded-full animate-bounce ${isBeach ? 'bg-[#1C6E8C]' : 'bg-white'}`} style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Chips */}
            <div className={`px-4 py-2 flex items-center gap-2 overflow-x-auto border-t no-scrollbar shrink-0 ${
              isBeach ? 'bg-[#F3ECE1] border-[#7A4A21]/15' : 'bg-black/90 border-white/10'
            }`}>
              {quickActionChips.map((chip) => (
                <button
                  key={chip}
                  disabled={isLoading}
                  onClick={() => handleSend(chip)}
                  className={`px-3 py-1.5 rounded-full border text-[11px] font-mono shrink-0 transition-all duration-200 disabled:opacity-50 cursor-pointer ${
                    isBeach
                      ? 'border-[#7A4A21]/20 bg-[#FAF6F0] text-[#5C5349] hover:bg-[#1C6E8C] hover:text-white hover:border-[#1C6E8C]'
                      : 'border-white/20 bg-white/5 text-white/80 hover:bg-white hover:text-black'
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className={`p-3 border-t flex items-center gap-2 ${
                isBeach ? 'bg-[#FAF6F0] border-[#7A4A21]/15' : 'bg-black border-white/10'
              }`}
            >
              <input
                type="text"
                value={input}
                disabled={isLoading}
                onChange={(e) => setInput(e.target.value)}
                placeholder={isLoading ? 'Grace AI is thinking...' : 'Ask Grace AI anything...'}
                className={`flex-1 border rounded-full px-4 py-2.5 text-xs transition-colors disabled:opacity-50 focus:outline-none ${
                  isBeach
                    ? 'bg-[#FFFFFF] border-[#7A4A21]/20 text-[#1C242B] placeholder-[#5C5349]/50 focus:border-[#1C6E8C]'
                    : 'bg-[#121212] border-white/20 text-white placeholder-white/40 focus:border-white'
                }`}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className={`p-2.5 rounded-full disabled:opacity-40 transition-colors shrink-0 cursor-pointer ${
                  isBeach
                    ? 'bg-[#1C6E8C] text-white hover:bg-[#1C6E8C]/90'
                    : 'bg-white text-black hover:bg-neutral-200'
                }`}
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Interactive 3D Canvas Avatar Button */}
      <div
        onMouseEnter={() => {
          setIsHovered(true);
          playRobotSound('hover');
        }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          playRobotSound('open');
          if (!isOpen) {
            playVoiceGreeting();
          }
          setIsOpen(!isOpen);
        }}
        className="relative cursor-pointer transition-transform hover:scale-105"
        title="Click to activate Grace AI Assistant"
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 450, damping: 25 }}
              className="absolute -top-14 right-2 z-30 pointer-events-none whitespace-nowrap"
            >
              <div className={`relative px-4 py-2 rounded-2xl border backdrop-blur-xl shadow-lg flex items-center gap-2 ${
                isBeach
                  ? 'bg-[#FAF6F0]/95 border-[#7A4A21]/30 text-[#1C242B]'
                  : 'bg-[#0F0F12]/90 border-white/20 text-white shadow-[0_12px_30px_rgba(0,0,0,0.8)]'
              }`}>
                <div className={`w-2 h-2 rounded-full animate-pulse ${isBeach ? 'bg-[#1C6E8C]' : 'bg-emerald-400'}`} />
                <span className="font-['Inter',sans-serif] text-xs font-semibold tracking-wide">
                  {isOpen ? 'Close Assistant' : 'Chat with Grace AI'}
                </span>

                <div className={`absolute -bottom-1.5 right-6 w-3 h-3 border-r border-b rotate-45 ${
                  isBeach ? 'bg-[#FAF6F0]/95 border-[#7A4A21]/30' : 'bg-[#0F0F12]/90 border-white/20'
                }`} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <GraceRobotCanvas isHovered={isHovered} />
      </div>
    </div>
  );
}
