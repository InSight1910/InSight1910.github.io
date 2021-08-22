import React from "react";
import "./Code.css";

const Tab = (props) => {
	const { tab } = props;
	return " ".repeat(tab);
};

const Self = (props) => {
	const { value, text, div, tab, tabText } = props;
	return (
		<div className="yellow">
			<Tab tab={tab} />
			<span className="pink">self</span>
			<span className="white">.{value}</span>{" "}
			{text ? (
				<React.Fragment>
					<span className="orange">=</span> "{text}"
				</React.Fragment>
			) : (
				<React.Fragment>
					<span className="orange">=</span> [
				</React.Fragment>
			)}
			{div && (
				<React.Fragment>
					<div className="green">
						{div.map((item, index) => (
							<React.Fragment key={index}>
								<Tab tab={tabText} />"{item}",
								<br />
							</React.Fragment>
						))}
					</div>
					<Tab tab={tab} />]
				</React.Fragment>
			)}
		</div>
	);
};

const Function = (props) => {
	const { name, property, tab } = props;
	return (
		<React.Fragment>
			{property && (
				<React.Fragment>
					<Tab tab={tab} />
					<span className="orange">@property</span>
					<br />
				</React.Fragment>
			)}
			<p className="yellow">
				<Tab tab={tab} />
				<span className="orange">def</span> {name}(
				<span className="white">self</span>)
				<span className="white">:</span>
			</p>
		</React.Fragment>
	);
};

const Properties = (props) => {
	const { content, tab, tabText } = props;
	return (
		<React.Fragment>
			<div className="yellow">
				<span className="orange">
					<Tab tab={tab} />
					return
				</span>{" "}
				[
				<br />
				<div className="green">
					{content.map((item, index) => (
						<React.Fragment key={index}>
							<Tab tab={tabText} />"{item}",
							<br />
						</React.Fragment>
					))}
				</div>
				<Tab tab={tab} />]
			</div>
		</React.Fragment>
	);
};
export const Code = (props) => {
	return (
		<pre className="code-container">
			<p className="yellow">
				<span className="orange">class </span>Vicente
				<span className="white">:</span>
			</p>
			<Function name="__init__" property={false} tab={6} />
			<Self value="name" text="Vicente Espinosa" tab={10} tabText={14} />
			<Self
				value="language"
				div={["Spanish", "English"]}
				tab={10}
				tabText={14}
			/>
			<Self
				value="likes"
				div={["Coffee", "Cats", "Games", "Team Work"]}
				tab={10}
				tabText={14}
			/>
			<Function name="frameworks" property={true} tab={6} />
			<Properties
				content={["Django", "Flask", "Angular", "React", "NodeJS"]}
				tab={10}
				tabText={14}
			/>
		</pre>
	);
};
