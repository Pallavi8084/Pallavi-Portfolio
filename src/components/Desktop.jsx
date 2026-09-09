import { useEffect, useState } from "react";

import Window from "./Window";
import ProjectsWindow from "./ProjectsWindow";
import AboutWindow from "./AboutWindow";
import SkillsWindow from "./SkillsWindow";
import ExperienceWindow from "./ExperienceWindow";
import AchievementsWindow from "./AchievementsWindow";
import ContactWindow from "./ContactWindow";
import TerminalWindow from "./TerminalWindow";

function Desktop({ onReboot }) {
  /* =====================================================
     LIVE CLOCK
  ===================================================== */

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* =====================================================
     FORMAT TIME
  ===================================================== */

  const formattedTime = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  /* =====================================================
     FORMAT DATE
  ===================================================== */

  const formattedDate = currentTime.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  /* =====================================================
     WINDOW STATE
  ===================================================== */

  const [openWindows, setOpenWindows] = useState([]);

  const [startMenuOpen, setStartMenuOpen] = useState(false);

  const [githubCount, setGithubCount] = useState("09");
  const [focusedWindow, setFocusedWindow] = useState(null);

  /* =====================================================
     GITHUB REPOSITORY COUNT
  ===================================================== */

  useEffect(() => {
    fetch(
      "https://api.github.com/users/Pallavi8084/repos?per_page=100"
    )
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setGithubCount(String(data.length).padStart(2, "0"));
        }
      })
      .catch(() => {
        setGithubCount("09");
      });
  }, []);

  /* =====================================================
     OPEN WINDOW
  ===================================================== */

  const openWindow = (windowName) => {
    setStartMenuOpen(false);
    setFocusedWindow(windowName);

    setOpenWindows((previous) => {
      if (previous.includes(windowName)) {
        return previous;
      }

      return [...previous, windowName];
    });
  };

  /* =====================================================
     CLOSE WINDOW
  ===================================================== */

  const closeWindow = (windowName) => {
    setOpenWindows((previous) =>
      previous.filter((item) => item !== windowName)
    );
  };

  /* =====================================================
     TOGGLE WINDOW
  ===================================================== */

  const toggleWindow = (windowName) => {
    if (openWindows.includes(windowName)) {
      setFocusedWindow(windowName);
    } else {
      openWindow(windowName);
    }
  };

  const focusWindow = (windowName) => {
    setFocusedWindow(windowName);
  };

  /* =====================================================
     APPLICATIONS
  ===================================================== */

  const applications = [
    {
      id: "about",
      icon: "👩‍💻",
      title: "About Me",
      description: "Developer profile",
    },
    {
      id: "skills",
      icon: "⚡",
      title: "Skills",
      description: "Technology stack",
    },
    {
      id: "projects",
      icon: "🚀",
      title: "Projects",
      description: "Featured work",
    },
    {
      id: "experience",
      icon: "💼",
      title: "Experience",
      description: "Professional journey",
    },
    {
      id: "achievements",
      icon: "🏆",
      title: "Achievements",
      description: "Certifications & awards",
    },
    {
      id: "resume",
      icon: "📄",
      title: "Resume",
      description: "View full resume",
    },
    {
      id: "contact",
      icon: "✉️",
      title: "Contact",
      description: "Get in touch",
    },
    {
      id: "terminal",
      icon: "⌘",
      title: "Terminal",
      description: "Command interface",
    },
  ];

  /* =====================================================
     RECENT PROJECTS
  ===================================================== */

  const recentProjects = [
    {
      number: "01",
      type: "FULL STACK",
      title: "ERP Management System",
      description:
        "Enterprise Resource Planning management system built with React, Node.js, Express and MongoDB.",
      window: "projects",
    },
    {
      number: "02",
      type: "FULL STACK",
      title: "Job Portal",
      description:
        "Full-stack platform connecting job seekers and recruiters with role-based functionality.",
      window: "projects",
    },
    {
      number: "03",
      type: "WEB",
      title: "Influencer Portfolio",
      description:
        "Responsive portfolio website with featured content, collaborations and social links.",
      window: "projects",
    },
  ];

  /* =====================================================
     RENDER WINDOW
  ===================================================== */

  const windowProps = (windowName) => ({
    onClose: () => closeWindow(windowName),
    onMinimize: () => closeWindow(windowName),
    onFocus: () => focusWindow(windowName),
    active: focusedWindow === windowName,
  });

  const renderWindow = (windowName) => {
    switch (windowName) {
      case "about":
        return (
          <Window
            title="About Me"
            icon="👩‍💻"
            {...windowProps("about")}
          >
            <AboutWindow />
          </Window>
        );

      case "skills":
        return (
          <Window
            title="Skills"
            icon="⚡"
            {...windowProps("skills")}
          >
            <SkillsWindow />
          </Window>
        );

      case "projects":
        return (
          <Window
            title="Projects"
            icon="🚀"
            {...windowProps("projects")}
          >
            <ProjectsWindow />
          </Window>
        );

      case "experience":
        return (
          <Window
            title="Experience"
            icon="💼"
            {...windowProps("experience")}
          >
            <ExperienceWindow />
          </Window>
        );

      case "achievements":
        return (
          <Window
            title="Achievements"
            icon="🏆"
            {...windowProps("achievements")}
          >
            <AchievementsWindow />
          </Window>
        );

      case "resume":
        return (
          <Window
            title="Resume"
            icon="📄"
            {...windowProps("resume")}
          >
            <div className="resume-window">
              <div className="resume-header">
                <div>
                  <div className="resume-label">
                    DOCUMENT / PROFILE
                  </div>

                  <h2>Pallavi Sharma — Resume</h2>

                  <p>
                    Full Stack Developer · React · Node.js
                  </p>
                </div>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="resume-download"
                >
                  ↓ Download Resume
                </a>
              </div>

              <div className="resume-preview">
                <iframe
                  src="/resume.pdf"
                  title="Pallavi Sharma Resume"
                />
              </div>
            </div>
          </Window>
        );

      case "contact":
        return (
          <Window
            title="Contact"
            icon="✉️"
            {...windowProps("contact")}
          >
            <ContactWindow />
          </Window>
        );

      case "terminal":
        return (
          <Window
            title="Terminal"
            icon="⌘"
            {...windowProps("terminal")}
          >
            <TerminalWindow openWindow={openWindow} />
          </Window>
        );

      default:
        return null;
    }
  };

  return (
    <div className="desktop">

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="desktop-grid"></div>

      <div className="desktop-glow glow-one"></div>
      <div className="desktop-glow glow-two"></div>

      {/* =================================================
          TOP BAR
      ================================================= */}

      <header className="top-bar">

        <div className="top-left">

          <div className="top-logo">
            P
          </div>

          <div className="top-title">
            <strong>PALLAVI.OS</strong>
            <span>Developer Workspace</span>
          </div>

        </div>

        <div className="top-status">
          <span className="status-dot"></span>
          SYSTEM ONLINE
        </div>

        <div className="top-time">
          {formattedTime}
        </div>

      </header>

      {/* =================================================
          MAIN DESKTOP CONTENT
      ================================================= */}

      <main className="desktop-content">

        <div className="workspace-label">
          <span></span>
          DEVELOPER WORKSPACE
        </div>

        {/* ===============================================
            HERO
        =============================================== */}

        <section className="hero-section">

          <div className="hero-content">

            <div className="hero-small">
              SOFTWARE DEVELOPER
            </div>

            <h1>
              Building digital
              <br />
              <span>experiences</span>
              <br />
              that matter.
            </h1>

            <p>
              Full-stack developer focused on building
              modern, scalable and user-friendly web
              applications.
            </p>

            <div className="hero-actions">

              <button
                className="primary-button"
                onClick={() => openWindow("projects")}
              >
                🚀 Explore Projects
              </button>

              <button
                className="secondary-button"
                onClick={() => openWindow("resume")}
              >
                📄 View Resume
              </button>

            </div>

          </div>

          {/* =============================================
              PROFILE CARD
          ============================================= */}

          <div className="profile-card">

            <div className="profile-card-top">

              <span>PROFILE</span>

              <div className="profile-online">
                <span></span>
                AVAILABLE
              </div>

            </div>

            <div className="profile-avatar">
              P
            </div>

            <h2>
              Pallavi Sharma
            </h2>

            <p>
              Full Stack Developer
            </p>

            <div className="profile-divider"></div>

            <div className="profile-info">

              <div>
                <span>LOCATION</span>
                <strong>India</strong>
              </div>

              <div>
                <span>FOCUS</span>
                <strong>Web Development</strong>
              </div>

              <div>
                <span>STACK</span>
                <strong>React / Node</strong>
              </div>

            </div>

          </div>

        </section>

        {/* ===============================================
            STATS
        =============================================== */}

        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-number">
              03
            </div>

            <div className="stat-label">
              FEATURED
              <br />
              PROJECTS
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-number">
              {githubCount}
            </div>

            <div className="stat-label">
              GITHUB
              <br />
              REPOSITORIES
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-number">
              02
            </div>

            <div className="stat-label">
              INTERNSHIP
              <br />
              EXPERIENCES
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-number">
              ∞
            </div>

            <div className="stat-label">
              LINES OF
              <br />
              CODE
            </div>
          </div>

        </section>

        {/* ===============================================
            RECENT PROJECTS
        =============================================== */}

        <section className="recent-section">

          <div className="section-top">

            <div>
              <div className="section-code">
                /01 — SELECTED WORK
              </div>

              <h2>
                Recent Projects
              </h2>
            </div>

            <button
              className="text-button"
              onClick={() => openWindow("projects")}
            >
              VIEW ALL →
            </button>

          </div>

          <div className="recent-project-grid">

            {recentProjects.map((project) => (

              <button
                key={project.number}
                className="recent-project"
                onClick={() => openWindow(project.window)}
              >

                <div className="project-number">
                  {project.number}
                </div>

                <div>

                  <div className="project-type">
                    {project.type}
                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                </div>

                <div className="project-arrow">
                  ↗
                </div>

              </button>

            ))}

          </div>

        </section>

      </main>

      {/* =================================================
          OPEN WINDOWS
      ================================================= */}

      <div className="windows-layer">

        {openWindows.map((windowName, index) => (
          <div
            key={windowName}
            className="window-instance"
            style={{ zIndex: focusedWindow === windowName ? 100 : index + 1 }}
          >
            {renderWindow(windowName)}
          </div>
        ))}

      </div>

      {/* =================================================
          START MENU
      ================================================= */}

      {startMenuOpen && (

        <div className="start-menu">

          <div className="start-menu-header">

            <div className="start-brand">

              <div className="start-logo">
                P
              </div>

              <div>
                <strong>
                  PALLAVI.OS
                </strong>

                <span>
                  Developer Workspace
                </span>
              </div>

            </div>

            <button
              className="start-close"
              onClick={() => setStartMenuOpen(false)}
            >
              ×
            </button>

          </div>

          <div className="start-menu-actions">
            <button type="button" className="reboot-button" onClick={onReboot}>
              <span>↻</span>
              <div>
                <strong>Restart PALLAVI.OS</strong>
                <small>Return to boot screen</small>
              </div>
            </button>
          </div>

          <div className="application-list">

            {applications.map((app) => (

              <button
                key={app.id}
                className="application-item"
                onClick={() => openWindow(app.id)}
              >

                <div className="application-icon">
                  {app.icon}
                </div>

                <div className="application-details">

                  <strong>
                    {app.title}
                  </strong>

                  <small>
                    {app.description}
                  </small>

                </div>

                <div className="application-arrow">
                  →
                </div>

              </button>

            ))}

          </div>

        </div>

      )}

      {/* =================================================
          TASKBAR
      ================================================= */}

      <footer className="taskbar">

        {/* START */}

        <button
          className={`taskbar-start ${
            startMenuOpen ? "active" : ""
          }`}
          onClick={() =>
            setStartMenuOpen((previous) => !previous)
          }
          aria-label="Open Start Menu"
        >
          P
        </button>

        {/* OPEN APPLICATIONS */}

        <div className="taskbar-apps">

          {openWindows.map((windowName) => {

            const app = applications.find(
              (item) => item.id === windowName
            );

            if (!app) return null;

            return (
              <button
                key={windowName}
                className="taskbar-app"
                onClick={() => toggleWindow(windowName)}
              >
                <span>{app.icon}</span>

                <small>
                  {app.title}
                </small>
              </button>
            );

          })}

        </div>

        {/* RIGHT SIDE */}

        <div className="taskbar-right">

          <div className="taskbar-status">
            <span></span>
            ONLINE
          </div>

          <div className="taskbar-clock">

            <strong>
              {formattedTime}
            </strong>

            <small>
              {formattedDate}
            </small>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Desktop;