function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Contactez-moi</h2>
        <div className="contact-content">
          <p>Vous avez un projet en tête ? N'hésitez pas à me contacter !</p>
          <div className="contact-links">
            <a href="mailto:contact@example.com" className="contact-link">
              Email
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
