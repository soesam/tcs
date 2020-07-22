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
        <v-input v-model="email" placeholder="Enter your email">
        </v-input>
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
  };
</script>
