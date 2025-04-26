import { useTranslation } from 'react-i18next';
import profilePic from '../../assets/profile-pic.jpg';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';
import './Profile.css';

const Profile = () => {
  const { t, i18n } = useTranslation();

  const handleDownloadCV = () => {
    const pdfPath = i18n.language === 'en' ? './assets/resume.pdf' : './assets/curriculo.pdf';
    window.open(pdfPath);
  };

  return (
    <section id="profile" className="section">
      <div className="profile-container">
        <div className="profile-pic">
          <img src={profilePic} alt="Matheus Dantas" className="img-profile" />
        </div>
        
        <div className="profile-text">
          <p className="small-text">{t('hello')}</p>
          <h1 className="title">Matheus Dantas</h1>
          <p className="medium-text">{t('student')}</p>
          
          <div className="profile-buttons">
            <button className="btn btn-color" onClick={handleDownloadCV}>
              {t('download_cv')}
            </button>
            <button 
              className="btn btn-color" 
              onClick={() => window.location.href = '#contact'}
            >
              {t('contact_button')}
            </button>
          </div>
          
          <div className="profile-socials-container">
            <img 
              src={linkedinIcon} 
              alt="My LinkedIn" 
              className="profile-icon icon"
              onClick={() => window.open('https://www.linkedin.com/in/matheusdsantana/')}
            />
            <img 
              src={githubIcon} 
              alt="My Github" 
              className="profile-icon icon"
              onClick={() => window.open('https://github.com/oMaDaSa')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile; 