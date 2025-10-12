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
    title: "Hello World",
    slug: "hello-world",
    date: "October 12, 2025",
    excerpt: "Welcome to my personal blog where I'll be sharing thoughts on software development, technology, and more.",
    content: (
      <div>
        <h3 className="text-xl font-bold text-white mb-3 mt-5">Hello World!</h3>
        <p className="mb-4 leading-relaxed">
          Welcome to my blog! This is where I'll be sharing my thoughts, experiences, and insights about software development, technology trends, and personal projects.
        </p>

        <h4 className="text-lg font-semibold text-white mb-2 mt-4">What to Expect</h4>
        <p className="mb-4 leading-relaxed">You can expect to find articles about:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li className="mb-1">Software development best practices</li>
          <li className="mb-1">New technologies and frameworks</li>
          <li className="mb-1">Project deep-dives and tutorials</li>
          <li className="mb-1">Career insights and lessons learned</li>
        </ul>

        <p className="mb-4 leading-relaxed">Stay tuned for more content coming soon!</p>
      </div>
    ),
    tags: ["welcome", "introduction"],
    readTimeMins: 1
  },
  // TODO: I think I can port over some of the old blog posts from the old site
];