import NotFoundImage from "../../assets/8bit_not-found.webp";

import "./not-found.styles.scss";

const NotFound = () => {
	return (
		<main className="not-found-page p100">
			<h2>Page not found</h2>
			<div className="image-box">
				<img src={NotFoundImage} alt="Not Found 8bit" className="not-found-img" />
				<h1 className="not-found-header mt0">404</h1>
			</div>
			<p>I'm sorry, but it appears the page you are searching does not exist. Please navigate to any of the other pages.</p>
		</main>
	);
};

export default NotFound;
