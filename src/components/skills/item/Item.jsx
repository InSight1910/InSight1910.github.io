import React, { useState, useEffect } from "react";
import "./Item.css";

import angleDown from "../../../assets/icons/angle-down.svg";
import angleUp from "../../../assets/icons/angle-up.svg";

const Item = ({ skills, id, icon_title, title, experience }) => {
	const [toggle, setToggle] = useState(false);
	const [last, setLast] = useState();
	useEffect(() => {
		skills.length % 2 === 0 ? setLast(false) : setLast(true);
	}, [last]);
	return (
		<div className="item__container">
			<div className="skill__type">
				<img src={icon_title} className="icon__type" />

				<div className="skill__type_title">
					<h3 className="title__skill">{title}</h3>
					<span className="subtitle__skill">
						Less than {experience}{" "}
						{experience > 1 ? "years" : "year"}
					</span>
				</div>
				<div className="toggle">
					<a
						className="angle__button"
						href={`#${id}`}
						onClick={() => setToggle(!toggle)}
					>
						{toggle ? (
							<img
								src={angleDown}
								alt=""
								className="icon__angle"
							/>
						) : (
							<img src={angleUp} alt="" className="icon__angle" />
						)}
					</a>
				</div>
			</div>
			<div
				className={`skill__item ${toggle ? "active_skill" : ""}`}
				id={id}
			>
				{skills.map((item, index) => (
					<div
						className={`technology ${
							last & (index === skills.length - 1)
								? "technology__last"
								: ""
						}`}
						key={index}
					>
						<img src={item.icon} alt="" className="icon" />
						<p className="skill__technology">{item.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

Item.defaultProps = {
	skills: [],
};

export default Item;
