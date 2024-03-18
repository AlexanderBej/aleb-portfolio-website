import { useEffect, Fragment, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useParallax } from "react-scroll-parallax";
import { useInView } from "framer-motion";
import AOS from "aos";

import LowPoly from "../../assets/Low-poly.png";
import RightFace from "../../assets/half-face.png";

import ReactIcon from "../../assets/skill-icons/icons8-reagieren-100.png";
import AngularIcon from "../../assets/skill-icons/icons8-angular-96.png";
import ReduxIcon from "../../assets/skill-icons/icons8-redux-an-open-source-javascript-library-for-managing-application-state-96.png";
import SassIcon from "../../assets/skill-icons/icons8-sass-96.png";
import TypescriptIcon from "../../assets/skill-icons/icons8-typescript-96.png";
import HTMLIcon from "../../assets/skill-icons/icons8-html5-96.png";
import CSSIcon from "../../assets/skill-icons/icons8-css3-96.png";
import FirebaseIcon from "../../assets/skill-icons/icons8-firebase-a-google's-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-96.png";

import Button from "../../components/button/button.component";


import "./home.styles.scss";
import SocialIcons from "../../components/social-icons/social-icons.component";

const Home = () => {
	const parallax = useParallax({
		speed: -15,
	});
	const { t } = useTranslation();
	const navigate = useNavigate();

	const aboutRef = useRef(null);
	const skillsRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);

	const isAboutInView = useInView(aboutRef, { once: true });
	const isSkillsInView = useInView(skillsRef, { once: true });
	const isProjectsInView = useInView(projectsRef, { once: true });
	const isContactInView = useInView(contactRef, { once: true });

	useEffect(() => {
		AOS.init();
	}, []);

	const onNavigateToContactHandler = () => navigate("/contact");
	const onNavigateToProjectsHandler = () => navigate("/projects");

	return (
		<Fragment>
			<main className="main">
				<section className="intro">
					<div className="headshot" ref={parallax.ref}>
						<img src={LowPoly} alt="Low Poly left face" data-aos="fade-right"/>
						<img src={RightFace} alt="Right headshot portrait" data-aos="fade-left"/>
					</div>

					<h4>Hi,</h4>
					<h1 className="my-name">
						I am <span className="sec-color">Alex</span>
					</h1>
					<h2 className="what-I-do">I transform lines of code into pixels of personality, because even websites need a little flair</h2>
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
				<section className="contact-section home-section">
					<h1 className="section-header" ref={contactRef}>
						Contact <span className="sec-color">me</span>
					</h1>
					<div
						className="underline center-underline"
						style={{
							width: isContactInView ? "50%" : "10%",
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
						}}
					/>
					<SocialIcons />
					<Button type="button" onClick={onNavigateToContactHandler}>
						Write me something
					</Button>
				</section>
				<footer className="home-footer">&copy; 2024 Alexandru Bej. All rights reserved</footer>
			</main>
		</Fragment>
	);
};

export default Home;
