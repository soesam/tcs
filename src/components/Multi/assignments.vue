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
      <div v-if="role === 'staff'">
        <create/>
      </div>
    </v-main>
  </div>
</template>

<script>
import card from "./card";
import create from "@/components/creator.vue"
import navigation from "./navigation.vue";
export default {
  props: ["assignments", "role"],

  components: {
    card,
    navigation,
    create
  },

  mounted: function() {
    console.log("assignments", this.assignments)
  }

};
</script>
