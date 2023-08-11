import React, { FC, useCallback, useEffect } from "react";
import "./DisplayFood.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { foodList } from "../../store/foods-list/action";
import { ListType } from "../../store/foods-list/modules";
import SingleFood from "../SingleFood/SingleFood";
import CardFood from "../CardFood/CardFood";

type DisplayFoodProps = {
	foodListState: Array<ListType>;
};

const DisplayFood: FC<DisplayFoodProps> = React.memo(({ foodListState }) => {
	return (
		<div className="display-food">
			<div className="display-food__wrap">
				{foodListState.map((food) => {
					return 	<CardFood card={food}/>
				})}
			</div>
		</div>
	);
});

export default DisplayFood;
