import React, {FC} from 'react';
import './Preview.scss';
import Link from 'next/link';

const Preview: FC = () => {
  return (
    <div className='preview'>
      <div className='preview__wrap'>
        <div className='preview__info'>
          <p className='preview__title'>
            <span>Delicious</span>
            Quench the Hunger
          </p>
          <p className='preview__desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum,
            amet ac augue sit pretium risus senectus egestas. Pellentesque ac
            tellus, blandit eu convallis euismod. Nisl, ut proin nulla tellus,
            id nulla facilisis. Egestas id mauris lacus feugiat morbi.
          </p>
          <Link href={'/sing-up'} className='button-green preview__button'>
            Join Us
          </Link>
        </div>
        <div className='preview__img'></div>
      </div>
    </div>
  );
};

export default Preview;
