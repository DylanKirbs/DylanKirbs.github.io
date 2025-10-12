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
                                            key={tech}
                                            className="bg-blue-600/20 text-blue-300 border border-blue-600/30 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tech}
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
                        href="https://github.com/yourusername"
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
