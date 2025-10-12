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
                        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                            {personalInfo.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-full text-sm hover:border-blue-500 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
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
                                            key={tech}
                                            className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs"
                                        >
                                            {tech}
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
