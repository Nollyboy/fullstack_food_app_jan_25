import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBdSavyUAnASV2ii9jsfH46pjAQzilvdWA",
    authDomain: "restaurantapp-ac358.firebaseapp.com",
    databaseURL: "https://restaurantapp-ac358-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-ac358",
    storageBucket: "restaurantapp-ac358.appspot.com",
    messagingSenderId: "968205962571",
    appId: "1:968205962571:web:614cab71b6a29751b82cce"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export {app, firestore, storage};