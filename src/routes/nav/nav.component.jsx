import { Fragment } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ReactComponent as AlebLogo } from "../../assets/aleb_logo_2024_light_blue.svg";
import ThemeSwitcher from "../../components/theme-switcher/theme-switcher.component";

import "./nav.styles.scss";

const Nav = () => {
	// const { theme, toggleTheme } = useContext(ThemeContext);
	const { i18n } = useTranslation();

	const changeLanguage = () => {
		console.log(i18n.language);
		if (i18n.language.includes("en")) {
			i18n.changeLanguage("ro");
		} else {
			i18n.changeLanguage("en");
		}
	};

	// const handleChange = (e) => {
	// 	console.log(e.target.checked);
	// 	console.log(theme);
	// 	toggleTheme();
	// };
	return (
		<Fragment>
			<nav className="navbar">
				<Link to={"/"}>
					<AlebLogo className="aleb-logo" fill="#92AECF" />
				</Link>
				<div className="nav-links">
					<NavLink to={"about"} activeclassname="active">
						about
					</NavLink>
					<NavLink to={"experience"} activeclassname="active">
						experience
					</NavLink>
					<NavLink to={"projects"} activeclassname="active">
						projects
					</NavLink>
				</div>
				<div className="toggle-container">
					<button type="button" className="lang-btn" onClick={changeLanguage}>{i18n.language.slice(0, 2)}</button>

					<ThemeSwitcher />
					<div className="dropdown">
						<div id="dropdown-btn" className="dropdown-btn">
							<div className="bar bar1"></div>
							<div className="bar bar2"></div>
							<div className="bar bar3"></div>
						</div>
					</div>
				</div>
			</nav>
			<Outlet />
		</Fragment>
	);
};

export default Nav;
