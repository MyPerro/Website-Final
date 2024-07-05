'use client';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-custom h-[55vh] flex flex-row">
      <div className="flex flex-col justify-start items-start w-[25%]">
        <Image className="pt-4 mx-12" src="/footerlogo.png" alt="logo" width={250} height={250} />
        <div className="flex flex-row justify-center items-center space-x-4 mx-16 mt-4">
          <Image src="/socials/linkedin.svg" alt="linkedin" width={25} height={25} />
          <Image src="/socials/facebook.svg" alt="facebook" width={25} height={25} />
          <Image src="/socials/instagram.svg" alt="instagram" width={25} height={25} />
          <Image src="/socials/twitter.svg" alt="twitter" width={25} height={25} />
        </div>
      </div>
      <div className="flex flex-col space-y-1 w-[10%] mt-10 mx-12 font-nohemi text-lg">
        <Link href="/contactus">Contact Us</Link>
        <Link href="/contactus">About Us</Link>
        <Link href="/contactus">Smart Collar</Link>
        <Link href="/contactus">Blog</Link>
      </div>
      <div className="w-[65%] p-8 flex flex-row">
        <div className="w-[26%]">
          <h1 className="text-5xl font-nohemi text-black">Say Hello</h1>
        </div>
        <div className="flex flex-col w-[35%] space-y-2 mx-4">
          <input type="text" placeholder="Your E-Mail ID" className="p-2 rounded-xl shadow-3d" />
          <input type="text" placeholder="Your Mobile Number" className="p-2 shadow-sm rounded-xl shadow-3d" />
        </div>
        <div className='w-[35%] flex flex-col items-end space-y-4'>
          <textarea rows={3} placeholder="Your Message" className="p-2 rounded-xl shadow-3d w-full" />
          <button className='py-1 px-4 bg-[#F97247] rounded-full text-white text-xl font-nohemi'>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
