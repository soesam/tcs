<template>
  <v-card
    class="mx-auto"
    min-width="320"
    max-width="320"
    style="margin: 20px!important;font-weight: 500;"
  >
    <v-card-text>
      <p class="headline text--primary" style="padding-top: 11px;">
        {{ title }}
      </p>
      <p>{{ classname }} • {{ teacher }}</p>
      <div style="font-weight: bold;">
        <span v-if="state === 'again'"
          ><span class="red--text">Hand in again by {{ date }}</span></span
        >
        <span v-if="state === 'late'"
          ><span class="red--text">Handed in late or not done</span></span
        >
        <span v-if="state === 'special'"
          ><span class="green--text">You don't have to do this</span></span
        >
        <!-- TODO: should just hide in this case -->
        <span v-if="state === 'waiting'">
          ><span class="teal--text">Hand in by {{ date }}</span></span
        >
      </div>
    </v-card-text>
    <v-card-actions>
      <show :content="content" />
      <v-btn icon>
        <v-icon color="black lighten-1">mdi-comment-account</v-icon>
      </v-btn>
      <v-btn icon color="black lighten-1">
        <v-icon>mdi-check-bold</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import show from "./show.vue";

export default {
  props: ["state", "title", "classname", "teacher", "date", "content"],
  components: {
    show
  }
};
</script>
