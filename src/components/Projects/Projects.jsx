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
            <h3 className="experience-sub-title project-title">MovieLog RESTful API</h3>
            <p>
              MovieLog RESTful API is a powerful backend system designed to manage movie data efficiently. It provides a robust set of features for managing movies, including CRUD operations, detailed movie information, and user authentication.
            </p>
            <div className="project-links">
              <button 
                className="btn btn-color"
                onClick={() => window.open('https://github.com/oMaDaSa/MovieLog-DIO-Bootcamp', '_blank')}
              >
                Github
              </button>
              <button 
                className="btn btn-color"
                onClick={() => window.open('https://movielog.onrender.com/swagger-ui.html', '_blank')}
              >
                Live Demo
              </button>
            </div>
          </div>
          
          <div className="project-card">
            <img src={wipIcon} alt="Project WIP" />
            <h3 className="experience-sub-title project-title">{t('coming_soon')}</h3>
            <p>
              This project is currently in development. More details will be available soon.
            </p>
            <button 
                className="btn btn-color">
                Soon
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 