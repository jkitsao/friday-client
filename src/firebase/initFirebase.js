import firebase from "firebase/app";

import "firebase/auth";

var firebaseConfig = {
  // apiKey: "AIzaSyDY0kOWFaohrq6Gzu0jMZXgz0T0ZyobAkw",
  // authDomain: "vutia-ke.firebaseapp.com",
  // projectId: "vutia-ke",
  // storageBucket: "vutia-ke.appspot.com",
  // messagingSenderId: "733883423344",
  // appId: "1:733883423344:web:ab1dcd001390b54b9ff2b5",
  apiKey: "AIzaSyCG4WxqgxeoT-DG94DO3EU7x_DsG2yWWV0",
  authDomain: "lucid-cms.firebaseapp.com",
  projectId: "lucid-cms",
  storageBucket: "lucid-cms.appspot.com",
  messagingSenderId: "776925289442",
  appId: "1:776925289442:web:e1cba2c2a73f730da7b7bb",
  measurementId: "G-50QMT12NNH",
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("firebase initialized");
  }
}
