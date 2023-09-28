import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSearchFood } from "../../store/searchFood/actions";
import { useDispatch } from "react-redux";
import "./SearchPage.scss";
import { useParams } from "react-router-dom";
import DataTypeCard from "../../components/DataTypeCard/DataTypeCard";
import DropdownData from "../../components/DropdownData/DropdownData";
import { getSaveData } from "../../store/saveData/actions";
import MainDropDown from "../../components/MainDropDown/MainDropDown";
import { transmittedParametersT } from "../../moduls/types-interfaces/types";
import { sortInfo, sortOrder } from "../../moduls/dafaultValue";
import { RootState } from "../../store/store";
import CardFood from "../../components/CardFood/CardFood";
import { ERROR_SEARCH } from "../../constants/constants";

const SearchPage: FC = () => {
	const [dataType, setDataType] = useState<string>("");
	const [sort, setSort] = useState<string>("");
	const [transmittedParameters, setTransmittedParameters] =
		useState<transmittedParametersT>({
			sortBy: "lowercaseDescription.keyword",
			sortOrder: "",
			dataType: dataType,
		});
	const params = useParams();
	const dispatch: any = useDispatch();

	const saveData = useSelector((state: RootState) => state.saveData);
	const search = useSelector((state: RootState) => state.searchFood.list);

	const { foodSearchCriteria, foods } = search;
	console.log(search);
	const localSaveData = localStorage.getItem("saveData");
	const data = localStorage.getItem("saveData");

	useEffect(() => {
		localStorage.setItem(
			"transmittedParameters",
			JSON.stringify(transmittedParameters)
		);
	}, [transmittedParameters]);
	const currentData = (newValue: string) => {
		setDataType(newValue);
		setTransmittedParameters((prev) => ({ ...prev, dataType: newValue }));
	};
	//save in localStorage
	useEffect(() => {
		const { localData } = saveData;
		localStorage.setItem("saveData", JSON.stringify(localData));
	}, [saveData, localSaveData]);

	useEffect(() => {
		dispatch(getSearchFood(params.value as string, "1", dataType, sort.trim()));
		if (params.value && dataType?.length !== 0) {
			dispatch(getSaveData({ dataType: dataType }));
			dispatch(getSearchFood(params.value as string, "1", dataType, sort.trim()));
		}
	}, []);

	// const getSort = (val: string) => {
	// 	setSort(val);
	// 	console.log(sort);
	// };
	return (
		<div className="search-page">
			{sort}
			<div className="search-page__wrap wrap ">
				<div className="search-page__header">
					<div className="search-page__box">
						<h1 className="search-page__title">
							Search results for "{foodSearchCriteria?.query}"
						</h1>
					</div>
					<div className="search-page__info">
						<div className="search-page__desc">
							{/* <MainDropDown
								info={sortInfo}
								getSort={(e) =>
									setTransmittedParameters((prev) => ({ ...prev, sortBy: e }))
								}
							/> */}
							<span> {foodSearchCriteria?.sortBy}</span>
						</div>
						<div className="search-page__desc">
							{/* <MainDropDown
								info={sortOrder}
								getSort={(e) =>
									setTransmittedParameters((prev) => ({ ...prev, sortOrder: e }))
								}
							/> */}
							<span>:{foodSearchCriteria?.sortOrder}</span>
						</div>
						<div className="search-page__dropdown">
							{/* <DropdownData currentData={currentData} /> */}
						</div>
					</div>
				</div>
				<div className="search-page__body">
					{/* {foods.map(i,index)=>(
						<p className="d" key={index}>{i}</p>
					)} */}
					{foods.length === 0 ? (
						<div className="search-page__error">
							<p>
								{ERROR_SEARCH.title}
								<ul>
									{ERROR_SEARCH.text.map((p:any, i) => (
										<li key={i}>{p}</li>
									))}
								</ul>
							</p>
						</div>
					) : (
						foods.map((card, index) => {
							return <CardFood key={index} card={card}></CardFood>;
						})
					)}
					{}
				</div>
			</div>
		</div>
	);
};
export default React.memo(SearchPage);
