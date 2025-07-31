import React from 'react';
import SEO from '../components/SEO';
import GalleryGrid from '../components/GalleryGrid';
import { siteData } from '../data/siteData';
import { galleryData } from '../data/galleryData';
import CallToAction from '../components/CallToAction';

const GalleryPage = () => {
  return (
    <>
      <SEO
        title={`Galeri - ${siteData.companyName}`}
        description="Tamamladığımız doğalgaz altyapı ve montaj projelerimizden bazıları."
      />
      <div className="container section">
        <h1 className="section-title">Projelerimiz</h1>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '-2rem auto 3rem auto' }}>
          Yaptığımız işin kalitesini ve profesyonelliğini göstermekten gurur duyarız. İşte tamamladığımız bazı projeler.
        </p>
        <GalleryGrid images={galleryData.allImages} />
      </div>
      <CallToAction />

    </>
  );
};

export default GalleryPage;