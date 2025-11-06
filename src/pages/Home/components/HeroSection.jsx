import React from 'react';
import { Play } from 'lucide-react';
import heroImage from 'assets/images/hero.png';
import ButTicketNow from 'components/ButTicketNow/ButTicketNow';

function HeroSection({name, time}) {
  return (
    <section className="relative bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 min-h-[75vh] flex items-center px-8 md:px-16 lg:px-32 py-12 md:py-16 lg:py-20 shadow-[inset_0_0_80px_rgba(0,0,0,0.1)]">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        <div className="flex-1 w-full max-w-2xl">
          <div className="flex items-center gap-2 mb-4 bg-gray-200/80 backdrop-blur-sm px-6 py-3 rounded-full w-fit">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            <span className="text-gray-800 text-base font-normal">Coming 2030</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-none text-left">
            <span className="text-gray-800">{name}</span>
            <br />
            <span className="text-yellow-400">{time}</span>
          </h1>

          <p className="text-gray-700 text-base mb-8 leading-relaxed max-w-xl text-left">
            Experience the greatest football tournament on Earth. Three nations, one dream. Morocco, Portugal & Spain unite to host the centenary celebration.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <ButTicketNow label="Buy Tickets Now" />

            <button className="flex items-center justify-center gap-3 bg-gray-800 bg-opacity-80 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-opacity-90 transition-colors backdrop-blur-sm w-full sm:w-auto">
              <Play className="h-5 w-5 fill-white" />
              Watch Trailer
            </button>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end items-center">
          <img 
            src={heroImage} 
            alt="FIFA World Cup Trophy" 
            className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
