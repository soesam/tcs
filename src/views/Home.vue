<template>
  <v-btn large secondary light tile :click='authTest'>Sign in with Google</v-btn>
</template>

<script>
import { db, auth } from '@/firebase'
const ref = db.ref('')

export default {
  data: {
    
  }

  methods: {
    authTest() {
      // trigger auth flow.
     
    } 
  }
}
</script>
