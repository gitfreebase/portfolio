import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ThemePicker from './components/ThemePicker'
import MouseHalo from './components/MouseHalo'

function App() {
  const [theme, setTheme] = useState('neutral')

  return (
    <div className={`app theme-${theme}`}>
      <MouseHalo />
      <Header
        themePicker={<ThemePicker currentTheme={theme} onThemeChange={setTheme} />}
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
