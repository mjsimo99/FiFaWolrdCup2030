import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Ticket, Bell } from 'lucide-react';
import logo2030FIFa from 'assets/images/2030FIFa.png';
import ButTicketNow from 'components/ButTicketNow/ButTicketNow';

function Footer() {
  return (
    <footer>
      {/* Call to Action Section */}
      <section className="bg-gray-300 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Be Part of History
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Don't miss your chance to witness the greatest World Cup ever. Secure your tickets now and experience football like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButTicketNow label="Get Your Tickets" />
            
            <button className="flex items-center justify-center gap-3 bg-transparent border-2 border-gray-600 text-gray-800 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto">
              <Bell className="h-5 w-5" />
              Notify Me
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#0f1729] text-gray-300 py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative h-12 w-12">
                  <div className="absolute bottom-0 rounded-full left-[12px] right-0 h-6 bg-white top-[11px] w-6"></div>
                  <img src={logo2030FIFa} alt="2030 FIFA" className="h-12 w-12 relative z-10" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">FIFA 2030</h3>
                  <p className="text-gray-400 text-sm text-left">World Cup</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed text-left">
                The greatest football tournament returns in 2030 with three host nations united by one beautiful game.
              </p>
              
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="text-left">
              <h4 className="text-white font-bold text-lg mb-4">Tournament</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Teams</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Schedule</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Venues</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Players</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Statistics</a></li>
              </ul>
            </div>

            <div className="text-left">
              <h4 className="text-white font-bold text-lg mb-4">Host Countries</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Morocco</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Portugal</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Spain</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Travel Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accommodation</a></li>
              </ul>
            </div>

            <div className="text-left">
              <h4 className="text-white font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tickets</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 FIFA World Cup 2030. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
