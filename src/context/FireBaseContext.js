import React, {createContext} from 'react'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import config from "../config/firebase"

const firebaseContext = createContext();

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

const db = firebase.firestore();

const Firebase = {}

const FirebaseProvider = (props) => {
    return <firebaseContext.Provider value={Firebase}>{props.children}</firebaseContext.Provider>
};