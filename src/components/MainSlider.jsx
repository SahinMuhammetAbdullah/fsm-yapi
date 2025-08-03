import React from 'react';
import Slider from 'react-slick';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize'; // Hook'u import et

// CSS dosyaları
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Ok bileşenleri (SVG'li halleriyle)
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
      </svg>
    </div>
  );
};


const MainSlider = ({ slides }) => {
  // --- EKSİK OLAN SATIRLAR BURADAYDI ---
  const { width } = useWindowSize(); // Ekran genişliğini al
  const isMobile = width <= 1024; // Mobil kırılma noktasını belirle (CSS ile aynı olmalı)
  // --- DÜZELTME SONU ---

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="main-slider-container">
      <Slider {...settings}>
        {slides.map((slide) => {
          // Bu mantık artık hatasız çalışacaktır
          const imageUrl = isMobile && slide.backgroundImageUrlMobile 
            ? slide.backgroundImageUrlMobile 
            : slide.backgroundImageUrl;

          return (
            <div key={slide.id} className="slide-item">
              <div 
                className="slide-background" 
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
              
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                {slide.link && (
                  <HashLink to={slide.link} smooth className="slide-button">
                    {slide.linkText} <i className="fas fa-arrow-right"></i>
                  </HashLink>
                )}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MainSlider;