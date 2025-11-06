import React from 'react';
import NationCard from './NationCard';
import moroccoImg from 'assets/images/maroc.png';
import portugalImg from 'assets/images/portogal.png';
import spainImg from 'assets/images/spaine.png';

function ThreeNations() {
  const nations = [
    {
      name: 'Morocco',
      color: 'bg-red-500',
      description: 'Experience the magic of North African hospitality and rich cultural heritage.',
      image: moroccoImg,
      link: '#'
    },
    {
      name: 'Portugal',
      color: 'bg-green-500',
      description: 'Discover the birthplace of legendary football and stunning coastal beauty.',
      image: portugalImg,
      link: '#'
    },
    {
      name: 'Spain',
      color: 'bg-yellow-500',
      description: 'Feel the passion of La Roja in iconic stadiums across the Iberian Peninsula.',
      image: spainImg,
      link: '#'
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Three Nations, One Vision
          </h2>
          <p className="text-gray-600 text-lg">
            For the first time in FIFA World Cup history, three countries will unite to host
            <br />
            the centenary tournament
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nations.map((nation, index) => (
            <NationCard key={index} {...nation} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ThreeNations;
