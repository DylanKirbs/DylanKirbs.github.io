import React from 'react';
import { personalInfo } from '../data/portfolio';
import { Container } from '../components/ui';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    return (
        <section className="py-20">
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
                        <p className="text-xl text-gray-300">
                            Learn more about my journey, skills, and what drives me.
                        </p>
                    </div>

                    {/* Story Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 items-center mb-16">
                        <div className="lg:col-span-4">
                            <h2 className="text-2xl font-semibold mb-6">My Story</h2>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>{personalInfo.bio}</p>
                                <p>
                                    I have experience in building high-performance software tools, compilers, and full-stack web applications.
                                    I focus on clean, maintainable code and systems that are efficient and scalable.
                                </p>
                                <p>
                                    Beyond programming, I enjoy mentoring, exploring new technologies, and hiking.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-2 self-start">
                            <img
                                src="/dylan.jpg"
                                alt="Avatar"
                                className="rounded-full object-cover border-4 border-gray-800 mx-auto my-auto w-48 h-48"
                            />
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-8 text-center">Skills & Technologies</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {personalInfo.skills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className={`relative group bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-lg text-sm hover:border-blue-500 transition-all duration-700 cursor-help group-hover/skills-container:opacity-100 group-hover/skills-container:blur-0 group-hover/skills-container:translate-y-0 ${skill.level === 'Expert' ? 'shadow-[0_0_8px_rgba(34,60,200,0.3)] hover:shadow-[0_0_12px_rgba(34,60,200,0.5)]' :
                                        skill.level === 'Advanced' ? 'shadow-[0_0_3px_rgba(239,68,68,0.3)] hover:shadow-[0_0_12px_rgba(239,68,68,0.5)]' :
                                            skill.level === 'Intermediate' ? 'shadow-[0_0_3px_rgba(251,191,36,0.3)] hover:shadow-[0_0_12px_rgba(251,191,36,0.5)]' :
                                                skill.level === 'Beginner' ? 'shadow-[0_0_3px_rgba(59,246,130,0.3)] hover:shadow-[0_0_12px_rgba(59,246,130,0.5)]' :
                                                    'shadow-[0_0_3px_rgba(156,200,175,0.2)] hover:shadow-[0_0_12px_rgba(156,163,175,0.3)]'
                                        }`}
                                >
                                    {skill.name}

                                    {skill.description && (
                                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 text-gray-100 text-xs rounded-lg border border-gray-700 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 blur-0">
                                            <div className="font-semibold text-blue-300 mb-1">{skill.name} {skill.level && (<>| {skill.level}</>)}</div>
                                            <div className="leading-relaxed">{skill.description}</div>
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                                        </div>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-6">Let's Work Together</h2>
                        <p className="text-gray-300 mb-8">
                            I'm always open to discussing new opportunities, collaborations, or projects.
                        </p>
                        <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">Get in Touch</Link>
                    </div>
                </div>
            </Container>
        </section>
    );
};
