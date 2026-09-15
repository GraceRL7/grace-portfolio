import agenticImg from './Certificates/previews/agentic-automation-1.jpg';
import agenticPdf from './Certificates/Introduction to agentic automation_Grace Reshal Lewis_en-US_diploma_copy (1).pdf';

import digitalMarketingImg from './Certificates/previews/digital-marketing-1.jpg';
import digitalMarketingPdf from './Certificates/Digital Marketing.pdf';

import googleAdsImg from './Certificates/previews/google-ads-1.jpg';
import googleAdsPdf from './Certificates/Google ads.pdf';

import graceCertImg from './Certificates/previews/grace-certificate-1.jpg';
import graceCertPdf from './Certificates/Grace certificate.pdf';

import introAiImg from './Certificates/previews/introduction-to-ai-1.jpg';
import introAiPdf from './Certificates/Grace Ai certificate (1).pdf';

import javaImg from './Certificates/previews/java-programming-1.jpg';
import javaPdf from './Certificates/Java.pdf';

import oracleImg from './Certificates/previews/oracle-ai-foundations-1.jpg';
import oraclePdf from './Certificates/Grace oracle (1).pdf';

import progFundImg from './Certificates/previews/programming-fundamentals-1.jpg';
import progFundPdf from './Certificates/Programming Fundaments.pdf';

import researchImg from './Certificates/previews/research-symposium-1.jpg';
import researchPdf from './Certificates/Grace research certificate (1).pdf';

import seoImg from './Certificates/previews/seo-1.jpg';
import seoPdf from './Certificates/SEO.pdf';

import wadhwaniImg from './Certificates/previews/wadhwani-employability-1.jpg';
import wadhwaniPdf from './Certificates/Wadhwani Foundation Certificate - 67a220d2c78296b1455d8a13.pdf';

import wordpressImg from './Certificates/previews/wordpress-1.jpg';
import wordpressPdf from './Certificates/wordpress.pdf';

import ksfaImg from './Ksfa B division.jpeg';
import eventHeadImg from './Event head at manoeuvre it fes for videography and photography3.0.jpeg';
import winnersImg from './Manoeuvre it fest overall winners 2.0.jpeg';
import rajyaPuraskarImg from './Rajya puraskar award.jpeg';
import southZoneImg from './south zone.jpeg';
import shadowsCoverImg from './Certificates/previews/shadows-cover.png';

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  pdfUrl: string;
  description: string;
  category: string;
  type: 'certificate' | 'award';
  youtubeUrl?: string;
}

export const certificateList: CertificateItem[] = [
  {
    id: '1st-place-short-film',
    title: '1st Place Winner — Directed, Shot & Edited Short Film / Video Production',
    issuer: 'Inter-Collegiate Film Festival & Competition',
    year: '2025',
    image: shadowsCoverImg,
    pdfUrl: 'https://youtu.be/n8D0tpW85XQ?si=9RwUiiAT0lvri-3x',
    youtubeUrl: 'https://www.youtube.com/embed/n8D0tpW85XQ?autoplay=1&rel=0',
    description: 'Secured 1st Place overall in national video production. Directed, filmed, and edited the winning video project featuring cinematic storytelling, multi-track audio sync, and color grading.',
    category: '1st Place Award & Video Production',
    type: 'award',
  },
  {
    id: 'oracle-ai',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle University',
    year: '2025',
    image: oracleImg,
    pdfUrl: oraclePdf,
    description: 'Official industry certification validating AI architecture, cloud deployment, and machine learning infrastructure.',
    category: 'Oracle / Cloud & AI',
    type: 'certificate',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & E-commerce Professional Certificate',
    issuer: 'Google | Coursera',
    year: '2024',
    image: digitalMarketingImg,
    pdfUrl: digitalMarketingPdf,
    description: 'Professional certificate covering search engine optimization, email marketing, digital analytics, and display advertising strategies.',
    category: 'Coursera / Google',
    type: 'certificate',
  },
  {
    id: 'ksfa-b-division',
    title: 'KSFA B Division League — Official Player Achievement',
    issuer: 'Karnataka State Football Association',
    year: '2024',
    image: ksfaImg,
    pdfUrl: ksfaImg,
    description: 'Official registration & team representation in the prestigious KSFA B Division Football League.',
    category: 'Athletic Achievement',
    type: 'award',
  },
  {
    id: 'south-zone-varsity',
    title: 'South Zone Inter-University Varsity Football Representative',
    issuer: 'Association of Indian Universities (AIU)',
    year: '2024',
    image: southZoneImg,
    pdfUrl: southZoneImg,
    description: 'Selected to represent varsity football at the national South Zone Inter-University Championship.',
    category: 'Varsity Honor',
    type: 'award',
  },
  {
    id: 'manoeuvre-event-head',
    title: 'Event Head — Videography & Photography (Manoeuvre IT Fest)',
    issuer: 'Kristu Jayanti College',
    year: '2025',
    image: eventHeadImg,
    pdfUrl: eventHeadImg,
    description: 'Appointed Event Head leading multi-camera coverage, creative media direction, and IT fest videography production.',
    category: 'Leadership & Media',
    type: 'award',
  },
  {
    id: 'manoeuvre-overall-winners',
    title: 'Overall Championship Winners — Manoeuvre IT Fest',
    issuer: 'Kristu Jayanti College',
    year: '2025',
    image: winnersImg,
    pdfUrl: winnersImg,
    description: 'Awarded Overall Champions title at the national Manoeuvre IT Fest across photography & creative events.',
    category: 'National IT Fest Award',
    type: 'award',
  },
  {
    id: 'rajya-puraskar-scout',
    title: 'Rajya Puraskar Governor Scout Award',
    issuer: 'The Bharat Scouts and Guides',
    year: '2022',
    image: rajyaPuraskarImg,
    pdfUrl: rajyaPuraskarImg,
    description: 'Prestigious Governor Scouting Award recognizing community leadership, outdoor survival mastery, and discipline.',
    category: 'Governor Award',
    type: 'award',
  },
  {
    id: 'intro-ai-infosys',
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Infosys Springboard',
    year: '2025',
    image: introAiImg,
    pdfUrl: introAiPdf,
    description: 'Foundational mastery in neural networks, machine learning principles, and generative AI application frameworks.',
    category: 'Infosys Springboard',
    type: 'certificate',
  },
  {
    id: 'java-fundamentals-infosys',
    title: 'Fundamentals of Java Programming',
    issuer: 'Infosys Springboard',
    year: '2025',
    image: javaImg,
    pdfUrl: javaPdf,
    description: 'Object-oriented programming, data structures, exception handling, and core Java application architecture.',
    category: 'Infosys Springboard',
    type: 'certificate',
  },
  {
    id: 'prog-fundamentals-infosys',
    title: 'Programming Fundamentals',
    issuer: 'Infosys Springboard',
    year: '2025',
    image: progFundImg,
    pdfUrl: progFundPdf,
    description: 'Algorithmic thinking, control structures, memory management, and software engineering principles.',
    category: 'Infosys Springboard',
    type: 'certificate',
  },
  {
    id: 'google-analytics',
    title: 'Google Analytics for Beginners',
    issuer: 'Google | Coursera',
    year: '2023',
    image: googleAdsImg,
    pdfUrl: googleAdsPdf,
    description: 'Comprehensive training on web analytics, audience segmentation, conversion tracking, and performance reporting.',
    category: 'Coursera / Google',
    type: 'certificate',
  },
  {
    id: 'agentic-automation',
    title: 'Introduction to Agentic Automation',
    issuer: 'UiPath',
    year: '2025',
    image: agenticImg,
    pdfUrl: agenticPdf,
    description: 'Diploma in designing autonomous AI agents, enterprise workflow orchestrations, and intelligent process automation.',
    category: 'AI Automation',
    type: 'certificate',
  },
  {
    id: 'seo-fundamentals',
    title: 'SEO Fundamentals',
    issuer: 'Semrush Academy',
    year: '2023',
    image: seoImg,
    pdfUrl: seoPdf,
    description: 'Technical search engine optimization, keyword research, on-page optimization, and backlink audit methodologies.',
    category: 'SEO',
    type: 'certificate',
  },
  {
    id: 'wordpress-dev',
    title: 'WordPress Web Development',
    issuer: 'Great Learning',
    year: '2024',
    image: wordpressImg,
    pdfUrl: wordpressPdf,
    description: 'Full-stack WordPress website architecture, custom theme development, Elementor customization, and plugin engineering.',
    category: 'Web Development',
    type: 'certificate',
  },
  {
    id: 'research-symposium',
    title: 'National Student Research Symposium — Paper Presentation',
    issuer: 'Kristu Jayanti (Deemed to be University)',
    year: '2025',
    image: researchImg,
    pdfUrl: researchPdf,
    description: 'Paper presentation certification on "Role of Cloud Networking in Telecom" at the national student research conference.',
    category: 'Research',
    type: 'award',
  },
  {
    id: 'wadhwani-employability',
    title: 'Employability Skills — Job Ready',
    issuer: 'Wadhwani Foundation & NASSCOM',
    year: '2024',
    image: wadhwaniImg,
    pdfUrl: wadhwaniPdf,
    description: 'Professional development program covering workplace ethics, teamwork, agile project management, and corporate readiness.',
    category: 'Career Readiness',
    type: 'certificate',
  },
  {
    id: 'aptitude-skills',
    title: 'Aptitude & Technical Soft Skills',
    issuer: 'Kristu Jayanti CECR',
    year: '2025',
    image: graceCertImg,
    pdfUrl: graceCertPdf,
    description: 'Advanced certification program focused on quantitative problem solving, logical reasoning, and technical presentation skills.',
    category: 'Professional Skills',
    type: 'certificate',
  },
];
