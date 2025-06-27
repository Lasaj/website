// src/data/blogData.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
    slug: string;
    header: string;
    date: string;
    displayDate: string;
    body: string;
}

const postsDirectory = path.join(process.cwd(), 'src', 'data', 'posts');

export function getBlogPosts(): BlogPost[] {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map(fileName => {
        const slug = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const { data, content } = matter(fileContents);
        
        const displayDate = data.date.toDateString();

        return {
            slug,
            header: data.header as string,
            date: data.date as string,
            displayDate: displayDate,
            body: content,
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export const blogPosts = getBlogPosts();