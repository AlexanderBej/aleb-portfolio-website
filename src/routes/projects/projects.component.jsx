import { Routes, Route } from "react-router-dom";

import ProjectsPage from "../projects-page/projects-page.component";
import Project from "../../components/project/project.component";

const Projects = () => {
	return (
		<Routes>
			<Route index element={<ProjectsPage />} />
			<Route path=":id" element={<Project />} />
		</Routes>
	);
};

export default Projects;
