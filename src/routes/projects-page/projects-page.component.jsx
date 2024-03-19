import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { projects } from "../../utils/projects";

import Button from "../../components/button/button.component";

import "./projects-page.styles.scss";

const ProjectsPage = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	
	const onNavigateToProjectHandler = (url) => navigate(url);

	return (
		<main className="projects-list">
			{projects.map(({ id, url, name, cover }) => {
				return (
					<div className="proj-box" key={id}>
						<div className="image-box">
							<img src={cover} alt={name} className="cover-img"/>
						</div>
						<h2>{name}</h2>
						<p>{t(`projects.${url}.short`)}</p>
						<Button onClick={() => onNavigateToProjectHandler(url)}>See project details</Button>
					</div>
				);
			})}
		</main>
	);
};

export default ProjectsPage;
