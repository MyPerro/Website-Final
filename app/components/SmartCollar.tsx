'use client';
import { Canvas, useFrame } from 'react-three-fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const Model = (props: JSX.IntrinsicElements['group']) => {
  const scene = useGLTF('/dogCollar.glb').scene;
  return <primitive object={scene} {...props} />;
};

const Collar = () => {
  const meshRef = useRef<HTMLCanvasElement>(null);
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);
  const pathRef3 = useRef<SVGPathElement>(null);
  const pathRef4 = useRef<SVGPathElement>(null);
  const pathRef5 = useRef<SVGPathElement>(null);
  const pathRef6 = useRef<SVGPathElement>(null);
  const sectionRef = useRef(null);

  // Module-level variable to track if the animation has already played
  let hasAnimated = false;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Check if hasAnimated is false
            hasAnimated = true; // Set hasAnimated to true to prevent future animations
            [pathRef1, pathRef2, pathRef3, pathRef4, pathRef5, pathRef6].forEach((ref) => {
              if (ref.current) {
                const path = ref.current;
                const length = path.getTotalLength();
                path.style.transition = path.style.webkitTransition = 'none';
                path.style.strokeDasharray = `${length} ${length}`;
                if (ref === pathRef5) {
                  path.style.strokeDashoffset = `${length}`;
                } else {
                  path.style.strokeDashoffset = `-${length}`;
                }
                path.getBoundingClientRect(); // Trigger a reflow
                path.style.transition = path.style.webkitTransition = 'stroke-dashoffset 2s ease-in-out';
                setTimeout(() => {
                  const dots = document.getElementsByClassName('dot');
                  for (let i = 0; i < dots.length; i++) {
                    dots[i].classList.remove('hidden-initially');
                  }
                  path.style.strokeDashoffset = '0';
                  setTimeout(() => {
                    requestAnimationFrame(() => {
                      const pTags = document.getElementsByClassName('param');
                      for (let i = 0; i < pTags.length; i++) {
                        pTags[i].classList.remove('hidden-initially');
                        pTags[i].classList.add('wipe-effect');
                      }
                    });
                    requestAnimationFrame(() => {
                      const pTags = document.getElementsByClassName('param-right');
                      for (let i = 0; i < pTags.length; i++) {
                        pTags[i].classList.remove('hidden-initially');
                        pTags[i].classList.add('wipe-effect-reverse');
                      }
                    });
                  }, 2000); // Wait for the stroke animation to end
                }, 1500); // Time of animation
              }
            });
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="h-[70vh]">
<div className="flex flex-col items-start md:items-end m-5 mt-2 space-y-2 px-5 md:px-0">
        <h1 className="text-5xl md:text-8xl text-[#3C130E]">Smart Collar</h1>
        <p className="ml-1 md:ml-0 md:w-[37.3%]">Smart Collar is a collar that helps you track your pet&apos;s location, health, and activity. lalallalal lalalallala</p>
      </div>
      <section className="h-[50vh] md:h-[65vh] w-[75%] md:w-full relative">
        <Canvas dpr={[1, 2]} camera={{ fov: 45 }} shadows={true} ref={meshRef}>
          <PresentationControls speed={2.5} global>
            <Stage environment={'apartment'} intensity={0.01}>
              <Model scale={0.016} position={[0, -0.008, 0]} rotation={[0, Math.PI / 5, 0]} />
            </Stage>
          </PresentationControls>
        </Canvas>
        <p className="text-[#DE6631] text-lg md:text-2xl md:absolute md:top-[0.85rem] md:left-[20.5rem] font-bold hidden-initially param">Geofencing</p>
        <div className="hidden md:block absolute squiggle-animated top-[0.8rem] left-[30rem]">
          <svg width="135" height="82" viewBox="0 0 246 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef1} className="path" d="M0 1.5H180.5L244.5 83.5" stroke="black" stroke-width="3" />
          </svg>
        </div>
        <div className="hidden md:block w-2 h-2 border-2 border-[#DE6631] rounded-full top-[4.65rem] left-[38.25rem] absolute hidden-initially dot"></div>
        <p className="text-[#3C130E] text-lg md:text-2xl md:absolute md:top-[7.25rem] md:left-[13rem] w-[10%] font-bold leading-tight param hidden-initially">Heart Rate Monitoring</p>
        <div className="hidden md:block absolute squiggle-animated top-[7.75rem] left-[22rem]">
          <svg width="135" height="82" viewBox="0 0 246 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef2} d="M0 2H180.5L244.5 84" stroke="#DE6631" stroke-width="3" />
          </svg>
        </div>
        <div className="hidden md:block w-2 h-2 border-2 border-[#3C130E] rounded-full top-[11.65rem] left-[30.25rem] absolute hidden-initially dot"></div>
        <p className="text-[#DE6631] text-lg md:text-2xl md:absolute md:top-[18rem] md:left-[11.5rem] font-bold leading-tight hidden-initially param w-[10%]">GPS Tracker</p>
        <div className="hidden md:block absolute top-[18.75rem] left-[21.5rem]">
          <svg width="112" height="2" viewBox="0 0 112 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef3} d="M0 1h112" stroke="black" strokeWidth="2" />
          </svg>
        </div>
        <div className="hidden md:block w-2 h-2 border-2 border-[#DE6631] rounded-full top-[18.60rem] left-[28.5rem] absolute hidden-initially dot"></div>
        <p className="text-[#DE6631] text-lg md:text-2xl md:absolute md:top-[1.50rem] md:right-[8.25rem] w-[15%] font-bold hidden-initially leading-tight param-right">Respiratory Rate Monitoring</p>
        <div className="hidden md:block absolute top-[2rem] right-[23rem]">
          <svg width="135" height="82" viewBox="0 0 246 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef4} d="M246 2H65.5L1.5 84" stroke="black" stroke-width="3" />
          </svg>
        </div>
        <div className="hidden md:block w-2 h-2 border-2 border-[#DE6631] rounded-full top-[5.85rem] right-[31.25rem] hidden-initially absolute dot"></div>
        <p className="text-[#DE6631] text-lg md:text-2xl md:absolute md:top-[10.75rem] md:right-[14.5rem] w-[10%] font-bold hidden-initially leading-tight param-right">Activity Monitoring</p>
        <div className="hidden md:block absolute top-[12rem] right-[23rem]">
          <svg width="155" height="2" viewBox="0 0 112 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef5} d="M0 1h112" stroke="#DE6631" strokeWidth="2" />
          </svg>
        </div>
        <div className="hidden md:block w-2 h-2 border-2 border-[#3C130E] rounded-full top-[11.85rem] right-[31.25rem] hidden-initially absolute dot"></div>
        <p className="text-[#DE6631] text-lg md:text-2xl md:absolute md:top-[18.75rem] md:right-[16.75rem] w-[10%] font-bold hidden-initially leading-tight param-right">Temperature Monitoring</p>
        <div className="hidden md:block absolute top-[16.25rem] right-[27rem]">
          <svg width="135" height="82" viewBox="0 0 246 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef6} d="M246 83.5H65.5L1.5 1.5" stroke="black" stroke-width="3" />
          </svg>
        </div>
        <div className="hidden md:block w-2 h-2 border-2 border-[#DE6631] rounded-full top-[17rem] right-[35.25rem] hidden-initially absolute dot"></div>
      </section>
    </div>
  );
};

export default Collar;
