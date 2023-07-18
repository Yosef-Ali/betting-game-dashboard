import { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent: PaletteOptions["primary"];
  }
}

const lightColor = "58, 53, 65";
const darkColor = "231, 227, 252";
//const mainColor = mode === "light" ? lightColor : darkColor;

const basePalette = {
  primary: {
    light: "#9E69FD",
    main: "#9155FD",
    dark: "#804BDF",
    contrastText: "#FFF",
  },
  secondary: {
    light: "#9C9FA4",
    main: "#8A8D93",
    dark: "#777B82",
    contrastText: "#FFF",
  },
  success: {
    light: "#6AD01F",
    main: "#56CA00",
    dark: "#4CB200",
    contrastText: "#FFF",
  },
  error: {
    light: "#FF6166",
    main: "#FF4C51",
    dark: "#E04347",
    contrastText: "#FFF",
  },
  warning: {
    light: "#FFCA64",
    main: "#FFB400",
    dark: "#E09E00",
    contrastText: "#FFF",
  },
  info: {
    light: "#32BAFF",
    main: "#16B1FF",
    dark: "#139CE0",
    contrastText: "#FFF",
  },
  grey: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#D5D5D5",
    A200: "#AAAAAA",
    A400: "#616161",
    A700: "#303030",
  },
};

export const lightModePalette: PaletteOptions = {
  text: {
    primary: `rgba(${lightColor}, 0.87)`,
    secondary: `rgba(${lightColor}, 0.68)`,
    disabled: `rgba(${lightColor}, 0.38)`,
  },
  divider: `rgba(${lightColor}, 0.12)`,
  background: {
    paper: "#FFF",
    default: "#F4F5FA",
  },
  action: {
    active: `rgba(${lightColor}, 0.54)`,
    hover: `rgba(${lightColor}, 0.04)`,
    selected: `rgba(${lightColor}, 0.08)`,
    disabled: `rgba(${lightColor}, 0.3)`,
    disabledBackground: `rgba(${lightColor}, 0.18)`,
    focus: `rgba(${lightColor}, 0.12)`,
  },
  accent: undefined,
  ...basePalette,
};

export const darkModePalette: PaletteOptions = {
  text: {
    primary: `rgba(${darkColor}, 0.87)`,
    secondary: `rgba(${darkColor}, 0.68)`,
    disabled: `rgba(${darkColor}, 0.38)`,
  },
  divider: `rgba(${darkColor}, 0.12)`,
  background: {
    paper: "#312D4B",
    default: "#28243D",
  },
  action: {
    active: `rgba(${darkColor}, 0.54)`,
    hover: `rgba(${darkColor}, 0.04)`,
    selected: `rgba(${darkColor}, 0.08)`,
    disabled: `rgba(${darkColor}, 0.3)`,
    disabledBackground: `rgba(${darkColor}, 0.18)`,
    focus: `rgba(${darkColor}, 0.12)`,
  },
  accent: undefined,
  ...basePalette,
};
