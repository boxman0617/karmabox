import firebaseClient from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqYM0-h5p45W5YH-DsslWMav4mJk4HS2k",
  authDomain: "friendli-b1bf1.firebaseapp.com",
  databaseURL: "https://friendli-b1bf1.firebaseio.com",
  projectId: "friendli-b1bf1",
  storageBucket: "friendli-b1bf1.appspot.com",
  messagingSenderId: "550956101332",
  appId: "1:550956101332:web:a7657b3fd6d90a2fc6d541",
};

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(firebaseConfig);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  window.firebase = firebaseClient;
}

export { firebaseClient };
