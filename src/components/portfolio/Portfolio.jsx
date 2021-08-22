import React from "react";

import "./Portfolio.css";

import arrowR from "../../assets/icons/arrow-right-white.svg";
import angleR from "../../assets/icons/angle-right-b.svg";
import angleL from "../../assets/icons/angle-left-b.svg";

import { CarouselCom } from "./Carousel/Carousel";

export const Portfolio = () => {
	return (
		<section id="portfolio" className="container section">
			<h2 className="title">Portfolio</h2>
			<span className="subtitle">Most recent work</span>
			<CarouselCom />
		</section>
	);
};
