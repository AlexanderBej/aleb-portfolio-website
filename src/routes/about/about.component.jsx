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
					About <span className="sec-color">myself</span>
				</h1>
				<div
					className="underline"
					style={{
						width: isAboutInView ? "100%" : "10%",
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}
				/>
				<p className="spaced-text">
					Hey there! 👋 I'm a super enthusiastic <strong>web wizard</strong> and <strong>design dazzler</strong> originally from Romania,
					but currently soaking up the sun in Spain! 🌞 My jam? Crafting super sleek and modern user experiences that'll knock your socks
					off! 💻✨ I'm all about bringing ideas to life through my trusty code keyboard, making sure your online presence is as smooth as
					butter. With my knack for killer designs and an obsession with squeaky-clean code, I'm on a mission to whip up web solutions that
					not only meet but totally blow your mind! 🚀🎨💥
				</p>
			</article>
			<article className="skills-container">
				<div className="skill-text" data-aos="fade-right">
					<h1 ref={skillsRef}>
						Technical <span className="sec-color">skills</span>
					</h1>
					<div
						className="underline"
						style={{
							width: isSkillsInView ? "100%" : "10%",
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
						}}
					/>
					<p className="spaced-text">
						Since 2019, I've been rocking the web developer scene, polishing up my skills in both frontend and backend wizardry. But wait,
						there's more! For a hot minute now, I've been diving into the freelance world, wearing multiple hats as a graphic guru, UX/UI
						extraordinaire, and frontend ninja.
					</p>
					<p className="spaced-text">
						Now, let me spill the beans—frontend development has always been my groove. Why, you ask? Because it's where art and code
						collide in the most magical way! It's like bringing a canvas to life with a sprinkle of coding magic, and let me tell you, it's
						my happy place!{" "}
					</p>
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
						Quirky <span className="sec-color">Quips</span>
					</h1>
					<div
						className="underline"
						style={{
							width: isPizzaInView ? "100%" : "10%",
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
						}}
					/>
					<p className="spaced-text">
						Aaaaand, for my personal side, I'm a nature nut, absolutely hooked on camping and hiking! 🏕️ But hey, I've got a cozy side
						too—I'm a total couch potato and cinephile, always down for a binge-watching session of series and movies. 🎬 And let's not
						forget my love affair with pizza... yup, you guessed it, I'm all about that cheesy goodness! 🍕
					</p>
				</div>
			</article>
		</main>
	);
};

export default About;
