"use client";

import React, { useState, useEffect, useRef } from 'react';
import SidebarImages from '@/components/SidebarImage';
import ReactMarkdown from 'react-markdown';
import { gearItems } from '@/data/gearData';
import DraggableElement from '@/components/DraggableElement';
import Image from 'next/image';

export default function GearPage() {
  const sidebarRef = useRef<HTMLElement>(null);
  const [sidebarOffset, setSidebarOffset] = useState<{ x: number, y: number } | null>(null);

  useEffect(() => {
    if (sidebarRef.current) {
      const rect = sidebarRef.current.getBoundingClientRect();
      setSidebarOffset({ x: rect.left, y: rect.top });
    };
  }, []);


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

      <aside className="sidebar" ref={sidebarRef}>
        <SidebarImages />
      </aside>
      {sidebarOffset && (
        <DraggableElement initialX={sidebarOffset.x} initialY={sidebarOffset.y + 600} restrictToParent={false} title="&#x2724;">
          <div className="draggable-image-window"> {/* Add a class for styling the draggable content */}
            <Image
              src="/images/canon_a1_2_round.png"
              alt="Canon A1 Camera Icon"
              width={200}  // Set a fixed width for the draggable image
              height={200} // Set a fixed height for the draggable image
              style={{ objectFit: 'contain' }} // Ensure image fits
              priority={true}
            />
          </div>
        </DraggableElement>
      )}
    </div>
  );
}