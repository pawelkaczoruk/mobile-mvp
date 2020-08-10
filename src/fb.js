import * as firebase from 'firebase/app'
import 'firebase/firebase-analytics'

const firebaseConfig = {
  apiKey: "AIzaSyANqvCTwJDbh8du81VvQbkiJ2vIr0O87zw",
  authDomain: "mobilemvp-2263c.firebaseapp.com",
  databaseURL: "https://mobilemvp-2263c.firebaseio.com",
  projectId: "mobilemvp-2263c",
  storageBucket: "mobilemvp-2263c.appspot.com",
  messagingSenderId: "840342718311",
  appId: "1:840342718311:web:ef76b118398131ac1f11c2",
  measurementId: "G-VY1NHY8GSR"
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()