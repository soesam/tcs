<template>
  <nav>
    <v-navigation-drawer app clipped v-model="drawer">
      <v-list>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title color="amber">My homework</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
        <v-dialog
          v-model="dialog"
          width="250"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
            text
            v-bind="attrs"
            v-on="on">
              <v-list-item-action>
                  <v-icon>mdi-account-circle</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>My Profile</v-list-item-title>
              </v-list-item-content>
            </v-btn>
          </template>
          <profile/>
        </v-dialog>
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
import profile from "@/views/profile.vue"
export default {
  name: "navigation",
  props: { items: Array },

  components: {
    profile
  }
};
</script>
