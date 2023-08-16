import React, { FC, useEffect } from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import DataTypeCard from "../../DataTypeCard/DataTypeCard";

const HomePage: FC = () => {
	return (
		<div className="home-page">
			<div className="home-page__wrap wrap ">
				<div className="home-page__row">
					<div className="home-page__info">
						<h1 className="home-page__title">Easy and Convenient Diet Control</h1>
						<p className="home-page__desc">
							Our database includes a comprehensive list of products, providing you not
							only with calorie counts, but also detailed information about proteins,
							fats, carbohydrates, and other nutritional components in each item.
						</p>
						<div className="home-page__btns">
							<Link to={"/auth"} className="home-page__signup">
								Sign Up
							</Link>
						</div>
					</div>
					<div className="home-img"></div>
				</div>
				<DataTypeCard/>
			</div>
		</div>
	);
};

export default HomePage;
