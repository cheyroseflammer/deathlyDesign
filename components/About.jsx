import React from 'react';
import Image from 'next/image';
import aboutImage from '../assets/about.jpg';
import top from '../assets/top.png';
import middle from '../assets/middle.png';
import bottom from '../assets/bottom.png';

const About = () => {
  return (
    <div className='about__container' id='about'>
      <div className='left'>
        <Image src={top} alt='About Image' className='py' id='top' width={300} height={100} />
        <Image src={middle} alt='About Image' className='py' width={400} height={100} />
        <Image src={bottom} alt='About Image' className='py' width={500} height={100} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis excepturi tempore
          distinctio quod dolores quisquam nulla commodi doloremque cum! Molestias, at
          exercitationem repellendus saepe distinctio ratione animi tempore aspernatur accusamus.
        </p>
      </div>
      <div className='right'>
        <div className='about-text'>
          <h2>
            About <span className='black-text'>Us</span>
          </h2>
        </div>
        <Image
          src={aboutImage}
          alt='About Image'
          width={800}
          height={1100}
          className='about-image'
        />
      </div>
    </div>
  );
};

export default About;
