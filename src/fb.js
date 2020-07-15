import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default {
  firebase,
  app: firebase.initializeApp({
    apiKey: "AIzaSyAsALZcYhNHg60vb7yv2GCw1vrA3keAtIw",
    authDomain: "tcs-io.firebaseapp.com",
    databaseURL: "https://tcs-io.firebaseio.com"
  })
};

// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
