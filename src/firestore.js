import firebase from 'firebase/app'
import 'firebase/firestore'
import config from './config'

export const firestore = firebase.initializeApp({projectId: config.projectId})
.firestore()
