'use client';
import {useEffect} from 'react';
import {getProducts} from '@/store/searchProducts/actions';
import {RootState} from '@/store/store';
import Link from 'next/link';
import {useSearchParams} from 'next/navigation';
import {useSelector, useDispatch} from 'react-redux';
import style from './page.module.scss';
import ProductCard from '@/components/ProductCard/ProductCard';

export default function SearchPage() {
  const searchParams = useSearchParams().get('query') as string;
  let dispatch: any = useDispatch();
  let data = useSelector((state: RootState) => state.products.data);

  // dispatch(getProducts('tomato', 1));
  useEffect(() => {
    dispatch(getProducts(searchParams, 1));
  }, []);

  useEffect(() => {
    console.log(searchParams);
  }, [data]);
  // let dispatch: any = useDispatch();
  // let state = useSelector((state: any) => state.products);
  // Здесь можно использовать значение query для получения необходимой информации
  return (
    <div className={`${style.page} wrap`}>
      <div className={style.page__row}>
        {data.products.map((item, i) => {
          return (
            <div key={i} className={style.page__item}>
              <ProductCard card={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
