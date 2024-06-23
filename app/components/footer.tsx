'use client';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center footerpage px-10 py-5">
      {/* Left Section - Logo */}
      <div className="mb-4 md:mb-0 flex flex-row justify-center items-center">
        <div className="mb-4 md:mb-0 flex flex-col justify-center items-start md:mr-10">
          <Image src="/footerlogo.png" alt="Logo" height="250" width="250" />
          <p className="text-lg ml-4">email@email.com</p>
          <p className="text-lg ml-4">Ph: +91 1234567890</p>
        </div>
        <div className="md:block hidden w-[2px] bg-orange-500 h-32"></div>
      </div>

      {/* Center Section - Social Logos, Contact Info, and Address */}
      <div className="flex flex-row items-center space-x-12 mb-4 md:mb-0">
        <div className="flex flex-row justify-center items-center space-x-8 mb-2 md:mr-10">
          {/* Example social media icons */}
          <Image src="/socials/facebook.svg" alt="Facebook" height="30" width="30" />
          <Image src="/socials/twitter.svg" alt="Twitter" height="30" width="30" />
          <Image src="/socials/instagram.svg" alt="Instagram" height="30" width="30" />
          <Image src="/socials/linkedin.svg" alt="Instagram" height="30" width="30" />
        </div>
        <div className="md:block hidden w-[2px] bg-orange-500 h-32"></div>
      </div>
      <div className="md:flex hidden flex-row justify-start items-center">
        <div className='flex flex-col items-start font-semibold md:mr-20 space-y-2'>   
        <Link href="#" className="text-zinc-800">
          HOME
        </Link>
        <Link href="#" className="text-zinc-800">
          ABOUT US
        </Link>
        <Link href="#" className="text-zinc-800">
          CONTACT US
        </Link>
        <Link href="#" className="text-zinc-800">
          LOGIN
        </Link>
        </div>
        <div className='flex flex-col items-start font-semibold md:mr-10 space-y-2'>   
        <Link href="#" className="text-zinc-800">
          HOME
        </Link>
        <Link href="#" className="text-zinc-800">
          ABOUT US
        </Link>
        <Link href="#" className="text-zinc-800">
          CONTACT US
        </Link>
        <Link href="#" className="text-zinc-800">
          LOGIN
        </Link>
        </div>
        <div className="md:block hidden w-[2px] bg-orange-500 h-32"></div>
      </div>

      {/* Right Section - Form */}
      <div className="flex flex-col w-full md:w-auto">
        <form method="#" className="flex flex-col space-y-2">
          <input className="rounded-md" type="email" placeholder="Your E-mail ID" />
          <input className="rounded-md" type="text" placeholder="Your Mobile No." />
          <textarea className="rounded-md" placeholder="Message For Us" rows={2} />
          <input className="btn bg-orange-600 text-white rounded-md" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
