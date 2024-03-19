import { useEffect, useRef } from "react";
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

	const onNavigateToMBDHandler = () => navigate("/projects/mothers-birth-doula");
	const onNavigateToDRKHandler = () => navigate("/projects/drk-clothing");
	const onNavigateToAlebHandler = () => navigate("/projects/aleb");

	const onNavigateToProjectsHandler = () => navigate("/projects");
	const onNavigateToAboutHandler = () => navigate("/about");

	const mbdCover = "https://i.ibb.co/d4Ct3pv/MBD-cover.webp";
	const drkCover = "https://i.ibb.co/Fgy38W0/drk-cover.webp";
	const alebCover = "https://i.ibb.co/s5DQWym/aleb-cover.webp";

	return (
		<main>
			<section className="intro-section">
				<div className="headshot" ref={parallax.ref}>
					<img src={LowPoly} alt="Low Poly left face" data-aos="fade-right" data-aos-delay="500" />
					<img src={RightFace} alt="Right headshot portrait" data-aos="fade-left" data-aos-delay="500" />
				</div>

				<h4 data-aos="fade-right">{t("home.greeting")},</h4>
				<h1 className="my-name" data-aos="fade-right" data-aos-delay="100">
					{t("home.name")} <span className="sec-color">Alex</span>
				</h1>
				<h2 className="what-I-do" data-aos="fade-right" data-aos-delay="200">
					{t("home.whatIdo")}
				</h2>
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
				<article className="home-section">
					<h1 className="section-header" ref={aboutRef}>
						{t("home.about.title.normal")}
						<span className="sec-color">{t("home.about.title.highlight")}</span>
					</h1>
					<div
						className="underline center-underline"
						style={{
							width: isAboutInView ? "50%" : "10%",
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
						}}
					/>
					<p className="spaced-text">
						{t("home.about.text.partOne")} <strong>{t("home.about.text.webDev")}</strong> {t("home.about.text.and")}{" "}
						<strong>{t("home.about.text.designer")}</strong> {t("home.about.text.partTwo")}
					</p>
					<Button type="button" onClick={onNavigateToAboutHandler}>
						{t("home.about.button")}
					</Button>
				</article>
				<article className="home-section">
					<h1 className="section-header" ref={skillsRef}>
						{t("home.skillsTitle.normal")}
						<span className="sec-color">{t("home.skillsTitle.highlight")}</span>
					</h1>
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
						{t("home.projects.title.normal")}
						<span className="sec-color">{t("home.projects.title.highlight")}</span>
					</h1>
					<div
						className="underline center-underline"
						style={{
							width: isProjectsInView ? "50%" : "10%",
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
						}}
					/>
					<div className="projects-examples-container">
						<div className="proj-box" datatitle="Mother's Birth Doula" onClick={onNavigateToMBDHandler} data-aos="fade-down">
							<div className="cover-img mbd-img" style={{ backgroundImage: `url(${mbdCover})` }} />
						</div>
						<div className="proj-box" datatitle="DRK Clothing" onClick={onNavigateToDRKHandler} data-aos="fade-down" data-aos-delay="150">
							<div className="cover-img drk-img" style={{ backgroundImage: `url(${drkCover})` }} />
						</div>
						<div className="proj-box" datatitle="aleb (old)" onClick={onNavigateToAlebHandler} data-aos="fade-down" data-aos-delay="300">
							<div className="cover-img gts-img" style={{ backgroundImage: `url(${alebCover})` }} />
						</div>
					</div>
					<Button type="button" onClick={onNavigateToProjectsHandler}>
						{t("home.projects.button")}
					</Button>
				</article>
			</section>
			<section className="home-section services-section">
				<h1 className="section-header" ref={servicesRef}>
					{t("home.offers.title.normal")}
					<span className="sec-color">{t("home.offers.title.highlight")}</span>
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
						<h2>{t("home.offers.front.title")}</h2>
						<p className="spaced-text">{t("home.offers.front.text")}</p>
					</div>
					<div className="service-box" data-aos="fade-down" data-aos-delay="150">
						<span className="service-number">02</span>
						<img src={UXIcon} alt="UX Design icon" className="service-icon" />
						<h2>{t("home.offers.ui.title")}</h2>
						<p className="spaced-text">{t("home.offers.ui.text")}</p>
					</div>
					<div className="service-box" data-aos="fade-down" data-aos-delay="300">
						<span className="service-number">03</span>
						<img src={GraphicIcon} alt="Graphic design icon" className="service-icon" />
						<h2>{t("home.offers.graphic.title")}</h2>
						<p className="spaced-text">{t("home.offers.graphic.text")}</p>
					</div>
				</div>
			</section>
			<footer>
				<div className="footer-container">
					<ContactForm />
					<div className="social-contact">
						<h2 className="mt0">{t("home.contact.social")}</h2>
						<Link
							to={"https://www.facebook.com/abDoesDesign42/"}
							target="_blank"
							rel="noopener noreferrer"
							className="footer-link"
							data-aos="fade-right"
							data-aos-delay="300">
							Facebook
						</Link>
						<Link
							to={"https://www.instagram.com/alebdoesdesign/"}
							target="_blank"
							rel="noopener noreferrer"
							className="footer-link"
							data-aos="fade-right"
							data-aos-delay="200">
							Instagram
						</Link>
						<Link
							to={"https://www.linkedin.com/in/alexandru-bej-203a72ab/"}
							target="_blank"
							rel="noopener noreferrer"
							className="footer-link"
							data-aos="fade-right"
							data-aos-delay="100">
							LinkedIn
						</Link>
						<Link to={"https://dribbble.com/alebX"} target="_blank" rel="noopener noreferrer" className="footer-link" data-aos="fade-right">
							Dribbble
						</Link>
					</div>
					<article className="nav-tabs">
						<h2 className="mt0">{t("home.contact.nav")}</h2>
						<Link to={"about"} className="footer-link" data-aos="fade-right" data-aos-delay="200">
							About
						</Link>
						<Link to={"experience"} className="footer-link" data-aos="fade-right" data-aos-delay="100">
							Experience
						</Link>
						<Link to={"projects"} className="footer-link" data-aos="fade-right">
							Projects
						</Link>
					</article>
				</div>
				<h6>&copy; 2024 Alexandru Bej. {t("home.copyright")}</h6>
			</footer>
		</main>
	);
};

export default Home;
