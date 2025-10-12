import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compile } from '@mdx-js/mdx';

const postsDirectory = path.join(process.cwd(), 'src/posts');
const outputDir = path.join(process.cwd(), 'src/data/compiled-posts');
const indexFile = path.join(process.cwd(), 'src/data/posts.tsx');



async function buildPosts() {
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Clean output directory
    console.log('Cleaning output directory');
    fs.readdirSync(outputDir).forEach(file => {
        fs.unlinkSync(path.join(outputDir, file));
    });

    const filenames = fs.readdirSync(postsDirectory);
    const posts = [];

    console.log(`Found ${filenames.length} files, building posts...`);
    for (const filename of filenames.filter(name => name.endsWith('.mdx'))) {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        try {
            // Compile MDX to JSX
            const compiledMDX = await compile(content, {
                outputFormat: 'program',
                development: false,
                jsx: true,
                jsxImportSource: 'react'
            });

            const slug = data.slug || filename.replace(/\.mdx$/, '');

            // Create TSX component file
            const componentContent = `// Auto-generated from ${filename} - do not edit manually, instead us 'npm run build:posts'
// @ts-nocheck
/* eslint-disable */

import React from 'react';
import { mdxComponents } from '../../components/post/PostComponents';

${compiledMDX.toString()}


export const ${toPascalCase(slug)}Content: React.FC = () => {
    return <MDXContent components={mdxComponents} />;
};

export const metadata = {
    title: "${data.title}",
    slug: "${slug}",
    date: "${data.date}",
    excerpt: ${JSON.stringify(data.excerpt || '')},
    tags: ${JSON.stringify(data.tags || [])},
    readTimeMins: ${data.readTimeMins || 5}
};
`;

            const outputFile = path.join(outputDir, `${slug}.tsx`);
            fs.writeFileSync(outputFile, componentContent);

            posts.push({
                title: data.title,
                slug: slug,
                date: data.date,
                excerpt: data.excerpt,
                tags: data.tags || [],
                readTimeMins: data.readTimeMins,
                componentPath: `./compiled-posts/${slug}`
            });

            console.log(`✓ Compiled ${filename} -> ${slug}.tsx`);
        } catch (error) {
            console.error(`✗ Error compiling ${filename}:`, error);
        }
    }

    // Sort posts by date
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Generate index file with imports
    const imports = posts.map(post =>
        `import { ${toPascalCase(post.slug)}Content, metadata as ${toPascalCase(post.slug)}Metadata } from '${post.componentPath}';`
    ).join('\n');

    const exports = posts.map(post => `{
    ...${toPascalCase(post.slug)}Metadata,
    date: new Date("${post.date}"),
    content: ${toPascalCase(post.slug)}Content
}`).join(',\n    ');

    const indexContent = `// Auto-generated file - do not edit manually, instead use 'npm run build:posts'
// @ts-nocheck
/* eslint-disable */

${imports}

export interface BlogPost {
    title: string;
    slug: string;
    date: Date;
    excerpt?: string;
    content: React.FC;
    tags?: string[];
    readTimeMins?: number;
}

export const posts: BlogPost[] = [
    ${exports}
];
`;

    fs.writeFileSync(indexFile, indexContent);
    console.log(`✓ Generated index with ${posts.length} posts`);
}

function toPascalCase(str) {
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

buildPosts().catch(console.error);