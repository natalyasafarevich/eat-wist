'use client';
import {FC, useState} from 'react';

const DropdownInput: FC = () => {
  const [isChoose, setIsChoose] = useState(false);
  return (
    <div className='dropdown-input'>
      <input type='text' className='dropdown-input__input' />
    </div>
  );
};

export default DropdownInput;
