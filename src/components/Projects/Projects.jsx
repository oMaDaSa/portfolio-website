import { useTranslation } from 'react-i18next';
import springIcon from '../../assets/spring.svg';
import wipIcon from '../../assets/wip.png';
import arrowIcon from '../../assets/arrow.png';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section">
      <p className="small_text">{t('explore_my_projects')}</p>
      <h1 className="title">{t('projects')}</h1>
      
      <div className="projects-container">
        <div className="projects-grid">
          <div className="project-card">
            <img src={springIcon} alt="MovieLog Spring" />
            <h3 className="project-title">{t('movielog_title')}</h3>
            <p>
              {t('movielog_description')}
            </p>
            <div className="project-links">
              <button 
                className="btn btn-color"
                onClick={() => window.open('https://github.com/oMaDaSa/MovieLog-DIO-Bootcamp', '_blank')}
              >
                {t('github')}
              </button>
              <button 
                className="btn btn-color"
                onClick={() => window.open('https://movielog.onrender.com/swagger-ui.html', '_blank')}
              >
                {t('live_demo')}
              </button>
            </div>
          </div>
          
          <div className="project-card">
            <img src={wipIcon} alt="Project WIP" />
            <h3 className="project-title">{t('coming_soon')}</h3>
            <p>
              {t('wip_description')}
            </p>
            <button 
                className="btn btn-color">
                {t('soon')}
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 