import React from 'react';

const WhatsAppButton = ({ phone, message }) => {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
  return (
    <a href={url} className="whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile İletişime Geçin">
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;