import React from 'react';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '@/data/blogData';
import MainLayout from '@/components/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <section className="intro">
        <h2>Analogue Photography</h2>
        <p>
          Here is my personal website. I intend to use this site to share photos
          and personal projects but mostly to mess around with web design.  I enjoy analogue photography, the look 
          and the style and the fact that I end up with fewer images to go through, so this is my place 
          to share some of my shots.
        </p>
        <p>
          The gallery is up and running and being improved all the time.  
        </p>
        <p>
          I also enjoy software development, music and a bunch of other hobbies that come and go. I may add
          some more pages for my other projects in the future.
        </p>
      </section>

      <section className="h-card-section">
        <h3 className="p-name">Rick W</h3>
        <p><span className="p-note">Photography and software and other nonsense.</span></p>
        <p>Find me on:</p>
        <ul>
          <li><a className="u-url" href="https://lasaj.neocities.org/">Webpage</a></li>
          <li><a className="u-url" href="https://www.instagram.com/rickw.photo/">Instagram</a></li>
          <li><a className="u-url" href="https://github.com/Lasaj">GitHub</a></li>
        </ul>
      </section>

      <section className="latest-updates">
        <h2>Latest Updates</h2>
        {blogPosts.map((post) => (
          <article className="h-entry" key={post.slug}>
            <h3 className="p-name"><a className="u-url" href={`#${post.slug}`}>{post.header}</a></h3>
            <time className="dt-published" dateTime={post.date}>{post.displayDate}</time>
            <div className="e-content"><ReactMarkdown>{post.body}</ReactMarkdown></div>
          </article>
        ))}
      </section>
    </MainLayout>

  );
}