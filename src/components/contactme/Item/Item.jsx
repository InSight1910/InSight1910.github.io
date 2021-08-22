import React from "react";
import "./Item.css";
export const Item = ({ img, title, subtitle }) => {
	return (
		<div className="item__contact_container">
			<img src={img} alt="" className="item__contact_img" />
			<div className="Item__contact_content">
				<h3 className="item__contact_title">{title}</h3>
				<span className="item__contact_subtitle">{subtitle}</span>
			</div>
		</div>
	);
};
