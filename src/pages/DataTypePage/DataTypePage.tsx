import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { foodList } from "../../store/foods-list/action";
import DisplayFood from "../../components/DisplayFood/DisplayFood";
import CardFood from "../../components/CardFood/CardFood";
import { useParams } from "react-router-dom";

const DataTypePage: FC = () => {
	const dispatch: any = useDispatch();
	const foodListState = useSelector((state: any) => state?.fList?.list);
const params = useParams()
console.log(params.name)
	useEffect(() => {
		dispatch(foodList("1", `${params.name}`));
	}, [dispatch]);

	return (
		<div className="data-type">
			<div className="wrap">
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
