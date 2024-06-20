import Image from 'next/image';
import Services from './components/Services';
import HeroSection from './components/HeroSection';
import SmartCollar from './components/SmartCollar';

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Services/>
      <SmartCollar/>
    </>
  );
}
