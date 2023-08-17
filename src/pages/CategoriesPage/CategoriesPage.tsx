import React, { FC, useState, useEffect } from "react";
import "./CategoriesPage.scss";
import CategoriesType from "../../components/CategoriesType/CategoriesType";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { foodCategory } from "../../store/categories/actions";
import { useParams } from "react-router-dom";
import CardFood from "../../components/CardFood/CardFood";
import DropdownData from "../../components/DropdownData/DropdownData";

const CategoriesPage: FC = () => {
	const [nameCategory, setNameCategory] = useState<string>("");
	const [dataType, getDataType] = useState<string>("Foundation");
	const category = useSelector((state: any) => state.category.list);
	const dispatch: any = useDispatch();
	const params = useParams();

	useEffect(() => {
		const { name } = params;
		setNameCategory(name as string);
		dispatch(
			foodCategory(nameCategory=== "All Categories" ? "" : nameCategory, dataType )
		);
	}, [params, dataType,nameCategory]);

	const currentData = (newValue: string) => {
		getDataType(newValue);
	};

	return (
		<div className="categories-page">
			<div className="categories-page__wrap wrap ">
				<DropdownData currentData={currentData} />
				<div className="categories-page__box">
					<div className="categories-page__aside">
						<CategoriesType />
					</div>
					<div className="categories-page__row">
						{category.foods.map((good: any, i: number) => {
							return <CardFood key={i} card={good} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoriesPage;
