import "./pizza.styles.scss";

export const Pizza = () => {
	return (
		<div className="pizza-container">
			<div className="pizza">
				<div className="basil">
					<div className="leaf"></div>
				</div>
				<div className="onions"></div>
				<div className="olives"></div>
				<div className="pepperonis"></div>
				<div className="slices">
					<div className="slice slice-1"></div>
					<div className="slice slice-2"></div>
					<div className="slice slice-3"></div>
					<div className="slice slice-4"></div>
				</div>
			</div>
		</div>
	);
};

export default Pizza;
