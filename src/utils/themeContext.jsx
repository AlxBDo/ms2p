import React, { useState, createContext } from "react";

export const ThemeContext = createContext() 

export const ThemeProvider = ({ children }) => {
    const [ theme, setTheme ]  = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light")
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}