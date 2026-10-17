import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Workflow, Bot, MailCheck, Database, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
export default function CinematicAIAutomation() {
    const [activeTab, setActiveTab] = useState('chatbot');
    const workflows = {
        chatbot: {
            title: 'Grace AI Chatbot Architecture',
            subtitle: 'Real-time conversational agent powered by n8n webhooks & Gemini LLM',
            nodes: [
                { title: 'Portfolio Visitor', desc: 'User inputs query in luxury chat UI', icon: Bot, badge: 'Frontend' },
                { title: 'n8n Webhook', desc: 'Secure POST payload dispatcher & routing', icon: Workflow, badge: 'Integration' },
                { title: 'Gemini AI Engine', desc: 'Context-aware portfolio prompt processing', icon: Cpu, badge: 'LLM AI' },
                { title: 'Structured Output', desc: 'Instant streaming text response to UI', icon: Zap, badge: 'Response' },
            ],
        },
        contact: {
            title: 'Automated Lead & Contact Pipeline',
            subtitle: 'End-to-end webhook processing for zero-delay visitor engagement',
            nodes: [
                { title: 'Contact Submission', desc: 'Visitor submits message on portfolio', icon: MailCheck, badge: 'Form Trigger' },
                { title: 'n8n Webhook Engine', desc: 'Validates & parses payload variables', icon: Workflow, badge: 'Orchestrator' },
                { title: 'Google Sheets DB', desc: 'Appends lead data to persistent database', icon: Database, badge: 'Storage' },
                { title: 'Email & Auto-Reply', desc: 'Dispatches admin alert & personalized response', icon: Zap, badge: 'Automation' },
            ],
        },
    };
    const capabilities = [
        {
            title: 'n8n Workflow Engineering',
            desc: 'Designing asynchronous automation pipelines, webhook triggers, API transformations, and self-healing error branches.',
            icon: Workflow,
        },
        {
            title: 'Gemini LLM Integration',
            desc: 'Prompt orchestration, system context injection, structured JSON output generation, and zero-shot entity recognition.',
            icon: Cpu,
        },
        {
            title: 'Lead & Contact Automation',
            desc: 'Instant lead capture, Google Sheets / CRM sync, automated Slack alerts, and personalized auto-response emails.',
            icon: MailCheck,
        },
        {
            title: 'Real-World AI Solutions',
            desc: 'Combining custom React frontends with serverless automation engines to solve real business bottlenecks.',
            icon: Zap,
        },
    ];
    return (_jsxs("section", { id: "automation", className: "relative w-full min-h-screen py-32 bg-[#050505] text-white flex flex-col justify-center px-6 sm:px-12 border-t border-white/10 z-20 overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" }), _jsxs("div", { className: "w-full max-w-[1400px] mx-auto relative z-10", children: [_jsxs("div", { className: "flex items-center gap-3 mb-6", children: [_jsx("div", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }), _jsx("span", { className: "font-['Inter',sans-serif] text-[14px] uppercase tracking-[0.3em] text-[#BFBFBF]", children: "05 / AI AUTOMATION" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16", children: [_jsxs("div", { className: "lg:col-span-8", children: [_jsx("h2", { className: "font-['Bebas_Neue',sans-serif] font-bold text-[48px] sm:text-[72px] lg:text-[90px] text-white tracking-[0.05em] leading-none uppercase", children: "AI AUTOMATION & WORKFLOW ENGINEERING" }), _jsx("p", { className: "font-['Inter',sans-serif] text-base text-[#BFBFBF] font-light leading-relaxed max-w-2xl mt-4", children: "Building intelligent, autonomous workflows that connect modern React frontends to n8n automation backends and Gemini AI models." })] }), _jsx("div", { className: "lg:col-span-4 flex lg:justify-end", children: _jsxs("div", { className: "p-1 rounded-full bg-[#121212] border border-white/15 flex items-center gap-1", children: [_jsx("button", { onClick: () => setActiveTab('chatbot'), className: `px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${activeTab === 'chatbot'
                                                ? 'bg-white text-black font-semibold shadow-lg'
                                                : 'text-white/60 hover:text-white'}`, children: "Chatbot Architecture" }), _jsx("button", { onClick: () => setActiveTab('contact'), className: `px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${activeTab === 'contact'
                                                ? 'bg-white text-black font-semibold shadow-lg'
                                                : 'text-white/60 hover:text-white'}`, children: "Contact Pipeline" })] }) })] }), _jsxs("div", { className: "p-8 sm:p-10 rounded-3xl bg-[#0D0D0D]/90 border border-white/15 backdrop-blur-xl shadow-2xl mb-16", children: [_jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-6 border-b border-white/10 gap-4", children: [_jsxs("div", { children: [_jsx("span", { className: "text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1", children: "\u25CF Live Workflow Visualizer" }), _jsx("h3", { className: "font-['Bebas_Neue',sans-serif] text-3xl text-white tracking-wide", children: workflows[activeTab].title }), _jsx("p", { className: "text-xs font-mono text-[#A3A3A3] mt-1", children: workflows[activeTab].subtitle })] }), _jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-white/80", children: [_jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-ping" }), _jsx("span", { children: "n8n Webhook Active" })] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative", children: workflows[activeTab].nodes.map((node, index) => {
                                    const IconComp = node.icon;
                                    return (_jsxs("div", { className: "relative group", children: [_jsxs("div", { className: "p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-white/30 transition-all duration-300 h-full flex flex-col justify-between group-hover:translate-y-[-2px]", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("div", { className: "p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors", children: _jsx(IconComp, { size: 20 }) }), _jsx("span", { className: "text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/5 text-[#D4D4D4] border border-white/10", children: node.badge })] }), _jsxs("div", { className: "text-[11px] font-mono text-white/40 mb-1", children: ["STEP 0", index + 1] }), _jsx("h4", { className: "font-['Inter',sans-serif] font-semibold text-base text-white mb-2", children: node.title }), _jsx("p", { className: "font-['Inter',sans-serif] text-xs text-[#A3A3A3] leading-relaxed font-light", children: node.desc })] }), _jsxs("div", { className: "mt-4 pt-3 border-t border-white/5 flex items-center gap-1 text-[11px] font-mono text-emerald-400", children: [_jsx(CheckCircle2, { size: 12 }), _jsx("span", { children: "Verified Node" })] })] }), index < 3 && (_jsx("div", { className: "hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-white/30", children: _jsx(ArrowRight, { size: 18 }) }))] }, node.title));
                                }) })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: capabilities.map((cap) => {
                            const IconComponent = cap.icon;
                            return (_jsxs(motion.div, { whileHover: { y: -4 }, transition: { duration: 0.2 }, className: "p-6 rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-white/25 transition-all", children: [_jsx("div", { className: "p-3 rounded-xl bg-white/5 border border-white/10 w-fit text-white mb-4", children: _jsx(IconComponent, { size: 20 }) }), _jsx("h4", { className: "font-['Inter',sans-serif] font-semibold text-base text-white mb-2", children: cap.title }), _jsx("p", { className: "font-['Inter',sans-serif] text-xs text-[#A3A3A3] font-light leading-relaxed", children: cap.desc })] }, cap.title));
                        }) })] })] }));
}
