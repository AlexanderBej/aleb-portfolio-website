import React, { useState, useEffect } from "react";

export const INITIAL_THEME_STATE = {
	lightTheme: false,
	toggleTheme: () => {},
};

export const ThemeContext = React.createContext(INITIAL_THEME_STATE);

// export const ThemeProvider = ({ children }) => {
// 	const [lightTheme, setLightTheme] = useState(false);

// 	const localStorage = window.localStorage;

// 	useEffect(() => {
// 		const savedThemeLocal = localStorage.getItem("lightTheme");
// 		if (!!savedThemeLocal) {
// 			setLightTheme(savedThemeLocal);
// 		} else {
// 			localStorage.setItem("lightTheme", lightTheme);
// 		}
// 	}, []);

// 	const toggleThemeHandler = () => {
// 		console.log("toggleThemeHandler called", lightTheme);
// 		setLightTheme((prevState) => !prevState);

// 	};

// 	useEffect(() => {
// 		localStorage.setItem("lightTheme", lightTheme);
//     console.log("toggleThemeHandler called afetr set", lightTheme);
// 	}, [lightTheme]);

// 	return <ThemeContext.Provider value={{ lightTheme: lightTheme, toggleTheme: toggleThemeHandler }}>{children}</ThemeContext.Provider>;
// };

export const ThemeProvider = ({ children }) => {
	const [lightTheme, setLightTheme] = useState(() => {
		const savedThemeLocal = localStorage.getItem("lightTheme");
		return savedThemeLocal ? savedThemeLocal === "true" : false;
	});

	const localStorageRef = window.localStorage;

	const toggleThemeHandler = () => {
		setLightTheme((prevState) => {
			const newTheme = !prevState;
			localStorageRef.setItem("lightTheme", newTheme.toString());
      // document.documentElement.setAttribute(
      //   "data-light-theme",
      //   lightTheme
      // );
			return newTheme;
		});
	};

	useEffect(() => {
		localStorageRef.setItem("lightTheme", lightTheme.toString());
	}, [lightTheme, localStorageRef]);

	return <ThemeContext.Provider value={{ lightTheme, toggleTheme: toggleThemeHandler }}>{children}</ThemeContext.Provider>;
};
