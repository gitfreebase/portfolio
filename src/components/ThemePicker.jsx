function ThemePicker({ currentTheme, onThemeChange }) {
  const themes = [
    { name: 'neutral', label: 'Noir & Blanc', color: '#2a2a2a' },
    { name: 'blue', label: 'Rose Pastel', color: '#ff6b6b' },
    { name: 'green', label: 'Violet Pastel', color: '#6366f1' }
  ]

  return (
    <div className="theme-picker">
      {themes.map(theme => (
        <button
          key={theme.name}
          className={`theme-button ${currentTheme === theme.name ? 'active' : ''}`}
          onClick={() => onThemeChange(theme.name)}
          aria-label={`Thème ${theme.label}`}
        >
          <span
            className="theme-color"
            style={{ backgroundColor: theme.color }}
          />
        </button>
      ))}
    </div>
  )
}

export default ThemePicker
