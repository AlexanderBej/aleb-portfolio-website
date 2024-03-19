// import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

// import { ThemeContext } from "./contexts/theme.context";
import ScrollToTop from "./utils/scroll-to-top";

import Nav from "./routes/nav/nav.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Experience from "./routes/experience/experience.component";
import Projects from "./routes/projects/projects.component";

import "./App.scss";

function App() {
	// const { theme } = useContext(ThemeContext);

	return (
		// <div className={`${theme} app-wrapper`}>
		<Routes>
			<Route path="/" element={<Nav />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="experience" element={<Experience />} />
				<Route path="projects/*" element={<Projects />} />
			</Route>
		</Routes>
		// </div>
		// <div className={`whole-app ${theme}`}>
		//   <div className="ripple-background">
		//     <div className="circle xlarge"></div>
		//     <div className="circle large"></div>
		//     <div className="circle medium"></div>
		//     <div className="circle small"></div>
		//   </div>
		//   <div className='border'>
		//     <Routes>
		//       <Route path='/' element={<Nav />}>
		//         <Route index element={<Home />} />
		//         <Route path='about' element={<About />} />
		//         <Route path='experience' element={<Experience />} />
		//         <Route path='projects/*' element={<Projects />} />
		//         <Route path='contact' element={<Contact />} />
		//       </Route>
		//     </Routes>
		//   </div>
		// </div>
	);
}

export default App;
