//import { seedDatabase } from "./seed";

const config = {
    apiKey: "AIzaSyAO-z-6mTF3wSu1f5QOuJbYgBqg7BYuUD8",
    authDomain: "social-media-clone-f5d1d.firebaseapp.com",
    databaseURL: 'https://social-media-clone-f5d1d.firebaseio.com',
    projectId: "social-media-clone-f5d1d",
    storageBucket: "social-media-clone-f5d1d.appspot.com",
    messagingSenderId: "873578241873",
    appId: "1:873578241873:web:7f1dd40d7861133ad67d70",
  };

  const firebase = window.firebase.initializeApp(config)
  const { FieldValue } = window.firebase.firestore

  //seedDatabase(firebase)

  export { firebase, FieldValue }