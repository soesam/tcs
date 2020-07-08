<template>
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th v-for="(col, colIndex) in columns" :key="colIndex">
          {{ col }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="record in records" :key="record.id">
        <td
          v-for="(col, colIndex) in columns"
          :key="record.id + '-' + colIndex"
        >
          {{ record.fields[col] }}
        </td>
        <v-btn color="green" text @click="pointUp(record.id)">+1</v-btn>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
var Airtable = require("airtable");
export default {
  name: "VueAirtable",
  props: ["columns"],
  data: function() {
    return {
      apiUrl: "https://api.airtable.com/v0/appvLWxrF80mDK8Xq/",
      apiKey: "keyLVnvjV4bFHXOaD", // Always use a read-only account token
      base: "Student",
      records: []
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    sleep: function(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },

    getData: function() {
      axios({
        url: this.apiUrl + this.base,
        headers: {
          Authorization: `Bearer ${this.apiKey}`
        }
      }).then(res => {
        this.records = res.data.records;
      });
    },
    pointUp: async function(key) {
      var base = new Airtable({ apiKey: "keyLVnvjV4bFHXOaD" }).base(
        "appvLWxrF80mDK8Xq"
      );
      var points = 0;
      function fetch(err, record) {
        if (err) {
          console.error(err);
          return;
        }
        points = record.get("Points");
        let inputElement = document.querySelector(`input.${key}`);
        let addition = parseInt(inputElement.value);
        var newPoints = points + addition;
        console.log(points);
        console.log(addition);
        console.log(newPoints);
        base("Student").update([
          {
            id: key,
            fields: {
              Points: newPoints
            }
          }
        ]);
      }
      base("Student").find(key, fetch);
      await this.sleep(500);
    }
  }
};
</script>
