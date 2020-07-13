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
        <button name="Green" v-on:click="() => pointUp(record.id, 1)">
          +1
        </button>
        <button name="Green" v-on:click="() => pointUp(record.id, 5)">
          +5
        </button>
        <button name="Red" v-on:click="() => deleteThis(record.id)">
          Delete
        </button>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
var Airtable = require("airtable");
const sleep = function(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};
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
    pointUp: async function(key, no) {
      console.log("1");
      console.log(key);
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
        var newPoints = points + no;
        console.log(points);
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
      await sleep(500);

      this.getData();
    },

    deleteThis: function(key) {
      var base = new Airtable({ apiKey: "keyLVnvjV4bFHXOaD" }).base(
        "appvLWxrF80mDK8Xq"
      );
      console.log("Delete")
      base("Student").destroy([ key ],
      function(err, deletedRecords) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(deletedRecords)
      })
    }
  }
};
</script>

<style>
  button[name="Green"] {background:green;}
  button[name="Red"] {background:red;}
</style>
