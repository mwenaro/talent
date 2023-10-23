import { TImage } from "@/types";

export const imagePath = "/assets/images";

export const getImage = (path: string) => `${imagePath}${path.trim()}`;

export const LOGO_PIC = `${imagePath}/logo.png`;

export const ABOUT_SECTION_IMAGE = getImage("/binary.png");

let _images: TImage[] = [];
// for (let i = 1; i <= 16; i++) {
for (let i = 1; i <= 6; i++) {
  _images.push({
  id:i,
    src: `${imagePath}/16x9/${i}.jpg`,
     alt: `Image ${i}`,
  });
}

export const GALLARY_IMAGES = _images;
