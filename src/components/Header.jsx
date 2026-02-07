function Header({ themePicker }) {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Coucou Camille</h1>
        {themePicker}
      </div>
    </header>
  )
}

export default Header
