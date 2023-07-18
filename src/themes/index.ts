// import { createTheme as createMuiTheme } from "@mui/material"

// export function createTheme() {

//     return createMuiTheme({
//       breakpoints: {
//         values: {
//           xs: 0,
//           sm: 600,
//           md: 900,
//           lg: 1200,
//           xl: 1440
//         }
//       },
//       palette: {
//         primary: {
//           main: "#2E3B55",
//           contrastText: "#fff"
//         },
//           secondary: {
//           main: "#FFC107",
//           contrastText: "#fff",
//       }
//   }
//   })
// }

// import { createTheme } from "@mui/material";
// import { orange } from "@mui/material/colors";
// import { darkModePalette, lightModePalette } from "./palette";
// import { typography } from "./typography";
// import { spacing } from "./spacing";
// import { breakpoints } from "./breakpoints";
// import { transitions } from "./transitions";
// import { components } from "./components";

// export enum ThemeVariantsProps {
//   light = "light",
//   dark = "dark",
// }

// declare module "@mui/material/styles" {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

// export const theme = (mode: ThemeVariantsProps) => {
//   return createTheme({
//     palette: {
//       mode,
//       ...(mode === "light" ? lightModePalette : darkModePalette),
//     },
//     typography,
//     spacing,
//     breakpoints,
//     transitions,
//     components,
//     status: {
//       danger: orange[500],
//     },
//   });
// };

import { createTheme } from "@mui/material/styles";
import { darkModePalette, lightModePalette } from "./palette";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { components } from "./components";

export enum ThemeVariantsProps {
  light = "light",
  dark = "dark",
}

export const theme = (mode: ThemeVariantsProps) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === "light" ? lightModePalette : darkModePalette),
    },
    typography,
    shape: {
      borderRadius: 10,
    },
    spacing,
    components,
  });
};
