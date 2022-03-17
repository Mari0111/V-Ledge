// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

// const clientCredentials = {
//   apiKey: "AIzaSyA_VVDNC_I0KgVAlUXLu2UGlSM2P23-t_U",
//   authDomain: "v-ledge-22350.firebaseapp.com",
//   projectId: "v-ledge-22350",
//   storageBucket: "v-ledge-22350.appspot.com",
//   messagingSenderId: "1030170308913",
//   appId: "1:1030170308913:web:1cf93f857904d8c7d74010",
//   databaseURL: "v-ledge-22350.firebaseapp.com",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(clientCredentials);
  
// } else {
//   firebase.app();
// }

// export default firebase;
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA_VVDNC_I0KgVAlUXLu2UGlSM2P23-t_U",
  authDomain: "v-ledge-22350.firebaseapp.com",
  projectId: "v-ledge-22350",
});

const db = getFirestore();

export default db;