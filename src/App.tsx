import React from "react";
import {
  CssBaseline,
  ThemeProvider,
  createMuiTheme,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";
import TipsCalculator from "./TipsCalculator";
import MoreVert from '@material-ui/icons/MoreVert';
import Dark from '@material-ui/icons/Brightness4';

const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const lightTheme = createMuiTheme({
  palette: {
    type: "light"
  }
});

function ControlsBar({onToggleTheme, isDark}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleTheme = () => {
    onToggleTheme();
    handleClose();
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar variant="dense">
        <div style={{flexGrow: 1}}></div>
        <div>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVert />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleToggleTheme}>
              <ListItemIcon>
                <Dark />
              </ListItemIcon>
              Dark theme: {isDark ? "On" : "Off"}
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

function App() {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <ControlsBar isDark={isDark} onToggleTheme={e => setIsDark(!isDark)} />
      <CssBaseline />
      <TipsCalculator />
    </ThemeProvider>
  );
}

export default App;
