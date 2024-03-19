import { Fragment } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ReactComponent as AlebLogo } from "../../assets/aleb_logo_2024_light_blue.svg";
import ThemeSwitcher from "../../components/theme-switcher/theme-switcher.component";

import "./nav.styles.scss";

const Nav = () => {
	const { t, i18n } = useTranslation();

	const changeLanguage = () => {
		if (i18n.language.includes("en")) {
			i18n.changeLanguage("ro");
		} else {
			i18n.changeLanguage("en");
		}
	};

	return (
		<Fragment>
			<nav className="navbar">
				<Link to={"/"}>
					<AlebLogo className="aleb-logo" fill="#92AECF" />
				</Link>
				<div className="nav-links">
					<NavLink to={"about"} activeclassname="active">
						{t("navbar.about")}
					</NavLink>
					<NavLink to={"experience"} activeclassname="active">
						{t("navbar.experience")}
					</NavLink>
					<NavLink to={"projects"} activeclassname="active">
						{t("navbar.projects")}
					</NavLink>
				</div>
				<div className="toggle-container">
					<button type="button" className="lang-btn" onClick={changeLanguage}>
						{i18n.language.slice(0, 2)}
					</button>

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
