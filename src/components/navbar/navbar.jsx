import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo2030FIFa from 'assets/images/2030FIFa.png';
import { Search, Share2, Menu, Globe } from 'lucide-react';



function Navbar() {
  const linkClass = ({ isActive }) => (
    `no-underline ${isActive ? 'text-sky-500' : 'text-gray-800'}`
  );

  return (
    <nav className="flex p-4 px-32 bg-white justify-between items-center shadow-lg">
      <div className="flex justify-center gap-8 items-center ">
        <div className="flex flex-row justify-center items-center gap-3">
          <div className="flex justify-center">
            <img src={logo2030FIFa} alt="2030 FIFA" className="h-12 w-12" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-gray-800 !text-default font-bold text-2xl leading-none">FIFA 2030</span>
            <span className="text-gray-600 font-light !text-[#6b7280] !text-sm leading-tight -mt-1">world cup</span>
          </div>
        </div>
        <NavLink className={`${linkClass} text-gray-500 font-bold`} to="/">Home</NavLink>
        <NavLink className={`${linkClass} text-gray-500 font-bold`} to="/event">Teams</NavLink>
        <NavLink className={`${linkClass} text-gray-500 font-bold`} to="/teams">Schedule</NavLink>
        <NavLink className={`${linkClass} text-gray-500 font-bold`} to="/venues">Venues</NavLink>
        <NavLink className={`${linkClass} text-gray-500 font-bold`} to="/news">News</NavLink>
        <NavLink className={`${linkClass} text-gray-500 font-bold`} to="/tickets">Tickets</NavLink>
      </div>

      <div className="flex justify-center items-center gap-4 ">
        <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 rounded-full bg-gray-100 px-4 py-2">
          <Globe className="h-5 w-5" />
          <span className="font-medium">EN</span>
        </button>

        <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Get Tickets
        </button>
      </div>
    </nav>

  );
}

export default Navbar;


