import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const GalleryGrid = ({ images }) => {
  const [index, setIndex] = useState(-1);

  const slides = images.map(img => ({ src: img.full, alt: img.alt }));

  return (
    <>
      <div 
        style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
            gap: '1rem' 
        }}
      >
        {images.map((image, i) => (
          <img
            key={i}
            src={image.thumb}
            alt={image.alt}
            onClick={() => setIndex(i)}
            style={{ 
                width: '100%', 
                height: '370px', 
                objectFit: 'cover', 
                borderRadius: '8px', 
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </>
  );
};

export default GalleryGrid;