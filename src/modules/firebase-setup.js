'use strict'
import firebase from 'firebase'
import 'firebase/firestore'


const config = {
  apiKey: "AIzaSyCMs_caQhzm1t2FFyDhDzprQGheKdL-vH8",
  authDomain: "meusprojetinhos.firebaseapp.com",
  databaseURL: "https://meusprojetinhos.firebaseio.com",
  projectId: "meusprojetinhos",
  storageBucket: "meusprojetinhos.appspot.com",
  messagingSenderId: "802227540990"
}
firebase.initializeApp(config)

const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)

export default firebase
