import React from 'react';

const Ourteam = () => {
  return (
    <div className="p-10 mx-auto">
      <h1 className="font-nohemi text-6xl mb-8 mt-12">Our Team</h1>
      <div className="flex flex-col justify-center items-center h-auto space-y-6 tracking-wide">
        <div className="w-full md:h-auto flex flex-col lg:flex-row md:space-y-6 lg:space-y-0">
          <div className="flex flex-col md:flex-row items-center justify-center w-full lg:w-1/2 bg-[#FAE9DA] mr-4 mb-4 md:mb-0 rounded-xl shadow-md">
            <img src="/profiles/avai.png" alt="Team Member" className="w-full md:w-[18.8rem] lg:w-[18rem] h-full object-cover rounded-l-xl" />
            <div className="flex justify-center items-start flex-col p-4">
              <p className="text-lg font-bold mb-1 font-nohemi">Saiprasad Pandilwar</p>
              <p className="text-md italic mb-1 font-nohemi">Founder</p>
              <p className="text-sm mb-1">
                Muffin, the chief morale officer, and inspiration for MyPerro, isn&apos;t just a dog. He&apos;s like a little kid with fluffy fur, a wet nose, and a wagging tail full of boundless love. But that all changed one day. He returned from a boarding facility covered in ticks and fleas,
                with fear in his eyes and his tail tucked between his legs, pleading for help. It was clear he had been mistreated, and we almost lost him.
              </p>
              <p className="text-sm mb-1">From that moment, MyPerro was born. Here, your &quot;perro&quot; is treated just like it is &quot;MyPerro&quot; with love, care, and all the attention it deserves.</p>
              <a href="https://www.linkedin.com/in/saiprasadpandilwar/" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full lg:w-1/2 bg-[#FAE9DA] rounded-xl shadow-md">
            <img src="/profiles/manan.png" alt="Team Member" className="w-full md:w-[18rem] h-full object-cover rounded-l-xl" />
            <div className="flex justify-center items-start flex-col p-4">
              <p className="text-lg font-bold mb-2 font-nohemi">Manan Vyas</p>
              <p className="text-md italic mb-3 font-nohemi">Co-Founder</p>
              <p className="text-sm mb-3">
                <p>
                  Growing up in a household where dogs are treated as members of the family, I absorbed the deep-seated passion my parents had for caring for dogs. What propels me forward is the recognition of a persistent problem that has plagued pet owners for years, including my own family: the
                  need for effective solutions in pet care that truly address the challenges faced by both pets and their owners. It is this realization that serves as the driving force behind MyPerro.
                </p>{' '}
              </p>
              <a href="https://www.linkedin.com/in/manan-vyas-b13667252/" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="md:h-auto flex flex-row w-full">
          <div className="flex flex-col lg:flex-row justify-center items-center w-full space-y-4 lg:space-x-4">
            <div className="w-full md:w-1/3 h-auto bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md mt-4">
              <img src="/profiles/Arunima.jpg" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold font-nohemi">Arunima Shrivastava</p>
              <p className="italic font-nohemi">IOT Head</p>
              <a href="https://www.linkedin.com/in/arunima-srivastava05/" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-4 mb-4" />
              </a>
            </div>
            <div className="w-full md:w-1/3 h-auto bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md">
              <img src="/profiles/Kunal.jpg" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold font-nohemi">Kunal Sinha</p>
              <p className="italic font-nohemi">IOT Developer</p>
              <a href="https://www.linkedin.com/in/kunal-sinha-244044278/" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-4 mb-4" />
              </a>
            </div>
            <div className="w-full md:w-1/3 h-auto bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md">
              <img src="/profiles/Harsh.jpeg" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold font-nohemi">Harsh Shah</p>
              <p className="italic font-nohemi">Lead Frontend</p>
              <a href="https://www.linkedin.com/in/harsh-shah-5b45821b5/" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-4 mb-4" />
              </a>
            </div>
            <div className="w-full md:w-1/3 h-auto bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md">
              <img src="/profiles/Sarvesh.jpg" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold font-nohemi">Sarvesh Dakhore</p>
              <p className="italic font-nohemi">Lead Backend</p>
              <a href="https://www.linkedin.com/in/sarveshdakhore/" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-4 mb-4" />
              </a>
            </div>
            <div className="w-full md:w-1/3 h-auto bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md">
              <img src="/profiles/Sameer.jpg" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold font-nohemi">Sameer Lalchandani</p>
              <p className="italic mb-2 font-nohemi">Lead Designer</p>
              <a href="https://www.linkedin.com/in/sameer-lalchandani-12a940189/" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-2 mb-4" />
              </a>
            </div>
            <div className="w-full md:w-1/3 h-auto bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md">
              <img src="/profiles/Shreya.jpg" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold font-nohemi">Shreya Bakre</p>
              <p className="italic font-nohemi">UI/UX Designer</p>
              <a href="https://www.linkedin.com/in/shreya-bakre/" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-4 mb-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
