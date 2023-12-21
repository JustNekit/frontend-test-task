import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation, NavLink  } from 'react-router-dom';
import NewsFeed from './components/NewsFeed/NewsFeed.js';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher.js';
import './App.css';
import './components/NewsFeed/NewsFeed.css';
import './components/ThemeSwitcher/ThemeSwitcher.css';
import useTheme from './hooks/useTheme';

const App = () => {
  const { fetchTheme } = useTheme();
  const location = useLocation().pathname;


  useEffect(() => {
    const savedTheme = localStorage.getItem('appTheme');
    if (savedTheme) {
      fetchTheme(savedTheme, true);
    }
  }, []);

  return (
    <div>
      <header>
        <h1>{location === "/" ? "News" : "Theme switcher"}</h1>
        
      </header>
      <Routes>
        <Route path="/" element={<NewsFeed />}/>
        <Route class="page-content" path="/theme-switcher" element={<ThemeSwitcher />}/>
      </Routes>
      <ul class="nav-bar">
        <li class="nav-bar-item">
          <NavLink class="nav-bar-item__button" to="/" >
            <span className={location === '/' ? 'nav-bar-item__icon_selected nav-bar-item__icon material-symbols-outlined' : 'nav-bar-item__icon material-symbols-outlined'}>news</span>
          </NavLink>
        </li>
        <li class="nav-bar-item">
        <NavLink to="/theme-switcher" class="nav-bar-item__button" >
          <span className={location === '/theme-switcher' ? 'nav-bar-item__icon_selected nav-bar-item__icon material-symbols-outlined' : 'nav-bar-item__icon material-symbols-outlined'}>palette</span>
        </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default App;