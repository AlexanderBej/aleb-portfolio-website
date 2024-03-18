import { useState, useEffect } from "react";
import ThemeContext, { initialThemeState } from "./theme.context";

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(initialThemeState.theme);

	const localStorage = window.localStorage;

	useEffect(() => {
		const savedThemeLocal = localStorage.getItem("globalTheme");

		if (!!savedThemeLocal) {
			setTheme(savedThemeLocal);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("globalTheme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
