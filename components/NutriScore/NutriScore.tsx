'use client';
import React, {FC, useEffect, useState} from 'react';
import './NutriScore.scss';

type NutriScoreT = {
  type: string;
};
const NutriScore: FC<NutriScoreT> = ({type}) => {
  const [nutriscore, getNutriscore] = useState('');

  useEffect(() => {
    if (type === 'a') {
      getNutriscore('/nutriscore-a.svg');
    } else if (type === 'b') {
      getNutriscore('/nutriscore-b.svg');
    } else if (type === 'c') {
      getNutriscore('/nutriscore-c.svg');
    } else if (type === 'd') {
      getNutriscore('/nutriscore-d.svg');
    } else {
      getNutriscore('/nutriscore-e.svg');
    }
  }, [type]);
  return (
    <span
      className='nutri-score'
      style={{
        background: `center/contain no-repeat url(${nutriscore})`,
      }}
    ></span>
  );
};

export default NutriScore;
