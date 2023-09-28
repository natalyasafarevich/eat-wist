import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { foodList } from "../../store/foods-list/action";
import DisplayFood from "../../components/DisplayFood/DisplayFood";
import { useParams } from "react-router-dom";
import dataType from "../../moduls/dafaultValue";
import { DataTypeProps } from "../../moduls/types-interfaces/types";
import './DataType.scss'
import { RootState } from "../../store/store";

const DataTypePage: FC = () => {
const [getData, setGetData] = useState<DataTypeProps>()

	const dispatch: any = useDispatch();
	const foodListState = useSelector((state: RootState) => state?.fList?.list);
const params = useParams()




	useEffect(() => {
		dispatch(foodList("1", `${params.name}`));
		const selectedDataType = dataType.find(item => item.name === params.name); 
		setGetData(selectedDataType)
	}, [dispatch]);

	return (
		<div className="data-type">
			<div className="wrap">
				<h1 className="data-type__title">{params.name}</h1>
				<p className="data-type__desc">{getData?.desc}</p>
				
				{foodListState ? (
					<DisplayFood foodListState={foodListState} />
				) : (
					<p>Loading...</p>
				)}
			</div>
		</div>
	);
};

export default DataTypePage;
