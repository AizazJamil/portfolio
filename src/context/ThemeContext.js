import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext(undefined);
const THEME_KEY = "app-theme";
export const ThemeProvider = ({ children, }) => {
    // Set default theme to "dark"
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem(THEME_KEY);
        if (storedTheme === "dark" || storedTheme === "light") {
            return storedTheme;
        }
        return "dark";
    });
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };
    return (_jsx(ThemeContext.Provider, { value: { theme, toggleTheme }, children: children }));
};
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
