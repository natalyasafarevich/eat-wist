import React, {FC, useEffect, useState} from 'react';
import './SideBar.scss';
import {useSearchParams} from 'next/navigation';
import Criteria from '../Criteria/Criteria';
import {saveSearchFilter} from '@/localStorageUtils';

type SideBarT = {
  params: {
    value: string;
  };
};
type paramsValuesT = {
  id: number;
  criteria: string;
  isValue: boolean;
};
let paramsValues: Array<paramsValuesT> = [
  {
    id: 0,
    criteria: '',
    isValue: true,
  },
];

const SideBar: FC<SideBarT> = ({params}) => {
  let [currentCriteria, setCurrentCriteria] = useState('');
  useEffect(() => {
    currentCriteria.length === 0 && setCurrentCriteria('Choose a criterion');
  }, []);

  useEffect(() => {
    let currentObj: paramsValuesT = {
      id: 1,
      criteria: currentCriteria,
      isValue: true,
    };
    paramsValues.map((item) => {
      if (currentObj.id === item.id) {
        paramsValues = [];
        paramsValues.push(currentObj);
      }
    });
    saveSearchFilter(paramsValues);
  }, [currentCriteria]);

  const searchParams = useSearchParams().get('query') as string;

  return (
    <div className='side-bar'>
      <div className='side-bar__wrap'>
        <p className='side-bar__title'>Search for products </p>
        <form className='side-bar__form'>
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
            <p className='side-bar__desc'>Criteria</p>

            <label className='side-bar__label' htmlFor='Criteria'>
              Select products with specific brands, categories, labels, origins
              of ingredients, manufacturing places etc.
            </label>
            <Criteria
              currentCriteria={currentCriteria}
              setCurrentCriteria={setCurrentCriteria}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SideBar;
