import { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ThemePicker from './components/ThemePicker'
import MouseHalo from './components/MouseHalo'
import './fonts.css'

function App() {
  const [theme, setTheme] = useState('neutral')
  const [randomTheme, setRandomTheme] = useState(null)

  const fonts = ['Archivo', 'Flor', 'Fungal', 'Garamont', 'Mess', 'Nimbus', 'Quarantype']

  const generateRandomColor = () => {
    const hue = Math.floor(Math.random() * 360)
    const saturation = Math.floor(Math.random() * 30) + 70 // 70-100%
    const lightness = Math.floor(Math.random() * 20) + 75 // 75-95%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
  }

  const generateRandomTheme = () => {
    const color1 = generateRandomColor()
    const color2 = generateRandomColor()
    const color3 = generateRandomColor()
    const accentHue = Math.floor(Math.random() * 360)
    const accentColor = `hsl(${accentHue}, 80%, 50%)`
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)]

    return {
      color1,
      color2,
      color3,
      accentColor,
      font: randomFont
    }
  }

  const handleThemeChange = (newTheme) => {
    if (newTheme === 'random') {
      const newRandomTheme = generateRandomTheme()
      setRandomTheme(newRandomTheme)
      setTheme('random')
    } else {
      setTheme(newTheme)
      setRandomTheme(null)
    }
  }

  useEffect(() => {
    if (theme === 'random' && randomTheme) {
      document.documentElement.style.setProperty('--color-1', randomTheme.color1)
      document.documentElement.style.setProperty('--color-2', randomTheme.color2)
      document.documentElement.style.setProperty('--color-3', randomTheme.color3)
      document.documentElement.style.setProperty('--accent-color', randomTheme.accentColor)
      document.documentElement.style.setProperty('--color-4', randomTheme.accentColor)
      document.documentElement.style.setProperty('--primary-hover', randomTheme.accentColor)
      document.documentElement.style.setProperty('--bg-main', randomTheme.color3)
      document.documentElement.style.setProperty('--bg-section', randomTheme.color3)
      document.documentElement.style.setProperty('--bg-card', randomTheme.color2)
      document.documentElement.style.setProperty('--bg-card-hover', randomTheme.color1)
      document.documentElement.style.setProperty('--font-family', `'${randomTheme.font}', sans-serif`)
    }
  }, [theme, randomTheme])

  return (
    <div className={`app theme-${theme}`}>
      <MouseHalo />
      <Header
        themePicker={<ThemePicker currentTheme={theme} onThemeChange={handleThemeChange} />}
      />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      {/* <footer className="footer">
        <p>&copy; 2026 Mon Portfolio. Tous droits réservés.</p>
      </footer> */}
    </div>
  )
}

export default App
