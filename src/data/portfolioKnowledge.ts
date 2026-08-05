export const portfolioKnowledge = {
  profile: {
    name: 'Grace Reshal Lewis',
    title: 'Frontend Developer • AI Automation • Web Experiences',
    location: 'Bengaluru, Karnataka',
    email: 'graceworkspace777@gmail.com',
    linkedin: 'https://www.linkedin.com/in/grace-reshal-lewis-5b5178290/',
    summary:
      "Frontend-focused web developer turning ideas into clean, creative, and meaningful experiences. Skilled in React, TypeScript, WordPress, AI automation, and responsive UI design.",
  },
  projects: [
    {
      title: 'El Mundo Sports',
      type: 'Live Commercial Website (WordPress & Elementor)',
      url: 'https://elmundosports.in/',
      description:
        'Official sports organization website designed, developed, and launched using WordPress, Elementor, Forminator, and SEO tools.',
    },
    {
      title: 'Vidhyardhi School',
      type: 'Live Educational Portal (ReactJS & Tailwind)',
      url: 'https://vidhyardhischoolnellore.com/',
      description:
        'Modern school portal engineered with ReactJS & Tailwind CSS, featuring responsive layouts and an admissions portal.',
    },
    {
      title: 'Victoria Football Academy',
      type: 'BCA Main Project (PHP & MySQL)',
      description:
        'Full-stack trial registration management application with user authentication, admin review dashboard, and query chatbot.',
    },
    {
      title: 'HomiFi',
      type: 'PG Management System (ReactJS & Firebase)',
      url: 'https://github.com/GraceRL7/homifi_web',
      description:
        'Role-based accommodation web application connecting users, PG owners, and admins.',
    },
    {
      title: 'Sportify',
      type: 'Sports Trials Management (ReactJS & Firebase)',
      url: 'https://github.com/GraceRL7/Sportify',
      description:
        'Digital sports trial registration, scheduling, coach evaluations, and result tracking platform.',
    },
    {
      title: 'Svasthya Fresh',
      type: 'Live Admin Side Management System',
      url: 'http://3.111.157.226/svasthya/admin-side/',
      description:
        'Real-time admin dashboard for e-commerce inventory, live orders, support, and analytics.',
    },
  ],
  skills: {
    frontend: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    backend: ['PHP', 'Python', 'MySQL', 'SQL Workbench', 'AWS', 'Firebase', 'REST APIs'],
    tools: ['Claude', 'n8n', 'AI Automation', 'WordPress', 'Elementor', 'GitHub', 'VS Code', 'Postman', 'Canva'],
  },
  experience: [
    {
      role: 'WordPress Developer',
      company: 'El Mundo Sports, Bengaluru',
      period: 'Aug 2024 – May 2025',
    },
    {
      role: 'Web Developer Intern',
      company: 'Nano Stream Technologies',
      period: 'Feb 2026 – Jun 2026',
    },
    {
      role: 'AI Automation Intern',
      company: 'Jivrus Technologies',
      period: 'May 2026 – Sep 2026',
    },
  ],
  achievements: [
    'Rajya Puraskar Governor Award (Bharat Scouts & Guides, 2018)',
    'Represented Mangalore University at South Zone Inter-University Football Tournament',
    'National Football Championship participation representing Karnataka',
    'KSFA B-Division League Football player',
    'Secured 1st Place in IT Videography (Manoeuvre 2.0, 2025)',
    'Secured 1st Place in Photography Competition (Milaverse 2.0, 2024)',
    'Co-Convenor for National IT Fest SHELLS 2026',
  ],
};

export function getAIResponse(userMessage: string): { reply: string; actionSection?: string } {
  const query = userMessage.toLowerCase();

  if (query.includes('project') || query.includes('work') || query.includes('sportify') || query.includes('el mundo') || query.includes('victoria') || query.includes('vidhyardhi')) {
    return {
      reply: "🚀 Taking you to Grace's Featured Projects! She has built live commercial sites like El Mundo Sports and Vidhyardhi School, along with web applications like Sportify, HomiFi, and Victoria Football Academy.",
      actionSection: '#projects',
    };
  }

  if (query.includes('skill') || query.includes('react') || query.includes('wordpress') || query.includes('tech') || query.includes('stack') || query.includes('n8n') || query.includes('python')) {
    return {
      reply: "⚡ Scrolling to Skills & Tech Stack! Grace excels in React, TypeScript, Tailwind, PHP, MySQL, WordPress, n8n, and AI Automation workflows.",
      actionSection: '#skills',
    };
  }

  if (query.includes('experience') || query.includes('job') || query.includes('intern') || query.includes('company') || query.includes('work history')) {
    return {
      reply: "💼 Navigating to Experience! Grace has worked as a WordPress Developer at El Mundo Sports, Web Developer Intern at Nano Stream Technologies, and AI Automation Intern at Jivrus Technologies.",
      actionSection: '#experience',
    };
  }

  if (query.includes('achievement') || query.includes('football') || query.includes('rajya puraskar') || query.includes('award') || query.includes('sports') || query.includes('winning')) {
    return {
      reply: "⚽ Opening Achievements & Honors! Grace is a Rajya Puraskar Governor Awardee, South Zone & National Football player, and 1st Place Videography winner.",
      actionSection: '#achievements',
    };
  }

  if (query.includes('contact') || query.includes('hire') || query.includes('email') || query.includes('linkedin') || query.includes('resume') || query.includes('reach')) {
    return {
      reply: "📫 Taking you to Contact! You can email Grace at graceworkspace777@gmail.com or connect via LinkedIn.",
      actionSection: '#contact',
    };
  }

  if (query.includes('who') || query.includes('grace') || query.includes('about')) {
    return {
      reply: "👋 Grace Reshal Lewis is a frontend-focused web developer and AI automator who loves blending creativity with technology to build memorable digital products.",
      actionSection: '#about',
    };
  }

  return {
    reply: "I know all about Grace's web development builds, AI automation workflows, athletic honors, and experience. Ask me about her projects, skills, or how to get in touch!",
  };
}
