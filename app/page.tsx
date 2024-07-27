'use client';
import Image from 'next/image';
import Services from './components/Services';
import HeroSection from './components/HeroSection';
import SmartCollar from './components/SmartCollar';
import Ourteam from './components/OurTeam';
import HoverParagraph from './components/Hoverpara';
import Cardblock from './components/cardBlock';
import Footer from './components/Footer';
import Loader from './components/Preloader';
import { useState , useEffect} from 'react';
import Metadata from './components/MetaData';


// export const metadata: Metadata = {
//   title: 'MyPerro',
//   description: "At MyPerro, we are here to revolutionize the dog care industry in India, including innovative dog boarding solutions. Our platform is powered by tech, allowing us to provide reliable, personalized, and secure dog care experiences. We understand the unique challenges faced by dog owners and are committed to offering seamless services, whether it's daily care or dog boarding. MyPerro isn't just a platform; it's a tech-driven promise to prioritize the well-being of your furry friends. Join us in reshaping dog care and boarding through the power of technology.",
// };

export default function Home() {
  const [isloaded,setLoaded] = useState(false);
  useEffect(() =>{
    setTimeout(() =>{const ele = document.getElementById("preloaded");
      ele?.classList.add("pre-fade");},4000)
    setTimeout(() => {
      setLoaded(true);}, 4500);
   })
  if(isloaded){
  return (
    <>
      <Metadata seoTitle='MyPerro' seoDescription="At MyPerro, we are here to revolutionize the dog care industry in India, including innovative dog boarding solutions. Our platform is powered by tech, allowing us to provide reliable, personalized, and secure dog care experiences. We understand the unique challenges faced by dog owners and are committed to offering seamless services, whether it's daily care or dog boarding. MyPerro isn't just a platform; it's a tech-driven promise to prioritize the well-being of your furry friends. Join us in reshaping dog care and boarding through the power of technology."/>
      <HeroSection/>
      <Services/>
      <SmartCollar/>
      <HoverParagraph/>
      <Ourteam/>
      <Cardblock/>
      <Footer/>
    </>
  );
}
else{
  return(
    <>
      <Metadata seoTitle='MyPerro' seoDescription="At MyPerro, we are here to revolutionize the dog care industry in India, including innovative dog boarding solutions. Our platform is powered by tech, allowing us to provide reliable, personalized, and secure dog care experiences. We understand the unique challenges faced by dog owners and are committed to offering seamless services, whether it's daily care or dog boarding. MyPerro isn't just a platform; it's a tech-driven promise to prioritize the well-being of your furry friends. Join us in reshaping dog care and boarding through the power of technology."/>
      <Loader /> 
    </>
  )
}
}
