import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive__nav');
  };
  return (
    <div className='navbar'>
      <nav ref={navRef}>
        <Link href='#about'>
          <a onClick={showNavbar}>About</a>
        </Link>
        <Link href='#artist'>
          <a onClick={showNavbar}>Artist</a>
        </Link>
        <Link href='#gallery'>
          <a onClick={showNavbar}>Gallery</a>
        </Link>
        <button className='nav-close-btn' onClick={showNavbar} aria-label='close navigation button'>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar} aria-label='open navigation bundle'>
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
