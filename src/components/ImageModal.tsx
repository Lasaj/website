"use client"

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { GalleryImage } from "@/data/galleryData";

interface ImageModalProps {
    isOpen: boolean;
    image: GalleryImage | null;
    onClose: () => void;
}

export default function ImageModal({ isOpen, image, onClose }: ImageModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close with escape
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]); // Re-run if modal state or onClose changes

    // Manage overflow when modal open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // handle click outside modal
    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && event.target === modalRef.current) {
            onClose();
        }
    };

    if (!isOpen || !image) return null;

    return (
        <div id="imageModal" className={`image-modal ${isOpen ? 'image-modal--is-active' : ''}`} onClick={handleOverlayClick} ref={modalRef}>
            <span className="close-button" onClick={onClose}>&times;</span>
            <Image
                className="modal-content"
                src={image.src}
                alt={image.alt}
                width={1200}
                height={900}
                style={{ objectFit: "contain", width: "auto", height: "auto", maxWidth: "90%", maxHeight: "90%" }}
                priority={true}
            />
        </div>
    );

}