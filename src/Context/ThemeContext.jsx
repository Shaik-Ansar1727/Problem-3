import { createContext, useState } from "react";
import { lightTheme, darkTheme } from "../Styles/themes";

export const ThemeContext = createContext();

export function ThemeProviderWrap  ({children}){
        const [themeMode, setThemeMode] = useState('light');
        const toggleTheme = () => { 
            setThemeMode(prev => prev === 'light' ? 'dark' : 'light')
         }
         const theme = themeMode === 'light' ? lightTheme : darkTheme;

         return <ThemeContext.Provider value={{themeMode,toggleTheme,theme}}>
            {children}
         </ThemeContext.Provider>
}