import { useState, useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

const defaultContent = `# Welcome to the MDX Editor

This is a **live editor** for writing MDX blog posts. You can:

- Write in Markdown
- Use **bold** and *italic* text
- Add \`inline code\`
- Create code blocks:

\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

## Features

- Obsidian-like inline editing
- Live preview as you type
- Saves to localStorage automatically
- Export as .mdx file with frontmatter
- Full MDX syntax support

Start writing below!
`;

// Helper function to apply inline markdown styling
const applyInlineStyles = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    // Match patterns: **bold**, *italic*, `code`, [link](url)
    const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[([^\]]+)\]\(([^)]+)\))/g;
    let match;

    while ((match = pattern.exec(text)) !== null) {
        // Add text before match
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }

        const matched = match[0];
        if (matched.startsWith('**') && matched.endsWith('**')) {
            // Bold
            parts.push(
                <strong key={match.index} className="font-bold text-blue-300">
                    {matched}
                </strong>
            );
        } else if (matched.startsWith('*') && matched.endsWith('*')) {
            // Italic
            parts.push(
                <em key={match.index} className="italic text-purple-300">
                    {matched}
                </em>
            );
        } else if (matched.startsWith('`') && matched.endsWith('`')) {
            // Inline code
            parts.push(
                <code key={match.index} className="bg-gray-700 text-pink-300 px-1 rounded font-mono text-sm">
                    {matched}
                </code>
            );
        } else if (matched.startsWith('[')) {
            // Link
            parts.push(
                <span key={match.index} className="text-blue-400 underline">
                    {matched}
                </span>
            );
        }

        lastIndex = match.index + matched.length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
};

// Component for rendering a styled line
const StyledLine = ({ line, onChange }: {
    line: string;
    onChange: (newText: string) => void;
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(line);

    const handleBlur = () => {
        setIsEditing(false);
        if (editValue !== line) {
            onChange(editValue);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleBlur();
        }
    };

    if (isEditing) {
        return (
            <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                className="w-full bg-gray-800 text-gray-100 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
                autoFocus
            />
        );
    }

    // Detect line type and apply appropriate styling
    if (line.startsWith('# ')) {
        return (
            <div
                onClick={() => setIsEditing(true)}
                className="text-3xl font-bold text-gray-100 cursor-text hover:bg-gray-700/30 px-2 py-2 rounded"
            >
                <span className="text-gray-500 mr-2">#</span>
                {applyInlineStyles(line.substring(2))}
            </div>
        );
    } else if (line.startsWith('## ')) {
        return (
            <div
                onClick={() => setIsEditing(true)}
                className="text-2xl font-semibold text-gray-100 cursor-text hover:bg-gray-700/30 px-2 py-2 rounded"
            >
                <span className="text-gray-500 mr-2">##</span>
                {applyInlineStyles(line.substring(3))}
            </div>
        );
    } else if (line.startsWith('### ')) {
        return (
            <div
                onClick={() => setIsEditing(true)}
                className="text-xl font-semibold text-gray-100 cursor-text hover:bg-gray-700/30 px-2 py-2 rounded"
            >
                <span className="text-gray-500 mr-2">###</span>
                {applyInlineStyles(line.substring(4))}
            </div>
        );
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
        return (
            <div
                onClick={() => setIsEditing(true)}
                className="text-gray-100 cursor-text hover:bg-gray-700/30 px-2 py-1 rounded pl-4"
            >
                <span className="text-blue-400 mr-2">•</span>
                {applyInlineStyles(line.substring(2))}
            </div>
        );
    } else if (line.startsWith('```')) {
        return (
            <div
                onClick={() => setIsEditing(true)}
                className="bg-gray-900 text-gray-400 font-mono text-sm cursor-text hover:bg-gray-700/30 px-2 py-1 rounded"
            >
                {line}
            </div>
        );
    } else if (line.trim() === '') {
        return (
            <div
                onClick={() => setIsEditing(true)}
                className="h-6 cursor-text hover:bg-gray-700/30"
            />
        );
    } else {
        return (
            <div
                onClick={() => setIsEditing(true)}
                className="text-gray-100 leading-relaxed cursor-text hover:bg-gray-700/30 px-2 py-1 rounded"
            >
                {applyInlineStyles(line)}
            </div>
        );
    }
};

export default function EditorPage() {
    const [mdxSource, setMdxSource] = useState<string>(() => {
        const saved = localStorage.getItem('mdx-editor-content');
        return saved || defaultContent;
    });

    // Frontmatter state
    const [title, setTitle] = useState('My New Post');
    const [slug, setSlug] = useState('my-new-post');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [excerpt, setExcerpt] = useState('A brief description of my post');
    const [tags, setTags] = useState('blog, example');
    const [readTimeMins, setReadTimeMins] = useState(5);

    useEffect(() => {
        localStorage.setItem('mdx-editor-content', mdxSource);
    }, [mdxSource]);

    const lines = mdxSource.split('\n');

    const updateLine = (lineIndex: number, newText: string) => {
        const newLines = [...lines];
        newLines[lineIndex] = newText;
        setMdxSource(newLines.join('\n'));
    };

    const handleExport = () => {
        // Build frontmatter
        const frontmatter = `---
title: ${title}
slug: ${slug}
date: ${date}
excerpt: ${excerpt}
tags: [${tags}]
readTimeMins: ${readTimeMins}
---

`;

        const fullContent = frontmatter + mdxSource;
        const blob = new Blob([fullContent], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = slug + '.mdx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleClear = () => {
        if (confirm('Are you sure you want to clear the editor?')) {
            setMdxSource(defaultContent);
            localStorage.removeItem('mdx-editor-content');
        }
    };

    const handleLoadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target?.result as string;

            // Try to extract frontmatter
            const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
            if (frontmatterMatch) {
                const frontmatterStr = frontmatterMatch[1];
                const bodyContent = frontmatterMatch[2];

                // Parse frontmatter fields
                const titleMatch = frontmatterStr.match(/title:\s*(.+)/);
                const slugMatch = frontmatterStr.match(/slug:\s*(.+)/);
                const dateMatch = frontmatterStr.match(/date:\s*(.+)/);
                const excerptMatch = frontmatterStr.match(/excerpt:\s*(.+)/);
                const tagsMatch = frontmatterStr.match(/tags:\s*\[(.+)\]/);
                const readTimeMatch = frontmatterStr.match(/readTimeMins:\s*(\d+)/);

                if (titleMatch) setTitle(titleMatch[1].trim());
                if (slugMatch) setSlug(slugMatch[1].trim());
                if (dateMatch) setDate(dateMatch[1].trim());
                if (excerptMatch) setExcerpt(excerptMatch[1].trim());
                if (tagsMatch) setTags(tagsMatch[1].trim());
                if (readTimeMatch) setReadTimeMins(parseInt(readTimeMatch[1]));

                setMdxSource(bodyContent);
            } else {
                setMdxSource(content);
            }
        };
        reader.readAsText(file);
    };

    return (
        <div className="min-h-screen bg-gray-900">
            <Container>
                <div className="py-8">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            MDX Editor
                        </h1>
                        <div className="flex gap-2">
                            <label className="cursor-pointer">
                                <span className="font-semibold transition-colors rounded-lg inline-block text-center bg-gray-600 hover:bg-gray-700 text-white px-6 py-3">
                                    Load
                                </span>
                                <input
                                    type="file"
                                    accept=".mdx,.md"
                                    onChange={handleLoadFile}
                                    className="hidden"
                                />
                            </label>
                            <Button onClick={handleExport} variant="secondary">
                                Export
                            </Button>
                            <Button onClick={handleClear} variant="secondary">
                                Clear
                            </Button>
                        </div>
                    </div>

                    {/* Frontmatter Form */}
                    <div className="bg-gray-800 rounded-lg p-4 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full bg-gray-700 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Slug</label>
                            <input
                                type="text"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                className="w-full bg-gray-700 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Date</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full bg-gray-700 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Read Time (mins)</label>
                            <input
                                type="number"
                                value={readTimeMins}
                                onChange={(e) => setReadTimeMins(parseInt(e.target.value) || 0)}
                                className="w-full bg-gray-700 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm text-gray-400 mb-1">Excerpt</label>
                            <input
                                type="text"
                                value={excerpt}
                                onChange={(e) => setExcerpt(e.target.value)}
                                className="w-full bg-gray-700 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm text-gray-400 mb-1">Tags (comma-separated)</label>
                            <input
                                type="text"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                                className="w-full bg-gray-700 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Inline Editor Area */}
                    <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="bg-gray-700 px-4 py-2 border-b border-gray-600">
                            <span className="text-sm font-semibold text-gray-300">
                                Editor - Click any line to edit
                            </span>
                        </div>
                        <div className="p-6 space-y-2 min-h-[60vh] max-h-[60vh] overflow-y-auto">
                            {lines.map((line, index) => (
                                <StyledLine
                                    key={index}
                                    line={line}
                                    onChange={(newText) => updateLine(index, newText)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
