import React, { useState, useEffect, useRef  } from 'react';
import './ThemeSwitcher.css';
import useTheme from './../../hooks/useTheme';

const ThemeSwitcher = () => {
  const [themes, setThemes] = useState();

  const { fetchTheme, themeButton } = useTheme();

  useEffect(() => {
    themeButton().then((result) => {
      setThemes(result);
    });
    console.log(themes);
  }, []);

  const handleThemeChange = (themeName, applyImmediately) => {
    fetchTheme(themeName, applyImmediately);
  };

  return (
    <div class="theme-bar-wrapper">
      {themes ? <ul class="theme-bar">
        <li class="theme-bar__item"><button class="theme-bar-button theme-bar__item-1" style={themes.firstTheme} onClick={() => handleThemeChange('dark', true)}>Тема 1</button></li>
        <li class="theme-bar__item"><button class="theme-bar-button theme-bar__item-2" style={themes.secondTheme} onClick={() => handleThemeChange('light', true)}>Тема 2</button></li>
        <li class="theme-bar__item"><button class="theme-bar-button theme-bar__item-3" style={themes.thirdTheme} onClick={() => handleThemeChange('blue', true)}>Тема 3</button></li>
      </ul>
      : 
      <p>Loading...</p>}
    </div>
  );
};

export default ThemeSwitcher;