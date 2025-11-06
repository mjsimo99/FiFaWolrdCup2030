import axios from 'axios';

const API_BASE_URL = 'https://restcountries.com/v3.1';


export const getCountryInfo = async (countryName) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/name/${countryName}`);
    return response.data[0];
  } catch (error) {
    console.error('Error fetching country info:', error);
    throw error;
  }
};
