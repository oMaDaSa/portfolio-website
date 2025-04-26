import { useTranslation } from 'react-i18next';
import checkmarkIcon from '../../assets/checkmark.png';
import arrowIcon from '../../assets/arrow.png';
import './Experience.css';

const Experience = () => {
  const { t } = useTranslation();

  const backendSkills = [
    { name: 'Java/Spring', level: 'intermediate' },
    { name: 'C++/C', level: 'intermediate' },
    { name: 'Python', level: 'intermediate' },
    { name: 'R', level: 'intermediate' },
    { name: 'PostgreSQL', level: 'advanced' },
    { name: 'Firebase', level: 'basic' }
  ];

  const frontendSkills = [
    { name: 'JavaScript/React', level: 'intermediate' },
    { name: 'Git', level: 'intermediate' },
    { name: 'HTML/CSS', level: 'intermediate' },
    { name: 'Tailwind', level: 'basic' },
    { name: 'English', level: 'advanced' }
  ];

  return (
    <section id="experience" className="section">
      <p className="small_text">{t('explore_my')}</p>
      <h1 className="title">{t('experiences')}</h1>
      
      <div className="experience-container">
        <div className="skills-container">
          <div className="skill-box">
            <h2>{t('backend')}</h2>
            <div className="skill-list">
              {backendSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <img src={checkmarkIcon} alt="Checkmark" className="icon" />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{t(skill.level)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skill-box">
            <h2>{t('frontend_misc')}</h2>
            <div className="skill-list">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <img src={checkmarkIcon} alt="Checkmark" className="icon" />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{t(skill.level)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      

    </section>
  );
};

export default Experience; 