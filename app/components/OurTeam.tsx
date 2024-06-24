'use client';
import React from 'react';

function Ourteam() {
  return (
    <div className="w-[100%] ourTeam_page">
      <div id="ourTeam" className="flex flex-col">
        <div className="text-4xl md:text-6xl font-bold font-anta mt-10 h-15 mb-10 text-[#3C130E]">Our Team</div>
        <div className="flex flex-col md:flex-row justify-center md:space-x-[4rem]">
          <div className="team_people rounded-tl-[3rem] rounded-br-[3rem]">
            <div className="card">
              <div className="card_face card_front">
                <img src="avai.png" alt="hi" className="rounded-tl-[3rem]" />
                <div className="text-black ml-2 text-2xl font-anta mt-3 h-7">Saiprasad Pandilwar</div>
                <div className="text-black ml-2 text-xl font-anta mt-3 h-28 md:h-24 italic">Founder</div>
                <a href="https://www.google.com/">
                  <img className="ml-2 " src="linkedin.png" alt="hi" height="30" width="30" />
                </a>
              </div>
              <div className="card_face card_back">
                <p>
                  Muffin, the chief morale officer, and inspiration for MyPerro, isn&apos;t just a dog. He&apos;s like a little kid with fluffy fur, a wet nose, and a wagging tail full of boundless love. But that all changed one day. He returned from a boarding facility covered in ticks and fleas,
                  with fear in his eyes and his tail tucked between his legs, pleading for help. It was clear he had been mistreated, and we almost lost him.
                </p>

                <p>From that moment, MyPerro was born. Here, your &quot;perro&quot; is treated just like it is &quot;MyPerro&quot; with love, care, and all the attention they deserve.</p>
              </div>
            </div>
          </div>
          <div className="team_people rounded-tl-[3rem] rounded-br-[3rem]">
            <div className="card">
              <div className="card_face card_front">
                <img src="manan.png" alt="hi" className="rounded-tl-[3rem]" />
                <div className="text-black ml-2 text-2xl font-anta mt-3 h-7">Manan Vyas</div>
                <div className="text-black ml-2 text-xl font-anta mt-3 h-28 md:h-24 italic">Co-Founder</div>
                <a href="https://www.google.com/">
                  <img className="ml-2 " src="linkedin.png" alt="hi" height="30" width="30" />
                </a>
              </div>
              <div className="card_face card_back">
                <p>
                  Growing up in a household where dogs are treated as members of the family, I absorbed the deep-seated passion my parents had for caring for dogs. What propels me forward is the recognition of a persistent problem that has plagued pet owners for years, including my own family: the
                  need for effective solutions in pet care that truly address the challenges faced by both pets and their owners. It is this realization that serves as the driving force behind MyPerro.
                </p>
              </div>
            </div>
          </div>
          <div className="team_people rounded-tl-[3rem] rounded-br-[3rem]">
            <div className="card">
              <div className="card_face card_front">
                <img src="Shivanshi.png" alt="hi" className="rounded-tl-[3rem]" />
                <div className="text-black ml-2 text-2xl font-anta mt-3 h-7">Shivanshi Rawat</div>
                <div className="text-black ml-2 text-xl font-anta mt-3 h-28 md:h-24 italic">Co-Founder</div>
                <a href="https://www.google.com/">
                  <img className="ml-2 " src="linkedin.png" alt="hi" height="30" width="30" />
                </a>
              </div>
              <div className="card_face card_back">
                <p>
                  A pet boarding&apos;s carelessness changed the trajectory of my life. Sometimes you don&apos;t know when to stop waiting but have to make peace with the fact. Still I always say I didn&apos;t lose waffy, I carry him in my heart wherever I go. My first pet, love, best friend and
                  indeed endless source of motivation.
                </p>
                <p>Waffy is indeed CMO - cutest mischief officer , whose memories are enough to add sunshine to my life and work.He is the reason why I started and keeps me going an extra mile always.</p>
              </div>
            </div>
          </div>
          <div className="team_people rounded-tl-[3rem] rounded-br-[3rem]">
            <div className="card">
              <div className="card_face card_front">
                <img src="komo.png" alt="hi" className="rounded-tl-[3rem]" />
                <div className="text-black ml-2 text-2xl font-anta mt-3 h-7">Komolika Chakroborthy</div>
                <div className="text-black ml-2 text-xl font-anta mt-3 h-28 md:h-24 italic">Co-Founder</div>
                <a href="https://www.google.com/">
                  <img className="ml-2 " src="linkedin.png" alt="hi" height="30" width="30" />
                </a>
              </div>
              <div className="card_face card_back">
                <p>
                  Growing up in a household where dogs are treated as members of the family, I absorbed the deep-seated passion my parents had for caring for dogs. What propels me forward is the recognition of a persistent problem that has plagued pet owners for years, including my own family: the
                  need for effective solutions in pet care that truly address the challenges faced by both pets and their owners. .It is this realization that serves as the driving force behind MyPerro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourteam;
