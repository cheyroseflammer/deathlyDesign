import React from 'react';
import Image from 'next/image';
import myImage from '../assets/skullwing.png';

const Hero = () => {
  return (
    <div className='hero__container' id='home'>
      <header>
        <div className='image-wrapper'>
          <Image
            src={myImage}
            alt='skull wing image'
            height={600}
            width={1200}
            className='header-image'
          />
        </div>
        <p className='title'>Deathly</p>
        <p className='title2'>Tattoo Studio</p>
        <h3>TATTOOS AND PIERCINGS</h3>
        <hr />
        <p className='hero-text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam pariatur sint molestias
          officiis eaque rerum distinctio eligendi. Possimus harum enim minus laborum, est nulla.
          necessitatibus adipisci voluptatibus maxime cupiditate neque a in molestias nisi saepe.
          exercitationem aperiam alias. Beatae tempora temporibus delectus impedit. excepturi iste
          Possimus harium enim minususe.
        </p>
      </header>
    </div>
  );
};

export default Hero;
