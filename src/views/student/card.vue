<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <div>{{ kind }}</div>
      <p class="display-1 text--primary">
        {{ title }}
      </p>
      <p>{{ classname }} • {{ teacher }}</p>
      <div>
        <span
          style="font-weight: bold;"
          v-if="state === 'again'"
          class="text--red"
          >Hand in again by {{ date }}</span
        >
        <span v-if="state === 'late'" class="text--red">handed in late</span>
        <span v-if="state === 'special'" class="text--green"
          >You don't have to do this</span
        >
        <!-- TODO: should just hide in this case -->
        <span v-if="state === 'waiting'" class="text--teal"
          >Hand in by {{ date }}</span
        >
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn icon color="purple darken-4">
        <v-icon>mdi-eye</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="purple darken-4">mdi-comment-account</v-icon>
      </v-btn>
      <v-btn icon color="purple darken-4">
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
