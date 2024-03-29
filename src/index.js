import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ThemeProvider } from "./contexts/theme.context";
import "./utils/i18n";

import "./index.css";
import ScrollToTop from "./utils/scroll-to-top";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ParallaxProvider>
			<ThemeProvider>
				<BrowserRouter>
					<ScrollToTop />
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</ParallaxProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
