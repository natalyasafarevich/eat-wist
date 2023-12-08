import React, {FC, useState} from 'react';
import {useRouter} from 'next/navigation';
import './Search.scss';

const Search: FC = () => {
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
          onClick={() => router.push(`/search?query=${query}`)}
        ></button>
      </div>
    </form>
  );
};

export default Search;
