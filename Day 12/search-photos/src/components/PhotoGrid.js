import React from 'react';
import PhotoCard from './PhotoCard';

const PhotoGrid = ({ photos, favorites, toggleFavorite }) => {
  if (!photos.length) return <p>No photos found.</p>;

  return (
    <div className="grid">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavorite={favorites.some((fav) => fav.id === photo.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
