import React, { FC, useState, useCallback, useEffect } from "react";
import { FoodNutrients } from "../../moduls/types-interfaces/Product";
import { foodFilter } from "../../helper/filter";
import { caloriesId, idsProduct } from "../../moduls/dafaultValue";
import { FoodProps } from "../../moduls/types-interfaces/types";
import "./SingleFood.scss";


const SingleFood: FC<FoodProps> = ({ food }) => {
	const [mainDetails, setMainDetails] = useState<Array<FoodNutrients>>([]);
	const [calories, setCalories] = useState<string>();

	const getDetailsValues = useCallback(() => {
		let { foodNutrients } = food;
		const filteredDetails = foodFilter(foodNutrients, idsProduct);
		return setMainDetails(filteredDetails);
	}, [food]);

	const getDetailsCalories = useCallback(() => {
		let { foodNutrients } = food;
		const caloriesDetails = foodFilter(foodNutrients, caloriesId);

		if (caloriesDetails.length > 0) {
			const [singleObject] = caloriesDetails;
			setCalories(singleObject.nutrient.number);
		} else {
			setCalories(undefined);
		}
	}, [food]);

	useEffect(() => {
		getDetailsValues();
		getDetailsCalories();
	}, [getDetailsValues, getDetailsValues]);

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
							return (
								<div key={value.nutrient.id} className="single-food__info main-values">
									<div className="main-values__inner">
										<div className="main-values__box">
											<h4 className="main-values__name">{value.nutrient.name}</h4>
											<p className="main-values__value">
												{Math.round(value.amount)}
												<span>{value.nutrient.unitName}</span>
											</p>
										</div>
									</div>
								</div>
							);
						})}
						<div className="main-values__">cal: {calories}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(SingleFood);
