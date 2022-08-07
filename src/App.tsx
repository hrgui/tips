import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import TipsCalculator from "./TipsCalculator";
import ControlsBar from "./ControlsBar";
import { Theme, Button } from "react-daisyui";

function App() {
  const [isDark, setIsDark] = React.useState(false);
  const theme = isDark ? "dark" : "light";
  return (
    <Theme dataTheme={theme}>
      <ControlsBar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
      <TipsCalculator />
    </Theme>
  );
}

export default App;
