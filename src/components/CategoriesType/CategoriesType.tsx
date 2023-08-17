import React, { FC } from "react";
import "./CategoriesType.scss";
import { NavLink } from "react-router-dom";

const categoriesFoundation = [
	{ name: "All Categories" },
	{ name: "Baked Products" },
	{ name: "Beef Products" },
	{ name: "Beverages" },
	{ name: "Cereal Grains and Pasta" },
	{ name: "Dairy and Egg Products" },
	{ name: "Fats and Oils" },
	{ name: "Finfish and Shellfish Products" },
	{ name: "Fruits and Fruit Juices" },
	{ name: "Legumes and Legume Products" },
	{ name: "Nut and Seed Products" },
	{ name: "Pork Products" },
	{ name: "Poultry Products" },
	{ name: "Restaurant Foods" },
	{ name: "Sausages and Luncheon Meats" },
	{ name: "Soups, Sauces, and Gravies" },
	{ name: "Spices and Herbs" },
	{ name: "Sweets" },
	{ name: "Vegetables and Vegetable Products" },
];

const CategoriesType: FC = () => {

	return (
		<div className="categories-type">
			<div className="categories-type__wrap">
				<p className="categories-type__title">Product Categories</p>

				<div className="categories-type__box">
					{categoriesFoundation.map((category, i ) => {
						return (
							<NavLink key={i} to={`/categories/${category.name}`} className="categories-type__item">
								{category.name}
							</NavLink>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default CategoriesType;
