import Vue from 'vue'
import fb from '@/fb'

const provider = fb.auth.GoogleAuthProvider();
fb.auth.languageCode = 'en';

export const login = Vue.component('login', {
  created() {
    auth().signInWithRedirect(provider);
    auth().getRedirectResult().then(result => {
      alert(result)
    })
  }
})

export const add = Vue.component('add', {})
