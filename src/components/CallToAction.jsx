import React from 'react';
import { HashLink } from 'react-router-hash-link';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Sizin İçin Ne Yapabiliriz?</h2>
            <p>İhtiyaçlarınıza özel çözümler ve ücretsiz keşif için bizimle iletişime geçin.</p>
          </div>
          <HashLink to="/#iletisim" smooth className="btn-cta">
            İletişime Geçin <i className="fas fa-arrow-right"></i>
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;