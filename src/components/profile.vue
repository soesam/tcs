<template>
  <div>
    <v-card max-width="250">
      <v-container fluid align-start justify-start>
        <v-avatar color="teal" size="48">
          <span class="white--text headline">JS</span>
        </v-avatar>
        <br />
        <br />
        <br />
        <h1>{{ name }}</h1>
        <br />
        <v-subtitle>{{ email }}</v-subtitle>
        <br />
        <br />
        <v-subtitle>Green points:</v-subtitle>
        <span>{{ " " + gp }}</span>
        <br />
        <v-subtitle>Red points:</v-subtitle>
        <span>{{ " " + rp }}</span>
        <br />
        <v-subtitle>Homework hand in rate:</v-subtitle>
        <span>{{ " " + handin }}</span>
        <br />
        <v-subtitle>Detentions:</v-subtitle>
        <span>{{ " " + detentions }}</span>
      </v-container>
    </v-card>
  </div>
</template>

/* In profile page: Profile picture (c) Email Name Green points Red points
Homework hand in rate Detentions */

<script>
export default {
  data() {
    return {
      name: "John Smith",
      email: "jsmith@gmail.com",
      gp: 86,
      rp: 2,
      handin: "89%",
      detentions: 1
    };
  },

  mounted: async function() {
    const promise = await fetch("http://localhost:8000/classes");
    console.log("promise");
    console.log(promise.text());
  },

  methods: {
    fetchRecord: async function() {
      const promise = await fetch("http://localhost:8000/classes");
      console.log("promise");
      console.log(promise.json);
    }
  }
};
</script>
