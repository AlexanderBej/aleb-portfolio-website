import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "framer-motion";

import { projects } from "../../utils/projects";

import Button from "../../components/button/button.component";

import "./projects-page.styles.scss";

const ProjectsPage = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const projectRef = useRef(null);

	const isProjectInView = useInView(projectRef, { once: true });

	const onNavigateToProjectHandler = (url) => navigate(url);

	return (
		<main className="projects-list p100">
			{projects.map(({ id, url, name, cover }) => {
				return (
					<div className="proj-box" key={id}>
						<div className="image-box">
							<img src={cover} alt={name} className="cover-img" />
						</div>
						<h2 ref={projectRef}>{name}</h2>
						<div
							className="underline center-underline"
							style={{
								width: isProjectInView ? "100%" : "10%",
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
							}}
						/>
						<p>{t(`projects.${url}.short`)}</p>
						<Button onClick={() => onNavigateToProjectHandler(url)}>See project details</Button>
					</div>
				);
			})}
		</main>
	);
};

export default ProjectsPage;
