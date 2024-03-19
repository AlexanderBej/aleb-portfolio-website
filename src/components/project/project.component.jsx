import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { projects } from "../../utils/projects";

import ImgGallery from "../image-gallery/image-gallery.component";

import "./project.styles.scss";

const defaultProject = {
	name: "",
	imgs: [],
	text: "",
	technologies: [],
};

const Project = () => {
	const [project, setProject] = useState(defaultProject);
	const id = useParams().id;

	const { t } = useTranslation();

	useEffect(() => {
		const currentProject = projects.find((proj) => proj.url === id);
		setProject(currentProject);
	}, [id]);

	const { name, imgs, technologies, website, url } = project;

	return (
		<div className="project-content">
			<h1 className="project-title">{name}</h1>
			<div className="spaced-text project-text">{t(`projects.${url}.text`)}</div>
			{website && website.trim() !== "" ? (
				<div className="project-link">
					<Link to={website} target="_blank" rel="noopener noreferrer">
						{t('projects.live')}
					</Link>
				</div>
			) : null}
			<div className="skill-bubbles project-bubbles">
				{technologies.map((technology) => {
					return (
						<div key={technology} className="skill-chip">
							{technology}
						</div>
					);
				})}
			</div>
			<ImgGallery imgs={imgs} />
		</div>
	);
};

export default Project;
