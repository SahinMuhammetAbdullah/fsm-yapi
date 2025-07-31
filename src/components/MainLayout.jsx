import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { siteData, navLinks } from '../data/siteData';

const MainLayout = () => {
  // Bu hook, sayfa içi scroll sonrası scroll pozisyonunu en üste alır.
  // react-router-dom v6'da varsayılan olarak bu özellik yoktur.
  const { pathname, hash, key } = useLocation();
  React.useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return (
    <>
      <Header siteData={siteData} navLinks={navLinks} />
      <main>
        <Outlet />
      </main>
      <Footer siteData={siteData} navLinks={navLinks} />
      <WhatsAppButton phone={siteData.socials.whatsapp} message={siteData.socials.whatsappMessage} />
    </>
  );
};

export default MainLayout;