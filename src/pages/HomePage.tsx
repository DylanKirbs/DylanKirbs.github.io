import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, projects } from '../data/portfolio';
import { Button, Container, Card } from '../components/ui';


export const HomePage: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="py-20 lg:py-32">
                <Container>
                    <div className="text-center">
                        <div className="mb-8">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                Hi, I'm{' '}
                                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    Dylan Kirby
                                </span>
                            </h1>
                            <div className="text-xl md:text-2xl text-blue-400 font-semibold mb-4">
                                {personalInfo.title}
                            </div>
                            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                                {personalInfo.description}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link to="/projects">
                                <Button size="lg">
                                    View My Work
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline" size="lg">
                                    Get In Touch
                                </Button>
                            </Link>
                        </div>

                        {/* Skills showcase */}
                        <div className="group/skills-container max-w-2xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-3">
                                {personalInfo.skills.map((skill) => {
                                    return (
                                        <span
                                            key={skill.name}
                                            className={`relative group bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-full text-sm hover:border-blue-500 transition-all duration-700 cursor-help group-hover/skills-container:opacity-100 group-hover/skills-container:blur-0 group-hover/skills-container:translate-y-0 ${skill.level === 'Expert' ? 'shadow-[0_0_8px_rgba(34,197,94,0.3)] hover:shadow-[0_0_12px_rgba(34,197,94,0.5)]' :
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
                                    );
                                })}
                            </div>

                            {/* Subtle hint text */}
                            <div className="text-center mt-4">
                                <p className="text-xs text-gray-500 group-hover/skills-container:opacity-0 transition-opacity duration-300">
                                    Hover over a skill to learn more
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Featured Projects Preview */}
            <section className="py-20 bg-gray-800/30">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-gray-300 text-lg">Here are some of my recent works</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {projects.slice(0, 3).map((project) => (
                            <Card key={project.title} hover link="/projects">
                                <div className="bg-gradient-to-br from-gray-700 to-gray-600 h-48 rounded-lg mb-6 flex items-center justify-center">
                                    {project.imageUrl ? (
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    ) : <span>Image Unavailable</span>}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                <p className="text-gray-300 mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech.name}
                                            className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs"
                                        >
                                            {tech.name}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="text-gray-400 px-2 py-1 text-xs">
                                            +{project.technologies.length - 3} more
                                        </span>
                                    )}
                                </div>
                            </Card>

                        ))}
                    </div>

                    <div className="text-center">
                        <Link to="/projects">
                            <Button variant="outline">
                                View All Projects
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Call to Action */}
            <section className="py-20">
                <Container size="md">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Let's Build Something Amazing Together
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                            I'm always open to discussing new opportunities and interesting projects.
                            Let's connect and see how we can work together.
                        </p>
                        <Link to="/contact">
                            <Button size="lg">
                                Start a Conversation
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
};
