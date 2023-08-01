import { ThemeOptions } from "@mui/material";
import { tokens } from "./tokens";
import { components } from "./components";
import { green } from "@mui/material/colors";

export const themeSettings = (mode: "light" | "dark"): ThemeOptions => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
              dark: colors.primary[400],
              light: colors.primary[300],
            },
            secondary: {
              main: colors.greenAccent[300],
              dark: colors.greenAccent[500],
              light: colors.greenAccent[100],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              //default: colors.primary[500],
              default: "#28243D",
              paper: "#312D4B",
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
              dark: colors.greenAccent[300],
              light: colors.greenAccent[100],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#F4F5FA",
              paper: "#FFF",
            },
            divider: "#F2F4F7",
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 18,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
    },
    spacing: (spacingValue: 0 | 1 | 2 | 3 | 4 | 5 | 6) => {
      return spacingValue * 8;
    },
    components: components,
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
    },
  };
};
