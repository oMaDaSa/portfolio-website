function toggleMenu() {
  const menu = document.querySelector(".menu-links")
  const icon = document.querySelector(".hamburger-icon")
  menu.classList.toggle("open")
  icon.classList.toggle("open")

  if(menu.classList.contains("open")){
    icon.src = "assets/x_icon.svg";
  }else{
    icon.src = "assets/hamburger_icon.svg";
  }
}

// Função para inicializar as animações
document.addEventListener("DOMContentLoaded", () => {
  // Selecionar todos os elementos que queremos animar
  const elementsToAnimate = [
    // Elementos do perfil
    "#profile .section__pic-container",
    "#profile .section__text__p1",
    "#profile .title",
    "#profile .section__text__p2",
    "#profile .btn-container",
    "#profile #socials-container",

    // Elementos do about
    "#about .section__text__p1",
    "#about .title",
    "#about .section__pic-container",
    "#about .about-containers",
    "#about .details-container",

    // Elementos de experiência
    "#experience .section__text__p1",
    "#experience .title",
    "#experience .details-container",
    "#experience article",

    // Elementos de projetos
    "#projects .section__text__p1",
    "#projects .title",
    "#projects .color-container",

    // Elementos de contato
    "#contact .section__text__p1",
    "#contact .title",
    "#contact .contact-info-upper-container",

    // Elementos do footer
    "footer .nav-links",
    "footer p",
  ].join(", ")

  const elements = document.querySelectorAll(elementsToAnimate)

  // Adicionar classe hidden a todos os elementos
  elements.forEach((el) => {
    if (el) el.classList.add("hidden")
  })

  // Configurar o observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateElement(entry.target)
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px",
    },
  )

  // Observar todos os elementos
  elements.forEach((el) => {
    if (el) observer.observe(el)
  })

  // Animar elementos já visíveis
  animateVisibleElements()
})

// Função para animar elementos
function animateElement(element) {
  element.classList.remove("hidden")

  // Determinar o tipo de animação baseado no elemento
  if (element.classList.contains("section__pic-container")) {
    element.classList.add("zoom-in")
  } else if (element.classList.contains("title")) {
    element.classList.add("fade-in-up")
  } else if (element.classList.contains("section__text__p1")) {
    element.classList.add("fade-in-left")
  } else if (element.tagName.toLowerCase() === "article") {
    element.classList.add("flip-in")
    const delay = Array.from(element.parentNode.children).indexOf(element)
    element.style.animationDelay = `${delay * 0.1}s`
  } else if (element.classList.contains("details-container") || element.classList.contains("color-container")) {
    element.classList.add("fade-in-up")
  } else {
    element.classList.add("fade-in")
  }
}

// Função para animar elementos já visíveis na tela
function animateVisibleElements() {
  const elements = document.querySelectorAll(".hidden")
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      animateElement(element)
    }
  })
}

// Adicionar efeito de digitação para o título principal
function typeWriter(element, text, i = 0) {
  if (i < text.length) {
    element.textContent += text.charAt(i)
    setTimeout(() => typeWriter(element, text, i + 1), 100)
  }
}

// Iniciar efeito de digitação quando o título estiver visível
document.addEventListener("DOMContentLoaded", () => {
  const mainTitle = document.querySelector("#profile .title")
  if (mainTitle) {
    const text = mainTitle.textContent
    mainTitle.textContent = ""

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        typeWriter(mainTitle, text)
        observer.unobserve(mainTitle)
      }
    })

    observer.observe(mainTitle)
  }
})

// Otimizar performance do scroll
let ticking = false
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      animateVisibleElements()
      ticking = false
    })
    ticking = true
  }
})

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  
  // Salvar preferência
  const isDark = document.body.classList.contains('dark-theme');
  localStorage.setItem('darkTheme', isDark);
  
  // Atualizar ícone
  const themeToggles = document.querySelectorAll('.theme-toggle');
  themeToggles.forEach(btn => {
      btn.textContent = isDark ? '☀️' : '🌙';
  });
}

// Carregar tema salvo
function loadTheme() {
  const darkTheme = localStorage.getItem('darkTheme') === 'true';
  if (darkTheme) {
      document.body.classList.add('dark-theme');
      document.querySelectorAll('.theme-toggle').forEach(btn => {
          btn.textContent = '☀️';
      });
  }
}

// Adicionar event listeners
document.querySelectorAll('.theme-toggle').forEach(btn => {
  btn.addEventListener('click', toggleTheme);
});

// Carregar tema ao iniciar
loadTheme();

// Traduções
const translations = {
    'en': {
        'about': 'About',
        'experience': 'Experience',
        'projects': 'Projects',
        'contact': 'Contact',
        'hello': 'Hello, I\'m',
        'student': 'Computer Science Student',
        'download_cv': 'Download CV',
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
        'programming_marathons': 'Programming Marathons:',
        'procedural_programming_monitor': 'Procedural Programming Monitor;',
        'web_developer_freelancer': 'Web Developer Freelancer;',
        'bachelors_degree': 'Bachelor\'s in CS at UFU (5th semester);',
        'technical_degree': 'Technical in Game Programming at IFTM;',
        'english_level': 'English Level C1A at CELIN;',
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
        'backend': 'Backend'
    },
    'pt': {
        'about': 'Sobre',
        'experience': 'Experiências',
        'projects': 'Projetos',
        'contact': 'Contato',
        'hello': 'Olá, eu sou',
        'student': 'Estudante de Ciência da Computação',
        'download_cv': 'Baixar CV',
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
        'programming_marathons': 'Maratonas de programação:',
        'procedural_programming_monitor': 'Monitor de Programação Procedimental;',
        'web_developer_freelancer': 'Desenvolvedor Web Freelancer;',
        'bachelors_degree': 'Bacharelado em CC na UFU (5º período);',
        'technical_degree': 'Téc. em Programação de Jogos pelo IFTM;',
        'english_level': 'Inglês Nível C1A pelo CELIN;',
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
        'backend': 'Backend'
    }
};

let currentLanguage = 'pt';

// Function to update text content
function updateLanguage() {
    const lang = translations[currentLanguage];
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (lang[key]) {
            // Check if the content contains HTML tags
            if (lang[key].includes('<br/>')) {
                element.innerHTML = lang[key];
            } else {
                element.textContent = lang[key];
            }
        }
    });
    
    // Update CV download button
    const cvButton = document.getElementById('cv-download');
    if (cvButton) {
        cvButton.onclick = () => {
            const pdfPath = currentLanguage === 'en' ? './assets/resume.pdf' : './assets/curriculo.pdf';
            window.open(pdfPath);
        };
    }
}

// Language toggle functionality
document.getElementById('language-toggle').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    updateLanguage();
    document.getElementById('language-toggle').textContent = currentLanguage === 'pt' ? '🇺🇸' : '🇧🇷';
});

document.getElementById('language-toggle-mobile').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    updateLanguage();
    document.getElementById('language-toggle-mobile').textContent = currentLanguage === 'pt' ? '🇺🇸' : '🇧🇷';
    toggleMenu(); // Close the mobile menu after language change
});

// Initialize language
updateLanguage();

