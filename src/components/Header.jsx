import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = ({ siteData, navLinks }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Mobil menü seviyesini ve içeriğini yöneten state'ler
  const [mobileMenuLevel, setMobileMenuLevel] = useState('main'); // 'main' veya 'submenu'
  const [submenuContent, setSubmenuContent] = useState([]);
  const [submenuTitle, setSubmenuTitle] = useState('');

  // Mobil menü açıldığında/kapandığında state'leri sıfırla
  useEffect(() => {
    if (!isMobileMenuOpen) {
      // Kapanma animasyonunun bitmesi için küçük bir gecikme
      setTimeout(() => {
        setMobileMenuLevel('main');
        setSubmenuContent([]);
      }, 400); 
    }
  }, [isMobileMenuOpen]);

  // Ana mobil menüdeki bir linke tıklama
  const handleMobileParentClick = (e, link) => {
    if (link.dropdown) {
      e.preventDefault();
      setMobileMenuLevel('submenu');
      setSubmenuContent(link.dropdown);
      setSubmenuTitle(link.text);
    } else {
      closeMobileMenu();
    }
  };

  // Alt menüden ana menüye geri dönme
  const goToMainMenu = () => {
    setMobileMenuLevel('main');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          {/* Logo ve Başlık */}
          <HashLink to="/" smooth className="logo-wrapper" onClick={closeMobileMenu}>
            <img src={siteData.logoUrl} alt={`${siteData.companyName} Logosu`} />
            <h1>FSM Yapı</h1>
          </HashLink>
          
          {/* --- 1. MASAÜSTÜ NAVİGASYONU --- */}
          <nav className="nav-container desktop-nav">
            {navLinks.map((link) => (
              <div key={link.text} className={`nav-item ${link.dropdown ? 'has-dropdown' : ''}`}>
                <HashLink to={link.to} smooth>
                  {link.text}
                  {link.dropdown && <i className="fas fa-chevron-down dropdown-arrow"></i>}
                </HashLink>
                {link.dropdown && (
                  <div className="dropdown-menu">
                    {link.dropdown.map((group) => (
                      <div key={group.title} className="dropdown-group">
                        <h4 className="dropdown-title">{group.title}</h4>
                        {group.links.map((item) => (
                          <Link key={item.text} to={item.to}>{item.text}</Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* --- 2. MOBİL NAVİGASYON --- */}
          <div className={`mobile-nav-wrapper ${isMobileMenuOpen ? 'open' : ''} ${mobileMenuLevel === 'submenu' ? 'submenu-active' : ''}`}>
            {/* Seviye 1: Ana Menü */}
            <div className="mobile-nav-level main-menu">
              {navLinks.map((link) => (
                <a href={link.to} key={link.text} onClick={(e) => handleMobileParentClick(e, link)}>
                  {link.text}
                  {link.dropdown && <i className="fas fa-chevron-right"></i>}
                </a>
              ))}
            </div>
            {/* Seviye 2: Alt Menü */}
            <div className="mobile-nav-level submenu">
              <button className="submenu-back-button" onClick={goToMainMenu}>
                <i className="fas fa-chevron-left"></i> Geri
              </button>
              <h3 className="submenu-title">{submenuTitle}</h3>
              {submenuContent.map((group) => (
                <div key={group.title} className="mobile-dropdown-group">
                  <h4 className="mobile-dropdown-title">{group.title}</h4>
                  {group.links.map((item) => (
                    <Link key={item.text} to={item.to} onClick={closeMobileMenu}>
                      {item.text}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* İletişim Butonu ve Mobil Menü Tetiği */}
          <a href={`tel:${siteData.phones.general1}`} className="emergency-call">
            <i className="fas fa-phone-alt"></i> HIZLI İLETİŞİM
          </a>
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Navigasyon menüsünü aç/kapat"
          >
            <i className={isMobileMenuOpen ? 'fas fa-xmark' : 'fas fa-bars'}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;