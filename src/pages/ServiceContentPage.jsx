import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactSidebar from '../components/ContactSidebar';
import { servicesContentData } from '../data/servicesContentData'; 
import { siteData } from '../data/siteData';
import CallToAction from '../components/CallToAction';

const ServiceContentPage = () => {
    const { slug } = useParams();
    const serviceData = servicesContentData[slug];

    if (!serviceData) {
        return <Navigate to="/" />;
    }

    const serviceName = serviceData.title.split(' ')[0];

    return (
        <>
            <SEO
                title={`${serviceData.title} - ${siteData.companyName}`}
                description={serviceData.description}
            />
            <div className="starry-header page-header">
                <div className="content-wrapper">
                    <h1>{serviceData.title}</h1>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="page-layout">
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

                        <ContactSidebar regionName={serviceName} />
                    </div>
                </div>
            </div>
            <CallToAction />
        </>
    );
};

export default ServiceContentPage;