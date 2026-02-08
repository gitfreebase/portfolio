function ThemePicker({ currentTheme, onThemeChange }) {
  return (
    <div className="theme-picker">
      <button
        className={`theme-button ${currentTheme === 'neutral' ? 'active' : ''}`}
        onClick={() => onThemeChange('neutral')}
        aria-label="Thème Noir & Blanc"
      >
        <span
          className="theme-color"
          style={{ backgroundColor: '#2a2a2a' }}
        />
      </button>
      <button
        className={`theme-button theme-random ${currentTheme === 'random' ? 'active' : ''}`}
        onClick={() => onThemeChange('random')}
        aria-label="Thème Aléatoire"
      >
        <span className="theme-color theme-color-random">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 4L22 8L18 12M6 20L2 16L6 12M8 4H13.5C15.71 4 17.39 5.68 17.39 7.89V8M16 20H10.5C8.29 20 6.61 18.32 6.61 16.11V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </div>
  )
}

export default ThemePicker
