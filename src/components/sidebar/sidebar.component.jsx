import { useState, useEffect, Fragment } from "react";

import "./sidebar.styles.scss";

const Sidebar = () => {
	const sections = [{ id: "section1" }, { id: "section2" }, { id: "section3" }, { id: "section4" }];

	const [activeSection, setActiveSection] = useState(null);

	// Function to handle scroll event
	const handleScroll = () => {
		const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjusted scroll position

		// Find the active section based on scroll position
		const active = sections.find(({ id }) => {
			const element = document.getElementById(id);
			if (element) {
				const { offsetTop, offsetHeight } = element;
				return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
			}
			return false;
		});

		setActiveSection(active ? active.id : null);
	};

	// Add scroll event listener when component mounts
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleClick = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="sidebar">
			{sections.map(({ id }, index) => (
				<Fragment key={id}>
					<div onClick={() => handleClick(id)} className={"tracker-bullet" + (activeSection === id ? " active" : "")} />
					{index < sections.length - 1 && <div className="tracker-line" />}
				</Fragment>
			))}
		</div>
	);
};

export default Sidebar;
