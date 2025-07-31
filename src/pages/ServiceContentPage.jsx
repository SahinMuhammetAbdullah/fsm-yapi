import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactSidebar from '../components/ContactSidebar'; // Kenar çubuğunu burada da kullanacağız
import { servicesContentData } from '../data/servicesContentData'; // YENİ VERİ DOSYASI
import { siteData } from '../data/siteData';

const ServiceContentPage = () => {
    // URL'den 'slug' parametresini al (proje-taahhut, isi-pompasi vb.)
    const { slug } = useParams();
    // Slug'a karşılık gelen hizmet verisini bul
    const serviceData = servicesContentData[slug];

    // Eğer veri bulunamazsa, kullanıcıyı ana sayfaya yönlendir
    if (!serviceData) {
        return <Navigate to="/" />;
    }

    // Kenar çubuğu için hizmet adını alalım
    const serviceName = serviceData.title.split(' ')[0];

    return (
        <>
            <SEO
                title={`${serviceData.title} - ${siteData.companyName}`}
                description={serviceData.description}
            />
            {/* Sayfa başlığı */}
            <div className="starry-header page-header">
                <div className="content-wrapper">
                    <h1>{serviceData.title}</h1>
                </div>
            </div>

            {/* Ana içerik ve kenar çubuğu */}
            <div className="section">
                <div className="container">
                    <div className="page-layout">
                        {/* Ana İçerik Alanı */}
                        <main className="page-content">
                            <h2>Hizmet Detayları</h2>
                            <p>{serviceData.description}</p>

                            <h3>Bu Hizmet Kapsamında Neler Var?</h3>
                            <ul className="service-details-list">
                                {serviceData.details.map((item, index) => (
                                    <li key={index}>
                                        <i className="fas fa-check-circle"></i> {item}
                                    </li>
                                ))}
                            </ul>

                            <p>
                                İhtiyacınız olan hizmet hakkında daha fazla bilgi ve size özel teklifler almak için
                                uzman ekibimizle iletişime geçmekten çekinmeyin.
                            </p>
                        </main>

                        {/* Kenar Çubuğu */}
                        <ContactSidebar regionName={serviceName} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceContentPage;