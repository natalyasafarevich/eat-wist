import React, { FC, useEffect, useState } from "react";
import "./CardFood.scss";
import { ListType } from "../../store/foods-list/modules";
import { Link } from "react-router-dom";
import { combineWords } from "../../helper/concat";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

type CardFoodProps = {
	card: ListType;
};
const CardFood: FC<CardFoodProps> = ({ card }) => {
	const [editLink, setEditLink] = useState<string>("");
	const [isHovered, setIsHovered] = useState<boolean>(false);

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
					{isHovered ? <>ff</> : false}
				</span>
			</span>
		</Link>
	);
};

export default CardFood;
