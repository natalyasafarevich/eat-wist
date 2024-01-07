'use client';
import React, {FC, FormEvent, useEffect, useState} from 'react';
import './SideBar.scss';
import Criteria from '../Criteria/Criteria';
// import {useRouter} from 'next/router';
import {SideBarT} from '@/app/type/type';
import {
  ADDITIVE,
  CRITERIA_ITEMS,
  PALM_OIL,
  SORT_BY,
} from '@/constants/constants';
import RadioButton from '../RadioButton/RadioButton';
import {AppDispatch, RootState} from '@/store/store';
import {useDispatch} from 'react-redux';
import {getParams} from '@/store/searchParams/actions';
import Dropdown from '../Dropdown/Dropdown';
import {useSelector} from 'react-redux';
import {getProducts} from '@/store/searchProducts/actions';
import RedirectComponent from '../RedirectComponent/RedirectComponent';
interface FormData {
  [key: string]: string;
  title: string;
  country: string;
  sortBy: string;
}
const SideBar: FC<SideBarT> = ({params, isSubmit}) => {
  const [isChange, setIsChange] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    title: params.value,
    country: '',
    sortBy: '',
  });
  const state = useSelector((state: RootState) => state.country.label);
  const isDataChange = useSelector((state: RootState) => state.products.data);

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    isSubmit(false);
  }, [isDataChange]);
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
          pageValue={1}
          isSubmit={isSubmit}
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

          {/* <div className='side-bar__box'>
            <p className='side-bar__desc'>Ingredients</p>
            <p className='side-bar__subtitle'>Additives</p>
            <div className='side-bar__row'>
              {ADDITIVE.map((info) => (
                // e.target.nextSibling?.textContent
                <RadioButton
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      additives: e.target.nextSibling?.textContent || '',
                    });
                  }}
                  key={info.id}
                  info={info}
                />
              ))}
            </div>
          </div>
          <div className='side-bar__box'>
            <p className='side-bar__subtitle'>Ingredients from palm oil</p>
            <div className='side-bar__row'>
              {PALM_OIL.map((info) => (
                <RadioButton
                  key={info.id}
                  info={info}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      palmOil: e.target.nextSibling?.textContent || '',
                    });
                  }}
                />
              ))}
            </div>
          </div> */}

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
