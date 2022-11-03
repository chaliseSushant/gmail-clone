import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9rRVRH0pviban2VotnhjhU--Ypw6duLo",
  authDomain: "clone-yt-33307.firebaseapp.com",
  projectId: "clone-yt-33307",
  storageBucket: "clone-yt-33307.appspot.com",
  messagingSenderId: "22364964306",
  appId: "1:22364964306:web:72b5d01cfac65c9a28b40b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
