import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import "./HomePage.scss";
import { useDispatch } from "react-redux";
import {  foodList } from "../../store/foods-list/action";

const HomePage = () => {
	const dispatch: any = useDispatch();
	
	const foodListState= useSelector((state: any) => state.fList?.list);

	useEffect(() => {
		dispatch(foodList("5"));
		console.log(foodListState);
	}, []);

	return <div className="home-page">{/* Ваш JSX-код */}</div>;
};

export default HomePage;
