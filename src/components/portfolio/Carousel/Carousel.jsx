import React from "react";
import "./Carousel.css";
// import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Navigation } from "swiper/core";

import arrowR from "../../../assets/icons/arrow-right-white.svg";

import guadalupeImg from "../../../assets/img/Logo.svg";
import pizzaImg from "../../../assets/icons/descargar.svg";
import question from "../../../assets/icons/question.svg";

import angleR from "../../../assets/icons/angle-right-b.svg";
import angleL from "../../../assets/icons/angle-left-b.svg";

SwiperCore.use([Navigation]);

const Icon = ({ img }) => (
	<img src={img} style={{ width: "3rem" }} alt=""></img>
);

export const CarouselCom = () => {
	const data = [
		{
			img: guadalupeImg,
			title: "Guadalupe Estudio",
			description:
				"This is a web page in progress for a Startup of graphic design and web desing.",
			link: "https://guadalupestudio.cl",
		},
		{
			img: pizzaImg,
			title: "Pizza shop",
			description:
				"This is a api for a pizza shop, I made this to practice with Flask and MongoDB.",
			link: "https://github.com/InSight1910/pizzaShop",
		},
		{
			img: question,
			title: "Coming soon",
			description:
				"I'm working on some ideas that I have in mind, stay close to see what I do.",
		},
	];
	return (
		<Swiper navigation>
			{data.map(({ img, description, link = "", title }, index) => (
				<SwiperSlide className="swiper__content" key={index}>
					<img src={img} className="swiper__logo" alt="" />
					<div className="swiper-data">
						<h3 className="swiper-title">{title}</h3>
						<p className="swiper-description">{description}</p>

						{link && (
							<a
								href={link}
								className="button button__flex swiper__button"
								target="_blank"
								rel="noopener noreferrer"
							>
								Demo
								<img
									src={arrowR}
									alt=""
									className="swiper__icon"
								/>
							</a>
						)}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
