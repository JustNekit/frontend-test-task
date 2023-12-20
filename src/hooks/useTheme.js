// useTheme.js
import { useState } from 'react';
import axios from 'axios';

const useTheme = () => {
  const [theme, setTheme] = useState({});

  const fetchTheme = async (themeName) => {
    try {
      const response = await axios.get(`https://frontappapi.dock7.66bit.ru/api/theme/get?name=${themeName}`);
      console.log('Fetched theme:', response.data);

      if (response.data && response.data.mainColor) {
        setTheme(response.data);
        document.documentElement.style.setProperty('--main-color', response.data.mainColor);
        document.documentElement.style.setProperty('--second-color', response.data.secondColor);
        document.documentElement.style.setProperty('--text-color', response.data.textColor);
        localStorage.setItem('appTheme', themeName);
      } else {
        console.error('Invalid theme data:', response.data);
      }
    } catch (error) {
      console.error('Error fetching theme:', error);
    }
  };

  return { theme, fetchTheme };
};

export default useTheme;
