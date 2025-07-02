import React from 'react';
import SidebarImages from '@/components/SidebarImage';

export default function GearPage() {
  return (
    <div className="main-layout-grid">
      <div className="main-content-area">
        <section className="intro">
          <h2>Links</h2>
          <p><span className="p-note">Photography and software and other nonsense.</span></p>
          <p>Find me on:</p>
          <ul>
            <li><a className="u-url" href="https://lasaj.neocities.org/">Webpage</a></li>
            <li><a className="u-url" href="https://www.instagram.com/rickw.photo/">Instagram</a></li>
            <li><a className="u-url" href="https://github.com/Lasaj">GitHub</a></li>
          </ul>
        </section>
      </div>

      <aside className="sidebar">
        <SidebarImages />
      </aside>
    </div>
  );
}