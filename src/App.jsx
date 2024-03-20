import { Route, Routes } from "react-router-dom";

import Nav from "./routes/nav/nav.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Experience from "./routes/experience/experience.component";
import Projects from "./routes/projects/projects.component";

import "./App.scss";
import NotFound from "./routes/not-found/not-found.component";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Nav />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="experience" element={<Experience />} />
				<Route path="projects/*" element={<Projects />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
