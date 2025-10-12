import React from 'react';
import { personalInfo, socialLinks } from '../data/portfolio';
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
                                <div
                                    key={skill}
                                    className="bg-gray-800 border border-gray-700 p-4 rounded-lg text-center hover:border-blue-500 transition-colors"
                                >
                                    <span className="font-medium">{skill}</span>
                                </div>
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
