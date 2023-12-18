"use client";
import './module.css';
import Logo from "../../../public/icon/logo.svg"
import Image from 'next/image';
import Navbar from './Navbar';
import { useState } from 'react';
import Link from 'next/link';
import Modal from './Modal';
const NavBarHeader = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    <nav className="navbar" style={{ zIndex: "500" }}>
      <div className="container">
        <div className="logo-container">
          <Link href="/">
            <Image src={Logo} alt='Ignytes Soft Logo'/>
          </Link>
        </div>
        <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
          <ul className="menu text-white ">
            <li className='hover:border-b-yellow-500'>
              <Link href="/">Home</Link>
            </li>
            <li className='hover:border-b-yellow-500'>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
        <Navbar />
        </div>
        <div className='get-btn'>
        <button onClick={openModal} >GET STARTED</button>
        </div>
        
      </div>
    </nav>
    </>
  );
};

NavBarHeader.displayName = 'NavBarHeader';

export default NavBarHeader;
