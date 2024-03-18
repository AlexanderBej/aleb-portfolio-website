import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParallax } from "react-scroll-parallax";
import AOS from "aos";

import Sidebar from "../../components/sidebar/sidebar.component";

import "aos/dist/aos.css";
import "./experience.styles.scss";

const Experience = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	const { t } = useTranslation();
	const parallaxBox1 = useParallax({
		speed: -20,
	});

	const parallaxBox2 = useParallax({
		speed: -20,
	});

	const parallaxBox3 = useParallax({
		speed: -20,
	});

	const parallaxBox4 = useParallax({
		speed: -20,
	});

	return (
		<main className="experience-container">
			<aside className="tracker-bullets-container">
				<Sidebar />
			</aside>
			<section className="rindus-section" id="section1">
				<article className="experience-box" ref={parallaxBox1.ref} >
					<div className="left-panel" data-aos="fade-left">
						<span>rindus technology</span>
						<span className="year">2022 - 2023</span>
					</div>
					<div className="main-panel" data-aos="fade-left">
						<h3>{t("experience.rindus.title")}</h3>
						<p className="spaced-text">{t("experience.rindus.description")}</p>
						<div className="skill-bubbles experience-skills">
							<span className="skill-chip">Angular</span>
							<span className="skill-chip">Typescript</span>
							<span className="skill-chip">Javacript</span>
							<span className="skill-chip">SCSS</span>
							<span className="skill-chip">Bootstrap</span>
							<span className="skill-chip">Angular Material</span>
							<span className="skill-chip">ngrx Store</span>
							<span className="skill-chip">RxJS</span>
							<span className="skill-chip">Google Maps API</span>
							<span className="skill-chip">Google Sign-In</span>
							<span className="skill-chip">Microsoft Azure</span>
							<span className="skill-chip">MongoDB</span>
							<span className="skill-chip">Sentry</span>
							<span className="skill-chip">Redux</span>
						</div>
					</div>
				</article>
			</section>

			<section className="experience-section drk-section" id="section2">
				<article className="experience-box" ref={parallaxBox2.ref} >
					<div className="left-panel" data-aos="fade-right">
						<span>Continental Romania</span>
						<span className="year">2019 - 2022</span>
					</div>
					<div className="main-panel" data-aos="fade-right">
						<h3>{t("experience.conti_one.title")}</h3>
						<p className="spaced-text">{t("experience.conti_one.description")}</p>
						<div className="skill-bubbles experience-skills">
							<span className="skill-chip">Angular</span>
							<span className="skill-chip">Typescript</span>
							<span className="skill-chip">SCSS</span>
							<span className="skill-chip">Bootstrap</span>
							<span className="skill-chip">Angular Material</span>
							<span className="skill-chip">Adobe Illustrator</span>
							<span className="skill-chip">Spring Boot</span>
							<span className="skill-chip">Java 8</span>
							<span className="skill-chip">C#</span>
							<span className="skill-chip">Graphics2D</span>
							<span className="skill-chip">.NET Core</span>
							<span className="skill-chip">.NET Framework</span>
							<span className="skill-chip">MongoDB</span>
							<span className="skill-chip">Maven</span>
							<span className="skill-chip">Lombok</span>
							<span className="skill-chip">Hibernate</span>
						</div>
					</div>
				</article>
			</section>

			<section className="experience-section" id="section3">
				<article className="experience-box" ref={parallaxBox3.ref} >
					<div className="left-panel" data-aos="fade-left">
						<span>Continental Romania</span>
						<span className="year">2018 - 2019</span>
					</div>
					<div className="main-panel" data-aos="fade-left">
						<h3>{t("experience.conti_two.title")}</h3>
						<p className="spaced-text">{t("experience.conti_two.description")}</p>
						<div className="skill-bubbles experience-skills">
							<span className="skill-chip">Java 8</span>
							<span className="skill-chip">Eclipse Core</span>
							<span className="skill-chip">C#</span>
							<span className="skill-chip">C++</span>
							<span className="skill-chip">C</span>
							<span className="skill-chip">Gerrit</span>
						</div>
					</div>
				</article>
			</section>
			<section className="experience-section drk-section" id="section4">
				<article className="experience-box" ref={parallaxBox4.ref} >
					<p className="resume-text" data-aos="fade-right">
						<span className="resume-static-text">{t("experience.resume.static_text")}</span>
						<a href="https://alexanderbej.github.io/cv/" title="Resume" target="_blank" rel="noreferrer">
							<strong>{t("experience.resume.link")}</strong>
						</a>
					</p>
				</article>
			</section>
		</main>
	);
};

export default Experience;
