// NewsFeed.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsFeed.css';

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://frontappapi.dock7.66bit.ru/api/news/get?page=1&count=10');
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleRefresh = () => {
    fetchNews();
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      <ul>
        {news.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button class="refresh-button" onClick={handleRefresh}>Обновить новости</button>
    </div>
  );
};

export default NewsFeed;
