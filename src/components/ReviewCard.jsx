import React from 'react';

const StarRating = ({ stars }) => {
  return (
    <div className="review-stars">
      {Array.from({ length: 5 }, (_, index) => (
        <i
          key={index}
          className={`fas fa-star ${index < stars ? 'filled' : ''}`}
        ></i>
      ))}
    </div>
  );
};

const ReviewCard = ({ name, text, stars, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="review-card">
      <div className="review-header">
        <h4>{name}</h4>
        <StarRating stars={stars} />
      </div>
      <p className="review-text">"{text}"</p>
    </a>
  );
};


export default ReviewCard;