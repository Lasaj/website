"use client";

import React, { ReactNode, useRef, useState, useEffect } from 'react';
import SidebarImages from '@/components/SidebarImage';
import DraggableElement from '@/components/DraggableElement';
import Image from 'next/image';

interface MainLayoutProps {
  children: ReactNode; // Main content area grid content
}

export default function MainLayout({ children }: MainLayoutProps) {

  // TODO: extract draggable logic to component
  const sidebarRef = useRef<HTMLElement>(null);
  const mainGridRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<HTMLDivElement>(null);
  const [draggableOffset, setDraggableOffset] = useState({ x: -9999, y: -9999 });
  const [draggableWidth, setDraggableWidth] = useState(200);

  useEffect(() => {
    const calculatePosition = () => {
      if (sidebarRef.current && draggableRef.current && mainGridRef.current) {

        // place draggable at top right of grid
        const sidebarRect = sidebarRef.current.getBoundingClientRect();
        const mainGridRect = mainGridRef.current.getBoundingClientRect();

        setDraggableOffset({ x: sidebarRect.x, y: mainGridRect.y });
        setDraggableWidth(sidebarRect.width);

        if (window.innerWidth < 768) { // hide when sidebar below main grid
          setDraggableOffset({ x: -9999, y: -9999 });
        }
      }
    };

    // Set width and position when window is resized, includes on image load
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
    <div className="main-layout-grid" ref={mainGridRef}>
      <div className="main-content-area">
        {children}
      </div>

      <aside className="sidebar" ref={sidebarRef}>
        <SidebarImages />
      </aside>
      
      <DraggableElement ref={draggableRef} initialX={draggableOffset.x} initialY={draggableOffset.y} restrictToParent={false} title="&#x2724;">
        <div className="draggable-image-window">
          <Image
            src="/images/canon_a1_2_round.png"
            alt="Canon A1 Camera Icon"
            width={draggableWidth - 2}  // Set a fixed size for the draggable image
            height={202} 
            style={{ objectFit: 'contain' }} // Ensure image fits
            priority={true}
          />
        </div>
      </DraggableElement>

    </div>
  );
}