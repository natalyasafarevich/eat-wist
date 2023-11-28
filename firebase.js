import {initializeApp} from 'firebase/app';

import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCBu_lWYXqzx-HxStV1Iwpi2s2cey5RQrs',
  authDomain: 'nutrition-app-ad4a2.firebaseapp.com',
  projectId: 'nutrition-app-ad4a2',
  storageBucket: 'nutrition-app-ad4a2.appspot.com',
  messagingSenderId: '31481655195',
  appId: '1:31481655195:web:02483f9592cb054adfbb3e',
  measurementId: 'G-GG759VRKJ7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
// Get a list of cities from your database

// let t = getCities(db);
// export default t;
