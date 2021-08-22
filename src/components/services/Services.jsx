import React, { useState, createContext, useContext } from "react";
import "./Services.css";

import arrowR from "../../assets/icons/arrow-right.svg";
import arrow from "../../assets/icons/arrow.svg";
import server from "../../assets/icons/server.svg";
import check from "../../assets/icons/check.svg";
import multiply from "../../assets/icons/multiply.svg";

const ModalContext = createContext();

const Modal = ({ title, aspects }) => {
	const titleList = title.split(" ");
	const lenghtTitle = Object.keys(titleList).length;
	const toggleModal = useContext(ModalContext)[0];
	const handleClick = useContext(ModalContext)[1];
	return (
		<div
			className={`modal__container  ${
				!toggleModal ? "active__modal" : ""
			}`}
		>
			<div className="modal__card">
				<h4 className="modal__title">
					{titleList.map((item, index) =>
						lenghtTitle > 1 && titleList[index] !== "" ? (
							<React.Fragment key={index}>
								{item} <br />
							</React.Fragment>
						) : (
							item
						)
					)}
				</h4>
				<img
					src={multiply}
					alt=""
					onClick={() => handleClick()}
					className="close"
				/>
				<ul className="">
					{aspects.map((item, index) => (
						<li className="modal__content" key={index}>
							<img src={check} className="icon__modal" alt="" />
							<p className="modal__text">{item}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

const Card = (props) => {
	const { title, imgCard, aspects } = props;

	const [toggleModal, setToggleModal] = useState(true);
	const handleClick = (e) => {
		setToggleModal(!toggleModal);
	};

	return (
		<ModalContext.Provider value={[toggleModal, handleClick]}>
			<div className="card">
				<img src={imgCard} alt="" className="card__img" />
				<div className="">
					<h3 className="services__title">{title}</h3>
					<span
						className="services__subtitle"
						onClick={() => handleClick()}
					>
						View more
						<img src={arrowR} alt="" className="services__arrow" />
					</span>
				</div>
				<Modal title={title} aspects={aspects} />
			</div>
		</ModalContext.Provider>
	);
};
Card.defaultProps = {
	aspects: [],
};

export const Services = (props) => {
	const frontAspects = [
		"I transcribe an amazing design in to an amazing responsive web",
		"I make web sites since scratch",
		"I make the deploy to a hosting",
	];
	const backAspects = [
		"I can create functional apis",
		"I can create MVC apps",
		"I can make a deploy to a cloud services",
	];
	return (
		<section
			id="services"
			className="services__container container section"
		>
			<h2 className="title">Services</h2>
			<span className="subtitle">What I offer</span>
			<div className="card__container">
				<Card
					title="Frontend Developer"
					imgCard={arrow}
					aspects={frontAspects}
				/>
				<Card
					title="Backend Developer"
					imgCard={server}
					aspects={backAspects}
				/>
			</div>
		</section>
	);
};
