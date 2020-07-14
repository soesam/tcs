<template>
  <v-container>
    <v-layout>
      <v-flex justify-center align-center>
        <v-card>

          <v-card-title>
            <h2>{{ kind === 'signin' ? 'Sign in to TCS' : 'Create your account'}}</h2>
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="send">

              <v-text-field
                label='Your email' 
                v-model='email'
              >
              </v-text-field>

              <v-text-feild 
                label='Password' 
                v-model='password'
              >
              </v-text-field>

              <v-btn flat>Create</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["kind"],
  data: {
    email: '',
    password: ''
  },
  send() {
    console.log('form submit fired')
  }
};
</script>
