import React from "react";
import { Item } from "./Item/Item.jsx";

import phone from "../../assets/icons/phone-alt.svg";
import location from "../../assets/icons/location-point.svg";
import mail from "../../assets/icons/envelope.svg";

export const Contact = () => {
	return (
		<section id="contact" className="container section">
			<h2 className="title">Contact Me</h2>
			<span className="subtitle">Get in touch</span>
			<Item img={phone} title="Call me" subtitle="+56 9 9938 1420" />
			<Item img={mail} title="Email" subtitle="cvveglia@hotmail.com" />
			<Item img={location} title="Location" subtitle="Chile, Santiago" />
		</section>
	);
};
