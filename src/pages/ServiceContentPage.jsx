// src/pages/ServiceContentPage.jsx

import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { servicesContentData } from '../data/servicesContentData';
import { siteData } from '../data/siteData';
import CallToAction from '../components/CallToAction';
import ContactSidebar from '../components/ContactSidebar';

// İçerik bölümlerini render edecek yardımcı fonksiyon
const renderSection = (section, index) => {
    switch (section.type) {
        case 'paragraph':
            return <p key={index}>{section.content}</p>;
        case 'subheading':
            return <h3 key={index} className="service-subheading">{section.content}</h3>;
        case 'list':
            return (
                <ul key={index} className="service-details-list">
                    {section.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
                </ul>
            );
        case 'numbered-list':
            return (
                <ol key={index} className="service-numbered-list">
                    {section.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
                </ol>
            );
        case 'list-with-headings':
            return (
                <ul key={index} className="service-details-list">
                    {section.items.map((item, i) => (
                        <li key={i}><strong>{item.heading}:</strong> {item.text}</li>
                    ))}
                </ul>
            );
        case 'summary':
            return (
                <div key={index} className="service-summary">
                    <h4>{section.title}</h4>
                    <ul>{section.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}</ul>
                </div>
            );
        case 'highlight':
            return (
                <div key={index} className="service-highlight">
                    <i className={`fas ${section.icon}`}></i>
                    <p>{section.content}</p>
                </div>
            );
        default:
            return null;
    }
};


const ServiceContentPage = () => {
    const { slug } = useParams();
    const serviceData = servicesContentData[slug];

    if (!serviceData) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <SEO
                title={`${serviceData.title} - ${siteData.companyName}`}
                description={serviceData.mainTitle}
            />

            <div className="starry-header page-header">
                <div className="content-wrapper">
                    <h1>{serviceData.title}</h1>
                </div>
            </div>

            <section className="service-page-content section">
                <div className="container">
                    <div className="page-layout">

                        {/* 1. Sütun: Ana İçerik */}
                        <main className="page-content">
                            {serviceData.imageUrl && (
                                <div className="service-main-image">
                                    <img
                                        src={serviceData.imageUrl}
                                        alt={serviceData.title}
                                    />
                                </div>
                            )}
                            <div className="service-description">
                                <h2>{serviceData.mainTitle}</h2>
                                {serviceData.sections.map((section, index) => renderSection(section, index))}
                            </div>
                        </main>

                        {/* 2. Sütun: Yapışkan Kenar Çubuğu */}
                        <ContactSidebar
                            title="Bu Hizmetle İlgili Teklif Alın"
                            text={`"${serviceData.title}" hizmetimiz hakkında detaylı bilgi ve projenize özel teklif almak için bize ulaşın.`}
                        />

                    </div>
                </div>
            </section>
            <CallToAction />

        </>
    );
};

export default ServiceContentPage;