'use client';
import { useState, useEffect, useRef } from 'react';
import '@google/model-viewer/dist/model-viewer.min.js';

const Collar = () => {
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);
  const pathRef3 = useRef<SVGPathElement>(null);
  const pathRef4 = useRef<SVGPathElement>(null);
  const pathRef5 = useRef<SVGPathElement>(null);
  const pathRef6 = useRef<SVGPathElement>(null);
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200); // Assuming 768px as the breakpoint for mobile devices
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={sectionRef} className="h-[90vh] lg:h-[105vh] xl:h-[85vh]" id="collar">
      <div className="flex flex-col items-start md:items-center lg:items-end m-5 mt-2 space-y-2 md:mx-12 md:px-12 lg:px-0">
        <h1 className="text-5xl lg:text-7xl xl:text-8xl text-[#3C130E] font-nohemi w-full lg:w-[40%]">Smart Collar</h1>
        <p className="ml-1 md:text-xl w-full lg:text-sm lg:ml-0 lg:w-[40%]">A smart collar enables you to monitor your pets&apos; location, health status, and daily activity levels for their well-being and your peace of mind.</p>
      </div>
      <section className="h-[40vh] lg:h-[65vh] xl:h-[76vh] w-full relative">
        {/* <Canvas dpr={[1, 2]} shadows={true}>
          <PresentationControls
            speed={5}
            global
            config={{ mass: 1, tension: 170, friction: 26 }}
            polar={[-Math.PI / 2, Math.PI / 2]} // Limits vertical rotation
            azimuth={[-Infinity, Infinity]} // Allows unlimited horizontal rotation
          > 
            <OrbitControls enableZoom={false} enablePan={false}/>
            <Stage environment={'apartment'} intensity={0.01}>
              <Model scale={0.016} position={[0, -0.008, 0]} rotation={[0, Math.PI / 5, 0]} />
            </Stage>
        </Canvas> */}
        <model-viewer src="dogCollar.glb" alt="A 3D model of a dog collar" loading="eager" camera-controls camera-orbit="-45deg 90deg 45deg" disable-zoom disable-pan shadow-intensity="1"></model-viewer>
        {!isMobile ? (
          <>
            <p className="text-[#DE6631] hidden md:block text-lg md:text-2xl md:absolute md:top-[1rem] md:left-[19.5rem] hidden-initially param font-nohemi">Geofencing</p>
            <div className="hidden md:block absolute squiggle-animated top-[1.05rem] left-[29rem]">
              <svg width="135" height="82" viewBox="0 0 246 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={pathRef1} className="path" d="M0 1.5H180.5L244.5 83.5" stroke="black" stroke-width="3" />
              </svg>
            </div>
            <div className="hidden md:block w-2 h-2 border-2 border-[#DE6631] rounded-full top-[4.80rem] left-[37.25rem] absolute hidden-initially dot"></div>
            <p className="text-[#3C130E] hidden md:block text-lg md:text-2xl md:absolute md:top-[10.25rem] md:left-[13rem] w-[10%] leading-tight param hidden-initially font-nohemi">Heart Rate Monitoring</p>
            <div className="hidden md:block absolute squiggle-animated top-[10.75rem] left-[22rem]">
              <svg width="135" height="82" viewBox="0 0 246 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={pathRef2} d="M0 2H180.5L244.5 84" stroke="#DE6631" stroke-width="3" />
              </svg>
            </div>
            <div className="hidden md:block w-2 h-2 border-2 border-[#3C130E] rounded-full top-[14.65rem] left-[30.25rem] absolute hidden-initially dot"></div>
            <p className="text-[#DE6631] hidden md:block text-lg md:text-2xl md:absolute md:top-[22rem] md:left-[11.5rem] leading-tight hidden-initially param w-[10%] font-nohemi">GPS Tracker</p>
            <div className="hidden md:block absolute top-[23rem] left-[21.5rem]">
              <svg width="112" height="2" viewBox="0 0 112 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={pathRef3} d="M0 1h112" stroke="black" strokeWidth="2" />
              </svg>
            </div>
            <div className="hidden md:block w-2 h-2 border-2 border-[#DE6631] rounded-full top-[22.8rem] left-[28.5rem] absolute hidden-initially dot"></div>
            <p className="text-[#DE6631] hidden md:block text-lg md:text-2xl md:absolute md:top-[1.50rem] md:right-[8.25rem] w-[15%] hidden-initially leading-tight param-right font-nohemi">Respiratory Rate Monitoring</p>
            <div className="hidden md:block absolute top-[2rem] right-[23rem]">
              <svg width="135" height="82" viewBox="0 0 246 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={pathRef4} d="M246 2H65.5L1.5 84" stroke="black" stroke-width="3" />
              </svg>
            </div>
            <div className="hidden md:block w-2 h-2 border-2 border-[#DE6631] rounded-full top-[5.85rem] right-[31.25rem] hidden-initially absolute dot"></div>
            <p className="text-[#DE6631] hidden md:block text-lg md:text-2xl md:absolute md:top-[13.75rem] md:right-[14.5rem] w-[10%] hidden-initially leading-tight param-right font-nohemi">Activity Monitoring</p>
            <div className="hidden md:block absolute top-[15rem] right-[23rem]">
              <svg width="155" height="2" viewBox="0 0 112 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={pathRef5} d="M0 1h112" stroke="#DE6631" strokeWidth="2" />
              </svg>
            </div>
            <div className="hidden md:block w-2 h-2 border-2 border-[#3C130E] rounded-full top-[14.85rem] right-[31.25rem] hidden-initially absolute dot"></div>
            <p className="text-[#DE6631] hidden md:block text-lg md:text-2xl md:absolute md:top-[24.5rem] md:right-[14.75rem] w-[10%] hidden-initially leading-tight param-right font-nohemi">Temperature Monitoring</p>
            <div className="hidden md:block absolute top-[22.25rem] right-[25rem]">
              <svg width="135" height="82" viewBox="0 0 246 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={pathRef6} d="M246 83.5H65.5L1.5 1.5" stroke="black" stroke-width="3" />
              </svg>
            </div>
            <div className="hidden md:block w-2 h-2 border-2 border-[#DE6631] rounded-full top-[23rem] right-[33.25rem] hidden-initially absolute dot"></div>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-4 lg:mt-2 lg:p-2 md:px-12 md:mx-12 font-semibold">
            <div>
              <ul className="list-disc pl-5">
                <p className="text-[#3C130E] text-lg md:text-2xl font-nohemi mt-3">Geofencing</p>
                <p className="text-[#3C130E] text-lg md:text-2xl font-nohemi leading-tight mt-4">Heart Rate Monitoring</p>
                <p className="text-[#3C130E] text-lg md:text-2xl font-nohemi leading-tight mt-4">Respiratory Rate Monitoring</p>
              </ul>
            </div>
            <div className="ml-4">
              <ul className="list-disc pl-5">
                <p className="text-[#3C130E] text-lg md:text-2xl font-nohemi leading-tight mt-4">GPS Tracker</p>
                <p className="text-[#3C130E] text-lg md:text-2xl font-nohemi leading-tight mt-4">Activity Monitoring</p>
                <p className="text-[#3C130E] text-lg md:text-2xl font-nohemi leading-tight mt-4">Temperature Monitoring</p>
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Collar;
