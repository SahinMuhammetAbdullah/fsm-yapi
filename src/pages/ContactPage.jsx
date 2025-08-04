import React from 'react';
import SEO from '../components/SEO';
import ContactSection from '../components/ContactSection'; // YENİDEN KULLANILAN BİLEŞEN
import { siteData } from '../data/siteData';

const ContactPage = () => {
  return (
    <>
      <SEO
        title={`İletişim - ${siteData.companyName}`}
        description="Ücretsiz keşif, servis talebi ve tüm sorularınız için bizimle iletişime geçin. FSM Yapı bir telefon uzağınızda."
      />
      
      <ContactSection />

    </>
  );
};

export default ContactPage;
