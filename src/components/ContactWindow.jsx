function ContactWindow() {
  return (
    <div className="content-window contact-window">
      <div className="contact-intro">
        <span className="section-label">
          CONNECTION PORT
        </span>

        <h1>
          Let's build
          <span> something.</span>
        </h1>

        <p>
          Have a project, opportunity or idea?
          Let's connect.
        </p>
      </div>

      <div className="contact-grid">
        <a
          href="mailto:pallavish3006@gmail.com"
          className="contact-card"
        >
          <span className="contact-icon">✉</span>

          <div>
            <span>EMAIL</span>
            <strong>
              pallavish3006@gmail.com
            </strong>
          </div>

          <span>↗</span>
        </a>

        <a
          href="https://github.com/Pallavi8084"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <span className="contact-icon">⌘</span>

          <div>
            <span>GITHUB</span>
            <strong>
              github.com/Pallavi8084
            </strong>
          </div>

          <span>↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/sharma-pallavi-485261298/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <span className="contact-icon">in</span>

          <div>
            <span>LINKEDIN</span>
            <strong>
              Connect professionally
            </strong>
          </div>

          <span>↗</span>
        </a>
      </div>

      <div className="availability">
        <span className="status-dot" />
        <span>AVAILABLE FOR OPPORTUNITIES</span>
      </div>
    </div>
  );
}

export default ContactWindow;