import { useState } from 'react';
import axios from 'axios';

const useTheme = () => {
  const [theme, setTheme] = useState({});

  const themeButton = async () => {
    return {
      "firstTheme": await fetchTheme("dark", false),
      "secondTheme": await fetchTheme("light", false),
      "thirdTheme": await fetchTheme("blue", false)
    }
  }

  const fetchTheme = async (themeName, applyImmediately) => {
    try {
      const response = await axios.get(`https://frontappapi.dock7.66bit.ru/api/theme/get?name=${themeName}`);
      console.log('Fetched theme:', response.data);

      if (response.data && response.data.mainColor) {
        setTheme(response.data);

        if(applyImmediately) {
          document.documentElement.style.setProperty('--main-color', response.data.mainColor);
          document.documentElement.style.setProperty('--second-color', response.data.secondColor);
          document.documentElement.style.setProperty('--text-color', response.data.textColor);
        }

        localStorage.setItem('appTheme', themeName);
        return {"backgroundColor": response.data.secondColor, "color": response.data.textColor};
      } else {
        console.error('Invalid theme data:', response.data);
      }
    } catch (error) {
      console.error('Error fetching theme:', error);
    }
  };

  return { theme, fetchTheme, themeButton };
};

export default useTheme;
