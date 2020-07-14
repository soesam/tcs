// Conveniently import this file anywhere to use db

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const app = firebase.initializeApp({ projectId: "tcs-io" });
export const db = app.firestore();
export const auth = app.auth;

// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
