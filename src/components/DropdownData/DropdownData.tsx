import React, { FC, useState, useEffect } from "react";
import dataType from "../../moduls/dafaultValue";
import { DropdownDataProps } from "../../moduls/types-interfaces/types";
import { useDispatch } from "react-redux";
import { getSaveData } from "../../store/saveData/actions";
import "./DropdownData.scss";

const DropdownData: FC<DropdownDataProps> = ({ currentData }) => {
	const [dataName, setDataName] = useState<string>("Foundation");
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const dispatch: any = useDispatch();
	const localSaveData = localStorage.getItem("saveData");

	useEffect(() => {
		if (localSaveData) {
			const { dataType } = JSON.parse(localSaveData as string);
			setDataName(dataType);
		}
	}, []);

	useEffect(() => {
		dispatch(getSaveData({ dataType: dataName }));
		currentData(dataName as string);
	}, [dataName]);

	const handelClick = (event: React.MouseEvent<HTMLElement>) => {
		const target = event.target as HTMLElement;
		const { textContent } = target;
		currentData(dataName as string);
		setDataName(textContent as string);
		setIsOpen(!isOpen);
	};
	const handelOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`dropdown-data ${isOpen ? "show" : ""}`}>
			<div className="dropdown-data__wrap">
				<p className="dropdown-data__label">Data Type:</p>
				<p className="dropdown-data__title" onClick={handelOpen}>
					{dataName}
				</p>
				<ul className="dropdown-data__list" onClick={handelClick}>
					{dataType.map((type, i) => {
						return (
							<li key={i} className="dropdown-data__item" data-type={type.name}>
								{type.name}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default DropdownData;
