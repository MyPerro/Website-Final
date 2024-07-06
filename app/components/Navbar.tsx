'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const ourServicesSection = document.getElementById('our-services');
      const navbar = document.getElementById('navbar');

      if (ourServicesSection && navbar) {
        const sectionBottom = ourServicesSection.offsetTop + ourServicesSection.offsetHeight;

        if (currentScrollPos > sectionBottom) {
          // Apply logic only if scrolled past "Our Services" section
          if (prevScrollpos > currentScrollPos) {
            navbar.style.top = '0';
          } else {
            navbar.style.top = '-100px';
          }
        }
      }

      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollpos]);

  return (
    <nav
      id="navbar"
      style={{ transition: 'top 0.5s ease-in-out' }} // Add this line
      className="fixed top-0 left-0 right-0 min-h-[8vh] bg-[#FAE9DA] p-2 flex items-center justify-between z-20 font-poppins shadow-lg">
      <div>
        <Image src="/Logo.png" alt="Logo" width={180} height={180} className="ml-[4rem]" />
      </div>
      <div className="flex justify-center items-center space-x-12 font-semibold mr-[2rem]">
        <Link href="#" className="text-zinc-800">
          HOME
        </Link>
        <Link href="#" className="text-zinc-800">
          ABOUT US
        </Link>
        <Link href="#" className="text-zinc-800">
          CONTACT US
        </Link>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
