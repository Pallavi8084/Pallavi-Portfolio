import { useEffect, useRef, useState } from "react";

function TerminalWindow({ openWindow }) {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [history]);

  const executeCommand = (event) => {
    if (event.key !== "Enter") return;

    const cmd = command.trim().toLowerCase();
    if (cmd === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }

    const commands = {
      help: "Available: about, skills, projects, experience, achievements, contact, resume, clear, date, whoami",
      about: "Opening About...",
      skills: "Opening Skills...",
      projects: "Opening Projects...",
      experience: "Opening Experience...",
      achievements: "Opening Achievements...",
      contact: "Opening Contact...",
      resume: "Opening Resume...",
      date: new Date().toString(),
      whoami: "Pallavi Sharma — Full Stack Developer",
    };

    let output = commands[cmd] ?? `Command not found: ${cmd}`;

    if (["about", "skills", "projects", "experience", "achievements", "contact", "resume"].includes(cmd)) {
      openWindow?.(cmd);
    }

    if (cmd === "") output = "";

    setHistory((previous) => [...previous, { command: cmd, output }]);
    setCommand("");
  };

  return (
    <div className="terminal-window">
      <div className="terminal-top">
        <span>pallavi@pallavi-os</span>
        <div aria-hidden="true">
          <span>●</span><span>●</span><span>●</span>
        </div>
      </div>

      <div className="terminal-body" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
        <div className="terminal-welcome">
          <p>PALLAVI.OS TERMINAL v1.0</p>
          <p>Type <strong>help</strong> to see available commands.</p>
        </div>

        {history.map((item, index) => (
          <div key={`${item.command}-${index}`}>
            <p>
              <span className="terminal-prompt">pallavi@os:~$</span> {item.command}
            </p>
            {item.output && <p className="terminal-result">{item.output}</p>}
          </div>
        ))}

        <div className="terminal-input-line">
          <span className="terminal-prompt">pallavi@os:~$</span>
          <input
            ref={inputRef}
            aria-label="Terminal command"
            autoComplete="off"
            spellCheck="false"
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            onKeyDown={executeCommand}
          />
          <span className="terminal-cursor" />
        </div>
      </div>
    </div>
  );
}

export default TerminalWindow;
