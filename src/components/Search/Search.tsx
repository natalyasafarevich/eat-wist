import React, { FC } from "react";
import "./Search.scss";

const Search: FC = () => {
	return (
		<div className="search">
			<div className="search__wrap">
        <input type="text" name="search" className="search__input" placeholder="Search.."/>
        <button className="search__button button-green"></button>
      </div>
		</div>
	);
};

export default Search
