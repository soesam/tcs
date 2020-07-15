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
/*  const sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }; */
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
    },

    created() {
      database.collection('students').onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
          if (change.type === 'added') {
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
    }
  }
</script>
