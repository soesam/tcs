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
import navigation from "@/components/navigation.vue";
var Airtable = require("airtable");
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
    this.assignments = await this.getData()
  },
  methods: {
    getData: function() {
      var list = [];
      var base = new Airtable({ apiKey: "keyLVnvjV4bFHXOaD" }).base(
        "appvLWxrF80mDK8Xq"
      );
      base("Homework")
        .select({
          view: "Grid view"
        })
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach(function(record) {
              list.push(record);
            });
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              console.error(err);
              return;
            }
          }
        );
      return list;
    },
  }
};


</script>
