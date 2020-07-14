<template>
  <div>
    <v-card v-for="(title, tIndex) in titles" :key="tIndex">
      <v-card-title> {{ title }} </v-card-title>
      <br/>
      <v-card-subtitle>Students:</v-card-subtitle>
      <br/>
      <v-card-text v-for="(c, cIndex) in classes[tIndex]" :key="cIndex">{{c + ", "}}</v-card-text>
      <br/>
      <br/>
      <br/>
    </v-card>
  </div>
</template>

<script>
  var Airtable = require("airtable");
  const sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  export default {
    name: "Classes",
    data() {
      return {
        apiUrl: "https://api.airtable/com/v0/appvLWxrF80mDK8Xq/",
        apiKey: "keyLVnvjV4bFHX0aD",
        records: [],
        classes: [],
        titles: []
      };
    },

    mounted: async function() {
      this.showData()
    },

    methods: {

    showData: async function() {
      this.records = this.getData()
      await sleep(500);
      var i;
      var l;
      let students = this.records[0];
      let cls = this.records[1];
      for (i=0; i < cls.length; i++) {
        l = this.checkData(students, cls[i]);
        console.log("6")
        console.log(l)
        this.titles.push(cls[i].fields.Name)
        this.classes.push(l);
      }
    },
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
      await sleep(500);
      base("Student").find(key, fetch);
      this.showData();
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
        this.showData();
      });
    },

    //Gives opposite of value put in (Boolean only)
    change: function(value) {
      value = !value;
      return value;
    },

    //Gets data from airtable
    getData: function() {
      var list = [];
      var list1 = [];
      var allList = [];
      var base = new Airtable({ apiKey: "keyLVnvjV4bFHXOaD" }).base(
        "appvLWxrF80mDK8Xq"
      );
      base("Student")
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
        base("Class")
          .select({
            view: "Grid view"
          })
          .eachPage(
            function page(records, fetchNextPage) {
              records.forEach(function(record) {
                list1.push(record);
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
          allList.push(list);
          allList.push(list1);
          return allList;
    },

    checkData: function(data, classs) {
      var studentList = [];
      var studentList1 = [];
      var i;
      var t;
      var l;
      studentList = classs.fields.Members;
      for (i = 0; i < studentList.length; i++) {
        for (t = 0; t < data.length; t++) {
          if (data[t].fields.Member[0] == studentList[i]) {
            console.log("4")
            l = data[t].fields.Name + " " + data[t].fields.Surname;
            console.log(l)
            studentList1.push(l);
              }
            }
          }
          console.log("5")
          console.log(studentList1)
          return studentList1;
        }
      }
    };
</script>
