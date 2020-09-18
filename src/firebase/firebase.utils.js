
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD9fOuz6CKopqGJxoF9GHNdjoH7LaMgw04",
    authDomain: "crwn-db-89d63.firebaseapp.com",
    databaseURL: "https://crwn-db-89d63.firebaseio.com",
    projectId: "crwn-db-89d63",
    storageBucket: "crwn-db-89d63.appspot.com",
    messagingSenderId: "588018572857",
    appId: "1:588018572857:web:822e4a49ec35049d5177e8",
    measurementId: "G-FWGWYJJG3V"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




