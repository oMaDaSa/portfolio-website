import { useTranslation } from 'react-i18next';
import springIcon from '../../assets/spring.svg';
import dinoIcon from '../../assets/dino_runner.png';
import lambdaIcon from '../../assets/lambda.svg';
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
            <img src={dinoIcon} alt="AI Dino Runner" />
            <h3 className="project-title">{t('dino_title')}</h3>
            <p>
              {t('dino_description')}
            </p>
            <div className="project-links">
              <button 
                className="btn btn-color"
                onClick={() => window.open('https://github.com/oMaDaSa/AI-DINO-RUNNER', '_blank')}
              >
                {t('github')}
              </button>
            </div>
          </div>
          
          <div className="project-card">
            <img src={lambdaIcon} alt="LimpAISPC" />
            <h3 className="project-title">{t('limpaispc_title')}</h3>
            <p>
              {t('limpaispc_description')}
            </p>
            <div className="project-links">
              <button 
                className="btn btn-color"
                onClick={() => window.open('https://github.com/oMaDaSa/LimpAISPC', '_blank')}
              >
                {t('github')}
              </button>
              <button 
                className="btn btn-color"
                onClick={() => window.open('https://omadasa.github.io/LimpAISPC/', '_blank')}
              >
                {t('live_demo')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 