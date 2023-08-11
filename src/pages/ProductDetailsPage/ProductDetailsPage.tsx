import React, { FC, useEffect } from "react";
import "./ProductDetailsPage.scss";
import { useParams } from "react-router-dom";
import { getFood } from "../../API/foodApi";
import { useDispatch } from "react-redux";
import { getProduct } from "../../store/product/action";
import { useSelector } from "react-redux";
import { Product } from "../../moduls/Product";

const ProductDetailsPage: FC = () => {
	const foodListState = useSelector((state:any) => state.descProd.product);
	const params = useParams();
	const dispatch: any = useDispatch();

	// getFood
	useEffect(() => {
		dispatch(getProduct(`${params.id}`));
	}, []);
	console.log(foodListState);
	return <div className="product-details"></div>;
};

export default ProductDetailsPage;
