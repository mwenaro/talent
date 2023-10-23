"use client"
import { GALLARY_IMAGES } from '@/app/assets/images';
import { TImage } from '@/types';
import { motion } from 'framer-motion';



const Gallery2: React.FC = () => {
  const imgPath = '/assets/images/16x9/';


  return (
    <>
    <div className="">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-1 md:gap-4 wrap">



          {
            GALLARY_IMAGES.sort(()=>Math.random()*0.5).map((pic: TImage) =>
              <motion.img
              key={pic.id}
                src={pic.src}
                alt={pic.alt}
                className="rounded-lg w-full aspect-auto overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                loading={'lazy'}
              />
            )

          }

        </div>
      </div>
    </div>
    </>
  )
}

export default Gallery2;