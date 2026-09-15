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

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  pdfUrl: string;
  description: string;
  category: string;
}

export const certificateList: CertificateItem[] = [
  {
    id: 'oracle-ai',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle University',
    year: '2025',
    image: oracleImg,
    pdfUrl: oraclePdf,
    description: 'Official industry certification validating AI architecture, cloud deployment, and machine learning infrastructure.',
    category: 'Oracle / Cloud & AI',
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
  },
];
