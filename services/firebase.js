// // Import the functions you need from the SDKs you need
// import * as firebase from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAnQE7oolppmUcBJC7SWwvmqeP6CFRFsvs",
//   authDomain: "authdemo-container.firebaseapp.com",
//   projectId: "authdemo-container",
//   storageBucket: "authdemo-container.appspot.com",
//   messagingSenderId: "912916062178",
//   appId: "1:912916062178:web:dfa947f4ba3228d62ba3bb",
// };

// // Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }
// const auth = firebase.auth();

// export { auth };

// import React, { useState, useEffect } from "react";
import firebase from "@react-native-firebase/app";
import auth from '@react-native-firebase/auth';
//import "firebase/compat/auth";
//import "firebase/compat/firestore";
var ref;
// const [myjson, setmyjson] = useState({"customerid":""})
var myjson;
var userid;

const firebaseConfig = {
  // apiKey: "AIzaSyAnQE7oolppmUcBJC7SWwvmqeP6CFRFsvs",
  // authDomain: "authdemo-container.firebaseapp.com",
  // projectId: "authdemo-container",
  // storageBucket: "authdemo-container.appspot.com",
  // messagingSenderId: "912916062178",
  // appId: "1:912916062178:web:dfa947f4ba3228d62ba3bb",
  apiKey: "AIzaSyAwObNH1B0-cbpcXCavSPZHW7zHItDrjsA",
  authDomain: "firebasics-96.firebaseapp.com",
  databaseURL:
    "https://firebasics-96-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "firebasics-96",
  storageBucket: "firebasics-96.appspot.com",
  messagingSenderId: "692349524885",
  appId: "1:692349524885:web:f7a5cd326c0f4ce79c349c",
  measurementId: "G-BW6KVFZJV1",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      userid = user.uid;
      console.log("inside func");
      console.log(userid);
      console.log(user.uid);
      myjson = { "customerid": userid };
      // await setmyjson({"customerid":userid});
      console.log(myjson);
    } else {
      ("User has not signed in");
    }
  });
  ref = firebase.firestore().collection("container");
  console.log("after ref");
  console.log(myjson);
}

export { ref };
console.log("this");
console.log(myjson);
export { myjson };
export const auth1 = auth;
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();