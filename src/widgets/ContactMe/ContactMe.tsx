import React from "react";
import * as s from "./ContactMe.module.scss"
import {ContactForm} from "@/features/ContactForm";
import {SocialLinks} from "@/entities/SocialLinks";
import ContactText from "@/entities/ContactText/ContactText";

// ContactMe
const ContactMe: React.FC = (p) => {

	// Return
	return (
		<section className={s.wrapper}>
			<div className={s.content_container}>
				<h4 className={s.contactTitle}>Contact</h4>
				<div className={s.contactConteiner} id={'communicate'}>
					<ContactText/>
					<ContactForm/>
				</div>
				<SocialLinks/>
			</div>
		</section>
	)
};

export default ContactMe