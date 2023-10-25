'use client';
import Image from 'next/image';
import styles from './page.module.css';
import {Provider} from 'react-redux';
import {store} from '@/redux/store/store';
export default function Home() {
  return (
    <Provider store={store}>
      <main className={styles.main}></main>
    </Provider>
  );
}
