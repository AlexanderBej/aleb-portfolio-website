import React, { useState, useEffect } from "react";

export const INITIAL_THEME_STATE = {
	lightTheme: false,
	toggleTheme: () => {},
};

export const ThemeContext = React.createContext(INITIAL_THEME_STATE);

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
			return newTheme;
		});
	};

	useEffect(() => {
		localStorageRef.setItem("lightTheme", lightTheme.toString());
	}, [lightTheme, localStorageRef]);

	return <ThemeContext.Provider value={{ lightTheme, toggleTheme: toggleThemeHandler }}>{children}</ThemeContext.Provider>;
};
