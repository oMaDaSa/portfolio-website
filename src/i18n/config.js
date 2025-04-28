import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'about': 'About',
      'experience': 'Experience',
      'projects': 'Projects',
      'contact': 'Contact',
      'hello': 'Hello, I\'m',
      'student': 'Computer Science Student',
      'download_cv': 'Résumé',
      'contact_button': 'Contact',
      'know_more': 'Get to Know',
      'about_me': 'About Me',
      'explore_my': 'Explore My',
      'explore_my_projects': 'Explore My',
      'experiences': 'Experiences',
      'education': 'Education',
      'about_text_1': 'Studying Computer Science at the Federal University of Uberlândia (UFU);',
      'about_text_2': 'I have a strong interest in computing and programming, focusing on web development, backend, and data analysis.',
      'about_text_3': 'I participate in programming marathons, always seeking to improve my skills and learn new techniques;',
      'about_text_4': 'Currently developing web projects with @uaiweb_. I\'m developing a digital courses website with React and Firebase;',
      'experience_title': 'Experience',
      'education_title': 'Education',
      'intermediate': 'Intermediate',
      'basic': 'Basic',
      'advanced': 'Advanced',
      'coming_soon': 'Coming Soon',
      'get_in_touch': 'Get in Touch',
      'contact_me': 'Contact Me',
      'experience_details': 'Programming Marathons:<br/>(ICPC, OBI, Pizza++);<br/>Procedural Programming Monitor;<br/>Web Developer Freelancer;',
      'education_details': 'Bachelor\'s in CS at UFU (5th semester);<br/>Technical in Game Programming at IFTM;<br/>English Level C1A at CELIN;',
      'frontend_misc': 'Frontend & Misc',
      'backend': 'Backend',
      'movielog_title': 'MovieLog RESTful API',
      'movielog_description': 'MovieLog RESTful API is a powerful backend system designed to manage movie data efficiently. It provides a robust set of features for managing movies, including CRUD operations, detailed movie information, and user authentication.',
      'github': 'Github',
      'live_demo': 'Live Demo',
      'wip_description': 'This project is currently in development. More details will be available soon.',
      'soon': 'Soon'
    }
  },
  pt: {
    translation: {
      'about': 'Sobre',
      'experience': 'Experiências',
      'projects': 'Projetos',
      'contact': 'Contato',
      'hello': 'Olá, eu sou',
      'student': 'Estudante de Ciência da Computação',
      'download_cv': 'Currículo',
      'contact_button': 'Contato',
      'know_more': 'Conheça Mais',
      'about_me': 'Sobre Mim',
      'explore_my': 'Explore Minhas',
      'explore_my_projects': 'Explore Meus',
      'experiences': 'Experiências',
      'education': 'Formação',
      'about_text_1': 'Estudando Ciência da Computação na Universidade Federal de Uberlândia (UFU);',
      'about_text_2': 'Tenho um grande interesse na áreas de computação e programação, com foco em desenvolvimento web, backend e análise de dados.',
      'about_text_3': 'Participo de maratonas de programação, sempre buscando aperfeiçoar minhas habilidades e aprender novas técnicas;',
      'about_text_4': 'Atualmente desenvolvendo projetos web com a @uaiweb_. Estou desenvolvendo um site de cursos digitais com React e Firebase;',
      'experience_title': 'Experiências',
      'education_title': 'Formação',
      'intermediate': 'Intermediário',
      'basic': 'Básico',
      'advanced': 'Avançado',
      'coming_soon': 'Em breve',
      'get_in_touch': 'Entre em contato',
      'contact_me': 'Contate Me',
      'experience_details': 'Maratonas de programação:<br/>(ICPC, OBI, Pizza++);<br/>Monitor de Programação Procedimental;<br/>Desenvolvedor Web Freelancer;',
      'education_details': 'Bacharelado em CC na UFU (5º período);<br/>Téc. em Programação de Jogos pelo IFTM;<br/>Inglês Nível C1A pelo CELIN;',
      'frontend_misc': 'Frontend & Misc',
      'backend': 'Backend',
      'movielog_title': 'MovieLog API RESTful',
      'movielog_description': 'MovieLog API RESTful é um sistema backend poderoso projetado para gerenciar dados de filmes de forma eficiente. Ele fornece um conjunto robusto de recursos para gerenciar filmes, incluindo operações CRUD, informações detalhadas sobre filmes e autenticação de usuários.',
      'github': 'Github',
      'live_demo': 'Demo ao Vivo',
      'wip_description': 'Este projeto está atualmente em desenvolvimento. Mais detalhes estarão disponíveis em breve.',
      'soon': 'Em breve'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: navigator.language.split('-')[0] || 'pt',
    fallbackLng: 'pt',
  });

export default i18n; 