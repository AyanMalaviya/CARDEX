import React from "react";
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const tr = (key, fallback) => {
    const value = t(key);
    return value === key ? fallback : value;
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h2 className="footer-title">MotoGuide</h2>
          <p className="footer-description">
            {tr('footerDescription', 'Discover the power, comfort, and speed of the best cars on the market. Your ultimate riding companion.')}
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">{tr('quickLinks', 'Quick Links')}</h3>
          <ul className="footer-links">
            <li><a href="/featured">{tr('featured', 'Featured')}</a></li>
            <li><a href="/highpower">{tr('highPower', 'High Power')}</a></li>
            <li><a href="/highcomfort">{tr('highComfort', 'High Comfort')}</a></li>
            <li><a href="/compare">{tr('compareCars', 'Compare Cars')}</a></li>
            <li><a href="/contact">{tr('contactUs', 'Contact Us')}</a></li>
            <li><a href="/about">{tr('aboutUs', 'About Us')}</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3 className="footer-heading">{tr('followUs', 'Follow Us')}</h3>
          <div className="footer-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="mailto:support@motoguide.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MotoGuide. {tr('allRightsReserved', 'All rights reserved.') }
      </div>
    </footer>
  );
};

export default Footer;
