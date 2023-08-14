import react ,{FC}from "react";
import { NutritionDescProps } from "../../moduls/types-interfaces/types";

const NutritionDesc:FC<NutritionDescProps> = ({info}) => {
	return (
		<div className="nutrition nutrition__item">
			<p className="nutrition__desc">
				{info.nutrient.name} 
				<span>
					{Math.floor(info.amount * 100) / 100} {info.nutrient.unitName}
				</span>
			</p>
		</div>
	);
};

export default NutritionDesc;
