import React, { FC, useEffect, useState } from "react";
import "./CardFood.scss";
import { ListType } from "../../store/foods-list/modules";
import { Link } from "react-router-dom";
import { combineWords } from "../../helper/concat";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Tooltip from "../Tooltip/Tooltip";
import dataType from "../../moduls/DataType";

type CardFoodProps = {
	card: ListType;
};
const CardFood: FC<CardFoodProps> = ({ card }) => {
	const [editLink, setEditLink] = useState<string>("");
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [isDataType, setIsDataType] = useState<object>({});

	useEffect(() => {
    const getInfoDataType = (currentData: string) => {
      const result = dataType.filter((type) =>
        type.name === currentData ? type : false
      );
      return result ;
    };
  
		setIsDataType(getInfoDataType(card.dataType));
    {console.log(isDataType)}
	}, [card.dataType,isDataType]);

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
				<span className="card-food__image"></span>
				<h1 className="card-food__title">{card.description}</h1>
				<span className="card-food__desc">
					Brand Owner:
					<i>{card.brandOwner ? card.brandOwner : "information is missing"}</i>
				</span>
       
				<span
					className="card-food__data-type"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					Data Type {card.dataType}
					<HelpOutlineIcon />
					{isHovered ? <Tooltip dataType={card.dataType} content={''} /> : false}
				</span>
			</span>
		</Link>
	);
};

export default CardFood;
