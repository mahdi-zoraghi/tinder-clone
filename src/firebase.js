import firebase from "firebase/app"

import "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDIYIYykb0Nm7BbW0G6DWVX0NdL-NuNpi4",
  authDomain: "tinder-clone-3e8f3.firebaseapp.com",
  projectId: "tinder-clone-3e8f3",
  storageBucket: "tinder-clone-3e8f3.appspot.com",
  messagingSenderId: "440201849175",
  appId: "1:440201849175:web:14caf2b0cf1fb56fe47612",
  measurementId: "G-XCSZZ7NQMW",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export { db }
