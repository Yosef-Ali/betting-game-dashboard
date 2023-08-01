import "@refinedev/mui";

export interface CustomTheme {
  palette?: PaletteOptions & {
    // add ? here
    mode: "light" | "dark";
    primary: { main: string };
    secondary: { main: string };
    neutral: {
      dark: string;
      main: string;
      light: string;
    };
    background: {
      default: string;
      paper: string;
    };
  };
  typography: TypographyOptions & {
    fontFamily: string;
    fontSize: number;
    h1: {
      fontFamily: string;
      fontSize: number;
    };
    h2: {
      fontFamily: string;
      fontSize: number;
    };
    h3: {
      fontFamily: string;
      fontSize: number;
    };
    h4: {
      fontFamily: string;
      fontSize: number;
    };
    h5: {
      fontFamily: string;
      fontSize: number;
    };
    h6: {
      fontFamily: string;
      fontSize: number;
    };
  };
  myComponents?: {
    MuiButton?: {
      styleOverrides?: {
        root?: {
          fontSize?: string;
          borderRadius?: string;
        };
      };
    };
  };
}

declare module "@mui/material/styles" {
  interface Theme extends import("@mui/material/styles").Theme, CustomTheme {}
  interface ThemeOptions
    extends import("@mui/material/styles").ThemeOptions,
      CustomTheme {}
}
