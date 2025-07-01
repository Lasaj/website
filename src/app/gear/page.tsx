import React from 'react';
import SidebarImages from '@/components/SidebarImage';
import ReactMarkdown from 'react-markdown';
import { gearItems } from '@/data/gearData';
import Image from 'next/image';

export default function GearPage() {
  return (
    <div className="main-layout-grid">
      <div className="main-content-area">
        <section className="intro">
          <h2>Gear</h2>
					<p>Here is a summary of the gear I currently enjoy using.</p>
          
					
        </section>

        {gearItems.map((item) => (
          <section className='gear-item-card' key={item.id}>
            <h3>{item.name}</h3>
            <div className='gear-content-wrapper'>
              <div className='gear-image-container'>
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  width={300}
                  height={300}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                  priority={true}
                />
              </div>
              <div className='gear-description'>
                <ReactMarkdown>{item.description}</ReactMarkdown>
              </div>
            </div>
          </section>
        ))}
        
      </div>

      <aside className="sidebar">
        <SidebarImages />
      </aside>
    </div>
  );
}