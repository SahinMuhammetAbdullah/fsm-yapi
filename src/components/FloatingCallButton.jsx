import React from 'react';

const FloatingCallButton = ({ phone }) => {
  if (!phone) return null; // Telefon numarası yoksa hiçbir şey gösterme

  return (
    <a href={`tel:${phone.replace(/\s/g, '')}`} className="floating-call-btn" id='floating-call-btn' aria-label="Hemen Ara">
      <i className="fas fa-phone-alt"></i>
    </a>
  );
};

export default FloatingCallButton;