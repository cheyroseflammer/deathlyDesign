import React from 'react';
import { urlFor } from '../lib/client';
import Image from 'next/image';

const Artists = ({ artist: { image, name, bio } }) => {
  return (
    <div className='artist__card' id='artist'>
      <Image
        src={urlFor(image).url()}
        alt='Artists Bio Img'
        width={180}
        height={180}
        className='artist-image'
      />
      <p className='artist-name'>{name}</p>
      <span className='line'></span>
      <p className='artist-bio'>{bio}</p>
    </div>
  );
};

export default Artists;
