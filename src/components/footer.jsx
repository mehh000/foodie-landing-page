import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-black py-6">
      <div className="container mx-auto px-10">
      <div className="flex items-center flex-wrap justify-between">
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4">Product & Service</h3>
            <ul>
              <li><a href="#" className="hover:text-red-500">Products</a></li>
              <li><a href="#" className="hover:text-red-500">Services</a></li>
              <li><a href="#" className="hover:text-red-500">Appliances</a></li>
              <li><a href="#" className="hover:text-red-500">Storage</a></li>
              <li><a href="#" className="hover:text-red-500">Lifestyle</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4">Shop Now</h3>
            <ul>
              <li><a href="#" className="hover:text-red-500">Offers</a></li>
              <li><a href="#" className="hover:text-red-500">Phones</a></li>
              <li><a href="#" className="hover:text-red-500">Online Shop FAQ</a></li>
              <li><a href="#" className="hover:text-red-500">Business Offer</a></li>
              <li><a href="#" className="hover:text-red-500">Student Offer</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul>
              <li><a href="#" className="hover:text-red-500">Contact</a></li>
              <li><a href="#" className="hover:text-red-500">Email Support</a></li>
              <li><a href="#" className="hover:text-red-500">Live Chat</a></li>
              <li><a href="#" className="hover:text-red-500">Phone Support</a></li>
              <li><a href="#" className="hover:text-red-500">Community</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4">Account</h3>
            <ul>
              <li><a href="#" className="hover:text-red-500">My Products</a></li>
              <li><a href="#" className="hover:text-red-500">Wishlist</a></li>
              <li><a href="#" className="hover:text-red-500">Service</a></li>
              <li><a href="#" className="hover:text-red-500">Rewards</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul>
              <li><a href="#" className="hover:text-red-500">Company Info</a></li>
              <li><a href="#" className="hover:text-red-500">Brand Guidelines</a></li>
              <li><a href="#" className="hover:text-red-500">Careers</a></li>
              <li><a href="#" className="hover:text-red-500">Investors</a></li>
              <li><a href="#" className="hover:text-red-500">About Us</a></li>
            </ul>
          </div>
        </div> 
        <div className="mt-8 text-center">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}