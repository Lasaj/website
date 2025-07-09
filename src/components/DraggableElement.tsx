"use client";

import React, { useEffect, useRef, useState, CSSProperties} from "react";

interface DraggableElementProps {
    children: React.ReactNode;
    initialX?: number;
    initialY?: number;
    restrictToParent?: boolean;
    title?: string;
}

export default function DraggableElement({ children, initialX = 0, initialY = 0, restrictToParent = false, title }: DraggableElementProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: initialX, y: initialY });
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const elementRef = useRef<HTMLDivElement>(null);
    const parentRef = useRef<HTMLElement | null>(null);

    // Effect for mouse listeners
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!isDragging || !elementRef.current) return;
        
            let newX = event.clientX - offset.x;
            let newY = event.clientY - offset.y;

            if (restrictToParent && parentRef.current) {
                const parentRect = parentRef.current.getBoundingClientRect();
                const elementRect = elementRef.current.getBoundingClientRect();

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
    }, [isDragging, offset, restrictToParent, parentRef]);

    useEffect(() => {
        if (restrictToParent && elementRef.current) {
            parentRef.current = elementRef.current.parentElement;
        } else {
            parentRef.current = null;
        }
    }, [restrictToParent, elementRef]);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!elementRef.current) return;
    
        setIsDragging(true);
        setOffset({
            x: event.clientX - elementRef.current.getBoundingClientRect().left - window.scrollX,
            y: event.clientY - elementRef.current.getBoundingClientRect().top - window.scrollY,
        });
    };

    const draggableContainerStyle: CSSProperties = {
        position: 'absolute',
        left: position.x,
        top: position.y,
        zIndex: 999,
        touchAction: 'none',
    };

    return (
        <div
            className="draggable-image-window"
            ref={elementRef}
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