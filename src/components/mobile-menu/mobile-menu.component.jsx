import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./mobile-menu.styles.scss";

const MobileMenu = ({ isDropdownOpen, toggleDropdown }) => {
	const { t } = useTranslation();

	return (
		<div id="dropdown-box" className={`mobile-menu${isDropdownOpen ? " show" : ""}`} onClick={(e) => e.stopPropagation()}>
			<NavLink to={"about"} activeclassname="active" onClick={toggleDropdown}>
				{t("navbar.about")}
			</NavLink>
			<NavLink to={"experience"} activeclassname="active" onClick={toggleDropdown}>
				{t("navbar.experience")}
			</NavLink>
			<NavLink to={"projects"} activeclassname="active" onClick={toggleDropdown}>
				{t("navbar.projects")}
			</NavLink>
		</div>
	);
};

export default MobileMenu;
