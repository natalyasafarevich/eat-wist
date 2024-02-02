import useProductsEffect from '@/hooks/useProductsEffect';
import {getProducts} from '@/store/searchProducts/actions';
import {RootState} from '@/store/store';
import {useSearchParams} from 'next/navigation';
import {ReactNode, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

interface SearchProviderProps {
  children: ReactNode;
  currenPage: number;

  setCurrentPage: (e: number) => void;
}
export function SearchProvider({
  children,
  currenPage,
  setCurrentPage,
}: SearchProviderProps): React.ReactElement {
  const dispatch: any = useDispatch();
  const searchParams = useSearchParams().get('query') as string;
  const page = useSearchParams().get('page') as string;

  const updatedValues = useSelector(
    (state: RootState) => state.paramsSearch.data,
  );
  const previousUpdatedValuesRef = useRef(updatedValues);

  useProductsEffect(
    {
      dispatch,
      searchParams,
      currenPage,
    },
    [],
  );

  const {
    sortBy: newSortBy,
    country: newCountry,
    additives: newAdditives,
    nutrition_grades: newNutritionGrades,
    brands: newBrands,
  } = updatedValues;

  useEffect(() => {
    const {
      sortBy: prevSortBy,
      country: prevCountry,
      additives: prevAdditives,
      nutrition_grades: prevNutritionGrades,
      brands: prevBrands,
    } = previousUpdatedValuesRef.current;

    const isFilterChanged =
      newSortBy !== prevSortBy ||
      newCountry !== prevCountry ||
      newAdditives !== prevAdditives ||
      newNutritionGrades !== prevNutritionGrades ||
      newBrands !== prevBrands;

    if (isFilterChanged) {
      dispatch(
        getProducts(
          updatedValues.title,
          updatedValues.page_number,
          newSortBy,
          newCountry.toLocaleLowerCase() === 'world' ? '' : newCountry,
          newAdditives,
          newNutritionGrades,
          newBrands,
        ),
      );
      setCurrentPage(1);
    }

    previousUpdatedValuesRef.current = updatedValues;
  }, [updatedValues]);
  useProductsEffect(
    {
      dispatch,
      searchParams,
      currenPage: Number(page),
      optionalParams: {
        sort: newSortBy,
        country: newCountry,
        additives: newAdditives,
        nutrition_grades: newNutritionGrades,
        brands: newBrands,
      },
    },
    [page],
  );
  return <>{children}</>;
}
