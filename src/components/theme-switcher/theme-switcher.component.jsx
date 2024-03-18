import { useContext, useEffect } from "react";

import { ThemeContext } from "../../contexts/theme.context";

import "./theme-switcher.styles.scss";

const ThemeSwitcher = () => {
	const { lightTheme, toggleTheme } = useContext(ThemeContext);

	useEffect(() => {
		console.log("lightTheme in UseEffect", lightTheme);
		document.documentElement.setAttribute("data-theme", lightTheme ? "light" : "dark");
	}, [lightTheme]);

	// const handleChange = (e) => {
	// 	console.log(e.target.checked);
	// 	console.log(theme);
	// 	if (e.target.checked) {
	// 		setTheme("light");
	// 	} else {
	// 		setTheme("dark");
	// 	}
	// 	// setTheme(theme);
	// };

	const handleInputValue = (themeValue) => {
		console.log("lightTheme in handleValue", lightTheme);

		if (themeValue === "light") {
			return false;
		}
		return true;
	};

	return (
		<label htmlFor="theme" className="theme">
			<span className="theme-toggle-wrap">
				<input
					id="theme"
					className="theme-toggle"
					type="checkbox"
					role="switch"
					name="theme"
					checked={!lightTheme}
					onChange={toggleTheme}
				/>
				{/*<span className="theme-fill"></span>*/}
				<span className="theme-icon">
					<span className="theme-icon-part"></span>
					<span className="theme-icon-part"></span>
					<span className="theme-icon-part"></span>
					<span className="theme-icon-part"></span>
					<span className="theme-icon-part"></span>
					<span className="theme-icon-part"></span>
					<span className="theme-icon-part"></span>
					<span className="theme-icon-part"></span>
					<span className="theme-icon-part"></span>
				</span>
			</span>
		</label>
	);
};

export default ThemeSwitcher;
