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

const info = {
	label: "sort By:",
  title:"lowercaseDescription.keyword",
	items: [
		{
			name: " dataType.keyword",
		},
		{
			name: "lowercaseDescription.keyword",
		},
		{
			name: "fdcId",
		},
		{
			name: "publishedDate",
		},
	],
};
const SearchPage: FC = () => {
	const [dataType, setDataType] = useState<string>("");
	const [sort, setSort] = useState<string>("");
	const params = useParams();
	const dispatch: any = useDispatch();

	const saveData = useSelector((state: any) => state.saveData);
	const search = useSelector((state: any) => state.searchFood.list);

	const { foodSearchCriteria } = search;

	const localSaveData = localStorage.getItem("saveData");
	const data = localStorage.getItem("saveData");

	const currentData = (newValue: string) => {
		setDataType(newValue);
	};
	//save in localStorage
	useEffect(() => {
		const { localData } = saveData;
		localStorage.setItem("saveData", JSON.stringify(localData));
	}, [saveData, localSaveData]);

	useEffect(() => {
		console.log(sort)
		if (params.value && dataType?.length !== 0) {
			dispatch(getSaveData({ dataType: dataType }));
			dispatch(getSearchFood(params.value as string, "1", dataType, sort.trim()));
		}
	}, [dataType,sort]);


	const getSort = (val:string)=>{
		setSort(val)
	}
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
						
							<MainDropDown info={info} getSort={getSort}/>
							<span> {foodSearchCriteria?.sortBy}</span>
						</div>
						<p className="search-page__desc">
							sort Order
							<span>:{foodSearchCriteria?.sortOrder}</span>
						</p>
						<div className="search-page__dropdown">
							<DropdownData currentData={currentData}  />
						</div>
					</div>
				</div>
				<div className="search-page__body"></div>
			</div>
		</div>
	);
};
export default React.memo(SearchPage);
