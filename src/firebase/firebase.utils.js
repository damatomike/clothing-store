import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDLQkXbG5Z_CzBgcYdaXE1Z2QE2DkHwdGk',
  authDomain: 'crisp-db.firebaseapp.com',
  databaseURL: 'https://crisp-db.firebaseio.com',
  projectId: 'crisp-db',
  storageBucket: 'crisp-db.appspot.com',
  messagingSenderId: '764360766944',
  appId: '1:764360766944:web:d374d3b703d533e0fca785',
  measurementId: 'G-CZ2ME1W0GM',
};

firebase.initializeApp(config);

//Authentication
export const auth = firebase.auth();

//Firestore
export const firestore = firebase.firestore();

//Google auth utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
