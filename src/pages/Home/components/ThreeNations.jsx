import React, { useState } from 'react';
import NationCard from './NationCard';
import Dialog from 'components/Dialog/Dialog';
import CountryInfoDialog from 'components/CountryInfoDialog/CountryInfoDialog';
import moroccoImg from 'assets/images/maroc.png';
import portugalImg from 'assets/images/portogal.png';
import spainImg from 'assets/images/spaine.png';
import { getCountryInfo } from '../services/countryService';

function ThreeNations() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleFetchCountryInfo = async (countryName) => {
    try {
      setIsLoading(true);
      setSelectedCountry(countryName);
      setIsDialogOpen(true);
      setCountryData(null);
      
      const data = await getCountryInfo(countryName);
      setCountryData(data);
      console.log('Country Data:', data);
    } catch (error) {
      console.error('Error fetching country data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setCountryData(null);
    setSelectedCountry(null);
  };

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
            <NationCard 
              key={index} 
              {...nation}
              onExploreClick={() => handleFetchCountryInfo(nation.name)}
            />
          ))}
        </div>
      </div>

      <Dialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        title={selectedCountry ? `${selectedCountry} Information` : 'Country Information'}
      >
        <CountryInfoDialog countryData={countryData} />
      </Dialog>
    </section>
  );
}

export default ThreeNations;
