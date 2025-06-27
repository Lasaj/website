// src/data/galleryData.ts

// Define an interface for your image data
export interface GalleryImage {
    src: string;
    alt: string;
    caption: string;
}

// Array of gallery images
export const galleryImages: GalleryImage[] = [
  { src: "/gallery/2024_04_04_000017_Kodak_Gold.jpg", alt: "Pier", caption: "Canon A1 on Kodak Gold" },
  { src: "/gallery/2024_04_17_000031_Gold.jpg", alt: "Rock Inlet", caption: "Canon A1 on Kodak Gold" },
  { src: "/gallery/2024_04_17_000003_Gold.jpg", alt: "Lookout", caption: "Canon A1 on Kodak Gold" },
  { src: "/gallery/2024_04_17_000019_Gold.jpg", alt: "Sunrise Fishing", caption: "Canon A1 on Kodak Gold" },
  { src: "/gallery/2024_04_04_000041_800T.jpg", alt: "Central", caption: "Canon A1 on Chinese 800T" },
  { src: "/gallery/2024_04_22_000005650024_hp5.jpg", alt: "Sandbags", caption: "Canon A1 on Ilford HP5+" },
].sort((a, b) => {
  return b.src.localeCompare(a.src);
});