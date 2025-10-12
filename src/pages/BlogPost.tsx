import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';

export const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = posts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-gray-900 text-white">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                        <p className="text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
                        <Link
                            to="/blog"
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        >
                            ← Back to Blog
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <Link
                        to="/blog"
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8 inline-block"
                    >
                        ← Back to Blog
                    </Link>

                    <article className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        <div className="p-6 md:p-12">
                            <header className="mb-8">
                                <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                                    {post.title}
                                </h1>

                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                    <span className="text-gray-400 mb-2 md:mb-0">
                                        {post.date}
                                    </span>
                                    {post.readTimeMins && (
                                        <span className="text-gray-400 text-sm">
                                            {post.readTimeMins} min read
                                        </span>
                                    )}
                                </div>

                                {post.tags && post.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </header>

                            <div className="text-gray-200 leading-relaxed">
                                {post.content}
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};