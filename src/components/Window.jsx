import { useState } from "react";

function Window({
  title,
  icon,
  children,
  onClose,
  onMinimize,
  onFocus,
  active = true,
}) {
  const [maximized, setMaximized] = useState(false);

  const toggleMaximize = () => {
    setMaximized((value) => !value);
    onFocus?.();
  };

  return (
    <section
      className={`os-window ${maximized ? "is-maximized" : ""} ${
        active ? "is-active" : ""
      }`}
      onMouseDown={onFocus}
      onTouchStart={onFocus}
      aria-label={`${title} window`}
    >
      <div className="window-header" onDoubleClick={toggleMaximize}>
        <div className="window-title">
          <span className="window-title-icon">{icon}</span>
          <strong>{title}</strong>
        </div>

        <div className="window-controls">
          <button
            type="button"
            className="window-control minimize"
            onClick={(event) => {
              event.stopPropagation();
              onMinimize?.();
            }}
            aria-label={`Minimize ${title}`}
            title="Minimize"
          >
            −
          </button>
          <button
            type="button"
            className="window-control maximize"
            onClick={(event) => {
              event.stopPropagation();
              toggleMaximize();
            }}
            aria-label={`${maximized ? "Restore" : "Maximize"} ${title}`}
            title={maximized ? "Restore" : "Maximize"}
          >
            {maximized ? "❐" : "□"}
          </button>
          <button
            type="button"
            className="window-control close"
            onClick={(event) => {
              event.stopPropagation();
              onClose?.();
            }}
            aria-label={`Close ${title}`}
            title="Close"
          >
            ×
          </button>
        </div>
      </div>

      <div className="window-body">{children}</div>
    </section>
  );
}

export default Window;
