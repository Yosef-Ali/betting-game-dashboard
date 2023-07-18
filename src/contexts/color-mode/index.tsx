// Import the `ThemeProvider` component from "@mui/material/styles".
import { ThemeProvider } from "@mui/material/styles";

// Import the `ThemeVariantsProps` and `theme` functions from "../../themes".
import { ThemeVariantsProps, theme } from "../../themes";

// Import the `createContext`, `PropsWithChildren`, `useEffect`, `useMemo`, and `useState` functions from "react".
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";

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
  const [mode, setMode] = useState(
    colorModeFromLocalStorage || systemPreference,
  );

  // Set the initial theme mode to light.
  const [themeMode, setThemeMode] = useState<ThemeVariantsProps>(
    ThemeVariantsProps.light
  );

  // UseMemo to memoize the theme function.
  const activeTheme = useMemo(() => theme(themeMode), [themeMode]);

  // UseEffect to set the color mode in localStorage when it changes.
  useEffect(() => {
    window.localStorage.setItem("colorMode", mode);
  }, [mode]);

  // Define the `setColorMode` function.
  const setColorMode = () => {
    if (mode === "light") {
      setMode("dark");
      setThemeMode(ThemeVariantsProps.dark)
    } else {
      setMode("light");
      setThemeMode(ThemeVariantsProps.light)
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
        theme={activeTheme}
      >
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};