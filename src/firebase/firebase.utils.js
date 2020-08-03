import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCJQ__BsvGrWo83caEOR_iqdR58xEosdsE",
  authDomain: "first-ecommerce-web.firebaseapp.com",
  databaseURL: "https://first-ecommerce-web.firebaseio.com",
  projectId: "first-ecommerce-web",
  storageBucket: "first-ecommerce-web.appspot.com",
  messagingSenderId: "272017525623",
  appId: "1:272017525623:web:5a9cec676afcc698192f72",
  measurementId: "G-T0BC72FE5E",
};

firebase.initializeApp(config);

//sign in with google
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
