import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Development from "./pages/Development";
import Design from "./pages/Design";
import Resume from "./pages/Resume";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";


class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>}/>
				</Routes>
			</BrowserRouter>
		);
	}
}

export default App;
