import React from 'react';

const Ourteam = () => {
  return (
    <div className="p-10 mx-auto">
      <h1 className="font-nohemi text-6xl mb-6">Our Team</h1>
      <div className="flex flex-col justify-center items-center md:h-[100vh] space-y-6">
      <div className="w-full md:h-[45vh] flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 bg-[#FAE9DA] mr-4 mb-4 md:mb-0 rounded-xl shadow-md">
            <img src="/profiles/avai.png" alt="Team Member" className="w-full md:w-[18rem] h-full object-cover rounded-l-xl" />
            <div className="flex justify-center items-start flex-col p-4">
              <p className="text-lg font-bold mb-1">Saiprasad Pandilwar</p>
              <p className="text-md italic mb-1">Founder</p>
              <p className="text-sm mb-1">
                Muffin, the chief morale officer, and inspiration for MyPerro, isn&apos;t just a dog. He&apos;s like a little kid with fluffy fur, a wet nose, and a wagging tail full of boundless love. But that all changed one day. He returned from a boarding facility covered in ticks and fleas,
                with fear in his eyes and his tail tucked between his legs, pleading for help. It was clear he had been mistreated, and we almost lost him.
              </p>
              <p className="text-sm mb-1">From that moment, MyPerro was born. Here, your &quot;perro&quot; is treated just like it is &quot;MyPerro&quot; with love, care, and all the attention it deserves.</p>
              <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 bg-[#FAE9DA] rounded-xl shadow-md">
            <img src="/profiles/manan.png" alt="Team Member" className="w-full md:w-[18rem] h-full object-cover rounded-l-xl" />
            <div className="flex justify-center items-start flex-col p-4">
              <p className="text-lg font-bold mb-1">Manan Vyas</p>
              <p className="text-md italic mb-1">Co-Founder</p>
              <p className="text-base mb-2">This is the first paragraph of the message. It provides some information about the team member, their role, and their contributions to the team.</p>
              <p className="text-base mb-4">This is the second paragraph of the message. It might include additional details about their background, experience, or personal interests.</p>
              <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="md:h-[45vh] flex flex-row w-full">
          <div className="flex flex-col md:flex-row justify-center items-center w-full space-y-4 md:space-x-4">
            <div className="w-full md:w-1/3 h-[45vh] bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md">
              <img src="/profiles/Arunima.jpg" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold">Arunima Shrivastava</p>
              <p className="italic">IOT Head</p>
              <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-4" />
              </a>
            </div>
            <div className="w-full md:w-1/3 h-[45vh] bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md">
              <img src="/profiles/Kunal.jpg" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold">Kunal Sinha</p>
              <p className="italic">IOT Developer</p>
              <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-4" />
              </a>
            </div>
            <div className="w-full md:w-1/3 h-[45vh] bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md">
              <img src="/profiles/Harsh.jpeg" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold">Harsh Shah</p>
              <p className="italic">Lead Frontend</p>
              <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-4" />
              </a>
            </div>
            <div className="w-full md:w-1/3 h-[45vh] bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md">
              <img src="/profiles/Sarvesh.jpg" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold">Sarvesh Dakhore</p>
              <p className="italic">Lead Backend</p>
              <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-4" />
              </a>
            </div>
            <div className="w-full md:w-1/3 h-[45vh] bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md">
              <img src="/profiles/Sameer.jpg" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold">Sameer Lalchandani</p>
              <p className="italic mb-2">Lead Designer</p>
              <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-2" />
              </a>
            </div>
            <div className="w-full md:w-1/3 h-[45vh] bg-[#FAE9DA] flex flex-col items-center rounded-xl shadow-md">
              <img src="/profiles/Shreya.jpg" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mt-4" />
              <p className="font-bold">Shreya Bakre</p>
              <p className="italic">UI/UX Designer</p>
              <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                <img src="/socials/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
