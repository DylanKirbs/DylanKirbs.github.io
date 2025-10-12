import React from 'react';

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
  content: React.ReactNode;
  tags?: string[];
  readTimeMins?: number;
}

export const posts: BlogPost[] = [
  {
    title: "Hello (again), world!",
    slug: "hello-again-world",
    date: "October 12, 2025",
    excerpt: "There is no better time than the present to get started with something you've been putting off. So here we are... I've completely redone my personal website, again.",
    content: (
      <div>
        <p className="mb-4 leading-relaxed">
          There's never really a “right time” to start something new, so I just went for it. Welcome to yet another rebuild of my personal website.
        </p>

        <p className="mb-4 leading-relaxed">
          I've always liked the idea of having a space that's fully mine; no templates, no platforms, just something I understand from top to bottom. A place to show what I'm working on, what I'm learning, and maybe leave a few things better documented than they were before.
        </p>

        <p className="mb-4 leading-relaxed">
          I've also been spending an exorbitant amount of time writing LaTeX reports and figures maybe I could put my creative writing skills to better use. So, here we are.
        </p>

        <p className="mb-4 leading-relaxed">
          This isn't my first attempt, and it probably won't be my last. My old site was a locally hosted WordPress site that I built with a static dump plugin and pushed to GitHub pages, and the one before that was a static Jekyll setup on GitHub Pages, super simple, reliable, and a good intro to the basics. But this time I wanted something more flexible, something I could actually build on. So I went with React and a modern toolchain. It's not perfect, but it's mine, and it works.
        </p>

        <p className="mb-4 leading-relaxed">
          I don't really consider myself a “web dev” (I spend most of my time in systems and backend work) but I like learning new tools when there's a reason to. This project gave me that reason. Half of it was curiosity, half of it was me refusing to use another cookie-cutter portfolio generator.
        </p>

        <p className="mb-4 leading-relaxed">
          Think of this site as a mix of notes, experiments, and personal projects. It'll change over time - hopefully in the right direction - and maybe it'll even be useful to someone else along the way.
        </p>

        <p className="mb-4 leading-relaxed">
          Anyway, here we are. A fresh start, a bit of new tech, and a space to keep building.
        </p>
      </div>

    ),
    tags: ["personal branding", "new beginnings", "introduction"],
    readTimeMins: 2
  }
];