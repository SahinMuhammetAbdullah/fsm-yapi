import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import FloatingCallButton from './FloatingCallButton';
import { siteData, navLinks } from '../data/siteData';

const MainLayout = () => {
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
      <FloatingCallButton phone={siteData.phones.general1} />

    </>
  );
};

export default MainLayout;