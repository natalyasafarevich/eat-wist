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
	const saveData = useSelector((state: any) => state.saveData);

	const dispatch: any = useDispatch();
	const params = useParams();
	const localSaveData = localStorage.getItem("saveData");

	//save info in localStorage
	useEffect(() => {
		const { localData } = saveData;
		localStorage.setItem("saveData", JSON.stringify(localData));
	}, [saveData, localSaveData]);

	useEffect(() => {
		const data = JSON.parse(localSaveData as string);
		const { name } = params;
		const categoriesName = name as string;
		setNameCategory(categoriesName);
		if (!localSaveData) {
			dispatch(foodCategory("", dataType));
			return;
		} else {
			dispatch(foodCategory(categoriesName, data.dataType));
		}
	}, [params.name, dataType, localSaveData]);
	useEffect(() => {
		const { name } = params;
		const categoriesName = name as string;

		if (!localSaveData) {
			dispatch(foodCategory("", dataType));
			return;
		} else {
			const data = JSON.parse(localSaveData as string);

			dispatch(foodCategory(categoriesName, data.dataType));
		}
	}, []);

	const currentData = (newValue: string) => {
		getDataType(newValue);
	};

	return (
		<div className="categories-page">
			<div className="categories-page__wrap wrap">
				<div className="categories-page__inner">
					<h1 className="categories-page__title"> {nameCategory}</h1>
					<div className="categories-page__dropdown">
						<DropdownData currentData={currentData} />
					</div>
				</div>

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
