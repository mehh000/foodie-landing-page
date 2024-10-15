import Image from 'next/image';
import React from 'react';

const HomePage = () => {
    return (
        <div className="w-full px-10 py-5 flex  items-center justify-around  md:flex-row flex-col sm:flex-row lg:flex-row ">  
            {/* left side container */}
            <div className=" p-2 w-full flex pl-10">
                <div className="flex flex-col gap-4"> 
                    {/* title container */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-4">
                        <h1 className="text-[43px] font-bold">Desire</h1> 
                             <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-5 py-2 rounded-full w-fit">
                                <p className="text-white text-[28px] font-bold ">Food</p>
                             </div>
                            
                        </div>
                         <h1 className="text-[42px] font-bold">for your Taste</h1> 
                       
                    </div>
                    {/* description container */}
                    <p className="text-[20px] text-gray-500 ">
                    Food is what we eat to stay alive and healthy.  <br />
                    It comes in many different forms and flavors, <br />
                    from fruits and vegetables to meats and grains.
                    </p>
                </div>
                </div> 
            {/* right side container */}
            <div className=" p-4 w-full max-w-md mx-auto rounded-lg flex flex-col items-center relative">
      {/* Background Container */}
      <div className="bg-orange-200 rounded-xl p-4 relative w-full h-64 md:h-80 lg:h-96">
        {/* Main Image */}
        <Image
          src={'/girl.png'}
          alt="The girl model"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        {/* Delivery Tag */}
        <div className="absolute top-4 left-[-2rem]  bg-white p-2 rounded-md shadow-md flex items-center">
          <Image
            src={'/roket.png'}
            alt="Rocket icon"
            width={24}
            height={24}
          />
          <div className="ml-2">
            <p className="text-sm font-semibold">Delivery</p>
            <p className="text-xs text-gray-500">in 30 min</p>
          </div>
        </div>
        {/* User Info Tag */}
        <div className="absolute bottom-4 left-[-2rem]  bg-white p-2 rounded-md shadow-md flex items-center">
          <Image
            src={'/user.png'}
            alt="User icon"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="ml-2">
            <p className="text-sm font-semibold">Ali Ahmad</p>
            <div className="flex items-center text-xs text-gray-500">
              <span className="text-yellow-400 mr-1">★ 4.5</span>
              <span>• 1k Likes</span>
            </div>
          </div>
        </div>
        {/* Location Tag */}
        <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-md flex items-center">
          <Image
            src={'/map.png'}
            alt="Location icon"
            width={24}
            height={24}
          />
          <div className="ml-2">
            <p className="text-sm font-semibold">Location</p>
            <p className="text-xs text-gray-500">at destination</p>
          </div>
        </div>
      </div>
    </div>
        </div> 
    );
}

export default HomePage;
