// All content sourced directly from Grace Reshal Lewis's resume (2026) and
// verified certificates. No placeholder facts.

export const profile = {
  name: 'Grace Reshal Lewis',
  role: 'Full-Stack Developer • MCA Student',
  location: 'Bengaluru, Karnataka',
  phone: '+91 63660 49251',
  email: 'graceworkspace777@gmail.com',
  linkedin: 'https://www.linkedin.com/in/grace-reshal-lewis-5b5178290/',
  linkedinLabel: 'linkedin.com/in/grace-reshal-lewis-5b5178290',
  github: 'https://github.com/', // update with real handle
  instagram: 'https://www.instagram.com/grace_captures__?igsh=MWM5YzhzNjhoeWNlcg%3D%3D&utm_source=qr',
  instagramLabel: 'instagram.com/grace_captures__',
  resumeFile: '/assets/Grace_Reshal_Lewis_Resume.pdf',
  portrait: '/assets/grace-portrait.png',
  summary:
    'Highly motivated and detail-oriented postgraduate student in Computer Science with strong academic and technical expertise. Skilled in Java, Python, SQL, and web development, with hands-on experience as a full-time WordPress developer. Proficient in tools like GitHub, VS Code, Elementor, and Firebase, with strong problem-solving and communication skills. Driven to apply knowledge in real-world projects and contribute effectively to organizational growth.',
};

export const education = [
  {
    year: '2024 – 2026',
    qualification: 'MCA',
    institution: 'Kristu Jayanti (Deemed to be University), Bengaluru',
    score: '8.48 CGPA',
  },
  {
    year: '2021 – 2024',
    qualification: 'BCA',
    institution: 'Milagres College, Kallianpur',
    score: '79.23%',
  },
  {
    year: '2019 – 2021',
    qualification: 'Class XII (PCMC)',
    institution: 'Milagres PU College, Kallianpur',
    score: '76.83%',
  },
  {
    year: '2018 – 2019',
    qualification: 'Class X',
    institution: "St. Antony's English Medium School, Sastan",
    score: '76.32%',
  },
];

export const experience = [
  {
    role: 'AI Automation Intern',
    company: 'Jivrus Technologies',
    period: 'May 2026 – Sep 2026',
    points: [
      'Worked on AI-powered workflow automation projects.',
      'Developed and tested automation workflows using AI tools.',
      'Created prompt-based solutions to improve efficiency.',
      'Collaborated with teams to optimize business processes.',
    ],
    tags: ['AI Automation', 'Prompt Engineering', 'Workflow Design'],
  },
  {
    role: 'Web Developer',
    company: 'Nano Stream Technologies, Bengaluru',
    period: 'Feb 2026 – Jun 2026',
    points: [
      'Worked on the development of the "Svasthya Fresh — Admin Side Management System" using React, TypeScript, and Tailwind CSS.',
      'Developed responsive frontend interfaces and reusable UI components for multiple dashboard modules.',
      'Implemented modules including Orders, Coupons, Analytics, Users, and Support Center.',
      'Integrated REST APIs and handled dynamic data rendering for real-time dashboard functionality.',
      'Collaborated with team members on debugging, frontend optimization, and UI consistency improvements.',
      'Used GitHub for version control and participated in real-world software development workflows.',
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    role: 'WordPress Web Developer',
    company: 'El Mundo Sports, Bengaluru',
    period: 'Aug 2024 – May 2025',
    points: [
      'Independently designed, developed, and launched the official website: elmundosports.in',
      'Built a 6-page responsive website using WordPress and Elementor: Home, About Us, Contact Us, Park, Gallery, and Career.',
      'Integrated advanced UI features including forms (Forminator), flip cards and accordions (Royal Elementor Addons, Essential Addons), and timelines.',
      'Configured meta titles, descriptions, and search keyphrases using All in One SEO to improve search visibility.',
      'Developed a dynamic Career page with job listings, application forms, and interactive content.',
      'Ensured full responsiveness across mobile, desktop, and tablet devices.',
      'Applied backend performance optimization and maintained a clean, brand-aligned UI with regular updates.',
    ],
    tags: ['WordPress', 'Elementor', 'SEO', 'Forminator'],
  },
];

export const projects = [
  {
    id: 'victoria-fc',
    title: 'Victoria Football Academy',
    subtitle: 'Trial Registration & Admin Platform',
    description:
      'A PHP & MySQL-based web application for managing football academy trial registrations with user auth, admin review, and an integrated chatbot.',
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    points: [
      'Developed a PHP & MySQL-based web application for managing football academy trial registrations',
      'Implemented user authentication and a player application system',
      'Built an admin panel to review, select, and reject player applications',
      'Integrated a chatbot feature to assist users with queries and improve UX',
    ],
    link: null,
    accent: 'accent',
    tag: 'BCA Main Project',
  },
  {
    id: 'el-mundo',
    title: 'El Mundo Sports Club',
    subtitle: 'Live Production Website (WordPress)',
    description:
      'The official public website for El Mundo Sports Club — designed, built, and shipped end-to-end using WordPress and Elementor.',
    stack: ['WordPress', 'Elementor', 'SEO', 'Forminator', 'PHP'],
    points: [
      'Independently designed, developed, and launched elmundosports.in',
      'Built a fully responsive WordPress site: Home, About Us, Park, Gallery, Contact Us, Career',
      'Implemented Forminator forms, flip cards, accordions, timelines, responsive layouts',
      'Configured SEO with All in One SEO — meta titles, descriptions, keyphrases',
      'Managed content updates, plugin integration, analytics, and maintenance',
    ],
    link: 'https://elmundosports.in/',
    accent: 'sky',
    tag: 'Live Project',
  },
  {
    id: 'homifi',
    title: 'HomiFi',
    subtitle: 'PG Management System',
    description:
      'A role-based accommodation management platform connecting users, PG owners, and admins built using ReactJS and Firebase.',
    stack: ['ReactJS', 'Firebase', 'JavaScript', 'Tailwind CSS'],
    points: [
      'Developed a role-based PG management system using ReactJS and Firebase',
      'Designed dashboards for Users, PG Owners, and Admins with secure authentication',
      'Implemented PG listing submission and admin verification workflow',
      'Enabled users to browse verified accommodations and contact owners directly',
    ],
    link: 'https://github.com/GraceRL7/homifi_web',
    accent: 'gold',
    tag: 'GitHub Project',
  },
  {
    id: 'sportify',
    title: 'Sportify',
    subtitle: 'Sports Trials Management System',
    description:
      'A web platform for digitizing sports trial registrations, scheduling, coach evaluations, and result tracking using ReactJS and Firebase.',
    stack: ['ReactJS', 'Firebase', 'JavaScript', 'Tailwind CSS'],
    points: [
      'Built a web-based platform using ReactJS and Firebase for managing sports trials',
      'Enabled player registration, trial scheduling, and result tracking',
      'Developed modules for coach evaluation and feedback submission',
      'Created an admin dashboard for managing trials, users, and generating reports',
    ],
    link: 'https://github.com/GraceRL7/Sportify',
    accent: 'accent',
    tag: 'Full-Stack',
  },
  {
    id: 'svasthya-fresh',
    title: 'Svasthya Fresh',
    subtitle: 'Admin Side Management System — Real-Time Project',
    description:
      'A production admin dashboard handling live orders, payments, and customer support at scale.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'React Query'],
    points: [
      'Developed a real-time admin dashboard for products, orders, users, analytics, coupons, payments, and support',
      'Built responsive frontend interfaces using React, TypeScript, and Tailwind CSS',
      'Integrated REST APIs for dynamic data handling, analytics visualization, and order workflows',
      'Implemented Dashboard, Orders, Coupons, Users, Analytics, Payments, and Support Center modules',
      'Worked on frontend optimization, reusable components, and API integration',
    ],
    link: 'http://3.111.157.226/svasthya/admin-side/',
    accent: 'sky',
    tag: 'Live Admin Portal',
  },
  {
    id: 'vidhyardhi',
    title: 'Vidhyardhi School',
    subtitle: 'Institutional Website',
    description:
      'A clean, responsive front-end for a school website — focused on clarity for parents and staff.',
    stack: ['ReactJS', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
    points: [
      'Designed and developed responsive frontend layouts for the Vidhyardhi School website',
      'Created clean, user-friendly UI components with responsive navigation',
      'Focused on UX, visual consistency, and mobile responsiveness',
      'Worked on page structure, interface styling, and frontend enhancements',
    ],
    link: 'https://vidhyardhischoolnellore.com/',
    accent: 'gold',
    tag: 'Live Project',
  },
];

export const skills = {
  languages: ['Java', 'Python', 'SQL', 'TypeScript', 'JavaScript'],
  frontend: ['ReactJS', 'Tailwind CSS', 'HTML', 'CSS', 'Elementor', 'WordPress'],
  backend: ['Firebase', 'REST APIs', 'MySQL', 'PHP'],
  tools: ['GitHub', 'VS Code', 'Postman', 'Canva'],
  soft: [
    'Strong interpersonal skills',
    'Adaptability',
    'Team collaboration',
    'Communication',
    'Problem-solving',
    'Time management',
    'Leadership',
    'Public speaking',
  ],
  spoken: [
    { lang: 'English', level: 'Proficient' },
    { lang: 'Hindi', level: 'Proficient' },
    { lang: 'Kannada', level: 'Proficient' },
    { lang: 'Konkani', level: 'Native' },
    { lang: 'Tulu', level: 'Beginner' },
  ],
};

export const leadership = [
  {
    title: 'Student Coordinator & Team Lead',
    org: 'International Conference — Department of Computer Science',
  },
  { title: 'Master of Ceremony', org: 'International Yoga Day' },
  { title: 'Class Representative', org: 'MCA' },
  { title: 'ICYM Vice President', org: 'Sastan Unit' },
  { title: 'POSH Cell President & NSS Volunteer', org: 'Undergraduate Program' },
  { title: 'Patrol Leader', org: 'Scouts and Guides' },
  { title: 'Co-Convenor', org: 'SHELLS 2026' },
];

export const socialInitiatives = [
  {
    title: 'Old Age Home Visit',
    org: 'Organized through ICYM',
  },
  {
    title: 'Food Distribution Drive',
    org: 'Led outreach program under ICYM Sasthan Unit',
  },
  {
    title: 'Blood Donation Drive',
    org: 'National Service Scheme (NSS) — donated and helped mobilize 100+ volunteers',
  },
];

export const achievements = [
  {
    title: 'Rajya Puraskar Award',
    org: 'Bharath Scouts and Guides',
    year: '2018',
  },
  {
    title: '1st Place — IT Videography & Overall Champions',
    org: 'Manoeuvre 2.0',
    year: '2025',
  },
  {
    title: 'Represented Mangalore University (South Zone)',
    org: 'National & university tournaments — Victoria Football Academy',
    year: '2019 – 2024',
  },
  {
    title: 'Individual Championship Titles',
    org: 'School, PU College, and Degree level competitions',
    year: '',
  },
  {
    title: 'InfoVision 2024 Participant',
    org: 'National-level IT fest, St. Aloysius College',
    year: '2024',
  },
  {
    title: 'Sahyadri Whiz Quiz Participant',
    org: 'National-level quiz, Sahyadri College of Engineering',
    year: '2024',
  },
  {
    title: '1st Place — Photography',
    org: 'Milaverse 2.0',
    year: '2024',
  },
];

export const football = {
  intro:
    'Long before dashboards and dark mode, there was a football pitch. Grace played competitively for six years — representing her university on the national stage and helping build the very digital systems football academies now run on.',
  stats: [
    { label: 'Years Competing', value: '2019–2024' },
    { label: 'Level', value: 'National & University' },
    { label: 'Club', value: 'El Mundo FC' },
    { label: 'League', value: 'KSFA B Division' },
  ],
  timeline: [
    {
      year: '2019 – 2024',
      title: 'Victoria Football Academy',
      detail: 'Trained and competed as part of Victoria Football Academy\'s competitive program.',
    },
    {
      year: '2019 – 2024',
      title: 'KSFA B Division League',
      detail: 'Played for El Mundo FC in the Karnataka State Football Association B Division League.',
    },
    {
      year: 'Multiple Seasons',
      title: 'Mangalore University (South Zone)',
      detail: 'Represented Mangalore University at South Zone level in national & university tournaments.',
    },
    {
      year: 'School → Degree',
      title: 'Individual Championships',
      detail: 'Won individual championship titles across School, PU College, and Degree-level competitions.',
    },
  ],
};

export const certifications = [
  {
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Infosys Springboard',
    date: 'May 2025',
  },
  {
    title: 'Web Development Internship',
    issuer: 'Nano Stream Technologies',
    date: 'Feb – Jun 2026',
  },
  {
    title: 'National Student Research Symposium — Paper Presentation',
    issuer: 'Kristu Jayanti (Deemed to be University)',
    date: 'Sep 2025',
    detail: '"Role of Cloud Networking in Telecom"',
  },
  {
    title: 'Oracle Cloud Infrastructure — AI Foundations Associate',
    issuer: 'Oracle University',
    date: 'Nov 2025',
  },
  {
    title: 'Aptitude Skills — Certificate Course',
    issuer: 'Kristu Jayanti CECR',
    date: 'Jul 2025',
  },
  {
    title: 'Introduction to Agentic Automation',
    issuer: 'UiPath',
    date: 'Jun 2025',
  },
  {
    title: 'Fundamentals of Java Programming',
    issuer: 'Infosys Springboard',
    date: '2025',
  },
  {
    title: 'Programming Fundamentals',
    issuer: 'Infosys Springboard',
    date: '2025',
  },
  {
    title: 'Employability Skills — Job Ready',
    issuer: 'Wadhwani Foundation & NASSCOM Foundation',
    date: '2024',
  },
  {
    title: 'Data Analytics with Microsoft Power BI',
    issuer: 'FutureSkills Prime',
    date: '2024',
  },
  {
    title: 'Smart English Basics for Professionals',
    issuer: 'Great Learning',
    date: '2023',
  },
  {
    title: 'MICE — HTML5 & CSS',
    issuer: 'MICE',
    date: '2023',
  },
  {
    title: 'Digital 101 Journey',
    issuer: 'FutureSkills Prime',
    date: '2022',
  },
  {
    title: 'Introduction to Soft Skills',
    issuer: 'TCS',
    date: '2021',
  },
];

export const reference = {
  name: 'Mr. Jibin Jacob Mani',
  title:
    'Assistant Professor — Department of Computer Science (PG), School of Computational and Physical Science',
  institution: 'Kristu Jayanti (Deemed to be University), Bengaluru 560077',
  phone: '+91 86062 25049',
  email: 'jibin.jm@kristujayanti.com',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];
