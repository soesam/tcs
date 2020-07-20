<template>
  <nav>
    <v-navigation-drawer app clipped v-model="drawer">
      <v-list v-for="item in items" :key="item.text">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title color="amber">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="teal" elevation="3" dark clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span style="font-weight: bold;">TCS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text tile>
        <span>sign out</span>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      drawer: null,
      items: [
        { text: "My homework", icon: "mdi-view-dashboard" },
        { text: "Me", icon: "mdi-account-circle" }
      ]
    };
  }
};
</script>
