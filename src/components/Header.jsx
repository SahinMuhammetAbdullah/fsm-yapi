import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = ({ siteData, navLinks }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // YENİ: Hangi mobil alt menünün açık olduğunu tutan state
    const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setOpenMobileSubmenu(null); // Menü kapanınca alt menüyü de sıfırla
    };

    // YENİ: Mobil menüde ana linke tıklama fonksiyonu
    const handleMobileParentClick = (e, link) => {
        // Sadece mobil menüde ve dropdown varsa çalışsın
        if (window.innerWidth <= 992 && link.dropdown) {
            e.preventDefault(); // Sayfaya gitmeyi engelle
            // Eğer tıklanan alt menü zaten açıksa kapat, değilse aç
            setOpenMobileSubmenu(openMobileSubmenu === link.text ? null : link.text);
        } else {
            // Masaüstündeyse veya dropdown yoksa normal davran ve menüyü kapat
            closeMobileMenu();
        }
    };

    return (
        <header>
            <div className="container">
                <div className="header-content">
                    <HashLink to="/" smooth className="logo" onClick={closeMobileMenu}>
                        <img src={siteData.logoUrl} alt={`${siteData.companyName} Logosu`} /> 
                    </HashLink>
                    <h1>FSM Yapı</h1>
                    <nav className={`nav-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                        {navLinks.map((link) => (
                            <div
                                key={link.text}
                                className={`nav-item ${link.dropdown ? 'has-dropdown' : ''} ${openMobileSubmenu === link.text ? 'submenu-open' : ''}`}
                            >
                                <HashLink
                                    to={link.to}
                                    smooth
                                    onClick={(e) => handleMobileParentClick(e, link)}
                                >
                                    {link.text}
                                    {link.dropdown && <i className="fas fa-chevron-down dropdown-arrow"></i>}
                                </HashLink>

                                {link.dropdown && (
                                    <div className="dropdown-menu">
                                        {/* YENİ: GRUPLARI DÖNEN MAP */}
                                        {link.dropdown.map((group) => (
                                            <div key={group.title} className="dropdown-group">
                                                {/* Grup Başlığı */}
                                                <h4 className="dropdown-title">{group.title}</h4>
                                                {/* Gruba Ait Linkler */}
                                                {group.links.map((item) => (
                                                    <Link key={item.text} to={item.to} onClick={closeMobileMenu}>
                                                        {item.text}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
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