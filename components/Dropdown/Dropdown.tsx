'use client';
import React, {FC, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Dropdown.scss';
import {currentCountry} from '@/store/coutrues/actions';
import {saveSelectedCountry} from '@/localStorageUtils';
import {COUNTRIES} from '@/constants/constants';

const Dropdown: FC = () => {
  let [isOpen, setIsOpen] = useState(false);
  let store = useSelector((state: any) => state.country);

  const dispatch = useDispatch();

  useEffect(() => {
    saveSelectedCountry(store);
  }, [store]);

  const handelClick = (e: React.MouseEvent<HTMLLIElement>) => {
    let selectedCountry = e.currentTarget.textContent as string;
    dispatch(currentCountry(selectedCountry, isOpen));
  };

  return (
    <ul className='dropdown'>
      <li
        className='dropdown__item dropdown__item--main'
        id='country'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={isOpen ? 'active' : ''}>{store.label}</span>
        {isOpen && (
          <ul className='dropdown__box'>
            {COUNTRIES.map((item, i) => {
              return (
                <li key={i} className='dropdown__country' onClick={handelClick}>
                  {item.name}
                </li>
              );
            })}
          </ul>
        )}
      </li>
    </ul>
  );
};

export default Dropdown;
