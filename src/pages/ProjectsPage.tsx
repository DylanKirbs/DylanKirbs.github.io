import React from 'react';
import { Container, Card, Button } from '../components/ui';
import { projects } from '../data/portfolio';

export const ProjectsPage: React.FC = () => {
    return (
        <section className="py-20">
            <Container>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        A collection of projects that showcase my skills and passion for development
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card key={project.title} className="h-full flex flex-col">
                            <div className="bg-gradient-to-br from-gray-700 to-gray-600 h-48 rounded-lg mb-6 flex items-center justify-center">
                                {project.imageUrl ? (
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                ) : <span>Image Unavailable</span>}
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech.name}
                                            className="relative group bg-blue-600/20 text-blue-300 border border-blue-600/30 px-3 py-1 rounded-full text-sm hover:border-blue-500 transition-colors cursor-help"
                                            title={tech.description}
                                        >
                                            {tech.name}


                                            {tech.description && (
                                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 text-gray-100 text-xs rounded-lg border border-gray-700 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                                                    <div className="font-semibold text-blue-300 mb-1">{tech.name} {tech.level && (<>| {tech.level}</>)}</div>
                                                    <div className="leading-relaxed">{tech.description}</div>
                                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                                                </div>
                                            )}
                                        </span>
                                    ))}
                                </div>


                            </div>

                            <div className="flex gap-4 mt-auto">
                                {project.liveUrl && (
                                    <Button
                                        href={project.liveUrl}
                                        variant="primary"
                                        size="sm"
                                        className="flex-1"
                                    >
                                        Live Demo
                                    </Button>
                                )}
                                {project.sourceUrl && (
                                    <Button
                                        href={project.sourceUrl}
                                        variant="outline"
                                        size="sm"
                                        className="flex-1"
                                    >
                                        Source Code
                                    </Button>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Add more projects call-to-action */}
                <div className="text-center mt-16">
                    <p className="text-gray-300 mb-6">
                        Want to see more of my work or collaborate on a project?
                    </p>
                    <a
                        href="https://github.com/DylanKirbs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-800 hover:bg-gray-700 border border-gray-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Visit My GitHub
                    </a>
                </div>
            </Container>
        </section>
    );
};
