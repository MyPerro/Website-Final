'use client';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center footerpage px-10 py-5">
      {/* Left Section - Logo */}
      <div className="mb-4 md:mb-0 flex flex-row justify-center items-center">
        <div className='mb-4 md:mb-0 flex flex-col justify-center items-start mr-20'>
        <Image src="/footerlogo.png" alt="Logo" height="250" width="250" />
        <p className="text-lg ml-4">1234 Street Address, City</p>
        <p className='text-lg ml-4'>email@email.com</p>
        <p className='text-lg ml-4'>Ph: +91 1234567890</p>
        </div>
        <div className="w-px bg-orange-500 h-24"></div>
      </div>

      

      {/* Center Section - Social Logos, Contact Info, and Address */}
      <div className="flex flex-col items-center mb-4 md:mb-0">
        <div className="flex space-x-4 mb-2">
          {/* Example social media icons */}
          <Image src="/social/facebook.png" alt="Facebook" height="30" width="30" />
          <Image src="/social/twitter.png" alt="Twitter" height="30" width="30" />
          <Image src="/social/instagram.png" alt="Instagram" height="30" width="30" />
        </div>
        <div className="text-lg"></div>
      </div>

      {/* Right Section - Form */}
      <div className="flex flex-col w-full md:w-auto">
        <form method="#" className="flex flex-col space-y-2">
          <input className="rounded-md" type="email" placeholder="Your E-mail ID" />
          <input className="rounded-md" type="text" placeholder="Your Mobile No." />
          <textarea className="rounded-md" placeholder="Message For Us" rows={3} />
          <input className="btn bg-orange-600 text-white rounded-md" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
