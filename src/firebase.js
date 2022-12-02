import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDfzvvntLt3Sv5OLjzdV7tTsQ67yQDYl7k",
  authDomain: "reactdomlist.firebaseapp.com",
  projectId: "reactdomlist",
  storageBucket: "reactdomlist.appspot.com",
  messagingSenderId: "1085693168783",
  appId: "1:1085693168783:web:21e1e6a3e9f9d3ccd2f4fa",
  measurementId: "G-YD8PJHW2K6"
})

export const auth = app.auth()
export default app
