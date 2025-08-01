import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';

import ContactSidebar from '../components/ContactSidebar';
import CallToAction from '../components/CallToAction';

import { siteData } from '../data/siteData';
import { serviceRegionsData } from '../data/serviceRegionsData';

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
            <div className="starry-header page-header">
                <div className="content-wrapper">
                    <h1>{regionData.title}</h1>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="page-layout">
                        <main className="page-content">
                            <h2>Bölgeye Özel Çözümlerimiz</h2>
                            <p>{regionData.description}</p>
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
                        </main>

                        <ContactSidebar regionName={regionData.title.split(' ')[0]} />
                    </div>
                </div>
            </div>
            <CallToAction />
        </>
    );
};

export default ServiceRegionPage;