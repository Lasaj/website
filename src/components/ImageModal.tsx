"use client"

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { GalleryImage } from "@/data/galleryData";

interface ImageModalProps {
    isOpen: boolean;
    images: GalleryImage[] | null;
    index: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function ImageModal({ isOpen, images, index, onClose, onNext, onPrev }: ImageModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close with escape, navigate with arrows
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      } else if (event.key === "ArrowRight") {
        onNext();
      } else if (event.key === "ArrowLeft") {
        onPrev();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]); // Re-run if modal state or onClose changes

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

  if (!images || images.length === 0) return null;
  const currentImage: GalleryImage = images[index];

  if (!isOpen || !currentImage) return null;

  return (
    <div id="imageModal" className={`image-modal ${isOpen ? 'image-modal--is-active' : ''}`} onClick={handleOverlayClick} ref={modalRef}>
      <span className="close-button" onClick={onClose}>&times;</span>

      {/* Previous Button */}
      <span className="prev-button" onClick={onPrev}>&lt;</span> {/* Left arrow character */}

      <Image
        className="modal-content"
        src={currentImage.src}
        alt={currentImage.alt}
        width={1200}
        height={900}
        style={{ objectFit: "contain", width: "auto", height: "auto", maxWidth: "90%", maxHeight: "90%" }}
        priority={true}
      />

      {/* Next Button */}
      <span className="next-button" onClick={onNext}>&gt;</span> {/* Right arrow character */}
 
    </div>
  );

}