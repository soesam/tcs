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
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  name: "VueAirtable",
  props: ["columns"],
  data: function() {
    return {
      apiUrl: "https://api.airtable.com/v0/",
      apiKey: "keyLVnvjV4bFHXOaD", // Always use a read-only account token
      base: "Students",
      records: []
    };
  },
  mounted: function() {
    this.getData();
    console.log("1");
  },
  methods: {
    getData: function() {
      console.log("2");
      axios({
        url: this.apiUrl + this.base,
        headers: {
          Authorization: `Bearer ${this.apiKey}`
        }
      }).then(res => {
        this.records = res.data.records;
      });
    }
  }
};
</script>
