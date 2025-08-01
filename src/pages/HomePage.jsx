import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO';
import ActionCard from '../components/ActionCard';
import ServiceCard from '../components/ServiceCard';
import GalleryGrid from '../components/GalleryGrid';
import ReviewCard from '../components/ReviewCard';

import { siteData, quickActionsData } from '../data/siteData';
import { servicesData } from '../data/servicesData';
import { galleryData } from '../data/galleryData';
import { homePageData } from '../data/homePageData';
import { mainPageReviews } from '../data/reviewsData';

const formatPhoneNumber = (value) => {
    if (!value) return "";
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return `(${phoneNumber}`;
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    if (phoneNumberLength < 9) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 8)} ${phoneNumber.slice(8, 10)}`;
};

const HomePage = () => {
    const openWhatsApp = () => {
        const { whatsapp, whatsappMessage } = siteData.socials;
        const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, '_blank');
    };

    const openMaps = () => {
        const { mapsQuery } = siteData.address;
        const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery)}`;
        window.open(url, '_blank');
    };

    const handleActionClick = (action) => {
        if (action.type === 'tel') {
            window.location.href = `tel:${action.target.replace(/\s/g, '')}`;
        } else if (action.type === 'whatsapp') {
            openWhatsApp();
        } else if (action.type === 'maps') {
            openMaps();
        }
    };
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Kombi Bakım & Onarım',
        message: ''
    });

    const handlePhoneInputChange = (e) => {
        const rawValue = e.target.value.replace(/\D/g, '');

        const limitedValue = rawValue.slice(0, 10);

        setFormData(prev => ({ ...prev, phone: limitedValue }));
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (formData.phone.length !== 10) {
            alert('Lütfen geçerli bir telefon numarası giriniz (Örn: 555 123 45 67).');
            return;
        }
        if (!formData.name) {
            alert('Lütfen Ad Soyad alanını doldurun.');
            return;
        }

        const fullPhoneNumber = '0' + formData.phone;

        let whatsappMessage = `Merhaba, FSM YAPI! Servis talebim var:\n\n` +
            `*Ad Soyad:* ${formData.name}\n` +
            `*Telefon:* ${fullPhoneNumber}\n` + // Temiz numarayı kullan
            `*Talep Edilen Hizmet:* ${formData.service}\n` +
            (formData.message ? `*Not:* ${formData.message}\n` : '') +
            `\nLütfen benimle iletişime geçer misiniz?`;

        const whatsappURL = `https://wa.me/${siteData.socials.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

        if (confirm('Bilgileriniz WhatsApp üzerinden gönderilecektir. Onaylıyor musunuz?')) {
            window.open(whatsappURL, '_blank');
            setFormData({ name: '', phone: '', service: 'Kombi Bakım & Onarım', message: '' });
        }
    };

    return (
        <>
            <SEO
                title={`${siteData.companyName} - Isıtma, Soğutma & Mühendislik Hizmetleri`}
                description={homePageData.hero.subtitle}
            />

            <section className="starry-header hero" id="anasayfa">
                <div className="content-wrapper">
                    <div className="hero-supertitle">{siteData.companyFullName}</div>
                    <h1>{homePageData.hero.title}</h1>
                    <p>{homePageData.hero.subtitle}</p>
                </div>
            </section>

            <section className="quick-actions">
                <div className="container">
                    <div className="section-title"><h2>Hızlı İşlemler</h2></div>
                    <div className="actions-grid">
                        {quickActionsData.map((action, index) => (
                            <ActionCard
                                key={index}
                                {...action}
                                onClick={() => handleActionClick(action)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section id="hakkimizda" className="section">
                <div className="container">
                    <div className="section-title"><h2>{homePageData.aboutSection.title}</h2></div>
                    <p className="about-text">{homePageData.aboutSection.text1}</p>
                    <p className="about-text">{homePageData.aboutSection.text2}</p>
                </div>
            </section>

            <section id="hizmetler" className="section">
                <div className="container">
                    <div className="section-title"><h2>Temel Hizmetlerimiz</h2></div>
                    <div className="services-grid">
                        {Object.values(servicesData).map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
                <div className="text-center mt-4">
                    <Link to="/hizmetler" className="btn-view-all">
                        Detayları Görüntüle <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </section>

            <section id="uygulama-alanlari" className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="section-title"><h2>{homePageData.applicationAreas.title}</h2></div>
                    <p className="about-text">{homePageData.applicationAreas.description}</p>
                </div>
            </section>

            <section id="markalar" className="brands-section" >
                <div className="container">
                    <div className="section-title">
                        <h2>{homePageData.brandsSection.title}</h2>
                    </div>
                    <div className="brands-grid">
                        {homePageData.brandsSection.brands.map((brand, index) => (
                            <div key={index} className="brand-item">{brand}</div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="galeri" className="section">
                <div className="container">
                    <div className="section-title">
                        <h2 className="section-title">Galeri</h2>
                    </div>
                    <GalleryGrid images={galleryData.mainPageImages} />
                    <div className="text-center mt-4">
                        <Link to="/galeri" className="btn-view-all">
                            Tüm Galeriyi Gör <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="contact" id="iletisim">
                <div className="container">
                    <div className="section-title">
                        <h2>Bizimle İletişime Geçin</h2>
                        <p>Aşağıdaki formu doldurarak veya bilgilerimizi kullanarak bize hızla ulaşabilirsiniz.</p>
                    </div>
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h3>İletişim Bilgileri</h3>

                            <div className="contact-item">
                                <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
                                <div>
                                    <strong>Telefon Hatlarımız</strong>
                                    <a href={`tel:${siteData.phones.general1}`}>{siteData.phones.general1}</a>
                                    <a href={`tel:${siteData.phones.general2}`}>{siteData.phones.general2}</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon"><i className="fab fa-whatsapp"></i></div>
                                <div>
                                    <strong>WhatsApp Destek</strong>
                                    <a href={`https://wa.me/${siteData.socials.whatsapp}`} target="_blank" rel="noopener noreferrer">Mesaj Gönder</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                                <div>
                                    <strong>Adres</strong>
                                    <span>{siteData.address.line1}</span>
                                    <span>{siteData.address.line2}</span>
                                </div>
                            </div>

                            <div className="contact-map">
                                <iframe
                                    title="FSM YAPI Google Harita Konumu"
                                    src={siteData.address.embedMapUrl}
                                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>

                        <div className="contact-form">
                            <h3>Hızlı Servis Talebi</h3>
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Ad Soyad</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} required placeholder="Adınız ve soyadınız" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Telefon Numaranız</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formatPhoneNumber(formData.phone)}
                                        onChange={handlePhoneInputChange}
                                        required
                                        placeholder="(5XX) XXX XX XX"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="service">İlgilendiğiniz Hizmet</label>
                                    <select id="service" name="service" value={formData.service} onChange={handleFormChange}>
                                        <option>Kombi Bakım & Onarım</option>
                                        <option>Klima Bakım & Onarım</option>
                                        <option>Mekanik Tesisat</option>
                                        <option>Proje ve Taahhüt</option>
                                        <option>Havalandırma Sistemleri</option>
                                        <option>Diğer</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Eklemek İstedikleriniz (İsteğe Bağlı)</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleFormChange} rows="4" placeholder="Cihaz modeli, arıza detayı..."></textarea>
                                </div>
                                <button type="submit" className="btn-whatsapp">
                                    <i className="fab fa-whatsapp"></i> WhatsApp ile Gönder
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section id="yorumlar" className="reviews-section section">
                <div className="container">
                    <div className="section-title">
                        <h2 >Müşterilerimiz Ne Dedi?</h2>
                        <p>Google İşletme profilimizden gerçek müşteri yorumları.</p>
                    </div>
                    <div className="reviews-grid">
                        {mainPageReviews.map((review, index) => (
                            <ReviewCard key={index} {...review} url={siteData.googleReviewsUrl} />
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/yorumlar" className="btn-view-all">
                            Tüm Yorumları Oku <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

        </>
    );
};

export default HomePage;