import React from "react";
import "./App.css";

import { Navbar } from "./components/navbar/Navbar.jsx";
import { Home } from "./components/home/Home.jsx";

import { About } from "./components/about/About.jsx";
import { Skills } from "./components/skills/Skills.jsx";
import { Qualification } from "./components/qualification/Qualification.jsx";
import { Services } from "./components/services/Services.jsx";
import { Portfolio } from "./components/portfolio/Portfolio.jsx";
import { InMind } from "./components/inMind/InMind";
import { Contact } from "./components/contactme/Contact";
import { Footer } from "./components/footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Qualification />
			<Services />
			<Portfolio />
			<InMind />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
