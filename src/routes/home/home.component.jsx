import { useEffect, Fragment, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useParallax } from "react-scroll-parallax";
import { useInView } from "framer-motion";
import AOS from "aos";

import LowPoly from "../../assets/Low-poly.png";
import RightFace from "../../assets/half-face.png";

import FacebookPrimaryIcon from "../../assets/social-icons/icons8-facebook-neu-50_primary.png";
import InstagramPrimaryIcon from "../../assets/social-icons/icons8-instagram-50_primary.png";
import LinkedinPrimaryIcon from "../../assets/social-icons/icons8-linkedin-50_primary.png";
import DribbblePrimaryIcon from "../../assets/social-icons/icons8-dribbble-48_primary.png";

import ReactIcon from "../../assets/skill-icons/icons8-reagieren-100.png";
import AngularIcon from "../../assets/skill-icons/icons8-angular-96.png";
import ReduxIcon from "../../assets/skill-icons/icons8-redux-an-open-source-javascript-library-for-managing-application-state-96.png";
import SassIcon from "../../assets/skill-icons/icons8-sass-96.png";
import TypescriptIcon from "../../assets/skill-icons/icons8-typescript-96.png";
import HTMLIcon from "../../assets/skill-icons/icons8-html5-96.png";
import CSSIcon from "../../assets/skill-icons/icons8-css3-96.png";
import FirebaseIcon from "../../assets/skill-icons/icons8-firebase-a-google's-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-96.png";

import CodeIcon from "../../assets/services-icons/icons8-quellcode-100.png";
import UXIcon from "../../assets/services-icons/icons8-ux-design-68.png";
import GraphicIcon from "../../assets/services-icons/icons8-erstellen-sie-ein-symbol-96.png";

import Button from "../../components/button/button.component";
import ContactForm from "../../components/contact/contact-form.component";

import "./home.styles.scss";

const Home = () => {
	const parallax = useParallax({
		speed: -15,
	});
	const { t } = useTranslation();
	const navigate = useNavigate();

	const aboutRef = useRef(null);
	const skillsRef = useRef(null);
	const projectsRef = useRef(null);
	const servicesRef = useRef(null);

	const isAboutInView = useInView(aboutRef, { once: true });
	const isSkillsInView = useInView(skillsRef, { once: true });
	const isProjectsInView = useInView(projectsRef, { once: true });
	const isServicesInView = useInView(servicesRef, { once: true });

	useEffect(() => {
		AOS.init();
	}, []);

	const onNavigateToProjectsHandler = () => navigate("/projects");

	return (
		<Fragment>
			<main className="main">
				<section className="intro">
					<div className="headshot" ref={parallax.ref}>
						<img src={LowPoly} alt="Low Poly left face" data-aos="fade-right" />
						<img src={RightFace} alt="Right headshot portrait" data-aos="fade-left" />
					</div>

					<h4>Hi,</h4>
					<h1 className="my-name">
						I am <span className="sec-color">Alex</span>
					</h1>
					<h2 className="what-I-do">I transform lines of code into pixels of personality, because even websites need a little flair</h2>
					<div className="social-icons">
						<Link
							data-aos="fade-right"
							data-aos-delay="300"
							to={"https://www.facebook.com/abDoesDesign42/"}
							target="_blank"
							rel="noopener noreferrer"
							title="Facebook">
							<img src={FacebookPrimaryIcon} alt="Facebook logo" className="social-icon" />
						</Link>
						<Link
							data-aos="fade-right"
							data-aos-delay="200"
							to={"https://www.instagram.com/alebdoesdesign/"}
							target="_blank"
							rel="noopener noreferrer"
							title="Instagram">
							<img src={InstagramPrimaryIcon} alt="Instagram logo" className="social-icon" />
						</Link>
						<Link
							data-aos="fade-right"
							data-aos-delay="100"
							to={"https://www.linkedin.com/in/alexandru-bej-203a72ab/"}
							target="_blank"
							rel="noopener noreferrer"
							title="Linkedin">
							<img src={LinkedinPrimaryIcon} alt="Linkedin logo" className="social-icon" />
						</Link>
						<Link data-aos="fade-right" to={"https://dribbble.com/alebX"} target="_blank" rel="noopener noreferrer" title="Dribbble">
							<img src={DribbblePrimaryIcon} alt="Dribbble logo" className="social-icon" />
						</Link>
					</div>
					<div className="titles">
						<h3 className="designer bkg-text">ui designer</h3>
						<h3 className="dev bkg-text">&lt;frontend dev&gt;</h3>
					</div>
				</section>
				<section className="dark-bkg">
					<article className="home-article home-section">
						<h1 className="section-header" ref={aboutRef}>
							Get to <span className="sec-color">know me</span>
						</h1>
						<div
							className="underline center-underline"
							style={{
								width: isAboutInView ? "50%" : "10%",
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
							}}
						/>
						<p className="spaced-text">{t("about")}</p>
					</article>
					<article className="home-article home-section">
						<h2 className="section-header" ref={skillsRef}>
							Some of my <span className="sec-color">skills</span>
						</h2>
						<div
							className="underline center-underline"
							style={{
								width: isSkillsInView ? "50%" : "10%",
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
							}}
						/>
						<div className="skills-short-container">
							<div data-aos="fade-down" className="skill-box">
								<img src={ReactIcon} alt="React framework logo" className="skill-logo" />
								<span className="skill-name">React</span>
							</div>
							<div data-aos="fade-down" data-aos-delay="50" className="skill-box">
								<img src={AngularIcon} alt="Angular framework logo" className="skill-logo" />
								<span className="skill-name">Angular</span>
							</div>
							<div data-aos="fade-down" data-aos-delay="100" className="skill-box">
								<img src={TypescriptIcon} alt="Typescript language logo" className="skill-logo" />
								<span className="skill-name">Typescript</span>
							</div>
							<div data-aos="fade-down" data-aos-delay="150" className="skill-box">
								<img src={ReduxIcon} alt="Redux library logo" className="skill-logo" />
								<span className="skill-name">Redux</span>
							</div>
							<div data-aos="fade-down" data-aos-delay="200" className="skill-box">
								<img src={HTMLIcon} alt="HTML5 logo" className="skill-logo" />
								<span className="skill-name">HTML5</span>
							</div>
							<div data-aos="fade-down" data-aos-delay="250" className="skill-box">
								<img src={CSSIcon} alt="CSS3 logo" className="skill-logo" />
								<span className="skill-name">CSS3</span>
							</div>
							<div data-aos="fade-down" data-aos-delay="300" className="skill-box">
								<img src={SassIcon} alt="Sass library logo" className="skill-logo" />
								<span className="skill-name">Sass</span>
							</div>
							<div data-aos="fade-down" data-aos-delay="350" className="skill-box">
								<img src={FirebaseIcon} alt="Firebase logo" className="skill-logo" />
								<span className="skill-name">Firebase</span>
							</div>
						</div>
					</article>
					<article className="home-section">
						<h1 className="section-header" ref={projectsRef}>
							Some of my <span className="sec-color">projects</span>
						</h1>
						<div
							className="underline center-underline"
							style={{
								width: isProjectsInView ? "50%" : "10%",
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
							}}
						/>
						<div className="projects-examples-container">
							<div className="proj-box" datatitle="Mother's Birth Doula">
								<Link to={"projects/mothers-birth-doula"}>
									<div className="cover-img mbd-img" />
								</Link>
							</div>
							<div className="proj-box" datatitle="DRK Clothing">
								<Link to={"projects/drk-clothing"}>
									<div className="cover-img drk-img" />
								</Link>
							</div>
							<div className="proj-box" datatitle="Blog">
								<Link to={"projects/gatsby-blog"}>
									<div className="cover-img gts-img" />
								</Link>
							</div>
						</div>
						<Button type="button" onClick={onNavigateToProjectsHandler}>
							Check out more
						</Button>
					</article>
				</section>
				<section className="home-section services-section">
					<h1 className="section-header" ref={servicesRef}>
						What I <span className="sec-color">offer</span>
					</h1>
					<div
						className="underline center-underline"
						style={{
							width: isServicesInView ? "50%" : "10%",
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
						}}
					/>
					<div className="services-container">
						<div className="service-box" data-aos="fade-down">
							<span className="service-number">01</span>
							<img src={CodeIcon} alt="Code icon" className="service-icon" />
							<h2>Frontend Development</h2>
							<p className="spaced-text">
								Crafting seamless user experiences with responsive web solutions tailored to your needs, ensuring functionality meets
								design.
							</p>
						</div>
						<div className="service-box" data-aos="fade-down" data-aos-delay="150">
							<span className="service-number">02</span>
							<img src={UXIcon} alt="UX Design icon" className="service-icon" />
							<h2>UI/UX Design</h2>
							<p className="spaced-text">
								Elevating user engagement through intuitive interfaces and captivating user experiences, blending aesthetics with usability
								for maximum impact.
							</p>
						</div>
						<div className="service-box" data-aos="fade-down" data-aos-delay="300">
							<span className="service-number">03</span>
							<img src={GraphicIcon} alt="Graphic design icon" className="service-icon" />
							<h2>Graphic design</h2>
							<p className="spaced-text">
								From logos to marketing materials, unleash visually stunning designs that communicate your brand's essence and captivate
								your audience.
							</p>
						</div>
					</div>
				</section>
				<footer className="home-footer">
					<div className="footer-container">
						<ContactForm />
						<div className="social-contact">
							<h2>Social media</h2>
							<Link to={"https://www.facebook.com/abDoesDesign42/"} target="_blank" rel="noopener noreferrer" className="footer-link">
								Facebook
							</Link>
							<Link to={"https://www.instagram.com/alebdoesdesign/"} target="_blank" rel="noopener noreferrer" className="footer-link">
								Instagram
							</Link>
							<Link
								to={"https://www.linkedin.com/in/alexandru-bej-203a72ab/"}
								target="_blank"
								rel="noopener noreferrer"
								className="footer-link">
								LinkedIn
							</Link>
							<Link to={"https://dribbble.com/alebX"} target="_blank" rel="noopener noreferrer" className="footer-link">
								Dribbble
							</Link>
						</div>
						<article className="nav-tabs">
							<h2>Navigate</h2>
							<Link to={"about"} className="footer-link">
								About
							</Link>
							<Link to={"experience"} className="footer-link">
								Experience
							</Link>
							<Link to={"projects"} className="footer-link">
								Projects
							</Link>
						</article>
					</div>
					<h6>&copy; 2024 Alexandru Bej. All rights reserved</h6>
				</footer>
			</main>
		</Fragment>
	);
};

export default Home;
