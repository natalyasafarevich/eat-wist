'use client';
import React, {FC, useEffect, useState} from 'react';
import './Header.scss';
import Link from 'next/link';
import {HEADER_LINKS} from '@/constants/constants';
import Dropdown from '../Dropdown/Dropdown';

const Header: FC = () => {
  // let [arr, setArr] = useState([]);

  // async function getCities(db: any) {
  //   const citiesCol = collection(db, 'objectsCollection');
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList: any = citySnapshot.docs.map((doc) => doc.data());
  //   setArr(cityList);
  //   return cityList;
  // }
  // useEffect(() => {
  //   getCities(db).then((result) => {
  //     console.log(result); // Это будет ваш массив городов
  //   });
  // }, []);
  return (
    <header className='header'>
      <div className='header__wrap '>
        <div className='wrap'>
          <div className='header__row'>
            <div className='header__box'>
              <Link href={'/'} className='header__logo logo'></Link>
              <nav className='header__nav'>
                <ul className='header__list'>
                  {HEADER_LINKS.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link href={link.url} className='header__link '>
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className='header__dropdown'>
                  <Dropdown />
                </div>
              </nav>
            </div>
            <div className='header__auth'>
              <Link
                href={'/login'}
                className='header__button button-transparent '
              >
                Login
              </Link>
              <Link href={'/sing-up'} className='header__button button-green '>
                Sing up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
