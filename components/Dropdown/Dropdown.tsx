'use client';
import React, {FC, useState} from 'react';
import './Dropdown.scss';

const Dropdown: FC = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <ul className='dropdown'>
      <li className='dropdown__item dropdown__item--main'>
        <span>World</span>
        {isOpen && (
          <ul className='dropdown__box'>
            <li className='dropdown__country dropdown__country_by'>World</li>
            <li className='dropdown__country dropdown__country_by'>Belarus</li>
            <li className='dropdown__country dropdown__country_pl'>Poland</li>
            <li className='dropdown__country dropdown__country_by'>USA</li>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default Dropdown;
