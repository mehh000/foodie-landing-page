import Image from 'next/image';
import React from 'react';

const WhyUs = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:space-x-10 px-10  rounded-lg py-5">
            {/* Image Section */}
            <div className="flex-shrink-0 mb-6 lg:mb-0">
                <Image 
                    src="/foodplate.png" 
                    alt="Image of the food plate" 
                    height={400} 
                    width={400} 
                    className="rounded-lg"
                />
            </div>
            {/* Text Section */}
            <div className="lg:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Why People Choose us?</h2>
                <div className="space-y-6">
                    {/* Convenient and Reliable */}
                    <div className="flex items-start space-x-4 bg-white p-2 rounded-md shadow-md ">
                        <div className="flex-shrink-0 p-3 rounded-full shadow-md">
                            <Image 
                                src="/biker.png" 
                                alt="Icon of biker" 
                                height={50} 
                                width={50} 
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">Convenient and Reliable</h3>
                            <p className="text-sm text-gray-600">
                                Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.
                            </p>
                        </div>
                    </div>
                    {/* Variety of Options */}
                    <div className="flex items-start space-x-4 bg-white p-2 rounded-md shadow-md">
                        <div className="flex-shrink-0  p-3 rounded-full shadow-md ">
                            <Image 
                                src="/book.png" 
                                alt="Icon of book" 
                                height={50} 
                                width={50}  
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">Variety of Options</h3>
                            <p className="text-sm text-gray-600">
                                From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.
                            </p>
                        </div>
                    </div>
                    {/* Eat Burger */}
                    <div className="flex items-start space-x-4 bg-white p-2 rounded-md shadow-md">
                        <div className="flex-shrink-0 p-3 rounded-full shadow-md ">
                            <Image 
                                src="/burger.png" 
                                alt="Icon of burger" 
                                height={50} 
                                width={50} 
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">Eat Burger</h3>
                            <p className="text-sm text-gray-600">
                                Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
