function Header({ themePicker }) {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-wrapper">
          <div className="logo-marquee">
            <span className="logo logo-archivo">coucou camille</span>
            <span className="logo logo-flor">coucou camille</span>
            <span className="logo logo-fungal">coucou camille</span>
            <span className="logo logo-garamont">coucou camille</span>
            <span className="logo logo-mess">coucou camille</span>
            <span className="logo logo-nimbus">coucou camille</span>
            <span className="logo logo-quarantype">coucou camille</span>
            <span className="logo logo-archivo">coucou camille</span>
            <span className="logo logo-flor">coucou camille</span>
            <span className="logo logo-fungal">coucou camille</span>
            <span className="logo logo-garamont">coucou camille</span>
            <span className="logo logo-mess">coucou camille</span>
            <span className="logo logo-nimbus">coucou camille</span>
            <span className="logo logo-quarantype">coucou camille</span>
          </div>
        </div>
        {themePicker}
      </div>
    </header>
  )
}

export default Header
