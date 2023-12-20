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
      <ul class="nav-bar-content">
        <li class="nav-bar">
          <button onClick={() => setShowNewsFeed(true)}>Show News Feed</button>
        </li>
        <li class="nav-bar">
        <button onClick={() => setShowNewsFeed(false)}>Toggle Theme Switcher</button>
        </li>
      </ul>
    </div>
  );
};

export default App;