'use client';
import {useEffect, useState} from 'react';
import {getProducts} from '@/store/searchProducts/actions';
import {RootState} from '@/store/store';
import {useSearchParams} from 'next/navigation';
import {useSelector, useDispatch} from 'react-redux';
import style from './search.module.scss';
import ProductCard from '@/components/ProductCard/ProductCard';
import SideBar from '@/components/SideBar/SideBar';
import {strForSearch} from '@/helper/fnc';
import Loading from '@/components/Loading/Loading';

let params: {value: string} = {value: ''};

export default function SearchPage() {
  const [isSubmit, setIsSubmit] = useState(false);
  const searchParams = useSearchParams().get('query') as string;

  let dispatch: any = useDispatch();

  let loading = useSelector(
    (state: RootState) => state.eventsProcessing.isLoading,
  );
  let data = useSelector((state: RootState) => state.products.data);
  let dataParams = useSelector((state: RootState) => state.paramsSearch.data);

  params = {
    value: searchParams,
  };

  useEffect(() => {
    dispatch(getProducts(searchParams, 1));
  }, []);

  useEffect(() => {
    let additives = dataParams.additives.replace(/ /gi, '').toLocaleLowerCase();
    let title = dataParams.title;
    let sortBy = strForSearch(dataParams.sortBy);
    let checkCountry =
      dataParams.country.toLocaleLowerCase() === 'world'
        ? ''
        : dataParams.country;
    let nutrition_grades = dataParams.nutrition_grades
      .replace(/ /gi, '')
      .toLocaleLowerCase();
    let brands = dataParams.brands.replace(/ /gi, '').toLocaleLowerCase();

    isSubmit &&
      dispatch(
        getProducts(
          title,
          1,
          sortBy,
          checkCountry,
          additives,
          nutrition_grades,
          brands,
        ),
      );
  }, [isSubmit]);

  return (
    <div className={`${style.page} wrap`}>
      <div className={style.page__flex}>
        <div className={style.page__side_bar}>
          <SideBar isSubmit={(e) => setIsSubmit(e)} params={params} />
        </div>
        <div className={style.page__row}>
          {!loading ? (
            data?.products?.map((item, i) => {
              return (
                <div key={i} className={style.page__item}>
                  <ProductCard card={item} />
                </div>
              );
            })
          ) : (
            <div className={style.page__loading}>
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
