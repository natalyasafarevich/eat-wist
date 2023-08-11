import React, { FC } from "react";
import "./SingleFood.scss";
import { ListType } from "../../store/foods-list/modules";

type FoodProps = {
	food: ListType;
};
const SingleFood: FC<FoodProps> = ({ food }) => {
	return (
		<div className="single-food">
			<div className="single-food__wrap">
				<div className="single-food__header">
					<div className="single-food__image"></div>
					<h1 className="single-food__title">{food.description}</h1>
				</div>
			</div>
		</div>
	);
};

export default SingleFood;
