import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import usa_flag from '../../assets/usa_flag.svg'
import br_flag from '../../assets/br_flag.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <nav id="desktop-nav">
        <li className="logo" ><a className="logo-link" href="#" >Matheus Dantas</a></li>
        <div>
          <ul className="nav-links">
            <li><a href="#about">{t('about')}</a></li>
            <li><a href="#experience">{t('experience')}</a></li>
            <li><a href="#projects">{t('projects')}</a></li>
            <li><a href="#contact">{t('contact')}</a></li>
            <li>
              <button 
                id="theme-toggle" 
                className="theme-toggle"
                onClick={toggleTheme}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </li>
            <li>
              <button 
                id="language-toggle" 
                className="language-toggle"
                onClick={toggleLanguage}
              >
                {language === 'pt' ?  <img className = "flag" src={usa_flag}/> : <img  className = "flag" src={br_flag}/>}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">Matheus Dantas</div>
        <div className="mobile-controls">
          <button 
            id="theme-toggle-mobile" 
            className="theme-toggle"
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button 
            id="language-toggle-mobile" 
            className="language-toggle"
            onClick={toggleLanguage}
          >
            {language === 'pt' ? <img className="flag" src={usa_flag} alt="Switch to English" /> : <img className="flag" src={br_flag} alt="Mudar para Português" />}
          </button>
          <div className="hamburger-menu">
            <div className="hamburger-icon" onClick={toggleMenu}>
              <span className={isMenuOpen ? 'open' : ''}></span>
              <span className={isMenuOpen ? 'open' : ''}></span>
              <span className={isMenuOpen ? 'open' : ''}></span>
            </div>
            <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
              <li><a href="#about" onClick={toggleMenu}>{t('about')}</a></li>
              <li><a href="#experience" onClick={toggleMenu}>{t('experience')}</a></li>
              <li><a href="#projects" onClick={toggleMenu}>{t('projects')}</a></li>
              <li><a href="#contact" onClick={toggleMenu}>{t('contact')}</a></li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 