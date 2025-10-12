import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

// --- Navigation Items ---
export const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
];

// --- Skills ---
export interface Skill {
    name: string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    description?: string; // Optional detailed description
}

export const skillMap: { [key: string]: Skill } = {
    'Rust': {
        name: 'Rust',
        level: 'Advanced',
        description:
            'Strong proficiency in Rust with deep understanding of ownership, lifetimes, and memory safety guarantees. Experienced in building performant systems including incremental program analysis engines and compiler-style architectures. Actively use Cargo, async runtimes, and ecosystem tools for modular and maintainable system design.'
    },
    'Python': {
        name: 'Python',
        level: 'Advanced',
        description:
            'Extensive experience using Python for automation, data analysis, and backend development. Proficient in Pandas, NumPy, Matplotlib, OpenCV, and Django. Strong grasp of clean architecture, modularity, and type-checked development using tools such as Pydantic and mypy.'
    },
    'Java': {
        name: 'Java',
        level: 'Advanced',
        description:
            'Competent in Java through academic and applied projects. Comfortable with OOP design, data structures, and algorithm implementation. Familiar with Spring Boot and concurrent programming concepts.'
    },
    'C': {
        name: 'C',
        level: 'Advanced',
        description:
            'Solid understanding of C fundamentals, including memory management, pointers, and compilation. Applied in compiler implementation and systems programming contexts.'
    },
    'x86 Assembly': {
        name: 'x86 Assembly',
        level: 'Intermediate',
        description:
            'Practical understanding of x86 NASM assembly from compiler coursework and teaching experience. Comfortable reading and writing low-level code and explaining architectural principles to students.'
    },
    'Django': {
        name: 'Django',
        level: 'Intermediate',
        description:
            'Built multiple production-ready Django applications with complex authentication, WebSocket, and REST integration. Strong understanding of ORM optimization, middleware, and scalability.'
    },
    'React': {
        name: 'React',
        level: 'Advanced',
        description:
            'Developed multiple production-grade SPAs using React, emphasizing modularity, state management, and maintainable UI composition. Comfortable integrating with REST and WebSocket backends.'
    },
    'TypeScript': {
        name: 'TypeScript',
        level: 'Advanced',
        description:
            'Advanced experience building robust web applications using TypeScript for both client and server. Strong advocate for static typing, modular design, and modern ECMAScript patterns. Experienced with Vue, React, and Node.js ecosystems.'
    },
    'JavaScript': {
        name: 'JavaScript',
        level: 'Advanced',
        description:
            'Deep experience in frontend and backend JavaScript development, focusing on modular architecture and maintainable state management. Skilled with frameworks such as React, Vue, and Node.js.'
    },
    'Vue': {
        name: 'Vue',
        level: 'Intermediate',
        description:
            'Experience building performant, clean SPAs using Vue and TypeScript. Applied in collaborative, full-stack environments with Django backends.'
    },
    'Tailwind CSS': {
        name: 'Tailwind CSS',
        level: 'Intermediate',
        description:
            'Use Tailwind CSS for building responsive, maintainable UIs efficiently. Comfortable combining utility-first design with modern component frameworks.'
    },
    'Docker': {
        name: 'Docker',
        level: 'Advanced',
        description:
            'Extensive experience containerizing and orchestrating applications for reproducible environments. Use Docker in multi-service stacks with Traefik and CI/CD pipelines.'
    },
    'Traefik': {
        name: 'Traefik',
        level: 'Intermediate',
        description:
            'Proficient in configuring Traefik as a reverse proxy and dynamic router for containerized deployments. Used in conjunction with Cloudflare Argo tunnels for secure self-hosting.'
    },
    'Linux': {
        name: 'Linux',
        level: 'Advanced',
        description:
            'Experienced Linux user and administrator. Skilled in system configuration, shell scripting, and environment customization. Transitioned to NixOS with declarative, reproducible setups using flakes.'
    },
    'Git': {
        name: 'Git',
        level: 'Advanced',
        description:
            'Fluent with Git for version control, collaborative workflows, and CI/CD automation. Familiar with advanced branching, rebasing, and conflict resolution strategies.'
    },
    'CI/CD': {
        name: 'CI/CD',
        level: 'Advanced',
        description:
            'Developed and maintained CI/CD pipelines using GitHub Actions and Jenkins. Automated build, test, and deployment workflows for reproducible delivery.'
    },
    'Functional Programming': {
        name: 'Functional Programming',
        level: 'Intermediate',
        description:
            'Strong theoretical and practical understanding of functional paradigms through Haskell and Rust. Comfortable with immutability, higher-order functions, and declarative design.'
    },
    'Compiler Design': {
        name: 'Compiler Design',
        level: 'Intermediate',
        description:
            'Practical experience implementing a C-based compiler and developing a Rust-based incremental analysis engine. Familiar with parsing, lexical analysis, symbol resolution, and intermediate representations.'
    },
    'Algorithmic Optimisation': {
        name: 'Algorithmic Optimisation',
        level: 'Advanced',
        description:
            'Applied algorithmic optimization in research and academic contexts. Skilled in improving runtime and memory performance through profiling, dynamic programming, and data structure design.'
    },
    'Tree-Sitter': {
        name: 'Tree-Sitter',
        level: 'Intermediate',
        description: 'Used for parsing source code into syntax trees, enabling language-agnostic analysis.'
    },
    'WebSockets': {
        name: 'WebSockets',
        level: 'Intermediate',
        description: 'Experience implementing real-time features in web applications using WebSockets for bidirectional communication.'
    },
    'Firebase': {
        name: 'Firebase',
        level: 'Beginner',
        description: 'Familiarity with Firebase for building serverless applications and real-time databases.'
    },
    'Excel': {
        name: 'Excel',
        level: 'Advanced',
        description: 'Proficient in Excel for data analysis, automation with VBA, and complex spreadsheet management.'
    },
    'Automation': {
        name: 'Automation',
        level: 'Advanced',
        description: 'Skilled in automating repetitive tasks and workflows using scripting languages and tools.'
    }
}


// --- Personal Information ---
export interface PersonalInfo {
    name: string;
    title: string;
    description: string;
    email: string;
    bio: string;
    skills: Skill[];
}

export const personalInfo: PersonalInfo = {
    name: "Dylan Kirby",
    title: "BSc (Hons) Computer Science Student at Stellenbosch University",
    description: "Passionate developer and problem-solver building high-performance software, compilers, and full-stack web applications.",
    email: "dylan@kirbs.co.za",
    bio: "BSc (Hons) Computer Science student specializing in systems programming, backend development, and program analysis. Experienced in Rust, Python, Java, C, TypeScript, and JavaScript. Strong leadership, mentorship, and practical software engineering skills.",
    skills: Object.values(skillMap)
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
    technologies: Skill[];
}

export const projects: Project[] = [
    {
        title: "Incremental Code Property Graph Engine",
        description: "High-performance incremental program analysis engine for large-scale codebases. Supports modular analysis extensions and efficient re-analysis of code changes.",
        liveUrl: "",
        sourceUrl: "",
        imageUrl: "graph.jpg",
        technologies: [
            skillMap['Rust'],
            skillMap['Tree-Sitter'],
            skillMap['Python'],
            skillMap['Functional Programming'],
            skillMap['Algorithmic Optimisation'],
        ]
    },
    {
        title: "NoteFlow",
        description: "Real-time collaborative Markdown editor with live synchronisation for multiple users. Full-stack web app with Django backend and Vue/TypeScript frontend.",
        liveUrl: "",
        sourceUrl: "",
        imageUrl: "notebook.jpg",
        technologies: [
            skillMap['Vue'],
            skillMap['React'],
            skillMap['TypeScript'],
            skillMap['Tailwind CSS'],
            skillMap['Firebase'],
            skillMap['WebSockets']
        ]
    },
    {
        title: "Personal Portfolio Website",
        description: "Responsive portfolio website showcasing projects, skills, and more.",
        liveUrl: "#",
        sourceUrl: "https://github.com/DylanKirbs/DylanKirbs.github.io",
        imageUrl: "/portfolio-screenshot.png",
        technologies: [
            skillMap['React'],
            skillMap['TypeScript'],
            skillMap['Tailwind CSS']
        ]
    },
    {
        title: "Room Points System Automation",
        description: "Automated scoring system for Helshoogte Mens Residence, replacing 70+ spreadsheets with script-based calculation and fairness enforcement.",
        liveUrl: "",
        sourceUrl: "",
        imageUrl: "excel.jpg",
        technologies: [
            skillMap['Python'],
            skillMap['Excel'],
            skillMap['JavaScript'],
            skillMap['Automation']
        ]
    }
];
