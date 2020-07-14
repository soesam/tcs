<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent='submit'>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      type="email"
                      id="email"
                      label="Email"
                      v-model="email"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      type="password"
                      id="password"
                      label="Password"
                      v-model="password"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit">Login</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { auth } from '@/app'

export default {
  data() {
    return  {
      email: '',
      password: ''
    }
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
