// Auto-generated from how-we-got-here.mdx - do not edit manually, instead us 'npm run build:posts'
// @ts-nocheck
/* eslint-disable */

import React from 'react';
import { mdxComponents } from '../../components/post/PostComponents';

/*@jsxRuntime automatic*/
/*@jsxImportSource react*/
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return <><_components.p>{"As you might have guessed from my previous post, I recently rebuilt my personal website from the ground up. This post is a bit of a behind-the-scenes look at how I did it, and some of the tools and techniques I used along the way."}</_components.p>{"\n"}<_components.p>{"Most of the site is fairly straightforward React with TypeScript, but there are a few interesting bits that I thought were worth mentioning."}</_components.p>{"\n"}<_components.h2>{"MDX for Content"}</_components.h2>{"\n"}<_components.p>{"I wanted to be able to write my posts in Markdown, but I also wanted to be able to include React components in my posts. MDX is a great solution for this, as it allows you to write Markdown and include React components seamlessly. So an obvious first choice was to use a nice build system like "}<_components.code>{"Astro"}</_components.code>{", but I wanted more control and I'm not too familiar with it yet, so I went with a custom setup."}</_components.p>{"\n"}<_components.p>{"This meant setting up a build process to convert my MDX files into React components. I used "}<_components.code>{"@mdx-js/mdx"}</_components.code>{" for this, which is a great library for compiling MDX to JSX. I wrote a simple Node.js script that reads all the MDX files in my "}<_components.code>{"src/posts"}</_components.code>{" directory, compiles them to JSX, and then writes them to a "}<_components.code>{"src/components/posts"}</_components.code>{" directory as React components."}</_components.p>{"\n"}<_components.p>{"Now I can simply run a build script ("}<_components.code>{"npm run build:posts"}</_components.code>{") to regenerate my posts whenever I add or update a post."}</_components.p>{"\n"}<_components.h2>{"Features"}</_components.h2>{"\n"}<_components.p>{"I obviously could not pass up on the opportunity to build in a syntax highlighter using "}<_components.code>{"react-syntax-highlighter"}</_components.code>{" and "}<_components.code>{"prismjs"}</_components.code>{"."}</_components.p>{"\n"}<_components.pre><_components.code className="language-python">{"def foo(bar):\n    return bar + 1\n"}</_components.code></_components.pre>{"\n"}<_components.pre><_components.code className="language-rust">{"fn foo(bar: i32) -> i32 {\n    bar + 1\n}\n"}</_components.code></_components.pre>{"\n"}<_components.p>{"And some sensible default styles for the MDX pages so I can do stuff like "}<_components.code>{"**bold**"}</_components.code>{" , "}<_components.code>{"*italic*"}</_components.code>{", and "}<_components.code>{"> blockquotes"}</_components.code>{" without having to think about it."}</_components.p>{"\n"}<_components.blockquote>{"\n"}<_components.p>{"Some "}<_components.strong>{"bold"}</_components.strong>{" and "}<_components.em>{"italic"}</_components.em>{" text in a blockquote"}</_components.p>{"\n"}</_components.blockquote>{"\n"}<_components.h2>{"Future Improvements"}</_components.h2>{"\n"}<_components.p>{"There are a few things I want to improve in the future:"}</_components.p>{"\n"}<_components.ul>{"\n"}<_components.li><_components.strong>{"SEO"}</_components.strong>{": I want to improve the SEO of the site, maybe by adding a sitemap and better meta tags."}</_components.li>{"\n"}<_components.li><_components.strong>{"Performance"}</_components.strong>{": I want to optimize the performance of the site, maybe by adding lazy loading for images and code splitting."}</_components.li>{"\n"}<_components.li><_components.strong>{"More Features"}</_components.strong>{": I want to add more features to the site, like a search function and a way to filter posts by tag."}</_components.li>{"\n"}</_components.ul>{"\n"}<_components.p>{"Overall, I'm pretty happy with how the site turned out. It was a fun project to work on, and I learned a lot along the way. If you're interested in the code, it's all available on "}<_components.a href="https://github.com/DylanKirbs/dylankirbs.github.io">{"GitHub"}</_components.a>{". And all of this was built in one day!"}</_components.p></>;
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}



export const HowWeGotHereContent: React.FC = () => {
    return <MDXContent components={mdxComponents} />;
};

export const metadata = {
    title: "How we got here",
    slug: "how-we-got-here",
    date: "2025-10-12T23:30",
    excerpt: "A technical breakdown of the slightly less straightforward processes of building this site.",
    tags: ["technical","react","MDX"],
    readTimeMins: 2
};
