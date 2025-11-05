import React from 'react';
import { Ticket, Play, Trophy } from 'lucide-react';
import heroImage from 'assets/images/hero.png';

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#c7c8c9] via-gray-300 to-gray-400 min-h-[75vh] flex items-center px-32 py-20 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]">
      <div className="w-full flex items-center justify-between gap-16">
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center gap-2 mb-4 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full w-fit">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            <span className="text-white text-base font-normal">Coming 2030</span>
          </div>

          <h1 className="text-6xl font-bold mb-6 leading-none text-left">
            <span className="text-white">FIFA World Cup</span>
            <br />
            <span className="text-yellow-400">2030</span>
          </h1>

          <p className="text-white text-base mb-6 leading-relaxed max-w-xl opacity-80 text-left">
            Experience the greatest football tournament on Earth. Three nations, one dream. Morocco, Portugal & Spain unite to host the centenary celebration.
          </p>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-3 bg-yellow-400 text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors shadow-lg">
              <Ticket className="h-5 w-5 fill-black" />
              Buy Tickets Now
            </button>

            <button className="flex items-center gap-3 bg-white bg-opacity-20 text-white font-semibold px-8 py-4 rounded-full hover:bg-opacity-30 transition-colors backdrop-blur-sm">
              <Play className="h-5 w-5 fill-white" />
              Watch Trailer
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <img 
            src={heroImage} 
            alt="FIFA World Cup Trophy" 
            className="w-auto h-auto max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
