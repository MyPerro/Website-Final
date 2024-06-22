import Image from 'next/image';

const Services = () => {
  return (
    <div className="flex justify-center items-center px-10 m-10 mb-9">
      <div className="w-[40%] flex flex-col justify-center items-start space-y-4">
        <h1 className="text-8xl text-[#3C130E]">Our Services</h1>
        <p className="text-lg p-2">Easily connect with certified, loving dog walkers through trusted platforms, ensuring your pets well-being and your peace of mind.</p>
        <button className="bg-[#FC6638] rounded-[2rem] py-2 px-7 text-xl text-white font-semibold">Book Now</button>
      </div>
      <div className="w-[60%] flex flex-row justify-center items-center pl-20">
        <div className="w-1/2 flex flex-col justify-center items-start m-10 space-y-4">
          <div className="bg-[#FEEDDD] h-[325px] p-8 flex justify-center items-center rounded-tl-[5rem] rounded-br-[5rem]">
            <img src="/Animation1-unscreen.gif" width="250" height="250" alt="Animation" />
          </div>
          <h2 className="text-3xl text-[#3C130E]">Dog Walking</h2>
          <p>Easily connect with certified, loving dog walkers through trusted platforms, ensuring your pets well-being and your peace of mind.`</p>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-start m-10 space-y-4">
          <div className="bg-[#FEEDDD] h-[325px] p-8 flex justify-center items-center rounded-tl-[5rem] rounded-br-[5rem]">
            <Image src="/dog_housing.png" alt="Dog Housing" width={225} height={225} />
          </div>
          <h2 className="text-3xl text-[#3C130E]">Dog Boarding</h2>
          <p>By setting service standards of dog boarding we ensure the hygiene, safety, security and comfort of every stay.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
