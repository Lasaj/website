// src/data/gearData.ts

export interface GearItem {
    id: string; // Unique identifier for the gear
    name: string;
    imageSrc: string; // Path to the gear image in public/images/gear/
    description: string; // Markdown content for the description
  }
  
export const gearItems: GearItem[] = [
  {
    id: 'canon-a1',
    name: 'Canon A-1',
    imageSrc: '/images/gear/a1.jpg',
    description: `My main camera body. Shown here with its 50mm f1.4. 
        
This has been very reliable and I enjoy shooting on it.  The light meter works well,
though I would say it can slightly over-expose in direct sun, which isn't too 
much of a problem.`
  },
  {
    id: '50mm',
    name: '50mm f1.4',
    imageSrc: '/images/gear/50mm.jpg',
    description: `Canon New FD 50mm f1.4.

My favourite lens by a wide margin. This is almost always attached to my camera wherever
I take it.  Very clear and sharp with nice bokeh.  Focus ring is smooth and easy to use.
I use this for pretty much any anything.
        `
  },
  {
    id: '24mm',
    name: '24mm f2.8',
    imageSrc: '/images/gear/24mm.jpg',
    description: `Canon New FD 24mm f2.8

My wide-angle. Coming from shooting on an APS-C sensor, I was surprised how wide 24mm
actually is. This lens is great for architecture when wandering around close spaces.
Easy to use, nice and easy to focus, especially stopped down.
        `
  },
  {
    id: '80-200mm',
    name: '80-200mm f4L',
    imageSrc: '/images/gear/80-200mm.jpg',
    description: `Canon New FD 80-200mm f4L

My telephoto. This is a very nice lens, very bright and clear and takes very
beautiful images.  The design is a little unconventional compared to modern lenses.
The push-pull zoom takes a some getting used to and the focus can be a little too
smooth.  Combined with the fact that it focuses past infinity and weighs a tonne
I enjoy it best with a tripod. 
        `
  },
]