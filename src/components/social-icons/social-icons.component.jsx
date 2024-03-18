import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import FacebookIcon from "../../assets/social-icons/icons8-facebook-neu-50.png";
import InstagramIcon from "../../assets/social-icons/icons8-instagram-50.png";
import LinkedInIcon from "../../assets/social-icons/icons8-linkedin-50.png";
import DribbbleIcon from "../../assets/social-icons/icons8-dribbble-48.png";

import "aos/dist/aos.css";
import './social-icons.styles.scss';

const SocialIcons = () => {
    useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="contact-options-container">
			<Link data-aos="fade-right" data-aos-delay="300" to={"9gag.com"}>
				<img src={FacebookIcon} alt="Facebook logo" className="contact-icon" />
			</Link>
			<Link data-aos="fade-right" data-aos-delay="200" to={"https://www.instagram.com/alebDoesDesign/"}>
				<img src={InstagramIcon} alt="Instagram logo" className="contact-icon" />
			</Link>
			<Link data-aos="fade-right" data-aos-delay="100" to={"9gag.com"}>
				<img src={LinkedInIcon} alt="LinkedIn logo" className="contact-icon" />
			</Link>
			<Link data-aos="fade-right" to={"9gag.com"}>
				<img src={DribbbleIcon} alt="Dribbble logo" className="contact-icon" />
			</Link>
		</div>
	);
};

export default SocialIcons;
