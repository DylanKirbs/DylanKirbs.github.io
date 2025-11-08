import React, { useState, useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import {
    MDXEditor,
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
    markdownShortcutPlugin,
    linkPlugin,
    linkDialogPlugin,
    imagePlugin,
    tablePlugin,
    codeBlockPlugin,
    codeMirrorPlugin,
    diffSourcePlugin,
    toolbarPlugin,
    UndoRedo,
    BoldItalicUnderlineToggles,
    CodeToggle,
    ListsToggle,
    BlockTypeSelect,
    CreateLink,
    InsertImage,
    InsertTable,
    InsertThematicBreak,
    InsertCodeBlock,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import { markdown } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { syntaxHighlighting, HighlightStyle } from '@codemirror/language';
import { tags } from '@lezer/highlight';


const markdownHighlightStyle = HighlightStyle.define([
    { tag: tags.heading, color: '#93c5fd', fontWeight: 'bold', fontSize: '1.2em' },
    { tag: tags.strong, color: '#fbbf24', fontWeight: 'bold' },
    { tag: tags.emphasis, color: '#a78bfa', fontStyle: 'italic' },
    { tag: tags.link, color: '#60a5fa' },
    { tag: tags.url, color: '#34d399' },
    { tag: tags.quote, color: '#d1d5db', fontStyle: 'italic' },
    { tag: tags.list, color: '#93c5fd' },
    { tag: tags.monospace, color: '#fbbf24', backgroundColor: '#374151' },
]);

const defaultContent = `# Welcome to the MDX Editor

This is a **live editor** for writing MDX blog posts. You can:

- Write in Markdown
- Use **bold** and *italic* text
- Add \`inline code\`
- Create code blocks

## Features

- WYSIWYG editing with MDXEditor
- Live preview as you type  
- Saves to localStorage automatically
- Export as .mdx file with frontmatter
- Full MDX syntax support

Start writing below!
`;

export default function EditorPage() {
    // Frontmatter state
    const [title, setTitle] = useState('My New Post');
    const [slug, setSlug] = useState('my-new-post');
    const [excerpt, setExcerpt] = useState('A brief description of my post');
    const [tags, setTags] = useState<string[]>(['blog', 'example']);
    const [readTimeMins, setReadTimeMins] = useState(5);
    const [tagInput, setTagInput] = useState('');
    const [editorKey, setEditorKey] = useState(0); // Force re-mount on error

    // MDX content (without frontmatter)
    const [mdxContent, setMdxContent] = useState<string>(() => {
        const saved = localStorage.getItem('mdx-editor-content');
        if (saved) {
            // Extract content without frontmatter if it exists
            const frontmatterMatch = saved.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
            if (frontmatterMatch) {
                // Parse frontmatter
                const frontmatter = frontmatterMatch[1];
                const content = frontmatterMatch[2];

                // Extract frontmatter values
                const titleMatch = frontmatter.match(/title:\s*(.+)/);
                const slugMatch = frontmatter.match(/slug:\s*(.+)/);
                const excerptMatch = frontmatter.match(/excerpt:\s*(.+)/);
                const tagsMatch = frontmatter.match(/tags:\s*(.+)/);
                const readTimeMatch = frontmatter.match(/readTimeMins:\s*(\d+)/);

                if (titleMatch) setTitle(titleMatch[1]);
                if (slugMatch) setSlug(slugMatch[1]);
                if (excerptMatch) setExcerpt(excerptMatch[1]);
                if (tagsMatch) {
                    // Remove square brackets if present and split by comma
                    const tagsString = tagsMatch[1].replace(/^\[|\]$/g, '').trim();
                    const parsedTags = tagsString.split(',').map(t => t.trim()).filter(t => t);
                    setTags(parsedTags);
                }
                if (readTimeMatch) setReadTimeMins(parseInt(readTimeMatch[1]));

                return content;
            }
        }
        return defaultContent;
    });

    useEffect(() => {
        // Save content without frontmatter, date is set on export
        const fullContent = `---
title: ${title}
slug: ${slug}
date: ${new Date().toISOString().split('T')[0]}
excerpt: ${excerpt}
tags: ${tags.join(', ')}
readTimeMins: ${readTimeMins}
---

${mdxContent}`;
        localStorage.setItem('mdx-editor-content', fullContent);
    }, [mdxContent, title, slug, excerpt, tags, readTimeMins]);

    const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === ',' || e.key === 'Enter') {
            e.preventDefault();
            const newTag = tagInput.trim();
            if (newTag && !tags.includes(newTag)) {
                setTags([...tags, newTag]);
            }
            setTagInput('');
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handleResetContent = () => {
        if (confirm('Reset to default content? This will clear your current work.')) {
            setMdxContent(defaultContent);
            setTitle('My New Post');
            setSlug('my-new-post');
            setExcerpt('A brief description of my post');
            setTags(['blog', 'example']);
            setReadTimeMins(5);
            setEditorKey(prev => prev + 1); // Force re-mount
            localStorage.removeItem('mdx-editor-content');
        }
    };

    const handleExport = () => {
        // Combine frontmatter with content for export, using current date
        const currentDate = new Date().toISOString().split('T')[0];
        const fullContent = `---
title: ${title}
slug: ${slug}
date: ${currentDate}
excerpt: ${excerpt}
tags: ${tags.join(', ')}
readTimeMins: ${readTimeMins}
---

${mdxContent}`;
        const blob = new Blob([fullContent], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${slug}.mdx`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleLoadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target?.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target?.result as string;
            // Parse frontmatter and content
            const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
            if (frontmatterMatch) {
                const frontmatter = frontmatterMatch[1];
                const mdxBody = frontmatterMatch[2];

                // Extract frontmatter values
                const titleMatch = frontmatter.match(/title:\s*(.+)/);
                const slugMatch = frontmatter.match(/slug:\s*(.+)/);
                const excerptMatch = frontmatter.match(/excerpt:\s*(.+)/);
                const tagsMatch = frontmatter.match(/tags:\s*(.+)/);
                const readTimeMatch = frontmatter.match(/readTimeMins:\s*(\d+)/);

                if (titleMatch) setTitle(titleMatch[1]);
                if (slugMatch) setSlug(slugMatch[1]);
                if (excerptMatch) setExcerpt(excerptMatch[1]);
                if (tagsMatch) {
                    // Remove square brackets if present and split by comma
                    const tagsString = tagsMatch[1].replace(/^\[|\]$/g, '').trim();
                    const parsedTags = tagsString.split(',').map(t => t.trim()).filter(t => t);
                    setTags(parsedTags);
                }
                if (readTimeMatch) setReadTimeMins(parseInt(readTimeMatch[1]));

                setMdxContent(mdxBody);
            } else {
                // No frontmatter, just set content
                setMdxContent(content);
            }
        };
        reader.readAsText(file);
    };

    return (
        <div className="min-h-screen bg-gray-900 py-16">
            <Container>
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        MDX Editor
                    </h1>
                    <p className="text-gray-400 mb-8">
                        Write and export MDX blog posts with frontmatter
                    </p>

                    {/* Actions */}
                    <div className="flex gap-4 mb-6">
                        <Button onClick={handleExport} size="sm">
                            Export MDX
                        </Button>
                        <label className="cursor-pointer">
                            <input
                                type="file"
                                accept=".mdx,.md"
                                onChange={handleLoadFile}
                                className="hidden"
                            />
                            <span className="inline-flex items-center px-4 py-2 text-sm font-semibold bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                                Load File
                            </span>
                        </label>
                        <Button
                            onClick={handleResetContent}
                            size="sm"
                            className="bg-red-600 hover:bg-red-700"
                        >
                            Reset Content
                        </Button>
                    </div>

                    {/* Frontmatter Form */}
                    <div className="bg-gray-800 rounded-lg p-6 mb-6">
                        <h2 className="text-xl font-semibold text-white mb-4">Post Metadata</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                <label className="block text-sm text-gray-400 mb-1">Tags</label>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                                        >
                                            {tag}
                                            <button
                                                onClick={() => handleRemoveTag(tag)}
                                                className="hover:bg-blue-600 rounded-full p-0.5"
                                                aria-label={`Remove ${tag}`}
                                            >
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </span>
                                    ))}
                                </div>
                                <input
                                    type="text"
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    onKeyDown={handleAddTag}
                                    placeholder="Type a tag and press comma or enter"
                                    className="w-full bg-gray-700 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* MDXEditor */}
                    <div className="bg-gray-800 rounded-lg overflow-hidden mdx-editor-dark" style={{ height: '600px' }}>
                        <MDXEditor
                            key={editorKey}
                            markdown={mdxContent}
                            onChange={setMdxContent}
                            plugins={[
                                headingsPlugin(),
                                listsPlugin(),
                                quotePlugin(),
                                thematicBreakPlugin(),
                                markdownShortcutPlugin(),
                                linkPlugin(),
                                linkDialogPlugin(),
                                imagePlugin(),
                                tablePlugin(),
                                codeBlockPlugin({ defaultCodeBlockLanguage: 'python' }),
                                codeMirrorPlugin({
                                    codeBlockLanguages: {
                                        js: 'JavaScript',
                                        javascript: 'JavaScript',
                                        ts: 'TypeScript',
                                        typescript: 'TypeScript',
                                        tsx: 'TypeScript (React)',
                                        jsx: 'JavaScript (React)',
                                        css: 'CSS',
                                        html: 'HTML',
                                        json: 'JSON',
                                        python: 'Python',
                                        py: 'Python',
                                        bash: 'Bash',
                                        sh: 'Shell',
                                        rs: 'Rust',
                                        rust: 'Rust',
                                        go: 'Go',
                                        java: 'Java',
                                        csharp: 'C#',
                                        cpp: 'C++',
                                        mdx: 'MDX',
                                        md: 'Markdown',
                                    }
                                }),
                                diffSourcePlugin({
                                    viewMode: 'source',
                                    diffMarkdown: '',
                                    codeMirrorExtensions: [
                                        markdown({ codeLanguages: languages }),
                                        syntaxHighlighting(markdownHighlightStyle)
                                    ]
                                }),
                                toolbarPlugin({
                                    toolbarContents: () => (
                                        <>
                                            <UndoRedo />
                                            <BlockTypeSelect />
                                            <BoldItalicUnderlineToggles />
                                            <CodeToggle />
                                            <CreateLink />
                                            <InsertImage />
                                            <ListsToggle />
                                            <InsertTable />
                                            <InsertThematicBreak />
                                            <InsertCodeBlock />
                                        </>
                                    )
                                })
                            ]}
                            className="h-full"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}
