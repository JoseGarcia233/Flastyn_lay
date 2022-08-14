import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDCcnvcwjhVK9Ik7mXMGhi1Z9KXxrs_mwg",
    authDomain: "falstyn-wall.firebaseapp.com",
    projectId: "falstyn-wall",
    storageBucket: "falstyn-wall.appspot.com",
    messagingSenderId: "480795580817",
    appId: "1:480795580817:web:dfc9e325ace0a889386230",
    measurementId: "G-HWD9TLRNSC"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db =getFirestore(app);
export const auth = getAuth(app);