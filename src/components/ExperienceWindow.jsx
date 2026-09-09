const experience = [
  {
    company: "Stockfinz",
    role: "Full Stack Developer Intern",
    date: "APR 2025 — JUN 2025",
    description:
      "Worked on full-stack development and contributed to web application development using modern development technologies."
  },
  {
    company: "Krishnova LLP",
    role: "Associate Software Engineer Intern",
    date: "JUN 2026 — AUG 2026",
    description:
      "Contributed to software development activities and worked with application development workflows."
  }
];

function ExperienceWindow() {
  return (
    <div className="content-window">
      <div className="section-heading">
        <div>
          <span className="section-label">
            CAREER TIMELINE
          </span>

          <h2>Experience</h2>
        </div>
      </div>

      <div className="timeline">
        {experience.map((item, index) => (
          <div className="timeline-item" key={item.company}>
            <div className="timeline-line">
              <div className="timeline-dot">
                {index + 1}
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <span className="experience-date">
                    {item.date}
                  </span>

                  <h3>{item.role}</h3>

                  <h4>{item.company}</h4>
                </div>

                <span className="experience-status">
                  COMPLETED
                </span>
              </div>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceWindow;