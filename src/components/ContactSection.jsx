import React, { useState } from 'react';

// Gerekli verileri import et
import { siteData } from '../data/siteData';

// Telefon formatlama fonksiyonu (Değişiklik yok, ama tam haliyle burada)
const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return `(${phoneNumber}`;
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 10)}`;
};

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Kombi Bilgi & Fiyat', // Select'teki ilk seçenekle aynı olmalı
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

    // --- GÖNDERME FONKSİYONU (TAM VE ÇALIŞIR HALİ) ---
    const handleFormSubmit = (e) => {
        e.preventDefault(); // Formun sayfayı yenilemesini engelle

        if (formData.phone.length !== 10) {
            alert('Lütfen geçerli bir telefon numarası giriniz (10 haneli, başında 0 olmadan).');
            return;
        }
        if (!formData.name.trim()) {
            alert('Lütfen Ad Soyad alanını doldurun.');
            return;
        }

        const fullPhoneNumber = '0' + formData.phone;

        // WhatsApp'a gönderilecek mesajı tam olarak oluştur
        let whatsappMessage = `Merhaba, FSM YAPI! Web sitenizden bilgi talebim var:\n\n` +
            `*Ad Soyad:* ${formData.name}\n` +
            `*Telefon:* ${fullPhoneNumber}\n` +
            `*Talep Edilen Hizmet:* ${formData.service}\n` +
            (formData.message ? `*Not:* ${formData.message}\n` : '') +
            `\nLütfen benimle iletişime geçer misiniz?`;

        // WhatsApp URL'sini oluştur
        const whatsappURL = `https://wa.me/${siteData.socials.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

        // Kullanıcıya onay sor
        if (confirm('Bilgileriniz WhatsApp üzerinden gönderilecektir. Onaylıyor musunuz?')) {
            window.open(whatsappURL, '_blank');
            // Gönderim sonrası formu temizle
            setFormData({
                name: '',
                phone: '',
                service: 'Kombi Bilgi & Fiyat',
                message: ''
            });
        }
    };
    // --- GÖNDERME FONKSİYONU BİTİŞİ ---

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