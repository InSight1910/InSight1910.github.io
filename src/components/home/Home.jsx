import React from "react";
import "./Home.css";

import Arrow from "../../assets/icons/tag.svg";

export const Home = () => {
	return (
		<section className="container section">
			<div className="bio__group">
				<div className="icon__bio">
					<a
						href="https://github.com/InSight1910"
						target="_blank"
						className=""
						rel="noopener noreferrer"
					>
						<i className="uil uil-github icon__social_media"></i>
					</a>
					<a
						href="mailto:cvveglia@hotmail.com"
						target="_blank"
						className=""
						rel="noopener noreferrer"
					>
						<i className="uil uil-envelope-alt icon__social_media"></i>
					</a>
				</div>
				<div className="bio__photo">
					<svg
						viewBox="0 0 200 200"
						className="home__bio"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M55.4,-16.7C64,8.6,57.9,40,37.4,55.9C16.9,71.8,-17.9,72.2,-36.3,57.2C-54.6,42.2,-56.3,11.7,-47.5,-13.8C-38.7,-39.3,-19.4,-59.8,2,-60.5C23.4,-61.1,46.7,-42,55.4,-16.7Z"
							transform="translate(90 100)"
						/>
					</svg>
				</div>
				<div className="bio__data">
					<h1 className="home__name">Hi, I'm Vicente</h1>
					<h3 className="home__paragraph">Fullstack Developer</h3>
					<br />
					<p className="home__description">
						I'm a junior web developer with a passion of create
						amazing website
					</p>
					<div className="bio__contact">
						<button type="button" className="button button__flex">
							Contact Me <i className="uil uil-message"></i>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
