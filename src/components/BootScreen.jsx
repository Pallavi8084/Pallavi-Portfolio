import { useEffect, useState } from "react";

export default function BootScreen({ onEnter }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          clearInterval(interval);
          return 100;
        }

        return current + 2;
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  const ready = progress >= 100;

  return (
    <div className="boot-screen">
      <div className="boot-grid" />

      <div className="boot-content">

        {/* LOGO */}
        <div className="boot-logo">
          <span>&lt;</span>
          PALLAVI
          <span>/&gt;</span>
        </div>

        <div className="boot-subtitle">
          FULL-STACK DEVELOPER
        </div>

        {/* TERMINAL */}
        <div className="boot-terminal">

          <div className="terminal-top">
            <div className="terminal-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>

            <div className="terminal-name">
              pallavi@developer:~
            </div>
          </div>

          <div className="terminal-content">

            <p>
              <span className="green">$</span>{" "}
              initializing pallavi.os
            </p>

            <p>
              <span className="green">✓</span>{" "}
              React.js
            </p>

            <p>
              <span className="green">✓</span>{" "}
              Node.js
            </p>

            <p>
              <span className="green">✓</span>{" "}
              Express.js
            </p>

            <p>
              <span className="green">✓</span>{" "}
              MongoDB
            </p>

            <p>
              <span className="green">✓</span>{" "}
              Full-Stack Environment
            </p>

            {/* PROGRESS */}
            <div className="progress-container">

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <span className="progress-value">
                {progress}%
              </span>

            </div>

            {ready && (
              <p className="system-ready">
                System ready.
              </p>
            )}

          </div>
        </div>

        {/* ENTER BUTTON */}
        <button
          className={`enter-button ${
            ready ? "enter-active" : ""
          }`}
          disabled={!ready}
          onClick={onEnter}
        >
          ENTER PALLAVI.OS
          <span>→</span>
        </button>

        <div className="boot-version">
          v1.0.0&nbsp;&nbsp; • &nbsp;&nbsp;Developer Edition
        </div>

      </div>
    </div>
  );
}