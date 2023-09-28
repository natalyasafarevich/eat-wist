import React, { FC, useState } from "react";
import "./MainDropDown.scss";

type ItemsType = {
	name: string;
};
type InfoType = {
	label: string;
	title: string;
	items: Array<ItemsType>;
};

type MainDropDownProps = {
	info: InfoType;
	getSort: (name:string) => void;
};
const MainDropDown: FC<MainDropDownProps> = ({ info, getSort }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [title, setTitle] = useState<string>(info.title);

	const handelClick = () => {
		setIsOpen(!isOpen);
	};
	const handelClickItem = (event: React.MouseEvent<HTMLElement>) => {
		const target = event.target as HTMLElement;
		const { textContent } = target;
		setTitle(textContent as string);
		setIsOpen(!isOpen);
		getSort(textContent as string)
		// localStorage.setItem('')
	};
	return (
		<div className={`main-dropdown ${isOpen ? "show" : " "}`}>
			<div className="main-dropdown__wrap">
				<p className="main-dropdown__label">{info.label}</p>
				<p className="main-dropdown__title" onClick={handelClick}>
					{title}
				</p>
				<ul className="main-dropdown__list" onClick={handelClickItem}>
					{info.items.map((item, i) => {
						return (
							<li key={i} className="main-dropdown__item">
								{item.name}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
export default MainDropDown;
