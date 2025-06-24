import React from 'react';
import SidebarImages from '@/components/SidebarImage';

export default function HomePage() {
  return (
    <div className="main-layout-grid">
      <div className="main-content-area">
        <section className="intro">
          <h2>Analogue Photography</h2>
					<p>
						Here is the start of my personal website. I intend to use this site to share photos
            and personal projects and mess around with web design.  I enjoy analogue photography, the look 
            and the style and the fact that I end up with fewer images to go through, so this is my place 
            to share some of my shots.
          </p>
          <p>
            The gallery is up and running with a few old photos from my travels.  I will be adding more 
            as I go along.
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
          <article className="h-entry">
            <h3 className="p-name"><a className="u-url" href="#first-post">Gallery and Sidebar</a></h3>
            <time className="dt-published" dateTime="2025-06-20">June 23, 2025</time>
            <div className="e-content">
              <p>
                I've updated the gallery to be a little more attractive and easy to view. It is still
                quite rudimentary, but it looks much nicer.  I intent to add some more naviation options 
                and more images next.
              </p>
              <p>
                I've also added a sidebar to show off a selection of photos from the gallery. Mostly
                because I wanted a sidebar on the homepage.</p>
            </div>
          </article>
          <article className="h-entry">
            <h3 className="p-name"><a className="u-url" href="#first-post">Website Created</a></h3>
            <time className="dt-published" dateTime="2025-06-20">June 20, 2025</time>
            <div className="e-content">
              <p>Chucked up a template to see what happens when I change values.</p>
              <p>Implemented a rudimentary gallery, other pages to come.</p>
            </div>
          </article>
        </section>
      </div>

      <aside className="sidebar">
        <SidebarImages />
      </aside>
    </div>
  );
}