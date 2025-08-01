import React from 'react';
import SEO from '../components/SEO';
import CallToAction from '../components/CallToAction';
import { siteData } from '../data/siteData';
import { allReviewsData } from '../data/reviewsData';
import ReviewCard from '../components/ReviewCard';

const ReviewsPage = () => {
  return (
    <>
      <SEO
        title={`Müşteri Yorumları - ${siteData.companyName}`}
        description="Müşterilerimizin hizmetlerimiz hakkındaki değerli görüşleri."
      />
      
      {/* YENİ: Daha spesifik sınıf adları kullanıldı */}
      <div className="reviews-page-section">
        <div className="container">

          <div className="reviews-intro">
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
              <i className="fab fa-google"></i> Google Yorumlarını Görüntüle
            </a>
          </div>

          <div className="reviews-page-grid">
            {allReviewsData.map((review, index) => (
              <ReviewCard key={index} {...review} url={siteData.googleReviewsUrl} />
            ))}
          </div>
          
        </div>
      </div>
      
      <CallToAction />
    </>
  );
};

export default ReviewsPage;
