import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAsszR9TNq21jx46rnYC_AW_wK_hf9dTQQ',
  authDomain: 'care-clothing-c4202.firebaseapp.com',
  projectId: 'care-clothing-c4202',
  storageBucket: 'care-clothing-c4202.appspot.com',
  messagingSenderId: '1057532675169',
  appId: '1:1057532675169:web:9f3f69a8cdaaeaa40f1620',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
