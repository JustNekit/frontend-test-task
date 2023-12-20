// ThemeSwitcher.js
import React, { useState } from 'react';
import axios from 'axios';
import './ThemeSwitcher.css';
import useTheme from './../../hooks/useTheme';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState({});

  const { fetchTheme } = useTheme();

  const handleThemeChange = (themeName) => {
    fetchTheme(themeName);
  };

  return (
    <div>
      <button onClick={() => handleThemeChange('dark')}>Dark Theme</button>
      <button onClick={() => handleThemeChange('light')}>Light Theme</button>
      <button onClick={() => handleThemeChange('blue')}>Blue Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
