<template>
  <div>
    <v-app-bar color="teal" elevation="3" dark clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span style="font-weight: bold;">TCS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text tile>
        <span>sign in</span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-subtitle>Enter your email:</v-subtitle>
        <br/>
        <input v-model="email" placeholder="Enter your email">
        <br/>
        <button :onclick="getStudent(email)">Submit</button>
      </v-container>
    </v-main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          email: []
      }
    },

    mounted: function() {
      this.getStudent();
    },
    methods: {
      getStudent: async function(email) {
        const records = await fetch("http://localhost:8000/students");
        const students = (await records.json()).table;
        students.map(this.checkEmail, email);
      },

      checkEmail: function(test) {
        if (test.fields.Email === this.email) {
          this.$emit(test)
          return test;
        } else {
          return false;
        }
      }
    }
  };
</script>
