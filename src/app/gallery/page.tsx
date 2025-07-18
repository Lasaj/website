"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/data/galleryData';
import ImageModal from '@/components/ImageModal';

export default function GalleryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    if (!galleryImages)
      return
    setCurrentImageIndex((currentImageIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (!galleryImages)
      return
    setCurrentImageIndex((currentImageIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="main-content-area">
      <section className="gallery-intro">
        <h2>Gallery</h2>
        <p>I capture most of my photos around where I live and on my
          travels. I enjoy analogue photography and spend most of my time
          shooting on my Canon A1. I like changing film stocks, colour or 
          black and white are all good.
        </p>
        <p>Click on any image to view it larger.</p>
      </section>

      <section className="photo-grid">
        {/* Dynamically render gallery items from the array */}
        {galleryImages.map((image, index) => (
          <div className="gallery-item" key={index}>
            <div className="gallery-image-wrapper">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                priority={index < 3}
                onClick={() => openModal(index)}
              />
            </div>
            <p>{image.caption}</p>
          </div>
        ))}
      </section>

      <ImageModal
        isOpen={isModalOpen}
        images={galleryImages}
        index={currentImageIndex}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}