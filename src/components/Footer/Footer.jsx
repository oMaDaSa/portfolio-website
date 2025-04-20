import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      <nav className="footer-nav">
        <ul className="footer-nav-links">
          <li><a href="#about" className="footer-nav-link">{t('about')}</a></li>
          <li><a href="#experience" className="footer-nav-link">{t('experience')}</a></li>
          <li><a href="#projects" className="footer-nav-link">{t('projects')}</a></li>
          <li><a href="#contact" className="footer-nav-link">{t('contact')}</a></li>
        </ul>
      </nav>
      <p className="footer-copyright">
        Copyright &#169; 2025 Matheus Dantas Santana. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer; 