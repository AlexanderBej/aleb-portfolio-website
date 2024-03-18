import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { projects } from "../../utils/projects";
import getImageURL from "../../utils/image";

import image1 from '../../assets/project-imgs/aleb/home_page_1080.PNG';
import image2 from '../../assets/project-imgs/aleb/about_page_1080.PNG';
import image3 from '../../assets/project-imgs/aleb/full_design.PNG';
import image4 from '../../assets/project-imgs/aleb/mobile_dark.PNG';
import image5 from '../../assets/project-imgs/aleb/mobile_light.PNG';


const defaultProject = {
	name: '',
	imgs: [],
	text: '',
	technologies: []
}

const Project = () => {
	const { category } = useParams();
	console.log(category)
	// const [imgs, setImgs] = useState([]);
	// const [text, setText] = useState("");

	const [project, setProject] = useState(defaultProject);
	const id = useParams().id;

	const images= [image1, image2, image3, image4, image5]
	

	useEffect(() => {
		const currentProject = projects.find((proj) => proj.url === id);
		// setImgs(currentProject.imgs);
		// setText(currentProject.text);
		console.log(currentProject)
		setProject(currentProject);
	}, [id]);

	const { name, imgs, text, technologies } = project;

	return (
		<div className="content">
			<div className="page-title">{name}</div>
			<div className="project-text">{text}</div>
			{images.map((value, index) => {
				return <img key={index} className="project-img" src={value} alt={value} />;
			})}
		</div>
	);
};

export default Project;
