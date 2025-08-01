import React from 'react';
import { siteData } from '../data/siteData';

const ContactSidebar = ({ regionName }) => {
  return (
    <aside className="contact-sidebar">
      <div className="sidebar-icon">
        <i className="fas fa-bolt"></i>
      </div>
      <h3>Acil Servis mi Lazım?</h3>
      <p>{regionName} içi arızalara hızla müdahale ediyoruz!</p>
      
      <a href={`tel:${siteData.phones.general1}`} className="btn-sidebar btn-primary">
        <i className="fas fa-phone"></i> Hemen Ara
      </a>
      
      <a 
        href={`https://wa.me/${siteData.socials.whatsapp}?text=${encodeURIComponent(`Merhaba, ${regionName} için servis talebim var.`)}`}
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