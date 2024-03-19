import { useRef, useState } from "react";
// import { useTranslation } from "react-i18next";
import { useInView } from "framer-motion";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./contact-form.styles.scss";

const defaultFormFields = {
	name: "",
	email: "",
	message: "",
};

const ContactForm = () => {
	// const { t } = useTranslation();
	const form = useRef();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formFields;

	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const messageRef = useRef(null);

	const isNameInView = useInView(nameRef, { once: true });
	const isEmailInView = useInView(emailRef, { once: true });
	const isMessageInView = useInView(messageRef, { once: true });

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
			<h1 className="mt0">Write me a <span className="sec-color">message</span></h1>
			<form ref={form} onSubmit={handleSubmit}>
				<div
					ref={nameRef}
					style={{
						width: isNameInView ? "100%" : "10%",
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}>
					<FormInput label="Name" type="text" inputType={"input"} onChange={handleChange} name="name" required value={name} />
				</div>

				<div
					ref={emailRef}
					style={{
						width: isEmailInView ? "100%" : "20%",
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}>
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
				</div>

				<div
					ref={messageRef}
					style={{
						width: isMessageInView ? "100%" : "30%",
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}>
					<FormInput label="Message" type="text" inputType={"textarea"} onChange={handleChange} required name="message" value={message} />
				</div>

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
