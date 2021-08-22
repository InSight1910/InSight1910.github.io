/* eslint-disable no-unused-expressions */
import React from "react";
import "./About.css";
import PDF from "../../assets/CV/CVVicenteEspinosa.pdf";
import { Code } from "./code/Code";

export const About = () => {
	return (
		<section id="about" className="about__container container section">
			<h1 className="about__title">About Me</h1>
			<span className="about__subtitle">Who I'm?</span>
			<div className="about__content">
				<div className="about__img">
					<Code />
				</div>
				<div className="about__content_description">
					<p className="about__description">
						I'm a web developer with iniciatives to learn, waiting
						to work as a team, an autodidact young. Who loves coffee
						and cats.
					</p>
					<div className="about__button">
						<a
							href={PDF}
							className="button__flex button"
							download="CV Vicente Espinosa.pdf"
						>
							Download CV <i className="uil uil-import"></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
