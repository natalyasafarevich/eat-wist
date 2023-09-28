import React, { FC, useEffect } from "react";
import "./Minerals.scss";
import { FoodProps } from "../../moduls/types-interfaces/types";
import { FoodNutrients } from "../../moduls/types-interfaces/Product";
// 2043 ,2046

const Minerals: FC<FoodProps> = ({ food }) => {
	const { foodNutrients } = food;
	console.log(foodNutrients);
	useEffect(() => {
		const minerals = foodNutrients.filter((i) => i.nutrient.id === 1087);
		console.log(minerals);
	}, [foodNutrients]);
	return (
		<div className="minerals">
			<div className="minerals__wrap">
				<p className="minerals__title">Minerals:</p>
				<ul className="minerals__list"></ul>
			</div>
		</div>
	);
};
export default Minerals;
