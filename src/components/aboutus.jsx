import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    const cards = [
        { imgSrc: '/01.png', title: 'Quality Food', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text' },
        { imgSrc: '/02.png', title: 'Quality Food', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text' },
        { imgSrc: '/3.png', title: 'Quality Food', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text' },
        { imgSrc: '/4.png', title: 'Quality Food', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text' },
    ];

    return (
        
        <div className=" py-10 px-4 md:px-8 lg:px-16" >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cards.map((card, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                        <Image src={card.imgSrc} alt={`${card.title} icon`} width={100} height={100} />
                        <h3 className="text-lg font-semibold mt-4">{card.title}</h3>
                        <p className="text-gray-500 mt-2">{card.description}</p>
                        <a href="#" className="text-red-500 mt-4 font-semibold">Learn More</a>
                    </div>
                ))}
            </div> 
        </div>
    );
}

export default AboutUs;
