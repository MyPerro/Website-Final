'use client';
import React from 'react';

function Ourteam(){
    return(
    <div className='w-[100%] ourTeam_page'>
    <div id='ourTeam' className="mx-auto flex flex-col">
    <div className="text-black md:text-6xl font-bold font-anta mt-10 h-20 mb-10">Our Team</div>
    <div className='flex flex-row'>
        <div className='2xl:w-1/4 flex flex-col team_people'>
            <img src="avai.png" alt="hi"/>
            <div className='text-black ml-2 md:text-1xl font-anta mt-3 h-20'>Saiprasad Pandilwar</div>
            <a href="https://www.google.com/">
            <img className='ml-2 mb-3' src="linkedin.png" alt="hi" height="30" width="30"/></a>
        </div>
        <div className='2xl:w-1/4 md:ml-[3%] flex flex-col team_people'>
            <img src="manan.png" alt="hi"/>
            <div className='text-black ml-2 md:text-1xl font-anta mt-3 h-20'>Manan Vyas</div>
            <a href="https://www.google.com/">
            <img className='ml-2 mb-3' src="linkedin.png" alt="hi" height="30" width="30"/></a>
        </div>
        <div className='2xl:w-1/4 md:ml-[3%] flex flex-col team_people'>
            <img src="Shivanshi.png" alt="hi"/>
            <div className='text-black ml-2 md:text-1xl font-anta mt-3 h-20'>Shivanshi Rawat</div>
            <a href="https://www.google.com/">
            <img className='ml-2 mb-3' src="linkedin.png" alt="hi" height="30" width="30"/></a>
        </div>
        <div className='2xl:w-1/4 md:ml-[3%] flex flex-col team_people'>
            <img src="komo.png" alt="hi"/>
            <div className='text-black ml-2 md:text-1xl font-anta mt-3 h-20'>Komolika Chakroborthy</div>
            <a href="https://www.google.com/">
            <img className='ml-2 mb-3' src="linkedin.png" alt="hi" height="30" width="30"/></a>
        </div>
    </div>
    </div>
    </div>
    );
}

export default Ourteam;