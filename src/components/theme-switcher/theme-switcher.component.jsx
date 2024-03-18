import { useContext } from "react";

import ThemeContext from "../../contexts/theme.context";

import "./theme-switcher.styles.scss";

const ThemeSwitcher = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const handleChange = (e) => {
		console.log(e.target.checked);
		console.log(theme);
		if(e.target.checked) {
			setTheme('light')
		} else {
			setTheme('dark')
		}
		// setTheme(theme);
	};

	const handleInputValue = (themeValue) => {
		if(themeValue === 'ligth-theme') return false
		return true
	}

	return (
		<label htmlFor="theme" className="theme">
			<span className="theme-toggle-wrap">
				<input id="theme" className="theme-toggle" type="checkbox" role="switch" name="theme" value={false} onChange={handleChange} />
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
