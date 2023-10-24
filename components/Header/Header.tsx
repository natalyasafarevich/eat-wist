import React, {FC} from 'react';
import './Header.scss';
import Link from 'next/link';
import {HEADER_LINKS} from '@/constants/constants';

const Header: FC = () => {
  return (
    <header className='header'>
      <div className='header__wrap'>
        <Link href={'/'} className='header__logo'></Link>
        <nav className='nav'>
          <ul className='header__list'>
            {HEADER_LINKS.map((link) => {
              return (
                <li key={link.url}>
                  <Link className='header__link' href={link.url}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className='header__auth'>
          <Link
            className='header__button header__button_login'
            href={'/login'}
          >
            login
          </Link>
          <Link
            className='header__button header__button_sign-up'
            href={'/auth'}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
