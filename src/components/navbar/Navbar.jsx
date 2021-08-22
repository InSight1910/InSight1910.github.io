import React, { useState, useRef, useEffect, createContext } from "react";

import "./Navbar.css";

import Language from "../../assets/icons/language.svg";
import AngleDown from "../../assets/icons/angle-down.svg";

const nav = [
	{
		id: "#",
		img: {
			className: "uil uil-estate",
		},
		p: {
			text: "Home",
			className: "nav__text",
		},
	},
	{
		id: "#about",
		img: {
			className: "uil uil-user",
		},
		p: {
			text: "About",
			className: "nav__text",
		},
	},
	{
		id: "#skills",
		img: {
			className: "uil uil-file-alt",
		},
		p: {
			text: "Skills",
			className: "nav__text",
		},
	},
	{
		id: "#services",
		img: {
			className: "uil uil-briefcase-alt",
		},
		p: {
			text: "Services",
			className: "nav__text",
		},
	},
	{
		id: "#portfolio",
		img: {
			className: "uil uil-scenery",
		},
		p: {
			text: "Portfolio",
			className: "nav__text",
		},
	},
	{
		id: "#contact",
		img: {
			className: "uil uil-message",
		},
		p: {
			text: "Contact me",
			className: "nav__text",
		},
	},
];
let LanguageContext = createContext();

export const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [language, setLanguage] = useState("EN");

	return (
		<LanguageContext.Provider value={{ language: "ff" }}>
			<header className="header">
				<nav className="nav container">
					<a href="" alt="Vicente Espinosa" className="nav__logo">
						Vicente Espinosa
					</a>

					<div className={`nav__group ${toggle ? "show__menu" : ""}`}>
						{nav.map((item, index) => (
							<a href={item.id} className="nav__item" key={index}>
								<i
									className={`nav__icon ${item.img.className}`}
								/>
								<h2 className="nav__text">{item.p.text}</h2>
							</a>
						))}
					</div>
					<div className="language">
						<select
							name="language"
							id="language"
							className="language-input"
							onChange={(e) => {
								console.log(e.target.value);
							}}
						>
							<option value="EN" className="langauge_option">
								En
							</option>
							<option value="ES" className="langauge_option">
								Es
							</option>
						</select>
					</div>
					<div className="nav__buttons">
						{!toggle ? (
							<i
								className="nav__toggle uil uil-apps"
								onClick={(e) => setToggle(!toggle)}
							/>
						) : (
							<i
								className="uil uil-multiply nav__close"
								onClick={(e) => setToggle(!toggle)}
							/>
						)}
					</div>
				</nav>
			</header>
		</LanguageContext.Provider>
	);
};
export default LanguageContext;
