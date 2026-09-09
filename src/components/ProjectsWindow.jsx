import { useEffect, useState } from "react";
import Window from "./Window";

const featuredProjects = [
  {
    id: "erp",
    number: "01",
    icon: "🏢",
    title: "Enterprise Resource Planning Management System",
    shortTitle: "ERP Management System",
    type: "FULL STACK",
    description:
      "A full-stack ERP management system designed to centralize business operations with authentication, authorization, CRUD workflows, database integration and business processes.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    live:
      "https://erp-frontend-86o6.onrender.com/",
    github: null,
  },

  {
    id: "job",
    number: "02",
    icon: "💼",
    title: "Job Portal",
    shortTitle: "Job Portal",
    type: "FULL STACK",
    description:
      "A full-stack job portal connecting job seekers and recruiters with job searching, filtering, job posting, application management and role-based functionality.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    live: null,
    github: null,
  },

  {
    id: "influencer",
    number: "03",
    icon: "🎨",
    title: "Influencer Portfolio",
    shortTitle: "Influencer Portfolio",
    type: "FRONTEND",
    description:
      "A responsive portfolio website featuring profile information, featured content, collaborations, social media links and a mobile-friendly user interface.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    live:
      "https://portfolio-nine-lake-29.vercel.app/",
    github:
      "https://github.com/Pallavi8084/Influencers-portfolio",
  },
];

function ProjectsWindow({
  onClose,
  onMinimize,
}) {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Pallavi8084/repos?per_page=100&sort=updated"
        );

        if (!response.ok) {
          throw new Error("GitHub request failed");
        }

        const data = await response.json();

        setRepositories(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadRepositories();
  }, []);

  return (
    <Window
      title="Projects"
      icon="🚀"
      onClose={onClose}
      onMinimize={onMinimize}
    >

      <div className="projects-window">

        <div className="projects-content">

          {/* ================= FEATURED ================= */}

          <section className="project-section">

            <div className="section-heading">

              <div>
                <span>
                  /01
                </span>

                <h2>
                  Featured Projects
                </h2>
              </div>

              <small>
                FROM RESUME
              </small>

            </div>


            <div className="featured-projects">

              {featuredProjects.map((project) => (

                <article
                  className="featured-project-card"
                  key={project.id}
                >

                  <div className="featured-top">

                    <div className="featured-number">
                      {project.number}
                    </div>

                    <div className="featured-icon">
                      {project.icon}
                    </div>

                    <span className="featured-type">
                      {project.type}
                    </span>

                  </div>


                  <div className="featured-main">

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>


                    <div className="tech-list">

                      {project.tech.map((tech) => (
                        <span key={tech}>
                          {tech}
                        </span>
                      ))}

                    </div>

                  </div>


                  <div className="project-actions">

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link primary"
                      >
                        ↗ Live Demo
                      </a>
                    ) : (
                      <span className="project-link disabled">
                        Live Demo unavailable
                      </span>
                    )}


                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link secondary"
                      >
                        GitHub ↗
                      </a>
                    ) : (
                      <span className="project-link disabled">
                        GitHub unavailable
                      </span>
                    )}

                  </div>

                </article>

              ))}

            </div>

          </section>


          {/* ================= GITHUB ================= */}

          <section className="project-section github-section">

            <div className="section-heading">

              <div>

                <span>
                  /02
                </span>

                <h2>
                  GitHub Repositories
                </h2>

              </div>


              <a
                href="https://github.com/Pallavi8084"
                target="_blank"
                rel="noreferrer"
                className="github-profile-link"
              >
                VIEW PROFILE ↗
              </a>

            </div>


            {loading ? (

              <div className="github-loading">

                <div className="loading-spinner"></div>

                <span>
                  Fetching repositories...
                </span>

              </div>

            ) : repositories.length === 0 ? (

              <div className="github-empty">
                No repositories found.
              </div>

            ) : (

              <div className="github-grid">

                {repositories.map((repo) => (

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="github-card"
                    key={repo.id}
                  >

                    <div className="github-card-top">

                      <span className="github-icon">
                        ⌁
                      </span>

                      <span className="github-arrow">
                        ↗
                      </span>

                    </div>


                    <h3>
                      {repo.name}
                    </h3>


                    <p>
                      {repo.description ||
                        "No repository description available."}
                    </p>


                    <div className="github-meta">

                      <span>
                        {repo.language || "Code"}
                      </span>

                      <span>
                        ★ {repo.stargazers_count}
                      </span>

                      <span>
                        ◇ {repo.forks_count}
                      </span>

                    </div>

                  </a>

                ))}

              </div>

            )}

          </section>


          {/* ================= END ================= */}

          <div className="projects-footer">

            <span>
              END OF PROJECT DIRECTORY
            </span>

            <span>
              Pallavi8084 / GitHub
            </span>

          </div>

        </div>

      </div>

    </Window>
  );
}

export default ProjectsWindow;