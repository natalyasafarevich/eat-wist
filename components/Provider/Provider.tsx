'use client';
import {store} from '@/redux/store/store';
import {ReactNode} from 'react';
import {Provider} from 'react-redux';

export const ProviderLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <Provider store={store}>{children}</Provider>
  );
};
