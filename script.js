function toggleMenu() {
  const menu = document.querySelector(".menu-links")
  const icon = document.querySelector(".hamburger-icon")
  menu.classList.toggle("open")
  icon.classList.toggle("open")
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

