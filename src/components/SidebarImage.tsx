"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/galleryData";

export default function SidebarImages() {
    const [recentImage, setRecentImage] = useState<{ src: string, alt: string } | null>(null);
    const [randomImage, setRandomImage] = useState<{ src: string, alt: string } | null>(null);

    useEffect(() => {
        if (galleryImages.length === 0) {
            console.warn('No images found in galleryData.ts for sidebar.');
            // Optionally set placeholder for no images
            setRecentImage({ src: "/images/placeholder_no_image.png", alt: "No images available" });
            setRandomImage({ src: "/images/placeholder_no_image.png", alt: "No images available" });
            return;
        }

        setRecentImage({ src: galleryImages[0].src, alt: galleryImages[0].alt });

        const imagesForRandom = galleryImages.length > 1 ? galleryImages.slice(1) : galleryImages;
        const randomIndex = Math.floor(Math.random() * imagesForRandom.length);
        setRandomImage({ src: imagesForRandom[randomIndex].src, alt: imagesForRandom[randomIndex].alt });
    }, []);

    return (
        <>
            <div className="sidebar-image-container">
                Recent Shot:
                {recentImage ? (
                    <a href="/gallery">
                        <Image
                            src={recentImage.src}
                            alt={recentImage.alt}
                            width={400} // Appropriate width for sidebar
                            height={300} // Appropriate height for sidebar
                            style={{ objectFit: "cover", width: "100%", height: "auto" }} // Apply object-fit for consistency
                        />
                    </a>
                ) : (
                    <Image src="/images/placeholder_loading.png" alt="Loading recent image..." width={400} height={300} />
                )}
            </div>
            <div className="sidebar-image-container">
                From the archives:
                {randomImage ? (
                    <a href="/gallery">
                        <Image
                            src={randomImage.src}
                            alt={randomImage.alt}
                            width={400} // Appropriate width for sidebar
                            height={300} // Appropriate height for sidebar
                            style={{ objectFit: "cover", width: "100%", height: "auto" }} // Apply object-fit for consistency
                        />
                    </a>
                ) : (
                    <Image src="/images/placeholder_loading.png" alt="Loading random image..." width={400} height={300} />
                )}
            </div>
        </>
    );
}