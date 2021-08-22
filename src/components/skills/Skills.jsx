import React from "react";
import "./Skills.css";
import Item from "./item/Item";

import angular from "../../assets/icons/angular.svg";
import css from "../../assets/icons/css3.svg";
import html from "../../assets/icons/html.svg";
import react from "../../assets/icons/react.svg";
import javascript from "../../assets/icons/javascript.svg";

import bracket from "../../assets/icons/brackets-curly.svg";
import server from "../../assets/icons/server.svg";

import django from "../../assets/icons/django.svg";
import express from "../../assets/icons/express.svg";
import flask from "../../assets/icons/flask.svg";
import mongodb from "../../assets/icons/mongodb.svg";
import python from "../../assets/icons/python.svg";
import typescript from "../../assets/icons/typescript.svg";
import nodejs from "../../assets/icons/node-js.svg";
import postgresql from "../../assets/icons/postgresql.svg";
import sqlserver from "../../assets/icons/sql.svg";

export const Skills = () => (
	<section className="container section" id="skills">
		<h2 className="title">Skills</h2>
		<span className="subtitle">What I know</span>
		<div className="skill__content">
			<Item
				title="Frontend Developer"
				icon_title={bracket}
				experience={1}
				skills={[
					{ icon: html, name: "HTML5" },
					{ icon: css, name: "CSS3" },
					{ icon: javascript, name: "JavaScript" },
					{ icon: react, name: "React" },
					{ icon: angular, name: "Angular" },
				]}
				id="front"
			/>
			<Item
				title="Backend Developer"
				icon_title={server}
				experience={1}
				skills={[
					{ icon: nodejs, name: "NodeJS" },
					{ icon: typescript, name: "TypeScript" },
					{ icon: javascript, name: "JavaScript" },
					{ icon: python, name: "Python" },
					{ icon: django, name: "Django" },
					{ icon: flask, name: "Flask" },
					{ icon: express, name: "ExpressJS" },
					{ icon: mongodb, name: "MongoDB" },
					{ icon: postgresql, name: "PostgreSQL" },
					{ icon: sqlserver, name: "SQL Server" },
				]}
				id="back"
			/>
		</div>
	</section>
);
