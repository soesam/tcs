<template>
  <div>
    <v-card>
      <v-card-subtitle>Students:</v-card-subtitle>
      <br/>
      <v-card-text v-for="(student, studentIndex) in students" :key="studentIndex">{{c + ", "}}</v-card-text>
      <br/>
      <br/>
      <br/>
    </v-card>
  </div>
</template>

<script>
  import database from '@/firebase'
  const sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  export default {
    name: "Classes2",
    data() {
      return {
        students: [],
      };
    },

    mounted: async function() {
    },

    methods: {
      getData: async function() {
        var v;
        database.collection('students').onSnapshot(res => {
          const changes = res.docChanges();
            changes.forEach(change => {
              if (change.type === 'added') {
                v = change.doc.data();
                this.students.push({
                  v,
                  id: change.doc.id
                })
              }
            })
          });
        await sleep(500)
        console.log(this.students);
        }
      },

    created() {
      this.getData();
    }
  }
</script>
