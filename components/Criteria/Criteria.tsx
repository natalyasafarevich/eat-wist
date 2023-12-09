import React, {FC} from 'react';
import './Criteria.scss';
const itemsEx = [
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
const Criteria: FC = () => {
  return (
    <div className='criteria'>
      <div className='criteria__row'>
        <ul className='criteria__dropdown'>
          <li className='criteria__title'>
            <span>Choose a criterion</span>
            <ul className='drop'>
              {itemsEx.map((item) => {
                return <li className='drop__item'>{item.title}</li>;
              })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Criteria;
