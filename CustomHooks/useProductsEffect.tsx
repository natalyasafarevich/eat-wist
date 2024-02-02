import {getProducts} from '@/store/searchProducts/actions';
import {OptionalParams} from '@/types/types';
import {DependencyList, useEffect, useMemo} from 'react';

interface ProductsEffectProps {
  dispatch: (action: any) => void;
  searchParams: string;
  currenPage: number;
  optionalParams?: OptionalParams;
}

function useProductsEffect(
  {dispatch, searchParams, currenPage, optionalParams}: ProductsEffectProps,
  dependencies: DependencyList = [],
) {
  const {sort, country, additives, nutrition_grades, brands} =
    optionalParams || {};

  useEffect(() => {
    dispatch(
      getProducts(
        searchParams,
        currenPage,
        sort,
        country?.toLocaleLowerCase() === 'world' ? '' : country,
        additives,
        nutrition_grades,
        brands,
      ),
    );
  }, [...dependencies]);
}

export default useProductsEffect;
