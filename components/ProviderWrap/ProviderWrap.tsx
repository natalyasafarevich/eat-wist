'use client';
import store from '@/store/store';
import React, {FC} from 'react';

import {Provider} from 'react-redux';

interface ProviderWrapProps {
  children: React.ReactNode;
}

const ProviderWrap: FC<ProviderWrapProps> = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};
export default ProviderWrap;
