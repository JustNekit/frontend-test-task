import React, { useState, useEffect } from 'react';
import NewsFeed from './components/NewsFeed/NewsFeed.js';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher.js';
import './App.css';
import './components/NewsFeed/NewsFeed.css';
import './components/ThemeSwitcher/ThemeSwitcher.css';
import useTheme from './hooks/useTheme';

const App = () => {
  const [showNewsFeed, setShowNewsFeed] = useState(true);
  const { fetchTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem('appTheme');
    if (savedTheme) {
      fetchTheme(savedTheme);
    }
  }, []);

  return (
    <div>
      <header>
        <h1>{showNewsFeed ? "Новости" : "Темы"}</h1>
      </header>
      {showNewsFeed ? <NewsFeed /> : <ThemeSwitcher />}
      <ul class="nav-bar">
        <li class="nav-bar-item">
          <button class="nav-bar-item__button" onClick={() => setShowNewsFeed(true)}>
            <span class="nav-bar-item__icon material-symbols-outlined">news</span>
          </button>
        </li>
        <li class="nav-bar-item">
        <button class="nav-bar-item__button" onClick={() => setShowNewsFeed(false)}>
          <span class="nav-bar-item__icon material-symbols-outlined">palette</span>
        </button>
        </li>
      </ul>
    </div>
  );
};

export default App;