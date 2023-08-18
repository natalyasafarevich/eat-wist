import React, { FC, useEffect, useState, useRef } from "react";
import "./Search.scss";
import { useDispatch } from "react-redux";
import { getSearchFood } from "../../store/searchFood/actions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Search: FC = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const inputRef = useRef<HTMLInputElement>(null);
	const dispatch: any = useDispatch();

	const handelClick = () => {
		if (inputRef.current && inputRef.current.value.length > 1) {
			const value = inputRef.current.value;
			setInputValue("");
			dispatch(getSearchFood(value, "1"));
			return;
		}
		console.log("error");
	};

	const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	return (
		<div className="search">
			<div className="search__wrap">
				<input
					onChange={handelChange}
					value={inputValue}
					ref={inputRef}
					type="text"
					name="search"
					className="search__input"
					placeholder="Search.."
				/>

				<Link
					onClick={
						inputValue.length > 1
							? () => handelClick()
							: (event) => event.preventDefault()
					}
					to={`/search/${inputValue}`}
					className="search__button button-green"
					aria-disabled={true}></Link>
			</div>
		</div>
	);
};

export default Search;
