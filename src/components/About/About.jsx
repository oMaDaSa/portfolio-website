import { useTranslation } from 'react-i18next';
import aboutPic from '../../assets/about-pic.jpg';
import experienceIcon from '../../assets/experience.png';
import educationIcon from '../../assets/education.png';
import arrowIcon from '../../assets/arrow.png';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <p className="small_text">{t('know_more')}</p>
      <h1 className="title">{t('about_me')}</h1>
      
      <div className="about-container">
        <div className="top-container">
          <div className="about-pic">
            <img src={aboutPic} alt="Profile picture" className="img-about-me" />
          </div>
          
          <div className="details-container">
            <div className="about-containers">
              <div className="detail-box">
                <img src={experienceIcon} alt="Experience icon" className="icon" />
                <h3>{t('experience_title')}</h3>
                <p dangerouslySetInnerHTML={{ __html: t('experience_details') }} />
              </div>
              
              <div className="detail-box">
                <img src={educationIcon} alt="Education icon" className="icon" />
                <h3>{t('education_title')}</h3>
                <p dangerouslySetInnerHTML={{ __html: t('education_details') }} />
              </div>
            </div>
          </div>
        </div>

        <div className="text-container">
          <li>{t('about_text_1')}</li>
          <li>{t('about_text_2')}</li>
          <li>{t('about_text_3')}</li>
          <li>{t('about_text_4')}</li>
        </div>
      </div>
    </section>
  );
};

export default About;