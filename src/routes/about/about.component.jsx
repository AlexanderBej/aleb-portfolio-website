import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "framer-motion";
import AOS from "aos";

import Pizza from "../../components/pizza/pizza.component";

import "aos/dist/aos.css";
import "./about.styles.scss";

const About = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	const { t } = useTranslation();

	const aboutRef = useRef(null);
	const skillsRef = useRef(null);
	const pizzaRef = useRef(null);

	const isAboutInView = useInView(aboutRef, { once: true });
	const isSkillsInView = useInView(skillsRef, { once: true });
	const isPizzaInView = useInView(pizzaRef, { once: true });

	return (
		<main className="main main-inline">
			<article className="about-container" data-aos="fade-down">
				<h1 ref={aboutRef}>
					{t("about.myself.title.normal")}
					<span className="sec-color">{t("about.myself.title.highlight")}</span>
				</h1>
				<div
					className="underline"
					style={{
						width: isAboutInView ? "100%" : "10%",
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}
				/>
				<p className="spaced-text">{t("about.myself.text")}</p>
			</article>
			<article className="skills-container">
				<div className="skill-text" data-aos="fade-right">
					<h1 ref={skillsRef}>
						{t("about.skills.title.normal")}
						<span className="sec-color">{t("about.skills.title.highlight")}</span>
					</h1>
					<div
						className="underline"
						style={{
							width: isSkillsInView ? "100%" : "10%",
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
						}}
					/>
					<p className="spaced-text">{t("about.skills.textOne")}</p>
					<p className="spaced-text">{t("about.skills.textTwo")}</p>
				</div>
				<div className="skill-bubbles" data-aos="fade-left">
					<span className="skill-chip">Javascript</span>
					<span className="skill-chip">Typescript</span>
					<span className="skill-chip">React</span>
					<span className="skill-chip">Angular</span>
					<span className="skill-chip">HTML5</span>
					<span className="skill-chip">CSS3</span>
					<span className="skill-chip">Sass</span>
					<span className="skill-chip">Redux</span>
					<span className="skill-chip">Adobe Illustrator</span>
					<span className="skill-chip">Figma</span>
					<span className="skill-chip">Angular Material</span>
					<span className="skill-chip">Styled Components</span>
					<span className="skill-chip">Bootstrap</span>
					<span className="skill-chip">Firebase</span>
					<span className="skill-chip">MongoDB</span>
					<span className="skill-chip">Stripe</span>
					<span className="skill-chip">Microsoft Azure</span>
					<span className="skill-chip">Github</span>
				</div>
			</article>
			<article className="personal">
				<Pizza data-aos="fade-right" />
				<div className="personal-text" data-aos="fade-left">
					<h1 ref={pizzaRef}>
						{t("about.quips.title.normal")}
						<span className="sec-color">{t("about.quips.title.highlight")}</span>
					</h1>
					<div
						className="underline"
						style={{
							width: isPizzaInView ? "100%" : "10%",
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
						}}
					/>
					<p className="spaced-text">{t("about.quips.text")}</p>
				</div>
			</article>
		</main>
	);
};

export default About;
