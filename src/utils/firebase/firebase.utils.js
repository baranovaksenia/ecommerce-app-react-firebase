import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc, getDoc, getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBDwV_bc1Yy5ywiom206Py7kKkfV0Sh51w',
  authDomain: 'ecommerce-app-18817.firebaseapp.com',
  projectId: 'ecommerce-app-18817',
  storageBucket: 'ecommerce-app-18817.appspot.com',
  messagingSenderId: '186751153661',
  appId: '1:186751153661:web:d0178e2dab806ebee7d594',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//allows to tell firebase when we want
//to get a document or we want to set a document to our database
export const db = getFirestore();

//this function will take the data that we're getting from the authentication service
//and store it inside of firestore
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //if user data does not exist
  //create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (err) {
      console.log('error creating the user', err.message);
    }
  }

  //if user data exists
  //return userDocRef
  return userDocRef;
};
