import React, { FC, useState } from "react";
import "./NutritionCard.scss";
import { NutritionProps } from "../../moduls/types-interfaces/types";
import NutritionDesc from "./NutritionDesc";
import { exceptionIds } from "../../moduls/dafaultValue";

const NutritionCard: FC<NutritionProps> = ({ food, calories }) => {
	const [isExpand, setIsexpand] = useState<boolean>(false);
	const handelClick = () => {
		setIsexpand(!isExpand);
	};
	return (
		<div className="nutrition-card">
			<div className={`nutrition-card__wrap ${isExpand ? "show" : ""}`}>
				<div className="nutrition-card__info">
					<p className="nutrition-card__title">Nutrition Facts</p>
					<p className="nutrition-card__size">
						Serving Size <span> (100 Gram)</span>
					</p>
					<div className="nutrition-card__box">
						<p className="nutrition-card__label">Amount Per Serving</p>
						<p className="nutrition-card__cal">
							Calories <span>{calories} kcal </span>
						</p>
					</div>
					<div className="nutrition-card__generals">
						{food.foodNutrients.map((info) => {
							return (
								<div className="nutrition-card__inner" key={info.nutrient.id}>
									<div className="nutrition-card__item nutrition">
										{info?.amount ? (
											<>
												<NutritionDesc info={info} />
											</>
										) : (
											<>
												{exceptionIds.includes(info.nutrient.id) ? (
													<h2 className="nutrition__title">{info.nutrient.name} </h2>
												) : (
													<>
														<NutritionDesc info={info} />
													</>
												)}
											</>
										)}
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="expand">
					<button className="expand__button " onClick={handelClick}>
						{!isExpand ? <>SEE MORE ↴</> : <>HIDE</>}
					</button>
				</div>
			</div>
		</div>
	);
};

export default NutritionCard;
