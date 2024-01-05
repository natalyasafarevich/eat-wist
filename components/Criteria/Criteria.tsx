import React, {FC, useEffect, useState} from 'react';
import './Criteria.scss';
import {saveSearchFilter} from '@/localStorageUtils';
import {CriteriaT, paramsValuesT} from '@/app/type/type';

let paramsValues: Array<paramsValuesT> = [
  {
    id: 0,
    criteria: '',
    isValue: true,
  },
];

const Criteria: FC<CriteriaT> = ({items, onChangeTitle}) => {
  const [isOpen, setIsOpen] = useState(false);

  let [currentCriteria, setCurrentCriteria] = useState('');
  useEffect(() => {
    currentCriteria.length === 0 && setCurrentCriteria('Choose a criterion');
  }, []);

  useEffect(() => {
    let currentObj: paramsValuesT = {
      id: 1,
      criteria: currentCriteria,
      isValue: true,
    };
    paramsValues.map((item) => {
      if (currentObj.id === item.id) {
        paramsValues = [];
        paramsValues.push(currentObj);
      }
    });
    onChangeTitle(currentCriteria);
  }, [currentCriteria]);

  const handelClick = (e: React.MouseEvent<HTMLLIElement>) => {
    let value = e.currentTarget.textContent as string;

    setCurrentCriteria(value);
    setIsOpen(!isOpen);
  };

  return (
    <div className='criteria'>
      <div className='criteria__row'>
        <ul className='criteria__dropdown'>
          <li className='criteria__title'>
            <span
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {currentCriteria}
            </span>
            {isOpen && (
              <ul className='drop'>
                {items.map((item, i) => {
                  return (
                    <li key={i} onClick={handelClick} className='drop__item'>
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Criteria;
