import React, {FC, useEffect, useState} from 'react';
import './RadioButton.scss';
type InfoButtonT = {
  id: string;
  label: string;
  name: string;
  isChecked?: boolean;
};
type RadioButtonT = {
  info: InfoButtonT;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton: FC<RadioButtonT> = ({info, onChange}) => {
  return (
    <div className='radio-button'>
      <div className='radio-button__box'>
        <input
          type='radio'
          id={info.id}
          className='radio-button__input'
          name={info.name}
          onChange={onChange}
        />
        <label htmlFor={info.id} className='radio-button__label'>
          {info.label}
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
