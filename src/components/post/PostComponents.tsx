import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';



export const mdxComponents = {
    p: (props: any) => <p className="mb-4 leading-relaxed" {...props} />,
    h1: (props: any) => <h1 className="text-3xl font-bold mb-6 mt-8" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-semibold mb-4 mt-6" {...props} />,
    h3: (props: any) => <h3 className="text-xl font-semibold mb-3 mt-4" {...props} />,
    blockquote: (props: any) => <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-400" {...props} />,
    ul: (props: any) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
    ol: (props: any) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
    code: (props: any) => {
        const { children, className } = props;
        const language = className?.replace('language-', '') || 'text';

        // Inline code (no language specified)
        if (!className) {
            return <code className="bg-gray-800 text-gray-200 px-2 py-1 rounded text-sm font-mono" {...props} />;
        }

        // Code block with syntax highlighting
        return (
            <SyntaxHighlighter
                language={language}
                style={oneDark}
                customStyle={{
                    margin: '1rem 0',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem'
                }}
            >
                {children}
            </SyntaxHighlighter>
        );
    },
    pre: (props: any) => {
        return <>{props.children}</>;
    }
};