import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { personalInfo } from '../../data/portfolio';
import { navigationItems } from '../../App';

export const Header: React.FC = () => {
    const location = useLocation();

    return (
        <header className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 z-50">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link
                        to="/"
                        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                    >
                        {personalInfo.name}
                    </Link>

                    <div className="hidden md:flex space-x-8">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`transition-colors ${location.pathname === item.path
                                    ? 'text-blue-400'
                                    : 'text-gray-300 hover:text-blue-400'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button - you can expand this later */}
                    <div className="md:hidden">
                        <button className="text-gray-300 hover:text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};
