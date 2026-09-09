function AboutWindow() {
  return (
    <div className="content-window">

      <div className="profile-hero">

        <div className="profile-avatar">
          P
        </div>

        <div>
          <span className="section-label">
            DEVELOPER PROFILE
          </span>

          <h1>
            Pallavi
            <span> Sharma</span>
          </h1>

          <p className="profile-role">
            Full Stack Developer
          </p>
        </div>

      </div>


      <div className="about-grid">

        <div className="info-card">

          <span>01</span>

          <h3>
            Who I Am
          </h3>

          <p>
            I am a software developer passionate about
            building modern, scalable and user-focused
            applications.
          </p>

        </div>


        <div className="info-card">

          <span>02</span>

          <h3>
            What I Build
          </h3>

          <p>
            Full-stack web applications using modern
            JavaScript technologies, REST APIs and
            database systems.
          </p>

        </div>


        <div className="info-card">

          <span>03</span>

          <h3>
            Education
          </h3>

          <div className="education-list">

            <div className="education-item">

              <h4>
                Uttarakhand Technical University
              </h4>

              <p>
                B.Tech — Computer Science & Engineering
              </p>

              <small>
                2023 – 2027
              </small>

            </div>


            <div className="education-item">

              <h4>
                Magadh University [BSEB]
              </h4>

              <p>
                Intermediate
              </p>

              <small>
                2020 – 2022
              </small>

            </div>


            <div className="education-item">

              <h4>
                Bal Vidya Niketan [CBSE]
              </h4>

              <p>
                Matriculation
              </p>

              <small>
                2019 – 2020
              </small>

            </div>

          </div>

        </div>

      </div>


      <div className="about-terminal">

        <div className="terminal-header">

          <span>
            about.exe
          </span>

          <span>
            ● ● ●
          </span>

        </div>


        <div className="terminal-content">

          <p>
            <span>
              pallavi@developer:~$
            </span>{" "}
            whoami
          </p>

          <p className="terminal-output">
            Full Stack Developer
          </p>


          <p>
            <span>
              pallavi@developer:~$
            </span>{" "}
            status
          </p>

          <p className="terminal-output success">
            Available for opportunities
          </p>

        </div>

      </div>

    </div>
  );
}

export default AboutWindow;