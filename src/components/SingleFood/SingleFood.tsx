import React, { FC, useState, useEffect } from "react";
import "./SingleFood.scss";
import { Product } from "../../moduls/Product";
import { type } from "os";
import { D } from "../../moduls/MainValue";

type FoodProps = {
	food: Product;
};

const SingleFood: FC<FoodProps> = ({ food }) => {
	const [mainDetails, setMainDetails] = useState<Array<D>>([]);

	useEffect(() => {
		const details = food.foodNutrients.slice(1, 5);
		setMainDetails((prev) => [...(prev as any), ...details]);
	}, [food]);

	console.log(mainDetails);
	return (
		<div className="single-food">
			<div className="single-food__wrap">
				<div className="single-food__header">
					<div className="single-food__image"></div>
					<h1 className="single-food__title">{food.description}</h1>
				</div>
				<div className="single-food__box">
					<div className="single-food__detail">
						{mainDetails?.map((value) => {
							return value.id;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleFood;
