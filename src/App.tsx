import React, { useEffect } from "react";
import TipsCalculator from "./TipsCalculator";
import ControlsBar from "./ControlsBar";
import { Theme } from "react-daisyui";
import { prefersDarkMode } from "./utils/prefersDarkMode";

function App() {
  const [isDark, setIsDark] = React.useState(prefersDarkMode());
  const theme = isDark ? "dark" : "light";

  useEffect(() => {
    document.getElementsByTagName("html")[0]?.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const el = document.getElementById("tipInput");
    el?.focus();
    console.log(el);
  }, []);

  return (
    <Theme dataTheme={theme}>
      <ControlsBar
        isDark={isDark}
        onToggleTheme={() => {
          setIsDark(!isDark);
        }}
      />
      <TipsCalculator />
    </Theme>
  );
}

export default App;
