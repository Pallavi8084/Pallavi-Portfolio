const achievements = [
  {
    icon: "🏆",
    title: "Technical Ideathon",
    subtitle: "IIT Roorkee",
    description:
      "Participated in a technical ideathon and worked on problem-solving and innovation."
  },
  {
    icon: "🎓",
    title: "Web Development",
    subtitle: "IIT Bombay",
    description:
      "Completed certification/training related to web development."
  },
  {
    icon: "🐍",
    title: "Python Programming",
    subtitle: "IIT Bombay",
    description:
      "Completed Python programming certification/training."
  },
  {
    icon: "💡",
    title: "Smart India Hackathon",
    subtitle: "Participant",
    description:
      "Participated in Smart India Hackathon."
  },
  {
    icon: "⚡",
    title: "IEEE",
    subtitle: "Member & Volunteer",
    description:
      "Member and volunteer associated with IEEE activities."
  }
];

function AchievementsWindow() {
  return (
    <div className="content-window">
      <div className="section-heading">
        <div>
          <span className="section-label">
            SYSTEM MILESTONES
          </span>

          <h2>Achievements</h2>
        </div>
      </div>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={item.title}>
            <div className="achievement-icon">
              {item.icon}
            </div>

            <span className="achievement-number">
              0{index + 1}
            </span>

            <h3>{item.title}</h3>

            <h4>{item.subtitle}</h4>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementsWindow;