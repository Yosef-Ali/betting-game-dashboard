// Import the `ThemeProvider` component from "@mui/material/styles".
// import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";
import { createContext, PropsWithChildren, useEffect, useMemo, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "../../themes/themeSettings";

// Define the `ColorModeContextType` interface.
type ColorModeContextType = {
  mode: string;
  setMode: () => void;
};

// Create the `ColorModeContext` context.
export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

// Create the `ColorModeContextProvider` component.
export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  // Get the color mode from localStorage.
  const colorModeFromLocalStorage = localStorage.getItem("colorMode");

  // Check if the system preference is dark.
  const isSystemPreferenceDark = window?.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // Set the initial color mode to the system preference or the value from localStorage.
  const systemPreference = isSystemPreferenceDark ? "dark" : "light";
  // const [mode, setMode] = useState(
  //   colorModeFromLocalStorage || systemPreference,
  // );
  const [mode, setMode] = useState<"light" | "dark">(
    (colorModeFromLocalStorage || systemPreference) as "light" | "dark"
  );

  // UseMemo to memoize the theme function.
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  // UseEffect to set the color mode in localStorage when it changes.
  useEffect(() => {
    window.localStorage.setItem("colorMode", mode);
  }, [mode]);

  // Define the `setColorMode` function.
  const setColorMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  // Return the `ColorModeContext.Provider` component.
  return (
    <ColorModeContext.Provider
      value={{
        setMode: setColorMode,
        mode,
      }}
    >
      <ThemeProvider
        // you can change the theme colors here. example: mode === "light" ? RefineThemes.Magenta : RefineThemes.MagentaDark
        theme={theme}
      >
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
