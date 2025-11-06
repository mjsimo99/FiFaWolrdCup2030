import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-white rounded-full shadow-lg animate-float opacity-20"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-white rounded-full shadow-lg animate-float-delay opacity-20"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white rounded-full shadow-lg animate-float-slow opacity-20"></div>
        <div className="absolute bottom-20 right-1/3 w-10 h-10 bg-white rounded-full shadow-lg animate-float opacity-20"></div>

        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <div className="absolute bottom-0 left-1/4 w-px h-full bg-green-600"></div>
          <div className="absolute bottom-0 left-1/2 w-px h-full bg-green-600"></div>
          <div className="absolute bottom-0 left-3/4 w-px h-full bg-green-600"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="relative inline-block mb-8">
          <div className="relative">
            <div className="w-48 h-48 mx-auto relative animate-bounce-slow">
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                <ellipse cx="100" cy="180" rx="60" ry="8" fill="black" opacity="0.2" />

                <circle cx="100" cy="100" r="90" fill="white" stroke="#333" strokeWidth="2" />

                <polygon points="100,40 120,60 110,85 90,85 80,60" fill="#333" />
                <polygon points="120,60 145,65 145,90 125,100 110,85" fill="#666" />
                <polygon points="80,60 55,65 55,90 75,100 90,85" fill="#666" />
                <polygon points="125,100 145,115 135,140 110,140 100,120" fill="#666" />
                <polygon points="75,100 55,115 65,140 90,140 100,120" fill="#666" />
                <polygon points="110,140 100,160 85,145 100,120 115,145" fill="#333" />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-black text-red-600 drop-shadow-lg transform -rotate-12">
                  404
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
            <span className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 bg-clip-text text-transparent">
              OFFSIDE!
            </span>
          </h1>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              🚩 This Page is Out of Bounds
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Looks like you've kicked the ball outside the stadium!
              The referee has blown the whistle - this page doesn't exist in our World Cup 2030 playbook.
            </p>
          </div>

          <div className="inline-block bg-gray-900 rounded-2xl px-8 py-6 shadow-2xl my-8">
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">Error</div>
                <div className="text-5xl font-black text-red-500">404</div>
              </div>
              <div className="text-4xl text-gray-600">-</div>
              <div className="text-center">
                <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">Page Found</div>
                <div className="text-5xl font-black text-green-500">0</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">

            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center gap-3 bg-white text-gray-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl border-2 border-gray-200 transform hover:scale-105 transition-all duration-300"
            >
              <svg
                className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Go Back
            </button>

            <Link
              to="/"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <svg
                className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Back to Home Stadium
            </Link>


          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 italic">
              💡 <span className="font-semibold">Fun Fact:</span> Just like this page,
              the first World Cup trophy was also "lost" for a few days in 1966!
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 hidden md:block">
        <div className="w-1 h-32 bg-red-500 relative">
          <div className="absolute top-0 left-0 w-12 h-8 bg-red-500 rounded-sm transform origin-left animate-wave"></div>
        </div>
      </div>
      <div className="absolute top-10 right-10 hidden md:block">
        <div className="w-1 h-32 bg-yellow-500 relative">
          <div className="absolute top-0 right-0 w-12 h-8 bg-yellow-500 rounded-sm transform origin-right animate-wave-reverse"></div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;


