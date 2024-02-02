'use client';
import {useState} from 'react';
import {RootState} from '@/store/store';
import {useSearchParams} from 'next/navigation';
import {useSelector, useDispatch} from 'react-redux';
import style from './search.module.scss';
import ProductCard from '@/components/ProductCard/ProductCard';
import SideBar from '@/components/SideBar/SideBar';
import Loading from '@/components/Loading/Loading';
import PaginationOutlined from '@/components/PaginationOutlined/PaginationOutlined';
import {SearchProvider} from '../../Providers/SearchProvider';

let params: {value: string} = {value: ''};

export default function SearchPage() {
  const [currenPage, setCurrentPage] = useState<number>(1);
  const [isSubmit, setIsSubmit] = useState(false);
  const searchParams = useSearchParams().get('query') as string;

  let loading = useSelector(
    (state: RootState) => state.eventsProcessing.isLoading,
  );
  let data = useSelector((state: RootState) => state.products.data);

  params = {
    value: searchParams,
  };

  return (
    <SearchProvider currenPage={currenPage} setCurrentPage={setCurrentPage}>
      <div className={`${style.page} wrap`}>
        <PaginationOutlined
          isUpdate={isSubmit}
          getPage={(number) => setCurrentPage(number)}
        />
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
    </SearchProvider>
  );
}
