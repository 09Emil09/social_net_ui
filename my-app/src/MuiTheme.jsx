import {
    createTheme,
    ThemeProvider,
    CssBaseline,
  } from "@mui/material";
  
  export const MUI_THEME =
    createTheme({
      palette: {
        primary: {
          main: "#FFFFFF",
        },
        secondary: {
          main: "#F3F4F9",
          accent: "lightgray",
        },
        accent: {
          main: "#06357B",
          accent: "sandybrown",
        }

      },
      typography: {
        button: {
          textTransform: "none",
        },
        fontFamily: [
          'Montserrat',
          "sans-serif",
        ].join(","),
        fontWeightLight: 300,
        fontWeightMedium: 400,
        fontWeightRegular: 500,
        fontWeightBold: 600,
        letterSpacing: "0.06rem",
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            html: {
              height: "100%",
              overflowY: "scroll",
              fontFamily: "Montserrat",
            },
            body: {
              height: "100%",
            },
            "#root, main": {
              minHeight: "100%",
              display: "flex",
              flexDirection: "column",
            },
          },
        },
      },
      shape: {
        borderRadius: 0,
      },
    });
  
  const MuiTheme = (props) => {
    return (
      <ThemeProvider theme={MUI_THEME}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    );
  };
  
export default MuiTheme;