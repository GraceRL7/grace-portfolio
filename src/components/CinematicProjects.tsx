import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Globe, Cpu, Workflow, Bot, MailCheck, Database, Zap } from 'lucide-react';

export default function CinematicProjects() {
  const [activeTab, setActiveTab] = useState<'projects' | 'automation' | 'social'>('projects');
  const [autoTab, setAutoTab] = useState<'chatbot' | 'contact'>('chatbot');

  const instagramLinks = [
    { name: 'Grace Lewis Personal', url: 'https://www.instagram.com/gracerlewis?stkn=MTAweGoza2JsdDQwYQ%3D%3D&utm_source=qr', handle: '@gracerlewis' },
    { name: 'Grace Captures', url: 'https://www.instagram.com/grace_captures__?stkn=MWM5YzhzNjhoeWNlcg%3D%3D&utm_source=qr', handle: '@grace_captures__' },
    { name: 'Nithyadar Kripa Food Products', url: 'https://www.instagram.com/nithyadar_kripa_food_products?stkn=d3QzeW9pcnA3c2xz&utm_source=qr', handle: '@nithyadar_kripa_food_products' },
    { name: 'SHELLS 2026', url: 'https://www.instagram.com/shells.2026?stkn=MXZ0dTZ4Y2w0NWM1Yg==', handle: '@shells.2026' },
    { name: 'KJU KJIT', url: 'https://www.instagram.com/kju_kjit?stkn=MW9na2szOHcxZDg2bQ==', handle: '@kju_kjit' },
    { name: 'ICYM Sasthan', url: 'https://www.instagram.com/icym__sasthan?stkn=MWglZWJ1djNoZXFicg==', handle: '@icym__sasthan' },
    { name: 'Udupi District Football Association', url: 'https://www.instagram.com/udupi_district_football_a?stkn=MXhiMGNqM3Ridmw1ZA==', handle: '@udupi_district_football_a' },
    { name: 'VFA Manipal', url: 'https://www.instagram.com/vfa_manipal?stkn=MW81Z2ZuN2wxNzNycQ==', handle: '@vfa_manipal' },
  ];

  const projects = [
    {
      title: 'El Mundo Sports',
      category: 'Live Commercial Website',
      description:
        'Official sports organization website designed, built & launched for El Mundo Sports using WordPress & Elementor. Features career portals, custom forms, SEO & interactive media.',
      tags: ['WordPress', 'Elementor', 'SEO', 'PHP', 'Forminator'],
      liveUrl: 'https://elmundosports.in/',
      githubUrl: null,
      badge: 'Live Website (WordPress)',
    },
    {
      title: 'Vidhyardhi School',
      category: 'Live Educational Portal',
      description:
        'Modern educational institution website engineered with ReactJS & Tailwind CSS, featuring responsive layouts, school admissions portal, and clean UI navigation.',
      tags: ['ReactJS', 'Tailwind CSS', 'JavaScript', 'HTML5'],
      liveUrl: 'https://vidhyardhischoolnellore.com/',
      githubUrl: null,
      badge: 'Live Website (ReactJS)',
    },
    {
      title: 'Victoria Football Academy',
      category: 'BCA Main Project',
      description:
        'PHP & MySQL-based web application for managing football academy trial registrations, featuring user authentication, application review panel, and query chatbot.',
      tags: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
      liveUrl: null,
      githubUrl: null,
      badge: 'BCA Main Project',
    },
    {
      title: 'HomiFi',
      category: 'PG Management System',
      description:
        'Role-based accommodation web application built with ReactJS & Firebase for users, PG owners, and admins with verified listings and secure authentication.',
      tags: ['ReactJS', 'Firebase', 'Tailwind CSS', 'JavaScript'],
      liveUrl: null,
      githubUrl: 'https://github.com/GraceRL7/homifi_web',
      badge: 'Web App (GitHub)',
    },
    {
      title: 'Sportify',
      category: 'Sports Trials System',
      description:
        'Web platform for digitizing sports trial registrations, athlete scheduling, coach evaluation submissions, and trial result tracking.',
      tags: ['ReactJS', 'Firebase', 'Tailwind CSS', 'REST API'],
      liveUrl: null,
      githubUrl: 'https://github.com/GraceRL7/Sportify',
      badge: 'Web App (GitHub)',
    },
    {
      title: 'Svasthya Fresh',
      category: 'Full-Stack Management',
      description:
        'Real-time administrative backend dashboard handling live e-commerce inventory tracking, order workflows, customer support, and payment analytics.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
      liveUrl: 'http://3.111.157.226/svasthya/admin-side/',
      githubUrl: null,
      badge: 'Live Admin Portal',
    },
  ];

  const automationWorkflows = {
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

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-16 sm:py-24 lg:py-32 bg-[#000000] text-[#FFFFFF] flex flex-col justify-center px-4 sm:px-8 lg:px-12 border-t border-[#FFFFFF]/10 z-20"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-2 h-2 rounded-full bg-[#FFFFFF]" />
          <span className="font-['Inter',sans-serif] text-[12px] sm:text-[14px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#BFBFBF]">
            04 / WHAT I'VE BUILT
          </span>
        </div>

        {/* Section Heading & Subtabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <h2 className="font-['Bebas_Neue',sans-serif] font-bold text-[36px] xs:text-[48px] sm:text-[72px] lg:text-[96px] text-[#FFFFFF] tracking-[0.03em] sm:tracking-[0.05em] leading-none uppercase mb-2">
              WHAT I'VE BUILT
            </h2>
            <p className="font-['Inter',sans-serif] text-sm sm:text-base text-[#BFBFBF] font-light max-w-xl">
              Web applications, live production portals, and autonomous AI workflow engines.
            </p>
          </div>

          {/* Subtabs for Projects vs AI Automation vs Social Media */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl lg:rounded-full bg-[#111111] border border-white/15 self-start lg:self-auto">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl lg:rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'projects'
                  ? 'bg-white text-black font-semibold shadow-lg'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Featured Applications
            </button>
            <button
              onClick={() => setActiveTab('automation')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl lg:rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'automation'
                  ? 'bg-white text-black font-semibold shadow-lg'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              AI Automation Architecture
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl lg:rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'social'
                  ? 'bg-white text-black font-semibold shadow-lg'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Digital Marketing & Social Media
            </button>
          </div>
        </div>

        {/* PROJECTS TAB */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((proj) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#111111]/70 border border-[#FFFFFF]/15 backdrop-blur-[20px] hover:border-[#FFFFFF]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#BFBFBF] bg-black/60 px-3 py-1 rounded-full border border-white/10">
                      {proj.badge}
                    </span>

                    <div className="flex items-center gap-2">
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full border border-white/20 text-[#BFBFBF] hover:text-white hover:border-white transition-all"
                          title="Visit Live Website"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      )}

                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full border border-white/20 text-[#BFBFBF] hover:text-white hover:border-white transition-all"
                          title="View GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-['Bebas_Neue',sans-serif] text-[34px] tracking-[0.05em] text-[#FFFFFF] mb-3 group-hover:text-[#BFBFBF] transition-colors">
                    {proj.title}
                  </h3>

                  <p className="font-['Inter',sans-serif] text-xs sm:text-sm text-[#BFBFBF] font-light leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#FFFFFF]/10">
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-[#BFBFBF] px-2.5 py-1 rounded-md bg-[#000000] border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white hover:underline pt-2"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white hover:underline pt-2"
                    >
                      <span>View GitHub Source</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* AI AUTOMATION ARCHITECTURE TAB */}
        {activeTab === 'automation' && (
          <div className="space-y-12">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#111111]/80 border border-white/15 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                <div>
                  <h3 className="font-['Bebas_Neue',sans-serif] text-3xl sm:text-4xl tracking-wider text-white">
                    {automationWorkflows[autoTab].title}
                  </h3>
                  <p className="text-sm font-['Inter',sans-serif] text-white/60">
                    {automationWorkflows[autoTab].subtitle}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setAutoTab('chatbot')}
                    className={`px-4 py-2 rounded-xl text-xs font-mono border transition-all ${
                      autoTab === 'chatbot' ? 'bg-white text-black border-white' : 'border-white/20 text-white/60'
                    }`}
                  >
                    Grace AI Bot
                  </button>
                  <button
                    onClick={() => setAutoTab('contact')}
                    className={`px-4 py-2 rounded-xl text-xs font-mono border transition-all ${
                      autoTab === 'contact' ? 'bg-white text-black border-white' : 'border-white/20 text-white/60'
                    }`}
                  >
                    Contact Pipeline
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {automationWorkflows[autoTab].nodes.map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <motion.div
                      key={node.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="p-5 rounded-2xl bg-black/80 border border-white/10 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-white">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">
                            {node.badge}
                          </span>
                        </div>
                        <h4 className="font-['Inter',sans-serif] font-bold text-white text-base mb-1">
                          {node.title}
                        </h4>
                        <p className="text-xs text-white/60 leading-relaxed font-['Inter',sans-serif]">
                          {node.desc}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-white/40">
                        STEP 0{i + 1}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* DIGITAL MARKETING & SOCIAL MEDIA TAB */}
        {activeTab === 'social' && (
          <div className="space-y-8 sm:space-y-12">
            {/* Top Stats Overview Banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-[#111111]/80 border border-white/15 backdrop-blur-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-white/50">Total Views Generated</span>
                <h3 className="font-['Bebas_Neue',sans-serif] text-5xl sm:text-6xl text-white mt-2">441K+</h3>
                <p className="text-xs text-white/60 mt-1 font-['Inter',sans-serif]">Across Grace Captures & client reels content</p>
              </div>
              <div className="p-6 rounded-3xl bg-[#111111]/80 border border-white/15 backdrop-blur-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-white/50">SEO Search Impressions</span>
                <h3 className="font-['Bebas_Neue',sans-serif] text-5xl sm:text-6xl text-white mt-2">48K+</h3>
                <p className="text-xs text-white/60 mt-1 font-['Inter',sans-serif]">El Mundo Sports Google Search Console</p>
              </div>
              <div className="p-6 rounded-3xl bg-[#111111]/80 border border-white/15 backdrop-blur-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-white/50">Profile Activity</span>
                <h3 className="font-['Bebas_Neue',sans-serif] text-5xl sm:text-6xl text-white mt-2">+38.2%</h3>
                <p className="text-xs text-white/60 mt-1 font-['Inter',sans-serif]">Increase in profile visits & actions</p>
              </div>
            </div>

            {/* Managed Instagram Pages Grid */}
            <div>
              <h3 className="font-['Bebas_Neue',sans-serif] text-3xl sm:text-4xl tracking-wider text-white mb-4">
                MANAGED INSTAGRAM & BRAND CHANNELS
              </h3>
              <p className="text-sm font-['Inter',sans-serif] text-white/60 mb-6">
                Active social media management, promotional video creation, reels editing & audience growth analytics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {instagramLinks.map((item) => (
                  <a
                    key={item.handle}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-5 rounded-2xl bg-[#111111]/80 border border-white/15 hover:border-white/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">
                          INSTAGRAM
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="font-['Inter',sans-serif] font-bold text-white text-base mb-1 group-hover:text-white/90">
                        {item.name}
                      </h4>
                      <p className="text-xs font-mono text-white/50">{item.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
