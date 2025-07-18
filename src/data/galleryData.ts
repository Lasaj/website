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
  { src: "/gallery/2025_04_11_000086170022_19A_Fuji_400.jpg", alt: "New and Old Buildings", caption: "Canon A1 on Fuji 400"},
  { src: "/gallery/2024_02_08_000002710008_800D.jpg", alt: "Children at Window", caption: "Canon A1 on 800D"},
  { src: "/gallery/2025_01_23_000004750026_11A_Kodak_Gold_200.jpg", alt: "Shoes", caption: "Canon A1 on Kodak Gold"},
  { src: "/gallery/2024_04_17_000010_Gold.jpg", alt: "Boat", caption: "Canon A1 on Kodak Gold"},
  { src: "/gallery/2024_04_22_000005650003_hp5.jpg", alt: "Pandanus", caption: "Canon A1 on HP5+"},
  { src: "/gallery/2024_06_05_000010820020_18_UltraMax_400.jpg", alt: "Masts", caption: "Canon A1 on Ultramax"},
  { src: "/gallery/2024_06_05_000011150033_Vision_250D.jpg", alt: "Bird Over Clouds", caption: "Canon A1 on 250D"},
  { src: "/gallery/2024_06_23_000005790025_Yoru_400.jpg", alt: "Window Seat", caption: "Canon A1 on FilmNeverDie Yoru 400"},
  { src: "/gallery/2024_07_24_000063290003_FilmNeverDie_Uni_800.jpg", alt: "Factory Wall", caption: "Canon A1 on FilmNeverDie Umi 800"},
].sort((a, b) => {
  return b.src.localeCompare(a.src);
});