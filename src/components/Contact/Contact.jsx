import { useTranslation } from 'react-i18next';
import emailIcon from '../../assets/email.png';
import linkedinIcon from '../../assets/linkedin.png';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section">
      <p className="small_text">{t('get_in_touch')}</p>
      <h1 className="title">{t('contact_me')}</h1>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <img src={emailIcon} alt="Email icon" className="icon contact-icon email-icon" onClick={() => window.open('mailto:matheusdsantana07@gmail.com', '_blank')}/>
            <p>
              <a href="mailto:matheusdsantana07@gmail.com">
                matheusdsantana07@gmail.com
              </a>
            </p>
          </div>
          
          <div className="contact-card">
            <img src={linkedinIcon} alt="LinkedIn icon" className="icon contact-icon" 
            onClick={() => window.open('https://www.linkedin.com/in/matheusdsantana/', '_blank')}/>
            <p>
              <a href="https://www.linkedin.com/in/matheusdsantana/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;