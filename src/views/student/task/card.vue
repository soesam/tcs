<template>
  <v-card
    class="mx-auto"
    max-width="344"
    style="margin-right: 30px!imporant;margin-left: 30px;!important"
  >
    <v-card-text>
      <div>{{ kind }}</div>
      <p class="display-1 text--primary">
        {{ title }}
      </p>
      <p>{{ classname }} • {{ teacher }}</p>
      <div>
        <span style="font-weight: bold;" v-if="state === 'again'"
          ><span class="red--text">Hand in again by {{ date }}</span></span
        >
        <span v-if="state === 'late'"
          ><span style="font-weight: bold;" class="red--text"
            >Handed in late or not done</span
          ></span
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
      <v-btn icon color="black lighten-1">
        <v-icon>mdi-eye</v-icon>
      </v-btn>
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
export default {
  props: ["state", "kind", "title", "classname", "teacher", "date"]
};
</script>
