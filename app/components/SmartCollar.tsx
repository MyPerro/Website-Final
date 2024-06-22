'use client';
import { Canvas, useFrame } from 'react-three-fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Model = (props: JSX.IntrinsicElements['group']) => {
  const scene = useGLTF('/dogCollar.glb').scene;
  return <primitive object={scene} {...props} />;
};

const Collar = () => {
  const meshRef = useRef<HTMLCanvasElement>(null);
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);
  const pathRef3 = useRef<SVGPathElement>(null);

  useEffect(() => {
    [pathRef1, pathRef2, pathRef3].forEach((ref) => {
      if (ref.current) {
        const path = ref.current;
        const length = path.getTotalLength();
        path.style.transition = path.style.webkitTransition = 'none';
        path.style.strokeDasharray = `${length} ${length}`;
        // Start with the strokeDashoffset at negative length to make the path appear unfilled
        path.style.strokeDashoffset = `-${length}`;
        path.getBoundingClientRect(); // Trigger a reflow in between the style changes
        path.style.transition = path.style.webkitTransition = 'stroke-dashoffset 2s ease-in-out';
        // Animate the strokeDashoffset to '0' to fill the path from right to left
        setTimeout(() => {
          const dots = document.getElementsByClassName('dot'); // Get all elements with the class 'param'
          for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('hidden-initially');
          }
          path.style.strokeDashoffset = '0'; // Start the stroke animation

          // Add class to <p> tag after the stroke animation ends
          setTimeout(() => {
            requestAnimationFrame(() => {
              const pTags = document.getElementsByClassName('param'); // Get all elements with the class 'param'
              for (let i = 0; i < pTags.length; i++) {
                pTags[i].classList.remove('hidden-initially');
                pTags[i].classList.add('wipe-effect'); // Add the wipe effect class
              }
            });
          }, 2000); // Wait for the stroke animation to end
        }, 1500);
      }
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('meshRef.current');
      if (meshRef.current) {
        console.log('meshRef.current', meshRef.current.style);
        meshRef.current.style.rotate += '0.1';
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-[65vh]">
      <div className="flex flex-col items-end m-5 mt-2 space-y-2">
        <h1 className="text-8xl text-[#3C130E]">Smart Collar</h1>
        <p className="w-[37.3%]">Smart Collar is a collar that helps you track your pet&apos;s location, health, and activity. lalallalal lalalallala</p>
      </div>
      <section className="h-[65vh] w-full relative">
        <Canvas dpr={[1, 2]} camera={{ fov: 45 }} shadows={true} ref={meshRef}>
          <PresentationControls speed={2.5} global>
            <Stage environment={'apartment'} intensity={0.01}>
              <Model scale={0.016} position={[0, -0.008, 0]} rotation={[0, Math.PI / 5, 0]} />
            </Stage>
          </PresentationControls>
        </Canvas>
        <p className="text-[#DE6631] text-lg absolute top-[0.85rem] left-[30rem] font-bold hidden-initially param">Geofencing</p>
        <div className="absolute squiggle-animated top-[0.8rem] left-[37rem]">
          <svg width="135" height="82" viewBox="0 0 246 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef1} className="path" d="M0 1.5H180.5L244.5 83.5" stroke="black" stroke-width="3" />
          </svg>
        </div>
        <div className="w-2 h-2 border-2 border-[#DE6631] rounded-full top-[4.65rem] left-[45.25rem] absolute hidden-initially dot"></div>
        <p className="text-[#3C130E] text-lg absolute top-[7.5rem] left-[22.5rem] w-[10%] font-bold leading-tight param hidden-initially">Heart Rate Monitoring</p>
        <div className="absolute squiggle-animated top-[7.75rem] left-[29rem]">
          <svg width="135" height="82" viewBox="0 0 246 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef2} d="M0 2H180.5L244.5 84" stroke="#DE6631" stroke-width="3" />
          </svg>
        </div>
        <div className="w-2 h-2 border-2 border-[#3C130E] rounded-full top-[11.65rem] left-[37.25rem] absolute hidden-initially dot"></div>
        <p className="text-[#DE6631] text-lg absolute top-[18rem] left-[21.5rem] w-[10%] font-bold leading-tight hidden-initially param">GPS Tracker</p>
        <div className="absolute top-[18.75rem] left-[28.5rem]">
          <svg width="112" height="2" viewBox="0 0 112 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef3} d="M0 1h112" stroke="black" strokeWidth="2" />
          </svg>
        </div>
        <div className="w-2 h-2 border-2 border-[#DE6631] rounded-full top-[18.60rem] left-[35.5rem] absolute hidden-initially dot"></div>
      </section>
    </div>
  );
};

export default Collar;
