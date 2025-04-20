import { useTranslation } from 'react-i18next';
import aboutPic from '../../assets/about-pic.jpg';
import experienceIcon from '../../assets/experience.png';
import educationIcon from '../../assets/education.png';
import arrowIcon from '../../assets/arrow.png';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-about about-section">
      <p className="section__text__p1">{t('know_more')}</p>
      <h1 className="title">{t('about_me')}</h1>
      
      <div className="container-about section-container">
        <div className="container-about-top top-container">
          <div className="container-about-pic pic-container">
            <img src={aboutPic} alt="Profile picture" className="img-about-me" />
          </div>
          
          <div className="container-about-details details-container">
            <div className="container-about-boxes about-containers">
              <div className="container-experience detail-box">
                <img src={experienceIcon} alt="Experience icon" className="icon-about-experience" />
                <h3>{t('experience_title')}</h3>
                <p dangerouslySetInnerHTML={{ __html: t('experience_details') }} />
              </div>
              
              <div className="container-education detail-box">
                <img src={educationIcon} alt="Education icon" className="icon-about-education" />
                <h3>{t('education_title')}</h3>
                <p dangerouslySetInnerHTML={{ __html: t('education_details') }} />
              </div>
            </div>
          </div>
        </div>

        <div className="container-about-text text-container">
          <li>{t('about_text_1')}</li>
          <li>{t('about_text_2')}</li>
          <li>{t('about_text_3')}</li>
          <li>{t('about_text_4')}</li>
        </div>
      </div>
      
      <img 
        src={arrowIcon} 
        alt="Arrow icon" 
        className="icon-arrow-about arrow" 
        onClick={() => window.location.href = '#experience'}
      />
    </section>
  );
};

export default About;