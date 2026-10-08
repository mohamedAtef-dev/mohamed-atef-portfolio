    import { createContext, useEffect, useState, type ReactNode } from "react";

    type Theme = "light" | "dark";

    interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void; // void => لاترجع شئ
    }

    // eslint-disable-next-line react-refresh/only-export-components
    export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

    export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem("currentMode") as Theme | null;
        if (savedTheme) return savedTheme;
        
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    useEffect(() => {
        if (theme === "light") {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        }

        localStorage.setItem("currentMode", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
    }
