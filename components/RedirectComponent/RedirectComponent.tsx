import {FC, ReactNode, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {getParams} from '@/store/searchParams/actions';
import {useSelector} from 'react-redux';
import {RootState} from '@/store/store';

type RedirectComponentProps = {
  isSubmit: (e: boolean) => void;
  dispatch: (action: any) => void;
  formData: any;
  queryValue: string;
  pageValue: number;
  children?: ReactNode;
};

const RedirectComponent: FC<RedirectComponentProps> = ({
  isSubmit,
  children,
  dispatch,
  formData,
  queryValue,
  pageValue,
}) => {
  const router = useRouter();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    isSubmit(true);
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
