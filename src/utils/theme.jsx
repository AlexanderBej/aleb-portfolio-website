// import React, { useEffect, createContext, useState } from "react";

// const ThemeContext = createContext();

// const getTheme = () => {
//   const theme = localStorage.getItem("theme");
//   if (!theme) {
//     // Default theme is taken as dark-theme
//     localStorage.setItem("theme", "dark-theme");
//     return "dark-theme";
//   } else {
//     return theme;
//   }
// };

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(getTheme);

//   function toggleTheme() {
//     if (theme === "dark-theme") {
//       setTheme("light-theme");
//     } else {
//       setTheme("dark-theme");
//     }
//   };

//   useEffect(() => {
//     const refreshTheme = () => {
//       localStorage.setItem("theme", theme);
//     };

//     refreshTheme();
//   }, [theme]);

//   return (
//     <ThemeContext.Provider
//       value={{
//         theme,
//         setTheme,
//         toggleTheme,
//       }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export { ThemeContext, ThemeProvider };

import { useContext } from "react";

import ThemeContext from "../contexts/theme.context";

export default function ThemeSetter() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
      {themeOptions.map((option, idx) => (
        <option value={option.value} key={idx}>
          {option.value}
        </option>
      ))}
    </select>
  );
}

const themeOptions = [{ value: "light" }, { value: "dark" }];