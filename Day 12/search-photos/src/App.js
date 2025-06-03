import './App.css';
import React, { useEffect, useState } from 'react';
import PhotoGrid from './components/PhotoGrid';

function App() {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState(() =>
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim()) fetchPhotos(query);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  const fetchPhotos = async (searchTerm) => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${
          process.env.REACT_APP_UNSPLASH_ACCESS_KEY
        }`
      );
      const data = await res.json();
      setPhotos(data.results || []);
    } catch {
      setPhotos([]);
    }
  };

  const toggleFavorite = (photo) => {
    const isFav = favorites.find((fav) => fav.id === photo.id);
    const updated = isFav
      ? favorites.filter((fav) => fav.id !== photo.id)
      : [...favorites, photo];
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h1>Unsplash Photo Search</h1>
      <input
        type="text"
        placeholder="Search photos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <h2>Search Results</h2>
      <PhotoGrid photos={photos} favorites={favorites} toggleFavorite={toggleFavorite} />

      <h2>Your Favorites</h2>
      <PhotoGrid photos={favorites} favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default App;

