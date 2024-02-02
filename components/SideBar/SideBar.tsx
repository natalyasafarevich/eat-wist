'use client';
import React, {FC, FormEvent, useEffect, useState} from 'react';
import './SideBar.scss';
import Criteria from '../Criteria/Criteria';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {SideBarT} from '@/app/type/type';
import {SORT_BY} from '@/constants/constants';

import {AppDispatch, RootState} from '@/store/store';
import {useDispatch} from 'react-redux';
import Dropdown from '../Dropdown/Dropdown';
import {useSelector} from 'react-redux';
import RedirectComponent from '../RedirectComponent/RedirectComponent';
interface FormData {
  [key: string]: string;
  title: string;
  country: string;
  sortBy: string;
  additives: string;
  nutrition_grades: string;
  brands: string;
}
const SideBar: FC<SideBarT> = ({params, isSubmit}) => {
  const [isChange, setIsChange] = useState(false);
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormData>({
    title: params.value,
    country: '',
    sortBy: '',
    additives: '',
    nutrition_grades: '',
    page_number: '1',
    brands: '',
  });
  const state = useSelector((state: RootState) => state.country.label);
  const isDataChange = useSelector((state: RootState) => state.products.data);

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {}, []);
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      title: params.value,
    }));
  }, [params.value]);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      country: state.toLocaleLowerCase(),
    }));
  }, [state]);

  useEffect(() => {
    for (let key in formData) {
      if (formData[key]?.length > 0) {
        setIsChange(true);
        break;
      }
    }
  }, [formData]);

  return (
    <div className='side-bar'>
      <div className='side-bar__wrap'>
        <p className='side-bar__title'>Search for products </p>
        <RedirectComponent
          pageValue={'1'}
          dispatch={dispatch}
          formData={formData}
          queryValue={formData.title}
        >
          <div className='side-bar__box'>
            <label className='side-bar__label' htmlFor='title'>
              Search for words present in the product name, generic name,
              brands, categories, origins and labels
            </label>
            <input
              className='side-bar__input'
              type='text'
              id='title'
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value || '',
                })
              }
            />
          </div>
          <div className='side-bar__box'>
            <p className='side-bar__desc'>Country</p>
            <label className='side-bar__label'>
              Please, select a country of search
            </label>
            <Dropdown />
          </div>
          <div className='side-bar__box'>
            <p className='side-bar__desc'>Sort by</p>
            <Criteria
              items={SORT_BY}
              onChangeTitle={(e: string) =>
                setFormData({
                  ...formData,
                  sortBy: e || '',
                })
              }
            />
          </div>
          <div className='side-bar__box'>
            <p className='side-bar__desc'>Additives</p>
            <label className='side-bar__label' htmlFor='additives'>
              The list you can find
              <a
                className='side-bar__link'
                target='_blank'
                href='https://ec.europa.eu/food/food-feed-portal/screen/food-additives/search'
              >
                here
              </a>
            </label>
            <input
              className='side-bar__input'
              type='text'
              id='additives'
              onChange={(e) =>
                setFormData({
                  ...formData,
                  additives: e.target.value || '',
                })
              }
            />
          </div>
          <div className='side-bar__box'>
            <p className='side-bar__desc'>Nutrition grades</p>
            <label className='side-bar__label' htmlFor='nutrition'>
              Type one of nutrition grades: A, B, C, D, E
            </label>
            <input
              className='side-bar__input'
              type='text'
              id='nutrition'
              maxLength={1}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nutrition_grades: e.target.value || '',
                })
              }
            />
          </div>
          <div className='side-bar__box'>
            <p className='side-bar__desc'>Brands</p>
            <label className='side-bar__label' htmlFor='Brands'>
              The list of full brands you can find
              <a
                className='side-bar__link'
                target='_blank'
                href='https://world.openfoodfacts.org/brands'
              >
                here
              </a>
            </label>
            <input
              className='side-bar__input'
              type='text'
              id='Brands'
              onChange={(e) =>
                setFormData({
                  ...formData,
                  brands: e.target.value || '',
                })
              }
            />
          </div>
          <button
            className='button-green side-bar__button'
            disabled={!isChange}
          >
            Save & Submit
          </button>
        </RedirectComponent>
      </div>
    </div>
  );
};

export default SideBar;
