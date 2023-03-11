import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH,
  projectId: import.meta.env.VITE_PROJECT,
  storageBucket: import.meta.env.VITE_APP_STORAGE,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGE,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASURE,
  // databaseURL:
  //   'https://harryproject-8c1ce-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export let userId = '';
onAuthStateChanged(auth, user => {
  if (user) {
    userId = auth.currentUser.uid;
  } else {
    return;
  }
});
