import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
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
    <Router>
      <header>
        <h1>{showNewsFeed ? "Новости" : "Темы"}</h1>
      </header>
      <Routes>
        <Route path="/">
          <NewsFeed />
        </Route>
        <Route path="/theme-switcher">
          <ThemeSwitcher />
        </Route>
      </Routes>
      {showNewsFeed ? <NewsFeed /> : <ThemeSwitcher />}
      <ul class="nav-bar">
        <li class="nav-bar-item">
          <Link class="nav-bar-item__button" to="/">
            <span class="nav-bar-item__icon material-symbols-outlined">news</span>
          </Link>
        </li>
        <li class="nav-bar-item">
        <Link to="/theme-switcher" class="nav-bar-item__button" >
          <span class="nav-bar-item__icon material-symbols-outlined">palette</span>
        </Link>
        </li>
      </ul>
    </Router>
  );
};

export default App;