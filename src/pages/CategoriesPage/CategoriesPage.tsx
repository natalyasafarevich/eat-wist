import React, { FC, useState, useEffect } from "react";
import "./CategoriesPage.scss";
import CategoriesType from "../../components/CategoriesType/CategoriesType";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { foodCategory } from "../../store/categories/actions";
import { useParams } from "react-router-dom";
import CardFood from "../../components/CardFood/CardFood";

const CategoriesPage: FC = () => {
	const [nameCategory, setNameCategory] = useState<string>("All Categories");
	const category = useSelector((state: any) => state.category.list);
	const dispatch: any = useDispatch();
	const params = useParams();

	useEffect(() => {
		const { name } = params;
		setNameCategory(name as string);
		dispatch(foodCategory(nameCategory));
	}, [params]);

	return (
		<div className="categories-page">
			<div className="categories-page__wrap wrap ">
				<div className="categories-page__aside">
					<CategoriesType />
				</div>
				<div className="categories-page__row">
					{category.foods.map((good: any) => {
						return <CardFood card={good} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default CategoriesPage;
