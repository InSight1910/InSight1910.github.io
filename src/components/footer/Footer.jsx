import React from "react";
import "./Footer.css";

import github from "../../assets/icons/github.svg";
import mail from "../../assets/icons/envelope-white.svg";
export const Footer = () => {
	const links = [
		{
			href: "#services",
			text: "Services",
		},
		{
			href: "#portfolo",
			text: "Portfolo",
		},
		{
			href: "#contact",
			text: "Contact Me",
		},
	];
	return (
		<section className="section footer__section">
			<div className="container footer__container">
				<div>
					<h2 className="footer__title">Vicente Espinosa</h2>
					<span className="footer__subtitle">
						Frontend and Backend developer
					</span>
					<div className="footer__media">
						<a
							href="https://github.com/InSight1910"
							target="_blank"
							className=""
							rel="noopener noreferrer"
						>
							<img
								src={github}
								alt="github"
								className="footer__icons"
							/>
						</a>
						<a
							href="mailto:cvveglia@hotmail.com"
							target="_blank"
							className=""
							rel="noopener noreferrer"
						>
							<img
								src={mail}
								alt="email"
								className="footer__icons"
							/>
						</a>
					</div>
				</div>
				<ul className="footer__links">
					{links.map(({ href, text }, index) => (
						<li key={index}>
							<a href={href} className="footer__link">
								{text}
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
