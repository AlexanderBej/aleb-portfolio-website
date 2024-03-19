import { useContext, useEffect } from "react";

import { ThemeContext } from "../../contexts/theme.context";

import "./theme-switcher.styles.scss";

const ThemeSwitcher = () => {
	const { lightTheme, toggleTheme } = useContext(ThemeContext);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", lightTheme ? "light" : "dark");
	}, [lightTheme]);

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
