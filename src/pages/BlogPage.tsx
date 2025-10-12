import React from 'react';
import { posts } from '../data/posts';
import { Link } from 'react-router-dom';

export const BlogPage: React.FC = () => {

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        Blog
                    </h1>
                    <p className="text-xl text-gray-300 mb-12">
                        Thoughts, insights, and technical articles
                    </p>

                    <div className="grid gap-8 md:gap-12">
                        {posts.map((post, index) => (
                            <article
                                key={index}
                                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <Link to={`/blog/${post.slug}`}>
                                            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-0 hover:text-blue-400 transition-colors duration-300">
                                                {post.title}
                                            </h2>
                                        </Link>
                                        <span className="text-gray-400 text-sm md:text-base">
                                            {post.date.toLocaleDateString('en-ZA', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                            })}
                                        </span>
                                    </div>

                                    {post.excerpt && (
                                        <p className="text-gray-300 mb-4 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                    )}

                                    {post.tags && post.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
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

                                    <div className="flex justify-between items-center">
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                                        >
                                            Read more →
                                        </Link>
                                        {post.readTimeMins && (
                                            <span className="text-gray-400 text-sm">
                                                {post.readTimeMins} min read
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {posts.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-400 text-xl">
                                No blog posts yet. Check back soon!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};