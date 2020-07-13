<template>
  <v-app>
    <v-navigation-drawer app></v-navigation-drawer>
    <Header/>
    <v-content>
      <router-view />
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>
