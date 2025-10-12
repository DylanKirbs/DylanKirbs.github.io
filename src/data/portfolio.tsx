import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

// --- Navigation Items ---
export const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
];

// --- Personal Information ---
export interface PersonalInfo {
    name: string;
    title: string;
    description: string;
    email: string;
    bio: string;
    skills: string[];
}

export const personalInfo: PersonalInfo = {
    name: "Dylan Kirby",
    title: "BSc (Hons) Computer Science Student at Stellenbosch University",
    description: "Passionate developer and problem-solver building high-performance software, compilers, and full-stack web applications.",
    email: "dylan@kirbs.co.za",
    bio: "BSc (Hons) Computer Science student specializing in systems programming, backend development, and program analysis. Experienced in Rust, Python, Java, C, TypeScript, and JavaScript. Strong leadership, mentorship, and practical software engineering skills.",
    skills: [
        'Rust', 'Python', 'Java', 'C', 'TypeScript', 'JavaScript', 'x86 Assembly',
        'Django', 'React', 'Vue', 'Tailwind CSS', 'Docker', 'Traefik', 'Linux',
        'Git', 'CI/CD', 'Functional Programming', 'Compiler Design', 'Algorithm Optimisation'
    ]
};

// --- Social Links ---
export interface SocialLink {
    platform: string;
    url: string;
    icon: IconType;
}

export const socialLinks: SocialLink[] = [
    { platform: "GitHub", url: "https://github.com/DylanKirbs", icon: FaGithub },
    { platform: "LinkedIn", url: "https://linkedin.com/in/dylan-kirby-za", icon: FaLinkedin },
    { platform: "Email", url: "mailto:dylan@kirbs.co.za", icon: FaMailBulk }
];

// --- Projects ---
export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    liveUrl: string;
    sourceUrl: string;
    technologies: string[];
}

export const projects: Project[] = [
    {
        title: "Incremental Code Property Graph Engine",
        description: "High-performance incremental program analysis engine for large-scale codebases. Supports modular analysis extensions and efficient re-analysis of code changes.",
        liveUrl: "",
        sourceUrl: "",
        imageUrl: "graph.jpg",
        technologies: ['Rust', 'Tree-sitter', 'Graph Analysis']
    },
    {
        title: "NoteFlow",
        description: "Real-time collaborative Markdown editor with live synchronisation for multiple users. Full-stack web app with Django backend and Vue/TypeScript frontend.",
        liveUrl: "",
        sourceUrl: "",
        imageUrl: "",
        technologies: ['Django', 'Vue', 'TypeScript', 'WebSockets', 'Tailwind CSS']
    },
    {
        title: "Personal Portfolio Website",
        description: "Responsive portfolio website showcasing projects, skills, and more.",
        liveUrl: "#",
        sourceUrl: "https://github.com/DylanKirbs/DylanKirbs.github.io",
        imageUrl: "/portfolio-screenshot.png",
        technologies: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
        title: "Room Points System Automation",
        description: "Automated scoring system for Helshoogte Mens Residence, replacing 70+ spreadsheets with script-based calculation and fairness enforcement.",
        liveUrl: "",
        sourceUrl: "",
        imageUrl: "excel.jpg",
        technologies: ['Python', 'Excel', 'Javascript', 'Automation']
    }
];
