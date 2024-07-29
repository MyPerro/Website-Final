"use client";
import React, { useState, useEffect } from "react";

const HoverParagraph = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    // Check if window is defined to avoid SSR issues
    if (typeof window !== "undefined") {
      // Set initial mobile state based on window width
      setIsMobile(window.innerWidth <= 1200);

      // Add event listener for resize
      window.addEventListener("resize", handleResize);

      return () => {
        // Cleanup: remove event listener
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const toggleVisibility = (
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setter((prev: boolean) => !prev);
  };

  return (
    <div className="hoverpage bg-[#3C130E] xl:bg-transparent md:border-t-2 md:border-b-2 border-[#3C130E]">
      <div
        className={`hover-container ${hovered ? "visible" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className={`hover-word ${
            isMobile ? "hovered" : hovered ? "hovered" : ""
          }`}
        >
          MISSION
        </span>
        <p
          className={`hover-paragraph ${
            hovered ? "visible" : ""
          } md:text-2xl lg:text-lg`}
        >
          Our mission is to integrate technology into the pet care industry,
          providing personalized care, fostering transparency, and ensuring
          security. We aim to empower pet parents to balance work commitments
          and plan vacations with peace of mind, knowing their pets are in good
          hands. Additionally, we seek to support pet sitters and dog walkers by
          facilitating fair compensation for their efforts, thereby creating a
          chain of trust, care, love, and contentment that benefits all
          parties involved.
        </p>
      </div>
      <div
        className={`hover-container2 ${hovered2 ? "visible2" : ""}`}
        onMouseEnter={() => setHovered2(true)}
        onMouseLeave={() => setHovered2(false)}
      >
        <span
          className={`hover-word ${
            isMobile ? "hovered" : hovered2 ? "hovered" : ""
          }`}
        >
          VISION
        </span>
        <p
          className={`hover-paragraph2 ${
            hovered2 ? "visible2" : ""
          } md:text-2xl lg:text-lg`}
        >
          To broaden our services to ensure your dog gets the utmost
          personalized care that it deserves. We aim to have our own boarding
          area- “MyPerro Space” and also expand into pet grooming, pet-friendly
          commute and pet food industry. We want to provide the best
          personalized care by understanding the unique needs of every dog
          coming to us.
        </p>
      </div>
    </div>
  );
};

export default HoverParagraph;
