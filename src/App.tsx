import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./styles/var.css";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path={"/"} element={<HomePage />} />
				<Route path={"/:id/:name"} element={<ProductDetailsPage />} />
			</Routes>
		</div>
	);
}

export default App;
