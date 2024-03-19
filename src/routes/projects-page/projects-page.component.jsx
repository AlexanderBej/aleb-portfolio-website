import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import MBDCover from "../../assets/project-imgs/mbd/landing.PNG";
import DRKCover from "../../assets/project-imgs/drk-clothing/landing.PNG";
import BlogCover from "../../assets/project-imgs/gatsby-blog/landing.png";
import AlebCover from "../../assets/project-imgs/aleb/home_page_1080.PNG";
import SunaDubiosCover from "../../assets/project-imgs/suna-dubios/SD_on-the-table.jpg";

import "./projects-page.styles.scss";

const ProjectsPage = () => {
	const { t } = useTranslation();

	const handleProjectIndex = (number) => {
		const numToString = (number + 1).toString();
		return numToString.padStart(3, "0");
	};

	const navigate = useNavigate();
	const handleProjectNavigation = (projectURL) => {
		console.log(projectURL);
		navigate(`/projects/${projectURL}`);
	};

	const onNavigateToMBDHandler = () => navigate("projects/mothers-birth-doula");

	return (
		<main className="projects-list">
			<div className="proj-box" datatitle="Mother's Birth Doula" onClick={onNavigateToMBDHandler}>
				<div className="cover-img" style={{ backgroundImage: `url(${MBDCover})` }} />
			</div>
			<div className="proj-box" datatitle="DRK Clothing">
				<div className="cover-img" style={{ backgroundImage: `url(${DRKCover})` }} />
			</div>
			<div className="proj-box" datatitle="Gatsby Blog">
				<div className="cover-img" style={{ backgroundImage: `url(${BlogCover})` }} />
			</div>
			<div className="proj-box" datatitle="aleb (old)">
				<div className="cover-img" style={{ backgroundImage: `url(${AlebCover})` }} />
			</div>
			<div className="proj-box" datatitle="Suna dubios">
				<div className="cover-img" style={{ backgroundImage: `url(${SunaDubiosCover})` }} />
			</div>
			{/*<img
				onClick={() => handleProjectNavigation("mothers-birth-doula")}
				src={MBDCover}
				alt="Mother's Birth Doula Landing Page"
				className="project-img"
			/>
			<img onClick={() => handleProjectNavigation("drk-clothin")} src={DRKCover} alt="DRK Clothing Landing Page" className="project-img" />
			<img onClick={() => handleProjectNavigation("gatsby-blog")} src={BlogCover} alt="Gatsby Blog Landing Page" className="project-img" />
			<img
				onClick={() => handleProjectNavigation("aleb")}
				src={AlebCover}
				alt="Old version of aleb website Landing Page"
				className="project-img"
			/>
			<img
				onClick={() => handleProjectNavigation("suna-dubios")}
				src={SunaDubiosCover}
				alt="Suna Dubios board game box"
				className="project-img"
	/>*/}

			{/*<ul>
					{projects.map(({ id, url, name }, index) => {
						return (
							<li key={id}>
								<Link to={url} className="title">
									{handleProjectIndex(index)}.<span className="nav-prj-title">{name}</span>
								</Link>
							</li>
						);
					})}
				</ul>*/}
		</main>
	);
};

export default ProjectsPage;
