import Image from 'next/image';
import React from 'react';

const Menu = () => {
    const dishes = [
        { name: 'Breakfast Food', price: 230, image: '/food.png', rating: 5 },
        { name: 'Health Breakfast', price: 230, image: '/food.png', rating: 5 },
        { name: 'Breakfast Food', price: 230, image: '/food.png', rating: 5 },
        { name: 'Breakfast Food', price: 230, image: '/food.png', rating: 5 },
        { name: 'Breakfast Food', price: 230, image: '/food.png', rating: 5 },
        { name: 'Breakfast Food', price: 230, image: '/food.png', rating: 5 },
    ]; 

    return (
        <div className="bg-gradient-to-r from-white via-red-100 to-yellow-50 px-10 py-5 rounded-lg">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold mb-2">Our Best Seller Dishes 🔥🔥</h2>
                <p className="text-gray-600">Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomato all tossed in your choice of dressing.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dishes.map((dish, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <Image 
                            src={dish.image} 
                            alt={`Image of ${dish.name}`} 
                            width={300} 
                            height={300} 
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-medium mb-1">{dish.name}</h3>
                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-400">
                                    {Array.from({ length: dish.rating }, (_, i) => (
                                        <span key={i}>&#9733;</span> // Star symbol
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-xl font-bold">${dish.price}</p>
                                <button className="bg-red-500 text-white px-3 py-1 rounded-md">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
