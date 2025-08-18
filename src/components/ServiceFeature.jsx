import React from 'react';
import { Link } from 'react-router-dom'; // Link bileşenini import et

const ServiceFeature = ({ title, description, imageUrl, detailsUrl, isReversed = false }) => {
  const animationClass = isReversed ? 'fade-in-right' : 'fade-in-left';

  return (
    <div className={`service-feature ${isReversed ? 'reversed' : ''} animate-on-scroll ${animationClass}`}>
      <div className="service-feature-text">
        <h3>{title}</h3>
        <p>{description}</p>

        {/* YENİ: Sadece detailsUrl varsa butonu göster */}
        {detailsUrl && (
          <Link to={detailsUrl} className="btn-feature-details">
            Detayları Gör <i className="fas fa-arrow-right"></i>
          </Link>
        )}
      </div>

      {imageUrl && (
        <div className="service-feature-image">
          <img src={imageUrl} alt={title} loading="lazy" />
        </div>
      )}
    </div>
  );
};

export default ServiceFeature;