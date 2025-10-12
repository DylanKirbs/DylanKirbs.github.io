import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Container: React.FC<ContainerProps> = ({
    children,
    className = '',
    size = 'lg'
}) => {
    const sizeClasses = {
        sm: 'max-w-2xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl'
    };

    return (
        <div className={`container mx-auto px-6 ${sizeClasses[size]} ${className}`}>
            {children}
        </div>
    );
};
