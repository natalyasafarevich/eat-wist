import React, { FC, useEffect, useState } from "react";
import { ListType } from "../../store/foods-list/modules";
import { Link } from "react-router-dom";
import { combineWords } from "../../helper/concat";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Tooltip from "../Tooltip/Tooltip";
import dataType from "../../moduls/DataType";
import "./CardFood.scss";

type CardFoodProps = {
	card: ListType;
};
const CardFood: FC<CardFoodProps> = ({ card }) => {
	const [editLink, setEditLink] = useState<string>("");
	const [isHovered, setIsHovered] = useState<boolean>(false);
	// const [isDataType, setIsDataType] = useState<any>();

	// useEffect(() => {
	//   const getInfoDataType = (currentData: string) => {
	//     const result = dataType.filter((type) =>
	//       type.name === currentData ? type : false
	//     );
	//     return result;
	//   };
	//   const getType = getInfoDataType(card.dataType)
	// 	setIsDataType({...getType});
	// }, [card.dataType]);

	useEffect(() => {
		const desc = combineWords(card.description);
		setEditLink(desc);
	}, [card.description]);

	const handleMouseEnter = () => {
		setIsHovered(!isHovered);
	};
	const handleMouseLeave = () => {
		setIsHovered(!isHovered);
	};

	return (
		<Link to={`/${card.fdcId}/${editLink}`} className="card-food">
			<span className="card-food__wrap">
				<h2 className="card-food__title">{card.description}</h2>
				<span className="card-food__desc">
					ID:
					<b> {card.fdcId}</b>
				</span>
				<span className="card-food__desc">
					Brand Owner:
					<b> {card.brandOwner ? card.brandOwner : "information is missing"}</b>
				</span>
				<span
					className="card-food__desc"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					Data Type: <b>{card.dataType}</b>
					<HelpOutlineIcon className="card-food__icon" />
					{isHovered ? (
						<Tooltip
					
							content={`Data and metadata on individual samples of commodity/commodity-derived 
  											minimally processed foods with insights into variability`}
						/>
					) : (
						false
					)}
				</span>
			</span>
		</Link>
	);
};

export default CardFood;
