"use client";

import React, { useEffect, useRef, useState, CSSProperties, forwardRef } from "react";

interface DraggableElementProps {
    children: React.ReactNode;
    initialX?: number;
    initialY?: number;
    restrictToParent?: boolean;
    title?: string;
}

const DraggableElement = forwardRef<HTMLDivElement, DraggableElementProps>(
  ({ children, initialX = 0, initialY = 0, restrictToParent = false, title }, ref) => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: initialX, y: initialY });
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const parentRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      setPosition({ x: initialX, y: initialY });
    }, [initialX, initialY]);

    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        if (!isDragging) return;
                
        const element = (ref as React.RefObject<HTMLDivElement>)?.current;
        if (!element) return;
            
        let newX = event.clientX - offset.x;
        let newY = event.clientY - offset.y;

        if (restrictToParent && parentRef.current) {
          const parentRect = parentRef.current.getBoundingClientRect();
          const elementRect = element.getBoundingClientRect();

          newX = Math.max(0, Math.min(newX, parentRect.width - elementRect.width));
          newY = Math.max(0, Math.min(newY, parentRect.height - elementRect.height));
        }

        setPosition({ x: newX, y: newY });
      };

      const handleMouseUp = () => {
        setIsDragging(false);
      };

      if (isDragging) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, [isDragging, offset, restrictToParent, parentRef, ref]);

    useEffect(() => {
      const element = (ref as React.RefObject<HTMLDivElement>)?.current;
      if (restrictToParent && element) {
        parentRef.current = element.parentElement;
      } else {
        parentRef.current = null;
      }
    }, [restrictToParent, ref]);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      setOffset({
        x: event.clientX - position.x,
        y: event.clientY - position.y,
      });
    };

    const draggableContainerStyle: CSSProperties = {
      position: 'absolute',
      left: position.x,
      top: position.y,
      zIndex: 999,
      touchAction: 'none',
      visibility: initialX < 0 ? 'hidden' : 'visible',
    };

    return (
      <div
        className="draggable-image-window"
        ref={ref}
        style={draggableContainerStyle}
      >
        <div
          className="draggable-title-bar"
          onMouseDown={handleMouseDown}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {title}
        </div>
        <div className="draggable-content">
          {children}
        </div>
      </div>
    );
  }
);

DraggableElement.displayName = "DraggableElement";

export default DraggableElement;
