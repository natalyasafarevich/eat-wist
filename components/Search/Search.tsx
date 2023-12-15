'use client';
import React, {FC, useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import './Search.scss';

import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {getProducts} from '@/store/searchProducts/actions';

const Search: FC = () => {
  // let dispatch: any = useDispatch();
  // let state = useSelector((state: any) => state.products);

  // dispatch(getProducts('tomato', 1));
  const [query, setQuery] = useState('');
  const router = useRouter();

  return (
    <form className='search'>
      <div className='search__box'>
        <span className='search__icon'></span>
        <input
          className='search__input'
          onChange={(e) => setQuery(e.currentTarget.value)}
          type='text'
          placeholder='Search'
        />
        <button
          className='search__button'
          onClick={() => router.push(`/search?query=${query}&page=1`)}
        ></button>
      </div>
    </form>
  );
};

export default Search;
