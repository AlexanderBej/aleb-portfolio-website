import Spinner from "../spinner/spinner.component";

import "./button.styles.scss";

const Button = ({ children, isLoading = false, customClassName = "", ...otherProps }) => {
	return (
		<div className={`${customClassName} btn-container`}>
			<button className="aleb-btn" disabled={isLoading} {...otherProps}>
				{isLoading ? <Spinner /> : <span>{children}</span>}
			</button>
		</div>
	);
};

export default Button;
