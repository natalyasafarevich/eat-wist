import React, { FC, useEffect } from "react";
import "./ProductDetailsPage.scss";
import { useParams } from "react-router-dom";
import { getFood } from "../../API/foodApi";
import { useDispatch } from "react-redux";
import { getProduct } from "../../store/product/action";
import { useSelector } from "react-redux";
import { Product } from "../../moduls/types-interfaces/Product";
import SingleFood from "../../components/SingleFood/SingleFood";

const ProductDetailsPage: FC = () => {
	const productState = useSelector((state: any) => state.descProd.product);

	const params = useParams();
	const dispatch: any = useDispatch();
console.log(params)
	useEffect(() => {
		dispatch(getProduct(`${params.id}`));
	}, []);
	console.log(productState);
	return (
		<div className="product-details">
			<div className="wrap">

				{productState ? <SingleFood food={productState} /> : <>loading</>}
			</div>
		</div>
	);
};

export default ProductDetailsPage;
