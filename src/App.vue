<template>
  <v-app>
    <Header />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
  import Header from "@/components/Header";
  export default {
    name: 'App',

    components: { Header },

    data () {
      return {
        //
      }
    }
  };
</script>
