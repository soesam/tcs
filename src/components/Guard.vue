<template>
  <v-container>
    <v-layout justify-content-center align-content-center>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title>
            <h3>
              {{ kind === "signin" ? "Sign in" : "Create your account" }}
            </h3>
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="submit">

              <v-text-field v-model="email" label="Email"></v-text-field>
              <v-spacer></v-spacer>

              <v-text-field
                type="password"
                v-model="password"
                label="Password"
              ></v-text-field>
              <v-spacer></v-spacer>
             
              <v-flex xs12>
                <v-btn color="primary" tile type="submit">
                  {{ kind === "signin" ? "Sign in" : "Create account" }}
                </v-btn>
              </v-flex>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { auth } from "@/db";

export default {
  props: ["kind"],
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submit() {
      if (this.kind === "signin") {
        auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then(resp => {
            console.log("response from sign in");
            console.log(resp);
          });
      } else if (this.kind === "signup") {
        auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(resp => {
            console.log("response from sign up");
            console.log(resp);
          });
        this.$router.replace("/home");
      }
    }
  }
};
</script>
