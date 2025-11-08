// Auto-generated file - do not edit manually, instead use 'npm run build:posts'
// @ts-nocheck
/* eslint-disable */

import { BuildingBetterEditorAndArchitectureContent, metadata as BuildingBetterEditorAndArchitectureMetadata } from './compiled-posts/building-better-editor-and-architecture';
import { HowWeGotHereContent, metadata as HowWeGotHereMetadata } from './compiled-posts/how-we-got-here';
import { HelloAgainWorldContent, metadata as HelloAgainWorldMetadata } from './compiled-posts/hello-again-world';

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
    {
    ...BuildingBetterEditorAndArchitectureMetadata,
    date: new Date("2025-11-08"),
    content: BuildingBetterEditorAndArchitectureContent
},
    {
    ...HowWeGotHereMetadata,
    date: new Date("2025-10-12T23:30"),
    content: HowWeGotHereContent
},
    {
    ...HelloAgainWorldMetadata,
    date: new Date("2025-10-12T16:30"),
    content: HelloAgainWorldContent
}
];
