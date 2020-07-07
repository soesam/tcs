<template>
  <div class="test">
    <h1>test page</h1>
    <Auth />
  </div>
  <div class="Students">
    <ul class="name"></ul>
    <ul class="sname"></ul>
    <ul class="email"></ul>
    <ul class="gpoints"></ul>
    <ul class="id"></ul>
</div>
</template>

<script>
const Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyLVnvjV4bFHXOaD'}).base('appvLWxrF80mDK8Xq');

export default {
  name: "Test",
  components: {
    Auth
  },
    methods: {
      displayData() {
          base('Student').select({
              maxRecords: 3,
              view: "Grid view"
          }).eachPage(function page(records, fetchNextPage) {
              let studentsname = document.querySelector(".Students ul.name")
              let studentssname = document.querySelector(".Students ul.sname")
              let studentsemail = document.querySelector(".Students ul.email")
              let studentsgpoints = document.querySelector(".Students ul.gpoints")
              let studentsid = document.querySelector(".Students ul.id")
              studentsname.innerHTML = `<li></li>`
              studentssname.innerHTML = `<li></li>`
              studentsemail.innerHTML = `<li></li>`
              studentsgpoints.innerHTML = `<li></li>`
              studentsid.innerHTML = `<li></li>`
              records.forEach(function(record) {
                  console.log("Refresh")
                  studentsname.innerHTML += `<li>${record.get('Name')}</li>`
                  studentssname.innerHTML += `<li>${record.get('Last name')}</li>`
                  studentsemail.innerHTML += `<li>${record.get('Email')}</li>`
                  studentsgpoints.innerHTML += `<li>${record.get('Points')}</li>`
                  studentsid.innerHTML += `<li>
                                            <form onsubmit=pointUp("${record.id}") class="id">
                                               <input type="number" class="${record.id}">
                                               <input type="submit" value="Add">
                                             </form>
                                           </li>`
              });

              fetchNextPage();

          }, function done(err) {
              if (err) { console.error(err); return; }
          });
      }
    }
  }
}
</script>
