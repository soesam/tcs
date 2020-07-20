<template>
  <div>
    <navigation />
    <v-main>
      <v-container fluid align-start justify-start>
        <v-row>
          <card
            title="Matrix multiplication"
            classname="Year 11 Maths"
            teacher="Marcus Hart"
            kind="Revision"
            state="waiting"
            date="July 3 2020"
          />

          <card
            title="Plato's Cave Allegory"
            classname="Year 11 RS"
            teacher="Jane Doe"
            kind="Presentation"
            state="late"
            date="July 1 2020"
          />
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import card from "./card";
import navigation from "@/components/navigation.vue";

export default {
  data() {
    return {
      drawer: null
    };
  },
  components: {
    card,
    navigation
  }
};
</script>
