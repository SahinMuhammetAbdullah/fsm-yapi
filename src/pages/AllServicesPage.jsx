import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import CallToAction from '../components/CallToAction';
import ServiceFeature from '../components/ServiceFeature';
import { siteData } from '../data/siteData';
import { comprehensiveServicesData } from '../data/comprehensiveServicesData';

const AllServicesPage = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
        elementsToAnimate.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <SEO
                title={`Tüm Hizmetlerimiz - ${siteData.companyName}`}
                description="Kombi, klima, ısı pompası, VRF, yerden ısıtma ve daha birçok alanda sunduğumuz tüm mühendislik çözümlerini keşfedin."
            />

            <div className="starry-header page-header">
                <div className="content-wrapper">
                    <h1>Tüm Hizmetlerimiz</h1>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="service-feature-list">
                        {comprehensiveServicesData.map((service, index) => (
                            <ServiceFeature 
                                key={service.title}
                                {...service} 
                                isReversed={index % 2 !== 0}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <CallToAction />
        </>
    );
};

export default AllServicesPage;
