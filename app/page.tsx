import Image from 'next/image';
import Services from './components/Services';
import HeroSection from './components/HeroSection';
import SmartCollar from './components/SmartCollar';
// import Ourteam from './components/OurTeam';
import HoverParagraph from './components/Hoverpara';
import Cardblock from './components/cardBlock';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Services/>
      <SmartCollar/>
      <HoverParagraph/>
      {/* <Ourteam/> */}
      <Cardblock/>
      <Footer/>
    </>
  );
}
