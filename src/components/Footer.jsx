import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { siteData, footerLinks } from '../data/siteData';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">

          <div className="footer-section">
            <h3>{siteData.companyName}</h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem' }}>{siteData.companyFullName}</p>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="footer-section">
              <h3>{section.title}</h3>
              {section.links.map((link) => (
                link.type === 'hash' ? (
                  <HashLink key={link.text} smooth to={link.to}>
                    {link.text}
                  </HashLink>
                ) : (
                  <Link key={link.text} to={link.to}>
                    {link.text}
                  </Link>
                )
              ))}
            </div>
          ))}

          <div className="footer-section">
            <h3>İletişim</h3>
            <a href={`tel:${siteData.phones.general1}`}>{siteData.phones.general1}</a>
            <a href={`tel:${siteData.phones.general2}`}>{siteData.phones.general2}</a>
            <div className="footer-working-hours">
              {siteData.workingHours.map(item => (
                <p key={item.day}>
                  <strong>{item.day}:</strong>
                  <span>{item.hours}</span>
                </p>
              ))}
            </div>
          </div>

        </div>
        <div className="copyright">
          <p>{siteData.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;