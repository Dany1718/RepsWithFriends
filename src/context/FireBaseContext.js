import React, {createContext} from 'react'
//import * as firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import config from "../config/firebase"

const FirebaseContext = createContext();

if (firebase.apps.length === 0) {
    firebase.initializeApp(config)
}

const db = firebase.firestore();

const Firebase = {}

const FirebaseProvider = (props) => {
    return <FirebaseContext.Provider value={Firebase}>{props.children}</FirebaseContext.Provider>
};

export { FirebaseContext, FirebaseProvider };