import React from 'react';
import SEO from '../components/SEO';
import CallToAction from '../components/CallToAction'; 
import { siteData } from '../data/siteData';

const ReviewsPage = () => {
  return (
    <>
      <SEO
        title={`Müşteri Yorumları - ${siteData.companyName}`}
        description="Müşterilerimizin hizmetlerimiz hakkındaki değerli görüşleri."
      />
      <div className="section">
        <div className="container" style={{textAlign: 'center'}}>
          <div className="section-title">
            <h2>Müşteri Değerlendirmeleri</h2>
            <p>Müşteri memnuniyetini önemsiyoruz. Tüm yorumlarımızı ve puanlamamızı görmek için Google İşletme profilimizi ziyaret edebilirsiniz.</p>
          </div>
          <a 
            href={siteData.googleReviewsUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-view-all"
          >
            Google Yorumlarını Görüntüle <i className="fab fa-google"></i>
          </a>
        </div>
      </div>
      <CallToAction />
    </>
  );
};

export default ReviewsPage;