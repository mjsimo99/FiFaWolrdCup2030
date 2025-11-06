import React from 'react';

function CountryInfoDialog({ countryData }) {
  if (!countryData) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading country information...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-6">
        <img 
          src={countryData.flags?.svg || countryData.flags?.png} 
          alt={`${countryData.name?.common} flag`}
          className="w-32 h-24 object-cover rounded-lg shadow-md"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {countryData.name?.common}
          </h3>
          <p className="text-gray-600">
            <span className="font-semibold">Official Name:</span> {countryData.name?.official}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoItem 
          label="Capital" 
          value={countryData.capital?.[0] || 'N/A'} 
        />
        <InfoItem 
          label="Region" 
          value={countryData.region} 
        />
        <InfoItem 
          label="Subregion" 
          value={countryData.subregion || 'N/A'} 
        />
        <InfoItem 
          label="Population" 
          value={countryData.population?.toLocaleString() || 'N/A'} 
        />
        <InfoItem 
          label="Area" 
          value={`${countryData.area?.toLocaleString()} km²` || 'N/A'} 
        />
        <InfoItem 
          label="Languages" 
          value={countryData.languages ? Object.values(countryData.languages).join(', ') : 'N/A'} 
        />
        <InfoItem 
          label="Currencies" 
          value={countryData.currencies ? Object.values(countryData.currencies).map(c => `${c.name} (${c.symbol})`).join(', ') : 'N/A'} 
        />
        <InfoItem 
          label="Time Zones" 
          value={countryData.timezones?.[0] || 'N/A'} 
        />
      </div>

      {countryData.coatOfArms?.svg && (
        <div className="border-t pt-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Coat of Arms</h4>
          <img 
            src={countryData.coatOfArms.svg} 
            alt={`${countryData.name?.common} coat of arms`}
            className="w-24 h-24 object-contain"
          />
        </div>
      )}

      {countryData.maps?.googleMaps && (
        <div className="border-t pt-6">
          <a 
            href={countryData.maps.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View on Google Maps
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-gray-900 font-medium">{value}</p>
    </div>
  );
}

export default CountryInfoDialog;
