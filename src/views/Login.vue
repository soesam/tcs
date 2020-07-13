<template>
  <div></div>
</template>

<script>
import { auth } from '@/app'

export default {
  data() {
    email: '',
    password: ''
  },
  
  methods: {
    submit() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
        this.$store.commit('hello', user)
        this.$router.replace('/home')
      })
    }
  }
}
</script>
