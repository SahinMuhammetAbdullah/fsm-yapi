import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactSidebar from '../components/ContactSidebar'; // YENİ BİLEŞENİ İMPORT ET
import { serviceRegionsData } from '../data/serviceRegionsData';
import { siteData } from '../data/siteData';

const ServiceRegionPage = () => {
    const { slug } = useParams();
    const regionData = serviceRegionsData[slug];

    if (!regionData) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <SEO
                title={`${regionData.title} - ${siteData.companyName}`}
                description={regionData.description}
            />
            {/* YENİ: Sayfa başlığı için ayrı bir bölüm */}
            <div className="starry-header page-header">
                <div className="content-wrapper">
                    <h1>{regionData.title}</h1>
                </div>
            </div>

            {/* YENİ: Ana içerik ve kenar çubuğu için iki sütunlu yapı */}
            <div className="section">
                <div className="container">
                    <div className="page-layout">
                        {/* Ana İçerik Alanı */}
                        <main className="page-content">
                            <h2>Bölgeye Özel Çözümlerimiz</h2>
                            <p>{regionData.description}</p>
                            {/* Gelecekte buraya bölgeye özel daha fazla detay eklenebilir */}
                            <ul>
                                <li>Hızlı Keşif ve Projelendirme</li>
                                <li>Yüksek Verimli Cihaz Seçenekleri</li>
                                <li>Profesyonel Montaj ve Tesisat</li>
                                <li>Periyodik Bakım ve Acil Servis</li>
                            </ul>
                            <p>
                                FSM Yapı güvencesiyle, {regionData.title.split(' ')[0]} bölgesindeki ısıtma ve soğutma ihtiyaçlarınız için
                                en doğru adrestesiniz. Hemen teklif almak için bizimle iletişime geçin.
                            </p>
                            <Link to="/#iletisim" className="btn-view-all" style={{ marginTop: '1.5rem' }}>
                                Genel İletişim Formu <i className="fas fa-arrow-right"></i>
                            </Link>
                        </main>

                        {/* Kenar Çubuğu */}
                        <ContactSidebar regionName={regionData.title.split(' ')[0]} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceRegionPage;