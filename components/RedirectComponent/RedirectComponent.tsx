import {FC, ReactNode, useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {getParams} from '@/store/searchParams/actions';
import {useSelector} from 'react-redux';
import {RootState} from '@/store/store';
import useProductsEffect from '@/hooks/useProductsEffect';
import {getProducts} from '@/store/searchProducts/actions';

type RedirectComponentProps = {
  dispatch: (action: any) => void;
  formData: any;
  queryValue: string;
  pageValue: string;
  children?: ReactNode;
};

const RedirectComponent: FC<RedirectComponentProps> = ({
  children,
  dispatch,
  formData,
  queryValue,
  pageValue,
}) => {
  const updatedValues = useSelector(
    (state: RootState) => state.paramsSearch.data,
  );

  const router = useRouter();

  useEffect(() => {}, []);
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    dispatch(getParams(formData));
    router.push(
      `/search?query=${queryValue.toLocaleLowerCase()}&page=${pageValue}`,
    );

    e.preventDefault();
  };

  return (
    <form className='side-bar__form' name='' onSubmit={submitForm}>
      {children}
    </form>
  );
};

export default RedirectComponent;
