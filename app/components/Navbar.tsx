import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#FAE9DA] p-2 flex items-center justify-between z-20 font-poppins shadow-lg">
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
