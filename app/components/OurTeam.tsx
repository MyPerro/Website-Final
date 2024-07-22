'use client';
import React from 'react';

function Ourteam() {
  return (
    <div className="w-[100%] ourteam mt-[8rem]">
      <div id="ourTeam" className="flex flex-col">
        <div className="text-4xl md:text-6xl font-bold font-anta mt-10 h-15 mb-10 text-[#3C130E] font-nohemi">Our Team</div>
        <div className="flex flex-col md:flex-row justify-center md:space-x-[1rem]">
          <div className="flex w-[55%] mx-auto shadow-xl rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden">
            <img src="avai.png" alt="Profile" className="w-1/2 rounded-l-lg h-full" />
            <div className="flex flex-col justify-between p-4 bg-[#FAE9DA] w-full">
              <div>
                <h2 className="text-2xl font-nohemi text-black">Saiprasad Pandilwar</h2>
                <p className="mt-3 text-md text-gray-600">
                  Muffin, the chief morale officer, and inspiration for MyPerro, isn't just a dog. He's like a little kid with fluffy fur, a wet nose, and a wagging tail full of boundless love. But that all changed one day. He returned from a boarding facility covered in ticks and fleas, with fear
                  in his eyes and his tail tucked between his legs, pleading for help. It was clear he had been mistreated, and we almost lost him.
                </p>
                <p className="mt-2 text-md text-gray-600">From that moment, MyPerro was born. Here, your "perro" is treated just like it is "MyPerro" with love, care, and all the attention they deserve.</p>
              </div>
              <div>
                <a href="https://www.google.com/" className="inline-block mt-4">
                  <img src="linkedin.png" alt="LinkedIn" width="20" height="20" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-[55%] mx-auto shadow-xl rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden">
            <img src="manan.png" alt="Manan Vyas" className="w-1/2 rounded-tl-[3rem]" />
            <div className="flex flex-col justify-between p-4 bg-[#FAE9DA] w-full">
              <div>
                <h2 className="text-black text-2xl font-nohemi">Manan Vyas</h2>
                <p className="mt-3 text-md text-gray-600">
                  Growing up in a household where dogs are treated as members of the family, I absorbed the deep-seated passion my parents had for caring for dogs. What propels me forward is the recognition of a persistent problem that has plagued pet owners for years, including my own family: the
                  need for effective solutions in pet care that truly address the challenges faced by both pets and their owners. It is this realization that serves as the driving force behind MyPerro.
                </p>
              </div>
              <div className="mt-4">
                <a href="https://www.google.com/">
                  <img src="linkedin.png" alt="LinkedIn" width="20" height="20" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourteam;
