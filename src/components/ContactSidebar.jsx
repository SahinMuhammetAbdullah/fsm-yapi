import React from 'react';
import { siteData } from '../data/siteData';

// DEĞİŞİKLİK: title ve text proplarını da alacak
const ContactSidebar = ({ title, text }) => {
  return (
    // YENİ: Bileşene özel bir sınıf ekleyerek diğer kenar çubuklarından ayıralım
    <aside className="contact-sidebar cta-sidebar"> 
      <div className="sidebar-icon">
        <i className="fas fa-bolt"></i>
      </div>
      
      {/* Artık başlık ve metin dinamik */}
      <h3>{title || "Bilgi için İletişime Geçin!"}</h3> 
      <p>{text || "Projelendirme, Kombi ve Klima Hizmetleri!"}</p>
      
      <a href={`tel:${siteData.phones.general1}`} className="btn-sidebar btn-primary">
        <i className="fas fa-phone"></i> Hemen Ara
      </a>
      
      <a 
        href={`https://wa.me/${siteData.socials.whatsapp}?text=${encodeURIComponent(`Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-sidebar btn-secondary"
      >
        <i className="fab fa-whatsapp"></i> WhatsApp'tan Yaz
      </a>
    </aside>
  );
};

export default ContactSidebar;
