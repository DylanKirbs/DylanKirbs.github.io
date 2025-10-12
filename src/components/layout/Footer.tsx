import React from 'react';
import { personalInfo } from '../../data/portfolio';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-700 py-4 bg-gray-900/50">
            <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
                <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
            </div>
        </footer>
    );
};
