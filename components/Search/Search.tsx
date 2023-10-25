'use client';
import React, {
  FC,
  useEffect,
  useState,
  useRef,
} from 'react';
import './Search.scss';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';

import {useSelector} from 'react-redux';
import {getSearchFood} from '@/redux/store/searchFood/actions';
import Link from 'next/link';
// import { Link } from "react-router-dom";

// import { AppDispatch } from "../../store/store";
const Search: FC = () => {
  const [inputValue, setInputValue] =
    useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch: Dispatch<any> = useDispatch();

  const handelClick = () => {
    setInputValue('');
    if (
      inputRef.current &&
      inputRef.current.value.length > 1
    ) {
      const value = inputRef.current.value;
      dispatch(
        getSearchFood(
          value,
          '1',
          'Foundation',
          'dataType.keyword',
        ),
      );

      return;
    }
  };

  const handelChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='search'>
      <div className='search__wrap'>
        <input
          onChange={handelChange}
          value={inputValue}
          ref={inputRef}
          type='text'
          name='search'
          className='search__input'
          placeholder='Search..'
        />

        <Link
          onClick={
            inputValue.length > 1
              ? () => handelClick()
              : (event) => {
                  event.preventDefault();
                  console.log('error');
                }
          }
          href={`/search/${inputValue}`}
          className='search__button button-green'
          aria-disabled={true}
        ></Link>
      </div>
    </div>
  );
};

export default Search;
