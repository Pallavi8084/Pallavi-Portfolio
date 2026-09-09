const skills = [
  {
    category: "FRONTEND",
    items: ["React.js", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "BACKEND",
    items: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    category: "DATABASE",
    items: ["MongoDB", "MySQL", "SQL"]
  },
  {
    category: "PROGRAMMING",
    items: ["C++", "Java", "DSA"]
  },
  {
    category: "TOOLS",
    items: ["Git", "GitHub", "JWT"]
  },
  {
    category: "CORE",
    items: ["DBMS", "Authentication", "CRUD"]
  }
];

function SkillsWindow() {
  return (
    <div className="content-window">
      <div className="section-heading">
        <div>
          <span className="section-label">
            SYSTEM CAPABILITIES
          </span>

          <h2>Technical Skills</h2>
        </div>
      </div>

      <div className="skills-grid">
        {skills.map((group, index) => (
          <div className="skill-card" key={group.category}>
            <div className="skill-number">
              0{index + 1}
            </div>

            <h3>{group.category}</h3>

            <div className="skill-tags">
              {group.items.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skill-visual">
        <div className="skill-orbit orbit-one" />
        <div className="skill-orbit orbit-two" />

        <div className="skill-core">
          <span>DEV</span>
          <strong>STACK</strong>
        </div>
      </div>
    </div>
  );
}

export default SkillsWindow;