import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { getSearchFood } from "../../store/searchFood/actions";
import { useDispatch } from "react-redux";
import "./SearchPage.scss";
import { useParams } from "react-router-dom";

const SearchPage: FC = () => {
	const params = useParams();
	const dispatch: any = useDispatch();
	const search = useSelector((state: any) => state.searchFood.list);

	useEffect(() => {
		dispatch(getSearchFood(params.value as string, "1"));
	}, []);

	return (
		<div className="search-page">
			<div className="search-page__wrap">
        <div className="search-page__header">
          <h1 className="search-page__title">{search?.foodSearchCriteria?.query}</h1>
          
        </div>
        <div className="search-page__body"></div>
        
        
      </div>
		</div>
	);
};
export default SearchPage;
