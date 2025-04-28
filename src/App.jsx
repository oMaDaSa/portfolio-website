import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './i18n/config'
import './styles/global.css'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(prefersDark ? 'dark' : 'light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Profile />
      <hr/>
      <About />
      <hr/>
      <Experience />
      <hr/>
      <Projects />
      <hr/>
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App
