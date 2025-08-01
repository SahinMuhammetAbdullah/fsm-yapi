import React from 'react';

const ServiceFeature = ({ title, description, imageUrl, isReversed = false }) => {
  // Animasyon için sarmalayıcıya uygulanacak sınıf
  const animationClass = isReversed ? 'fade-in-right' : 'fade-in-left';

  return (
    <div className={`service-feature ${isReversed ? 'reversed' : ''} animate-on-scroll ${animationClass}`}>
      <div className="service-feature-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="service-feature-image">
        <img src={imageUrl} alt={title} loading="lazy" />
      </div>
    </div>
  );
};

export default ServiceFeature;