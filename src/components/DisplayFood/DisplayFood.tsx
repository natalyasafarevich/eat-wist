import React, { FC, useCallback, useEffect } from "react";
import "./DisplayFood.scss";
import { ListType } from "../../store/foods-list/modules";
import CardFood from "../CardFood/CardFood";

type DisplayFoodProps = {
	foodListState: Array<ListType>;
};

const DisplayFood: FC<DisplayFoodProps> = ({ foodListState }) => {
	return (
		<div className="display-food">
			<div className="display-food__wrap">
				{foodListState.map((food) => {
					return <CardFood key={food.fdcId} card={food} />;
				})}
			</div>
		</div>
	);
};

export default DisplayFood;
