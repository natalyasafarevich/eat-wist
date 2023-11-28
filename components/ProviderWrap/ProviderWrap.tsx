'use client';
import React, {FC} from 'react';
import store from '../../store/store';
import {Provider} from 'react-redux';

interface ProviderWrapProps {
  children: React.ReactNode;
}

const ProviderWrap: FC<ProviderWrapProps> = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};
export default ProviderWrap;
