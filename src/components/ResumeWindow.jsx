import Window from "./Window";

function ResumeWindow({ onClose, onMinimize }) {
  return (
    <Window
      title="Resume"
      icon="📄"
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div className="resume-window">
        <div className="resume-header">
          <div>
            <span className="resume-label">DOCUMENT</span>
            <h2>Pallavi Sharma — Resume</h2>
            <p>Software Developer</p>
          </div>

          <a
            href="/resume.pdf"
            download="Pallavi-Sharma-Resume.pdf"
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
}

export default ResumeWindow;