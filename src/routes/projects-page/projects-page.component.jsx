import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { projects } from "../../utils/projects";

import MBDCover from "../../assets/project-imgs/mbd/landing.PNG";
import DRKCover from "../../assets/project-imgs/drk-clothing/landing.PNG";
import BlogCover from "../../assets/project-imgs/gatsby-blog/landing.png";
import AlebCover from "../../assets/project-imgs/aleb/home_page_1080.PNG";
import SunaDubiosCover from "../../assets/project-imgs/suna-dubios/SD_box.jpg";

import "./projects-page.styles.scss";

const ProjectsPage = () => {
	const { t } = useTranslation();

	const imgHomeRoute = "../../assets/project-imgs";

	const mbdroute = "/mbd/landing.PNG";
	const drkroute = "/drk-clothing/landing.PNG";

	const handleProjectIndex = (number) => {
		const numToString = (number + 1).toString();
		return numToString.padStart(3, "0");
	};

	const navigate = useNavigate();
	const handleProjectNavigation = (projectURL) => {
		console.log(projectURL);
		navigate(`/projects/${projectURL}`);
	};

	return (
		<main className="projects-list">
			<div className="proj-box" datatitle="Mother's Birth Doula">
				<Link to={"mothers-birth-doula"}>
					<img src={require("../../assets/project-imgs/mbd/landing.PNG").default} alt="Mother's Birth Doula" style={{ display: "none" }} />
					<div className="cover-img" dataurl="../../assets/project-imgs/mbd/landing.PNG" style={{ backgroundImage: `url(${MBDCover})` }} />
				</Link>
			</div>
			<div className="proj-box" datatitle="DRK Clothing">
				<Link to={"drk-clothing"}>
					<div
						className="cover-img"
						dataurl="../../assets/project-imgs/drk-clothing/landing.PNG"
						style={{ backgroundImage: `url(${imgHomeRoute}/drk-clothing/landing.PNG)` }}
					/>
				</Link>
			</div>
			<div className="proj-box" datatitle="Gatsby Blog">
				<Link to={"gatsby-blog"}>
					<div
						className="cover-img"
						dataurl="../../assets/project-imgs/gatsby-blog/landing.png"
						style={{ backgroundImage: `url(${imgHomeRoute}/gatsby-blog/landing.png)` }}
					/>
				</Link>
			</div>
			<div className="proj-box" datatitle="aleb (old)">
				<Link to={"aleb"}>
					<div
						className="cover-img"
						dataurl="../../assets/project-imgs/aleb/home_page_1080.PNG"
						style={{ backgroundImage: `url(${imgHomeRoute}/aleb/home_page_1080.PNG)` }}
					/>
				</Link>
			</div>
			<div className="proj-box" datatitle="Suna dubios">
				<Link to={"suna-dubios"}>
					<div className="cover-img" style={{ backgroundImage: `url(${imgHomeRoute}/suna-dubios/SD_on-the-table.jpg)` }} />
				</Link>
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
