import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./styles/var.css";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import DataTypePage from "./pages/DataTypePage/DataTypePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path={"/"} element={<HomePage />} />
				<Route path={"/datatype/:name"} element={<DataTypePage />} />
				<Route path={"/:name/:id"} element={<ProductDetailsPage />} />
				<Route path={"/categories/:name"} element={<CategoriesPage />} />

				
			</Routes>
		</div>
	);
}	

export default App;
