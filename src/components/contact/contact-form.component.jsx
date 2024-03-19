import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./contact-form.styles.scss";

const defaultFormFields = {
	name: "",
	email: "",
	message: "",
};

const ContactForm = () => {
	const { t } = useTranslation();
	const form = useRef();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formFields;

	// const sendEmail = () => {
	// 	const serviceId = process.env.REACT_APP_EMAILJS_EMAIL_SERVICE_ID;
	// 	const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
	// 	const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

	// 	emailjs.sendForm(serviceId, templateId, form.current, { publicKey: publicKey }).then(
	// 		() => {
	// 			setLoading(false);
	// 		},
	// 		(err) => {
	// 			console.log(err);
	// 		}
	// 	);
	// };

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			setLoading(true);
			// sendEmail();
		} catch (error) {
			console.log(error);
		} finally {
			resetFormFields();
		}
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="contact-form">
		<h1>Write me a message</h1>
			<form ref={form} onSubmit={handleSubmit}>
				<FormInput label="Name" type="text" inputType={"input"} onChange={handleChange} name="name" required value={name} />

				<FormInput
					label="Email"
					type="text"
					inputMode="email"
					inputType={"input"}
					onChange={handleChange}
					name="email"
					required
					value={email}
				/>

				<FormInput label="Message" type="text" inputType={"textarea"} onChange={handleChange} required name="message" value={message} />

				<div className="btns-container">
					<Button isLoading={loading} type="submit" customClassName="message-me-btn">
						Message me
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
