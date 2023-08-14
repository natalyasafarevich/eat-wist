import React, { FC, useState, useCallback, useEffect } from "react";
import { FoodNutrients } from "../../moduls/types-interfaces/Product";
import { foodFilter } from "../../helper/filter";
import { caloriesId, idsProduct } from "../../moduls/dafaultValue";
import { FoodProps } from "../../moduls/types-interfaces/types";
import "./SingleFood.scss";
import Minerals from "../Minerals/Minerals";
import NutritionCard from "../NutritionCard/NutritionCard";

const SingleFood: FC<FoodProps> = ({ food }) => {
	const [mainDetails, setMainDetails] = useState<Array<FoodNutrients>>([]);
	const [calories, setCalories] = useState<number>(0);

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
			setCalories(singleObject.amount);
		} else {
			return false;
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
				<div className="single-food__row">
					<div className="single-food__box">
						<div className="single-food__detail">
							<div className="single-food__cals">
								Calories: <span>{Math.round(calories)}</span>
							</div>
							<div className="single-food__info">
								{mainDetails?.map((value) => {
									return (
										<div
											key={value.nutrient.id}
											className="single-food__info main-values">
											<div className="main-values__inner">
												<div className="main-values__box">
													<p
														className={`main-values__value main-values__value_${value.nutrient.id}`}>
														{Math.round((value.amount / calories) * 100)}
														<span>%</span>
													</p>
													<h4 className="main-values__name">{value.nutrient.name}</h4>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
						<div className="single-food__table">
							{mainDetails?.map((value) => {
								return (
									<div key={value.nutrient.id} className="single-food__info main-values">
										<div className="main-values__inner">
											<div className="main-values__box">
												<h4 className="main-values__name">{value.nutrient.name}</h4>
												<p
													className={`main-values__value main-values__value_${value.nutrient.id}`}>
													{Math.floor(value.amount * 100) / 100}
													<span>{value.nutrient.unitName}</span>
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						{/* <Minerals food={food}/> */}
					</div>
					<NutritionCard calories={calories} food={food} />
				</div>
			</div>
		</div>
	);
};

export default React.memo(SingleFood);
