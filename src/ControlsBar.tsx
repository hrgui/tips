import React from "react";
import { MouseEventHandler } from "react";

type Props = {
  onToggleTheme?: () => void;
  isDark?: boolean;
};

export function ControlsBar({ onToggleTheme, isDark }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  //TODO: click outside doesnt work
  const handleButtonClick = () => {
    ref.current?.classList.toggle("dropdown-open");
    (document.activeElement as HTMLLabelElement).blur();
  };

  const handleToggleTheme = () => {
    onToggleTheme?.();
    handleButtonClick();
  };

  return (
    <div className="flex justify-end">
      <div className="dropdown dropdown-end" ref={ref}>
        <label
          tabIndex={0}
          className="btn btn-ghost m-1"
          aria-label="Options"
          onClick={handleButtonClick}
        >
          <span className="material-symbols-outlined">more_vert</span>
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <button onClick={handleToggleTheme}>Dark theme: {isDark ? "On" : "Off"}</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ControlsBar;
