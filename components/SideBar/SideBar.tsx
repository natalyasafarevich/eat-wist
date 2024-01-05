import React, {FC, FormEvent, useEffect, useState} from 'react';
import './SideBar.scss';
import Criteria from '../Criteria/Criteria';
import {SideBarT} from '@/app/type/type';
import {
  ADDITIVE,
  CRITERIA_ITEMS,
  PALM_OIL,
  SORT_BY,
} from '@/constants/constants';
import RadioButton from '../RadioButton/RadioButton';
import {AppDispatch} from '@/store/store';
import {useDispatch} from 'react-redux';
import {getParams} from '@/store/searchParams/actions';

const SideBar: FC<SideBarT> = ({params}) => {
  const [formData, setFormData] = useState({
    title: '',
    sortBy: '',
    criteria: '',
    additives: '',
    palmOil: '',
  });
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {}, []);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    dispatch(getParams(formData));
    e.preventDefault();
  };

  return (
    <div className='side-bar'>
      <div className='side-bar__wrap'>
        <p className='side-bar__title'>Search for products </p>
        <form className='side-bar__form' name='' onSubmit={submitForm}>
          <div className='side-bar__box'>
            <label className='side-bar__label' htmlFor='title'>
              Search for words present in the product name, generic name,
              brands, categories, origins and labels
            </label>
            <input
              className='side-bar__input'
              type='text'
              id='title'
              value={params.value}
            />
          </div>
          <div className='side-bar__box'>
            <p className='side-bar__desc'>Sort by</p>
            <Criteria
              items={SORT_BY}
              onChangeTitle={(e: string) =>
                setFormData({
                  ...formData,
                  sortBy: e,
                })
              }
            />
          </div>
          <div className='side-bar__box'>
            <p className='side-bar__desc'>Criteria</p>
            <label className='side-bar__label' htmlFor='Criteria'>
              Select products with specific brands, categories, labels, origins
              of ingredients, manufacturing places etc.
            </label>
            <Criteria
              items={CRITERIA_ITEMS}
              onChangeTitle={(e: string) =>
                setFormData({
                  ...formData,
                  criteria: e,
                })
              }
            />
            <input
              className='side-bar__input side-bar__input_criteria'
              type='text'
              id='criteria'
              placeholder='Enter a criteria'
              onChange={(e) => {
                setFormData({
                  ...formData,
                  title: e.target.value || '',
                });
              }}
            />
          </div>
          <div className='side-bar__box'>
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
          </div>

          <button type='submit' className='button-green'>
            Save & Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SideBar;
