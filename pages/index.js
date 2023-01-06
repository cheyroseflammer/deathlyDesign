import React from 'react';
import Head from 'next/head';
import { Navbar, Hero, About, Artists, Gallery } from '../components';
import { client } from '../lib/client';
// Test Slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const index = ({ artists, gallerys }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 281,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          lazyLoad: true,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <Head>
        <title>Deathly Tattoo Studio</title>
        <meta name='robots' content='all' />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <div className='artist__container'>
        <Slider {...settings}>
          {artists?.map((artist) => (
            <Artists key={artist._id} artist={artist} />
          ))}
        </Slider>
      </div>
      <div className='gallery__container'>
        {gallerys?.map((gallery) => (
          <Gallery key={gallery._id} gallery={gallery} />
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const query = '*[_type=="artist"]';
  const galleryQuery = '*[_type=="gallery"]';
  const artists = await client.fetch(query);
  const gallerys = await client.fetch(galleryQuery);
  return {
    props: { artists, gallerys },
  };
}

export default index;
