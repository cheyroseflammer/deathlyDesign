import React from 'react';
import { urlFor } from '../lib/client';
import Image from 'next/image';

const Gallery = ({ gallery: { artist, image } }) => {
  return (
    <div className='gallery__image' id='gallery'>
      <Image
        src={urlFor(image).url()}
        alt='gallery image'
        width={200}
        height={300}
        className='image-card'
        objectFit='cover'
      />
    </div>
  );
};

export default Gallery;
