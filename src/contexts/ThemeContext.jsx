import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const isBrowser = typeof window !== "undefined";

  const [theme, setTheme] = useState("dark");

  const getSystemPreferTheme = () => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return systemPrefersDark ? "dark" : "light";
  };

  const handleSetTheme = (theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  const toggleTheme = () => {
    if (isBrowser) {
      const currentTheme = localStorage.getItem("theme");

      if (currentTheme === "dark") {
        // if dark theme switch to light
        handleSetTheme("light");
      } else if (currentTheme === "light") {
        // if light theme switch to dark
        handleSetTheme("dark");
      } else {
        // if no preferred theme selected take from system preffered theme
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        handleSetTheme(systemPrefersDark ? "light" : "dark");
      }
    }
  };

  const colorStyles = useMemo(
    () => (theme === "dark" ? "text-[#596646]" : "text-[#7D5B3F]"),
    [theme]
  );

  const bgColorStyles = useMemo(
    () => (theme === "dark" ? "bg-[#596646]" : "bg-[#7D5B3F]"),
    [theme]
  );

  useLayoutEffect(() => {
    if (isBrowser) {
      const prefferedTheme = localStorage.getItem("theme");

      if (prefferedTheme === "light") {
        setTheme("light");
      } else if (prefferedTheme === "dark") {
        setTheme("dark");
      } else {
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setTheme(systemPrefersDark ? "dark" : "light");
      }
    }
  }, []);

  const value = {
    theme,
    getSystemPreferTheme,
    toggleTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
    colorStyles,
    bgColorStyles,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
