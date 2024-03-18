import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useInView } from "framer-motion";

import FormInput from "../../components/form-input/form-input.component";
import Modal from "../../components/modal/modal.component";
import Button from "../../components/button/button.component";

import "./contact.styles.scss";
import "aos/dist/aos.css";
import SocialIcons from "../../components/social-icons/social-icons.component";

import FacebookIcon from "../../assets/social-icons/icons8-facebook-neu-50.png";
import InstagramIcon from "../../assets/social-icons/icons8-instagram-50.png";
import LinkedInIcon from "../../assets/social-icons/icons8-linkedin-50.png";
import DribbbleIcon from "../../assets/social-icons/icons8-dribbble-48.png";

const defaultFormFields = {
	name: "",
	email: "",
	phoneNumber: "",
	message: "",
};

const Contact = () => {
	const { t } = useTranslation();
	const form = useRef();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, phoneNumber, message } = formFields;

	const lineRef = useRef(null);
	const rightLineRef = useRef(null);

	const isLeftLineInView = useInView(lineRef, { once: true });
	const isRightLineInView = useInView(lineRef, { once: true });

	// const sendEmail = () => {
	// 	const serviceId = process.env.REACT_APP_EMAILJS_EMAIL_SERVICE_ID;
	// 	const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
	// 	const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

	// 	emailjs.sendForm(serviceId, templateId, form.current, { publicKey: publicKey }).then(
	// 		() => {
	// 			setLoading(false);
	// 			openModal();
	// 		},
	// 		(err) => {
	// 			console.log(err);
	// 		}
	// 	);
	// };

	useEffect(() => {
		console.log("AOS contact");
		AOS.init();
	}, []);

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

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="contact-page">
			<article className="contact-page-header">
				<h1>Have a project on your mind?</h1>
				<h2>Let's work together. Let me help you expand your online presence and help you become even greater at what you do.</h2>
				<span>Fill out the form right below to leave me a message...</span>
			</article>
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

				<FormInput
					label="Phone number (optional)"
					type="number"
					inputType={"input"}
					inputMode="tel"
					pattern="[0-9]"
					onChange={handleChange}
					name="phoneNumber"
					value={phoneNumber}
				/>

				<FormInput label="Message" type="text" inputType={"textarea"} onChange={handleChange} required name="message" value={message} />

				<div className="btns-container">
					<Button isLoading={loading} type="submit" customClassName="message-me-btn">
						Message me
					</Button>
				</div>
			</form>
			<section>
				<Modal isModalOpen={isModalOpen} onClose={closeModal} />
			</section>

			<div className="under-contact-form">
				<div className="or-line" >
					<div
						className="underline left-line"
						style={{
							width: isLeftLineInView ? "100%" : "10%",
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
						}}
					/>
					<span>OR</span>
					<div
						className="underline right-line"
						style={{
							width: isRightLineInView ? "100%" : "10%",
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
						}}
					/>
				</div>
				<h2 ref={lineRef}>you can contact me on any of these social medias</h2>
				<div className="">
					<Link data-aos="fade-right" data-aos-delay="300" to={"9gag.com"}>
						<img src={FacebookIcon} alt="Facebook logo" className="contact-icon" />
					</Link>
					<Link data-aos="fade-right" data-aos-delay="200" to={"https://www.instagram.com/alebDoesDesign/"}>
						<img src={InstagramIcon} alt="Instagram logo" className="contact-icon" />
					</Link>
					<Link data-aos="fade-right" data-aos-delay="100" to={"9gag.com"}>
						<img src={LinkedInIcon} alt="LinkedIn logo" className="contact-icon" />
					</Link>
					<Link data-aos="fade-right" to={"9gag.com"}>
						<img src={DribbbleIcon} alt="Dribbble logo" className="contact-icon" />
					</Link>
				</div>
			</div>

			{/*<div className="contact-container">
				<div className="mail-contact">
					<h3 className="contact-title">e-mail</h3>
					<a className="contact-option" id="email" href="mailto: alexbej07@gmail.com">
						alexbej07@gmail.com
					</a>
				</div>
				<div className="social-contact">
					<h3 className="contact-title">{t("contact.social")}</h3>
					<div className="contact-options">
						<a
							className="contact-option"
							id="instagram"
							href="https://www.instagram.com/alebDoesDesign/"
							target="_blank"
							title="Instagram"
							rel="noreferrer">
							instagram
						</a>
						<a
							className="contact-option"
							id="linkedin"
							href="https://www.linkedin.com/in/alexandru-bej-203a72ab/"
							target="_blank"
							title="LinkedIn"
							rel="noreferrer">
							linkedIn
						</a>
						<a className="contact-option" id="dribbble" href="https://dribbble.com/alebX" target="_blank" title="Dribbble" rel="noreferrer">
							dribbble
						</a>
					</div>
				</div>
	</div>*/}
		</div>
	);
};

export default Contact;
