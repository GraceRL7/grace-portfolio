import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Globe } from 'lucide-react';

export default function CinematicProjects() {
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
            03 / FEATURED PROJECTS
          </span>
        </div>

        <h2 className="font-['Bebas_Neue',sans-serif] font-bold text-[36px] xs:text-[48px] sm:text-[72px] lg:text-[96px] text-[#FFFFFF] tracking-[0.03em] sm:tracking-[0.05em] leading-none uppercase mb-8 sm:mb-12">
          FEATURED PROJECTS
        </h2>

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
      </div>
    </section>
  );
}
