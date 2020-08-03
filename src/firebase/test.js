import firebase from "firebase/app";
import "firebase/firestire";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("cmTCCaDc52LRDOcULyqf")
  .collection("cartItem")
  .doc("vAaMkiQS1eXR8bn1m7qp");

firestore.doc("/users/cmTCCaDc52LRDOcULyqf/cartItem/vAaMkiQS1eXR8bn1m7qp");
firestore.collection("/users/cmTCCaDc52LRDOcULyqf/cartItem");
