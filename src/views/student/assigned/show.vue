<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        style="margin-right: 8px;"
        icon
        color="black lighten-1"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-eye</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-toolbar dark color="teal darken-1">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Matrix Multiplication</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false">Close</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-list three-line subheader>
        <v-subheader>About</v-subheader>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title></v-list-item-title>
            <v-list-item-subtitle
              >{{content}}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Attachments</v-list-item-title>
            <v-list-item-subtitle
              >This assignment doesn't contain any attachments. If this is a mistake, contact the teacher.</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "show",
  props: ["content"],
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  }
};
</script>
