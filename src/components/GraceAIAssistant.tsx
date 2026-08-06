import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Trash2, Sparkles } from 'lucide-react';
import GraceRobotCanvas from './GraceRobotCanvas';

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
    text: "Welcome 👋\n\nI'm Grace AI — an autonomous portfolio assistant powered by n8n workflows & Gemini AI.\n\nAsk me about Grace's full-stack applications, AI automation pipelines, skills, or football journey.",
    timestamp: 'Just now',
  },
];

const LOCAL_STORAGE_KEY = 'grace_ai_chat_history_v2';
const N8N_WEBHOOK_URL = 'https://n8n.srv965596.hstgr.cloud/webhook/grace-ai';

export default function GraceAIAssistant() {
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

  // Save chat history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // Storage limits or disabled
    }
  }, [messages]);

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

    console.log('[Grace AI Webhook Request]', {
      url: N8N_WEBHOOK_URL,
      method: 'POST',
      body: { chatInput: query },
    });

    try {
      // Direct POST request with CORS mode configured
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*',
        },
        body: JSON.stringify({ chatInput: query }),
      });

      console.log('[Grace AI Webhook Response Status]', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        type: response.type,
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => '');
        console.error('[Grace AI Webhook HTTP Error]', {
          status: response.status,
          statusText: response.statusText,
          responseBody: errorText,
        });
        throw new Error(`HTTP ${response.status}: ${response.statusText || 'Webhook error'}`);
      }

      const responseText = await response.text();
      console.log('[Grace AI Webhook Raw Body]', responseText);

      let data;
      try {
        data = JSON.parse(responseText);
      } catch {
        data = responseText;
      }

      // Extract response string directly from n8n webhook response
      if (typeof data === 'string') {
        botResponseText = data;
      } else if (data.output || data.response || data.message || data.text) {
        botResponseText = data.output || data.response || data.message || data.text;
      } else if (Array.isArray(data) && data[0]) {
        botResponseText = data[0].output || data[0].response || data[0].message || data[0].text || (typeof data[0] === 'string' ? data[0] : JSON.stringify(data[0]));
      } else {
        botResponseText = typeof data === 'object' ? JSON.stringify(data) : String(data);
      }
    } catch (err: unknown) {
      isErr = true;
      const errorObj = err instanceof Error ? err : new Error(String(err));
      console.error('[Grace AI Webhook CORS/Fetch Error Details]', {
        url: N8N_WEBHOOK_URL,
        errorName: errorObj.name,
        errorMessage: errorObj.message,
        stack: errorObj.stack,
      });

      botResponseText = 'Sorry, Grace AI is currently unavailable.';
    } finally {
      setIsLoading(false);

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponseText || 'Sorry, Grace AI is currently unavailable.',
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
    'Skills & Technologies',
    'Football Journey',
    'Contact Grace',
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Interactive Cyber Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="w-[calc(100vw-32px)] sm:w-[380px] md:w-[420px] max-h-[80vh] sm:max-h-[85vh] h-[550px] mb-4 bg-black/95 border border-white/20 rounded-3xl backdrop-blur-2xl shadow-2xl flex flex-col overflow-hidden text-white font-sans"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/90">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10 border border-white/20 text-white">
                  <Sparkles size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-['Bebas_Neue',sans-serif] text-2xl tracking-[0.1em] text-white leading-none">
                      GRACE AI
                    </h3>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE · n8n + GEMINI
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#A3A3A3] tracking-wider block mt-0.5">
                    Autonomous Portfolio Assistant
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleClearHistory}
                  title="Clear chat history"
                  className="p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Trash2 size={15} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed bg-[#050505]/40">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 sm:p-4 rounded-2xl whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-white text-black font-medium shadow-lg rounded-br-none'
                        : msg.isError
                        ? 'bg-red-950/40 border border-red-500/30 text-red-200 font-light shadow-md rounded-bl-none'
                        : 'bg-[#141414] border border-white/15 text-[#E5E5E5] font-light shadow-md rounded-bl-none'
                    }`}
                  >
                    <div>{msg.text}</div>
                    {msg.timestamp && (
                      <div
                        className={`text-[9px] font-mono mt-2 text-right ${
                          msg.sender === 'user' ? 'text-black/60' : 'text-white/40'
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
                  <div className="px-4 py-3 rounded-2xl rounded-bl-none bg-[#141414] border border-white/15 text-[#E5E5E5] flex items-center gap-3">
                    <span className="text-xs font-mono text-emerald-400 animate-pulse">
                      Grace AI is thinking...
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Chips */}
            <div className="px-4 py-2 flex items-center gap-2 overflow-x-auto border-t border-white/10 bg-black/90 no-scrollbar shrink-0">
              {quickActionChips.map((chip) => (
                <button
                  key={chip}
                  disabled={isLoading}
                  onClick={() => handleSend(chip)}
                  className="px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-[11px] font-mono text-white/80 shrink-0 hover:bg-white hover:text-black transition-all duration-200 disabled:opacity-50"
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
              className="p-3 border-t border-white/10 bg-black flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                disabled={isLoading}
                onChange={(e) => setInput(e.target.value)}
                placeholder={isLoading ? 'Grace AI is thinking...' : 'Ask Grace AI anything...'}
                className="flex-1 bg-[#121212] border border-white/20 rounded-full px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2.5 rounded-full bg-white text-black hover:bg-neutral-200 disabled:opacity-40 transition-colors shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Interactive 3D Canvas Avatar Button with Cute Speech Bubble */}
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
              <div className="relative px-4 py-2 rounded-2xl bg-[#0F0F12]/90 border border-white/20 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.3)] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span className="text-white font-['Inter',sans-serif] text-xs font-semibold tracking-wide">
                  {isOpen ? 'Close Assistant' : 'Chat with Grace AI'}
                </span>
                <span className="text-xs">✨</span>

                {/* 3D Arrow pointer */}
                <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#0F0F12]/90 border-r border-b border-white/20 rotate-45" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <GraceRobotCanvas isHovered={isHovered} />
      </div>
    </div>
  );
}
