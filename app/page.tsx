'use client';

import Preview from '@/components/Preview/Preview';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Home() {
  return (
    <div className='wrap'>
      <div>
        <Preview />
      </div>
    </div>
  );
}

export default Home;
