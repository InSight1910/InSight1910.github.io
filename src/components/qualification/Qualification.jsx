import React, { useState, useRef } from "react";
import "./Qualification.css";
import Tab from "./tab/Tab.jsx";

import graduationCap from "../../assets/icons/graduation-cap.svg";
import briefcase from "../../assets/icons/briefcase-alt.svg";

export const Qualification = () => {
	const [tabE, setTabE] = useState(true);
	const [tabW, setTabW] = useState(false);

	const education = [
		{
			title: "Computer Enginer",
			subtitle: "Chile - DuocUC Institute",
			date: "2021	- present",
		},
		{
			title: "Java Programming",
			subtitle:
				"Chile - University of Chile in an alliance with Accenture",
			date: "2020	- 2021",
		},
		{
			title: "High School",
			subtitle: "Chile - New Little College",
			date: "2016	- 2019",
		},
		{
			title: "Primary School",
			subtitle: "Chile - New Little College",
			date: "2008	- 2015",
		},
	];
	const work = [
		{
			title: "With out experience",
			subtitle: "Waiting for a opportunity",
			date: "",
		},
	];

	const EducationData = useRef();
	const WorkData = useRef();

	const handleTabEducation = (e) => {
		setTabE(true);
		setTabW(false);
	};
	const handleTabWork = (e) => {
		setTabW(true);
		setTabE(false);
	};
	return (
		<section className="container section">
			<h2 className="title">My Qualification</h2>
			<p className="subtitle">More about me</p>
			<div className="qualification__container">
				<div className="qualifications__buttons">
					<div
						className={`qualification__button button__flex ${
							tabE ? "active__tab" : ""
						}`}
						onClick={() => handleTabEducation()}
					>
						<img
							className="qualification__icon"
							src={graduationCap}
							alt=";"
						/>
						Education
					</div>
					<div
						className={`qualification__button button__flex ${
							tabW ? "active__tab" : ""
						}`}
						onClick={() => handleTabWork()}
					>
						<img
							className="qualification__icon"
							src={briefcase}
							alt=""
						/>
						Work
					</div>
				</div>
				<div className="qualification__section">
					<div
						className={`qualification__education ${
							tabW ? "qualification__active" : ""
						}`}
						ref={EducationData}
					>
						{education.map((item, index) => (
							<Tab
								key={index}
								index={index}
								title={item.title}
								subtitle={item.subtitle}
								date={item.date}
								last={
									index === education.length - 1 ||
									education.length === 1
										? true
										: false
								}
							/>
						))}
					</div>
					<div
						className={`qualification__work ${
							tabE ? "qualification__active" : ""
						}`}
						ref={WorkData}
					>
						{work.map((item, index) => (
							<Tab
								key={index}
								index={index}
								title={item.title}
								subtitle={item.subtitle}
								date={item.date}
								last={
									index === work.length - 1 ||
									education.length === 1
										? true
										: false
								}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
