import React from "react";
import "./InMind.css";

import message from "../../assets/icons/message.svg";

export const InMind = () => {
	return (
		<section className="container section">
			<div className="inmind-container">
				<div>
					<h2 className="inmind-title">
						You have a new project in mind?
					</h2>
					<p className="inmind-subtitle">
						Contact me now to talk about your project so we can work
						together
					</p>
				</div>
				<a href="" className="button button__flex button__inmind">
					Contact me
					<img src={message} alt="" className="inmind-message" />
				</a>
			</div>
		</section>
	);
};
