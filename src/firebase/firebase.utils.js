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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
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
