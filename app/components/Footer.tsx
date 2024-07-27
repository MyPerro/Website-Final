'use client';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-custom flex flex-col lg:flex-row lg:h-[60vh]" id='contact'>
      <div className="flex flex-col justify-start items-start lg:w-[25%] w-full p-4">
        <a href="/" target='_blank'><Image className="pt-4 mx-auto" src="/footerlogo.png" alt="logo" width={250} height={250} /></a>
        <div className="flex flex-row justify-center items-center space-x-4 mx-auto mt-4">
          <a href="https://www.linkedin.com/company/myperroindia?trk=profile-position" target='_blank'><Image src="/socials/linkedin.svg" alt="linkedin" width={25} height={25} /></a>
          {/* <a href=""><Image src="/socials/facebook.svg" alt="facebook" width={25} height={25} /></a> */}
          <a href="https://www.instagram.com/myperro.in/" target='_blank'><Image src="/socials/instagram.svg" alt="instagram" width={25} height={25} /></a>
          <a href="https://x.com/MyPerro_" target='_blank'><Image src="/socials/twitter.svg" alt="twitter" width={25} height={25} /></a>
        </div>
      </div>
      <div className="flex flex-col space-y-1 lg:w-[25%] mt-10 mx-8 font-nohemi text-lg lg:text-lg md:text-2xl ml-[7rem]">
        <h1 className='text-xl md:text-4xl lg:text-xl font-bold'>Company</h1>
        <Link href="/#contact" target='_blank'>Contact Us</Link>
        <Link href="/#aboutus" target='_blank'>About Us</Link>
        {/* <Link href="/contactus">Terms and Conditions</Link> */}
        <Link href="https://docs.google.com/forms/d/10RlOOmYSfCdx1l51dLZ2wJGfCxqHsyZN4N3Ffk9X4vc/edit" target='_blank'>Internship opportunities</Link>
      </div>
      <div className="flex flex-col space-y-1 lg:w-[28%] mt-10 mx-8 font-nohemi text-lg lg:text-lg md:text-2xl ml-[2rem]">
        <h1 className='text-xl md:text-4xl lg:text-xl font-bold'>Quick Links</h1>
        <Link href="/#collar">Smart Collar</Link>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeUZOhsIaCAojz7eFhecgjtlCieNQFzwsQN1WFipJBFRskaIQ/viewform" target='_blank'>Become Pet Sitter</Link>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdSl-Z9_zN97P7ejkx4QF_1DygsEQhybLYxjjSDlFTeaox9bw/viewform?usp=sf_link" target='_blank'>Become Dog Walker</Link>
        <Link href="/#blog-card">Blog</Link>
        <Link href="https://whatsapp.com/channel/0029VakNzwiFCCoMKEEG431y" target='_balnk'>Community</Link>
      </div>
      <div className="lg:w-[50%] w-full p-10 px-16 flex flex-col lg:flex-col lg:items-center lg:mr-[4rem] lg:mb-12 xl:mb-0 mb-0">
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl font-nohemi text-black mb-3">Leave A Message</h1>
        </div>
        <div className="flex flex-col w-full space-y-2">
          <input type="text" placeholder="Your E-Mail ID" className="p-2 rounded-xl shadow-3d" />
          <input type="text" pattern="[0-9]*" placeholder="Your Mobile Number" className="p-2 shadow-sm rounded-xl shadow-3d" />
        </div>
        <div className='w-full flex flex-col items-start space-y-4 mt-2 mb-20'>
          <textarea rows={3} placeholder="Your Message" className="p-2 rounded-xl shadow-3d w-full resize-none" />
          <button className='py-1 px-4 bg-[#F97247] rounded-full text-white text-xl font-nohemi'>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;