import React, {FC} from 'react';
import './ProductCard.scss';
import Link from 'next/link';
import {CutDataProductsT} from '@/store/searchProducts/type';
import NutriScore from '../NutriScore/NutriScore';
// import alternativeImg from 'no-found-img.jpg';

type ProductCardT = {
  card: CutDataProductsT;
};
const ProductCard: FC<ProductCardT> = ({card}) => {
  return (
    <Link className='product-card' href={`/product/${card.code}`}>
      <span
        className='product-card__img'
        style={{
          background: `center/contain no-repeat url(${
            card.image_url ? card.image_url : '/no-found-img.jpg'
          })`,
        }}
      ></span>
      <span className='product-card__box'>
        <span className='product-card__name'> {card.product_name}</span>
        <span className='product-card__brand'>{card.brands}</span>
        <span className='product-card__kcal'>
          {/* {card.nutriments['energy-kcal']} kcal */}
        </span>
        <span className='product-card__info'>
          <NutriScore type={card.nutrition_grades} />
        </span>
      </span>
    </Link>
  );
};
export default ProductCard;
