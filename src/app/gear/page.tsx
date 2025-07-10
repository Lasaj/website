"use client";

import React, { useState, useEffect, useRef } from 'react';
import SidebarImages from '@/components/SidebarImage';
import ReactMarkdown from 'react-markdown';
import { gearItems } from '@/data/gearData';
import DraggableElement from '@/components/DraggableElement';
import Image from 'next/image';

export default function GearPage() {
  const sidebarRef = useRef<HTMLElement>(null);
  const draggableRef = useRef<HTMLDivElement>(null);
  const [draggableOffset, setDraggableOffset] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const calculatePosition = () => {
      if (sidebarRef.current && draggableRef.current) {
        const sidebarRect = sidebarRef.current.getBoundingClientRect();
        const draggableRect = draggableRef.current.getBoundingClientRect();

        if (draggableRect.width > 0) {
          const sidebarCentre = (sidebarRect.left + sidebarRect.right) / 2;
          const centredX = sidebarCentre - (draggableRect.width / 2);
          const centredY = sidebarRect.top + 680;
          setDraggableOffset({ x: centredX, y: centredY });
        }
      }
    };

    const observer = new ResizeObserver(() => {
      calculatePosition();
    });

    if (sidebarRef.current) {
      observer.observe(sidebarRef.current);
    }
    if (draggableRef.current) {
      observer.observe(draggableRef.current);
    }

    return () => {
      observer.disconnect();
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
      
      <DraggableElement ref={draggableRef} initialX={draggableOffset.x} initialY={draggableOffset.y} restrictToParent={false} title="&#x2724;">
        <div className="draggable-image-window">
          <Image
            src="/images/canon_a1_2_round.png"
            alt="Canon A1 Camera Icon"
            width={160}  // Set a fixed size for the draggable image
            height={160} 
            style={{ objectFit: 'contain' }} // Ensure image fits
            priority={true}
          />
        </div>
      </DraggableElement>
    </div>
  );
}