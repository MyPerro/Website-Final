'use client';
import React from 'react';

interface CardProps {
    content1: string;
    content2: string;
    className: string;
    onClick: () => void;
  }

  const Card: React.FC<CardProps> = ({ content1,content2, className, onClick }) => {
  return (
    <div
      className={`flex justify-center items-center w-81 h-64 m-5 text-xl rounded-lg transition-all duration-300 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className='flex flex-row cardBlockPage'>
        <div className='w-1/2'>
          <img src='blockDog.png' height='1000' width='500'/>
        </div>
        <div className='w-1/2 pl-4 pr-4 flex flex-col cardContent items-center font-anta'>
          <div className='font-bold text-3xl  mt-4'>{content1}</div>
          <div>{content2}</div>
          <div >
            <button className='cardbuttonColor pl-2 pr-2 '> Read Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
