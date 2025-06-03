import React from 'react';

const PhotoCard = ({ photo, isFavorite, toggleFavorite }) => {
  return (
    <div className="photo-card">
      <img src={photo.urls.small} alt={photo.alt_description || 'Unsplash'} />
      <button className="favorite-btn" onClick={() => toggleFavorite(photo)}>
        {isFavorite ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

export default PhotoCard;
