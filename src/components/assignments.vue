<template>
  <div>
    <navigation />
    <v-main>
      <v-container fluid align-start justify-start>
        <v-row v-for="(assignment, aIndex) in assignments" :key="aIndex">
          <card
            :title="assignment.fields.Title"
            :classname="assignment.fields.ClassName[0]"
            :teacher="assignment.fields.Name + ' ' + assignment.fields.Surname"
            state="waiting"
            :date="assignment.fields.Due"
            :content="assignment.fields.Content"
          />
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import card from "./card";
import navigation from "./navigation.vue";
export default {
  data() {
    return {
      assignments: []
    }
  },
  components: {
    card,
    navigation
  },

  mounted: async function() {
     const records = await fetch("http://localhost:8000/assignments");
     this.assignments = (await records.json()).table;
  },
};


</script>
