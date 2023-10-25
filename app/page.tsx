'use client';
import {useEffect} from 'react';
import styles from './page.module.css';
import {
  Provider,
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  AppDispatch,
  store,
} from '@/redux/store/store';
import {foodCategory} from '@/redux/store/categories/actions';

export default function Home() {
  return <main className={styles.main}></main>;
}
