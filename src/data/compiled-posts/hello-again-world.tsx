// Auto-generated from hello-again-world.mdx - do not edit manually, instead us 'npm run build:posts'
// @ts-nocheck
/* eslint-disable */

import React from 'react';
import { mdxComponents } from '../../components/post/PostComponents';

/*@jsxRuntime automatic*/
/*@jsxImportSource react*/
function _createMdxContent(props) {
  const _components = {
    p: "p",
    strong: "strong",
    ...props.components
  };
  return <><_components.p>{"There's never really a \"right time\" to start something new, so I just went for it. "}<_components.strong>{"Welcome"}</_components.strong>{" to yet another rebuild of my personal website."}</_components.p>{"\n"}<_components.p>{"I've always liked the idea of having a space that's fully mine; no templates, no platforms, just something I understand from top to bottom."}</_components.p>{"\n"}<_components.p>{"I've also been spending an exorbitant amount of time writing LaTeX reports and figures maybe I could put my creative writing skills to better use. So, here we are."}</_components.p>{"\n"}<_components.p>{"This isn't my first attempt, and it probably won't be my last. My old site was a locally hosted WordPress site that I built with a static dump plugin and pushed to GitHub pages, and the one before that was a static Jekyll setup on GitHub Pages, super simple, reliable, and a good intro to the basics. But this time I wanted something more flexible, something I could actually build on. So I went with React and a modern toolchain. It's not perfect, but it's mine, and it works."}</_components.p>{"\n"}<_components.p>{"I don't really consider myself a \"web dev\" (I spend most of my time in systems and backend work) but I like learning new tools when there's a reason to."}</_components.p>{"\n"}<_components.p>{"Think of this site as a mix of notes, experiments, and personal projects. It'll change over time - hopefully in the right direction - and maybe it'll even be useful to someone else along the way."}</_components.p>{"\n"}<_components.p>{"Anyway, here we are. A fresh start, a bit of new tech, and a space to keep building."}</_components.p></>;
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}



export const HelloAgainWorldContent: React.FC = () => {
    return <MDXContent components={mdxComponents} />;
};

export const metadata = {
    title: "Hello (again), world!",
    slug: "hello-again-world",
    date: "2025-10-12T16:30",
    excerpt: "There is no better time than the present to get started with something you've been putting off. So here we are... I've completely redone my personal website, again.",
    tags: ["personal branding","new beginnings","introduction"],
    readTimeMins: 1
};
