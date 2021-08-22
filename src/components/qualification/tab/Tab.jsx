import React from "react";
import "./Tab.css";
import calendar from "../../../assets/icons/schedule.svg";

const Tab = (props) => {
	const { title, subtitle, date, index, last } = props;

	return (
		<div className="tab__data">
			{index % 2 === 0 ? (
				<React.Fragment>
					<div>
						<h3 className="tab__title">{title}</h3>
						<span className="tab__subtitle">{subtitle}</span>
						{date && (
							<div>
								<img
									className="tab__calendar"
									src={calendar}
									alt=""
								/>
								{date}
							</div>
						)}
					</div>
					<div>
						<span className="tab__rounded"></span>
						{!last && <span className="tab__line"></span>}
					</div>
				</React.Fragment>
			) : (
				<React.Fragment>
					<div></div>
					<div>
						<span className="tab__rounded"></span>
						{!last && <span className="tab__line"></span>}
					</div>
					<div>
						<h3 className="tab__title">{title}</h3>
						<span className="tab__subtitle">{subtitle}</span>
						<div>
							<img
								className="tab__calendar"
								src={calendar}
								alt=""
							/>
							{date}
						</div>
					</div>
				</React.Fragment>
			)}
		</div>
	);
};

export default Tab;
