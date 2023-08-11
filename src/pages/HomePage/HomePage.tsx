import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { foodList } from "../../store/foods-list/action";
import DisplayFood from "../../components/DisplayFood/DisplayFood";
import "./HomePage.scss";
import CardFood from "../../components/CardFood/CardFood";

const HomePage = () => {
	const dispatch: any = useDispatch();
	const foodListState = useSelector((state: any) => state.fList.list);

	useEffect(() => {
		dispatch(foodList("1", "Foundation"));
	}, []);

	return (
		<div className="home-page">
			<div className="wrap">
				<DisplayFood foodListState={foodListState} />
			</div>
		</div>
	);
};

export default HomePage;
