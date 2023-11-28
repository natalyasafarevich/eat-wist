'use client';
import React, {FC, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Dropdown.scss';
import {currentCountry} from '@/store/coutrues/actions';
import {saveSelectedCountry} from '@/localStorageUtils';

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
            <li className='dropdown__country' onClick={handelClick}>
              World
            </li>
            <li className='dropdown__country' onClick={handelClick}>
              Belarus
            </li>
            <li className='dropdown__country' onClick={handelClick}>
              Poland
            </li>
            <li className='dropdown__country' onClick={handelClick}>
              USA
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default Dropdown;
