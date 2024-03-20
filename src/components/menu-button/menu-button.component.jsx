import { useState, useEffect } from "react";

import "./menu-button.styles.scss";
import MobileMenu from "../mobile-menu/mobile-menu.component";

const MenuButton = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen((prevState) => !prevState);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			const dropdownBox = document.getElementById("dropdown-box");
			const dropdownButton = document.getElementById("dropdown-btn");
			if (dropdownBox && dropdownButton && !event.target.matches(".dropdown-btn") && !event.target.matches(".bar")) {
				if (dropdownBox.classList.contains("show")) {
					setIsDropdownOpen(false);
				}
				if (dropdownButton.classList.contains("change")) {
					dropdownButton.classList.remove("change");
				}
			}
		};

		window.addEventListener("click", handleClickOutside);
		return () => window.removeEventListener("click", handleClickOutside);
	}, []);

	return (
		<div className="dropdown">
			<button id="dropdown-btn" className={isDropdownOpen ? "change dropdown-btn" : "dropdown-btn"} onClick={toggleDropdown}>
				<div className="bar bar1"></div>
				<div className="bar bar2"></div>
				<div className="bar bar3"></div>
			</button>
			<MobileMenu isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
		</div>
	);
};

export default MenuButton;
