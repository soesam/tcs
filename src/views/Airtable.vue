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
      records: [],
    };
  },
  mounted: function() {
    this.records = this.checkData(this.getData(), "Year 11 GCSE PE");
  },
  methods: {
    //Function used to add points to airtable
    pointUp: async function(key, no) {
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
      this.records = this.checkData(this.getData(), "Year 11 GCSE PE");
    },

    //Function used to delete a student's record
    deleteThis: function(key) {
      var base = new Airtable({ apiKey: "keyLVnvjV4bFHXOaD" }).base(
        "appvLWxrF80mDK8Xq"
      );
      base("Student").destroy([key], function(err) {
        if (err) {
          console.error(err);
          return;
        }
        this.getData();
      });
    },
    //Gives opposite of value put in (Boolean only)
    change: function(value) {
      value = !value;
      return value;
    },
    //Gets data from airtable
    getData: async function() {
      var list = [];
      var base = new Airtable({ apiKey: "keyLVnvjV4bFHXOaD" }).base("appvLWxrF80mDK8Xq");
      base('Student').select({
          view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
          records.forEach(function(record) {
                list.push(record)
          });
          fetchNextPage();
      }, function done(err) {
          if (err) { console.error(err); return; }
          console.log(list)
      });
      await sleep(500);
      console.log(list)
      return list;
    },

    checkData: async function(data, classs) {
      var list = [];
      var list1 = [];
      var studentList;
      var base = new Airtable({ apiKey: "keyLVnvjV4bFHXOaD" }).base("appvLWxrF80mDK8Xq");
      base('Class').select({
          view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
          records.forEach(function(record) {
              list.push(record)
          });
          fetchNextPage();
      }, function done(err) {
          if (err) { console.error(err); return; }
      });
      await sleep(500);
      if (classs != "All") {
          var i;
          var t;
          for (i = 0; i<list.length; i++) {
            if (classs == list[i].fields.Name) {
              studentList = list[i].fields.Members;
            }
          }
          await sleep(1000);
          console.log(data)
          for (i = 0; i<studentList.length; i++) {
            for (t = 0; t<data.length; t++) {
              if (data[t].id == studentList[i]) {
                list1.push(data[t]);
              }
            }
          }
        }
        await sleep(500);
        console.log("list1")
      console.log(list1)
      return list1
    }
  }
};
</script>
<style>
button[name="Green"] {
  background: green;
}
button[name="Red"] {
  background: red;
}
</style>
