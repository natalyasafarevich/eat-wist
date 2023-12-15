import React, {FC, useEffect, useState} from 'react';
import './Criteria.scss';
const itemsEx = [
  {title: 'Choose a criterion'},
  {title: 'allergens'},
  {title: 'brands'},
  {title: 'categories'},
  {title: 'packaging'},
  {title: 'labels'},
  {title: 'origins of ingredients'},
  {title: 'manufacturing or processing places'},
  {title: 'traceability codes'},
  {title: 'purchase places'},
  {title: 'stores'},
  {title: 'countries'},
  {title: 'ingredients'},
  {title: 'additives'},
  {title: 'traces'},
  {title: 'Nutrition grades'},
  {title: 'NOVA groups'},
  {title: 'languages'},
  {title: 'contributors'},
  {title: 'editors'},
  {title: 'states'},
];
type CriteriaT = {
  currentCriteria: string;
  setCurrentCriteria: (value: string) => void;
};
const Criteria: FC<CriteriaT> = ({currentCriteria, setCurrentCriteria}) => {
  // const [, setCurrentCriteria] = useState('');

  // useEffect(()=>{
  //   currentCriteria ?
  // },[])
  const handelClick = (e: React.MouseEvent<HTMLLIElement>) => {
    let value = e.currentTarget.textContent as string;
    setCurrentCriteria(value);
  };
  return (
    <div className='criteria'>
      <div className='criteria__row'>
        <ul className='criteria__dropdown'>
          <li className='criteria__title'>
            <span>{currentCriteria}</span>
            <ul className='drop'>
              {itemsEx.map((item) => {
                return (
                  <li onClick={handelClick} className='drop__item'>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Criteria;
