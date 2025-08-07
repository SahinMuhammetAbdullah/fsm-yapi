import React, { useState } from 'react';

// Gerekli verileri ve yardımcı fonksiyonları buraya da import etmeliyiz
import { siteData } from '../data/siteData';

// Telefon formatlama fonksiyonu
const formatPhoneNumber = (value) => {
    if (!value) return "";
    const phoneNumber = value.replace(/[^\d]/g, "");
    // ... (fonksiyonun geri kalanı aynı)
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 8)} ${phoneNumber.slice(8, 10)}`;
};

const ContactSection = () => {
    // Form state'i ve handle fonksiyonları artık bu bileşenin içinde
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
        if (formData.phone.length !== 10) { /* ... */ }
        if (!formData.name) { /* ... */ }
        const fullPhoneNumber = '0' + formData.phone;
        let whatsappMessage = `...`; // Mesaj içeriği aynı
        const whatsappURL = `https://wa.me/${siteData.socials.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
        if (confirm('...')) { /* ... */ }
    };

    return (
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
                    <h3>Hızlı Bilgi Talebi</h3>
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
                                <option>Kombi Bilgi & Fiyat</option>
                                <option>Klima Bilgi & Fiyat</option>
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
    );
};

export default ContactSection;
