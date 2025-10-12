import React from 'react';
import { Link } from 'react-router';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    link?: string;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hover = false,
    link = ''
}) => {
    const baseClasses = 'bg-gray-800 rounded-lg p-6';
    const hoverClasses = hover ? 'hover:bg-gray-700 transition-colors cursor-pointer' : '';

    return (
        <div className={`${baseClasses} ${hoverClasses} ${className}`}>
            {link ? (
                <Link to={link}>
                    {children}
                </Link>
            ) : (
                children
            )}
        </div>
    );
};
