import Firebase from "firebase";

var config = {
    apiKey: "AIzaSyDHeZJxo0Mx1sshGFgdpEVtugmYTKDQku8",
    authDomain: "smsvote.firebaseapp.com",
    databaseURL: "https://smsvote.firebaseio.com",
    projectId: "smsvote",
    storageBucket: "smsvote.appspot.com",
    messagingSenderId: "337112883581"
};

var firebaseApp = !Firebase.apps.length ? Firebase.initializeApp(config) : Firebase.app();

const firestore = firebaseApp.firestore();

export default firestore;
