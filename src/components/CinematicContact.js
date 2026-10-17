import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Mail, Linkedin, Instagram, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { profile } from '../data/cinematicProfile';
import { useTheme } from '../context/ThemeContext';
const N8N_CONTACT_WEBHOOK_URL = 'https://n8n.srv965596.hstgr.cloud/webhook/grace-contact';
export default function CinematicContact() {
    const { theme } = useTheme();
    const isBeach = theme === 'beach';
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');
    const [statusMsg, setStatusMsg] = useState('');
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = formData.name.trim();
        const email = formData.email.trim();
        const message = formData.message.trim();
        if (!name || !email || !message) {
            setStatus('error');
            setStatusMsg('Please fill in all fields.');
            return;
        }
        if (!validateEmail(email)) {
            setStatus('error');
            setStatusMsg('Please enter a valid email address.');
            return;
        }
        setStatus('submitting');
        setStatusMsg('Sending message...');
        try {
            const response = await fetch(N8N_CONTACT_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json, text/plain, */*',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            setStatus('success');
            setStatusMsg('Message sent successfully.');
            setFormData({ name: '', email: '', message: '' });
        }
        catch (err) {
            console.error('[Contact Webhook Error]', err);
            setStatus('error');
            setStatusMsg('Failed to send message. Please try again.');
        }
        finally {
            setTimeout(() => {
                setStatus('idle');
                setStatusMsg('');
            }, 7000);
        }
    };
    return (_jsx("section", { id: "contact", className: `relative w-full min-h-screen py-16 sm:py-24 lg:py-32 border-t flex flex-col justify-center px-4 sm:px-8 lg:px-12 z-20 transition-colors duration-1000 ${isBeach
            ? 'bg-[#FAF6F0] text-[#1C242B] border-[#5C5349]/15'
            : 'bg-[#000000] text-[#FFFFFF] border-[#FFFFFF]/10'}`, children: _jsxs("div", { className: "w-full max-w-[1400px] mx-auto", children: [_jsxs("div", { className: "flex items-center gap-3 mb-4 sm:mb-6", children: [_jsx("div", { className: `w-2 h-2 rounded-full ${isBeach ? 'bg-[#1C6E8C]' : 'bg-[#FFFFFF]'}` }), _jsx("span", { className: `font-['Inter',sans-serif] text-[12px] sm:text-[14px] uppercase tracking-[0.25em] sm:tracking-[0.3em] ${isBeach ? 'text-[#7A4A21]' : 'text-[#BFBFBF]'}`, children: "07 / CONTACT ME" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start", children: [_jsxs("div", { className: "lg:col-span-6 space-y-4 sm:space-y-6", children: [_jsx("h2", { className: `font-['Bebas_Neue',sans-serif] font-bold text-[36px] xs:text-[48px] sm:text-[72px] lg:text-[96px] tracking-[0.03em] sm:tracking-[0.05em] leading-none uppercase ${isBeach ? 'text-[#1C242B]' : 'text-[#FFFFFF]'}`, children: "CONTACT ME" }), _jsxs("div", { className: "flex items-center gap-3 pt-2", children: [_jsx("a", { href: profile.github, target: "_blank", rel: "noreferrer", "aria-label": "GitHub", className: `w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${isBeach
                                                ? 'border-[#00838F]/30 text-[#00838F] hover:bg-[#00ACC1] hover:text-[#FFFFFF] hover:border-[#00ACC1]'
                                                : 'border-[#FFFFFF]/30 text-[#BFBFBF] hover:bg-[#FFFFFF] hover:text-[#000000] hover:border-[#FFFFFF]'}`, children: _jsx(Github, { size: 16 }) }), _jsx("a", { href: profile.linkedin, target: "_blank", rel: "noreferrer", "aria-label": "LinkedIn", className: `w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${isBeach
                                                ? 'border-[#00838F]/30 text-[#00838F] hover:bg-[#00ACC1] hover:text-[#FFFFFF] hover:border-[#00ACC1]'
                                                : 'border-[#FFFFFF]/30 text-[#BFBFBF] hover:bg-[#FFFFFF] hover:text-[#000000] hover:border-[#FFFFFF]'}`, children: _jsx(Linkedin, { size: 16 }) }), _jsx("a", { href: `mailto:${profile.email}`, "aria-label": "Gmail", className: `w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${isBeach
                                                ? 'border-[#00838F]/30 text-[#00838F] hover:bg-[#00ACC1] hover:text-[#FFFFFF] hover:border-[#00ACC1]'
                                                : 'border-[#FFFFFF]/30 text-[#BFBFBF] hover:bg-[#FFFFFF] hover:text-[#000000] hover:border-[#FFFFFF]'}`, children: _jsx(Mail, { size: 16 }) }), _jsx("a", { href: profile.instagram, target: "_blank", rel: "noreferrer", "aria-label": "Instagram", className: `w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${isBeach
                                                ? 'border-[#00838F]/30 text-[#00838F] hover:bg-[#00ACC1] hover:text-[#FFFFFF] hover:border-[#00ACC1]'
                                                : 'border-[#FFFFFF]/30 text-[#BFBFBF] hover:bg-[#FFFFFF] hover:text-[#000000] hover:border-[#FFFFFF]'}`, children: _jsx(Instagram, { size: 16 }) })] })] }), _jsx("div", { className: `lg:col-span-6 p-8 rounded-3xl border backdrop-blur-[20px] transition-colors ${isBeach
                                ? 'bg-[#FFFFFF] border-[#7A4A21]/15 shadow-[0_10px_30px_rgba(90,82,74,0.08)]'
                                : 'bg-[#111111]/70 border-[#FFFFFF]/15 shadow-2xl'}`, children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: `block text-[12px] font-mono uppercase tracking-widest mb-2 ${isBeach ? 'text-[#7A4A21]' : 'text-[#BFBFBF]'}`, children: "Name" }), _jsx("input", { type: "text", required: true, value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), placeholder: "Your Name", disabled: status === 'submitting', className: `w-full px-5 py-3 rounded-xl border text-sm transition-colors disabled:opacity-50 focus:outline-none ${isBeach
                                                    ? 'bg-[#FAF6F0] border-[#7A4A21]/20 text-[#1C242B] placeholder:text-[#5C5349]/40 focus:border-[#1C6E8C]'
                                                    : 'bg-[#000000] border-[#FFFFFF]/15 text-[#FFFFFF] placeholder:text-[#BFBFBF]/40 focus:border-[#FFFFFF]'}` })] }), _jsxs("div", { children: [_jsx("label", { className: `block text-[12px] font-mono uppercase tracking-widest mb-2 ${isBeach ? 'text-[#7A4A21]' : 'text-[#BFBFBF]'}`, children: "Email" }), _jsx("input", { type: "email", required: true, value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), placeholder: "Your Email", disabled: status === 'submitting', className: `w-full px-5 py-3 rounded-xl border text-sm transition-colors disabled:opacity-50 focus:outline-none ${isBeach
                                                    ? 'bg-[#FAF6F0] border-[#7A4A21]/20 text-[#1C242B] placeholder:text-[#5C5349]/40 focus:border-[#1C6E8C]'
                                                    : 'bg-[#000000] border-[#FFFFFF]/15 text-[#FFFFFF] placeholder:text-[#BFBFBF]/40 focus:border-[#FFFFFF]'}` })] }), _jsxs("div", { children: [_jsx("label", { className: `block text-[12px] font-mono uppercase tracking-widest mb-2 ${isBeach ? 'text-[#7A4A21]' : 'text-[#BFBFBF]'}`, children: "Message" }), _jsx("textarea", { rows: 4, required: true, value: formData.message, onChange: (e) => setFormData({ ...formData, message: e.target.value }), placeholder: "Your Message...", disabled: status === 'submitting', className: `w-full px-5 py-3 rounded-xl border text-sm transition-colors disabled:opacity-50 focus:outline-none ${isBeach
                                                    ? 'bg-[#FAF6F0] border-[#7A4A21]/20 text-[#1C242B] placeholder:text-[#5C5349]/40 focus:border-[#1C6E8C]'
                                                    : 'bg-[#000000] border-[#FFFFFF]/15 text-[#FFFFFF] placeholder:text-[#BFBFBF]/40 focus:border-[#FFFFFF]'}` })] }), _jsxs("button", { type: "submit", disabled: status === 'submitting', className: `w-full h-12 rounded-xl font-['Inter',sans-serif] font-bold text-xs sm:text-sm tracking-[0.15em] uppercase transition-all duration-300 transform hover:scale-[1.01] active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 ${isBeach
                                            ? 'bg-[#00838F] text-white hover:bg-[#00ACC1] border border-[#00838F] shadow-[0_4px_20px_rgba(0,131,143,0.25)]'
                                            : 'bg-white text-black hover:bg-neutral-200 border border-white shadow-[0_0_25px_rgba(255,255,255,0.25)]'}`, children: [_jsx("span", { children: status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE' }), _jsx(Send, { size: 14, className: "shrink-0" })] }), statusMsg && (_jsxs("div", { className: `p-3 rounded-xl border flex items-start gap-2 text-xs font-mono ${status === 'success'
                                            ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-400'
                                            : status === 'error'
                                                ? 'bg-red-950/30 border-red-500/30 text-red-400'
                                                : 'bg-white/5 border-white/10 text-white/80'}`, children: [status === 'success' ? (_jsx(CheckCircle2, { size: 16, className: "shrink-0 mt-0.5" })) : status === 'error' ? (_jsx(AlertCircle, { size: 16, className: "shrink-0 mt-0.5" })) : (_jsx("span", { className: "w-2 h-2 rounded-full bg-white animate-pulse mt-1.5 shrink-0" })), _jsx("span", { children: statusMsg })] }))] }) })] })] }) }));
}
