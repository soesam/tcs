<template>
  <div>
    <component v-bind:is="component" :username="user" @test="testing($event)" />
    <h1>{{test}}</h1>
  </div>
</template>

<script>
  import assignments from "@/components/assignments.vue";
  import signin from "@/components/signin.vue";
  export default {
    data() {
      return{
        student: [],
        component: signin,
        user: "",
        test: ""
      }
    },

    components: {
      assignments,
      signin
    },

    methods: {
      login: function() {
        console.log("login")
        this.component = assignments;
      },

      testing: function(t) {
        this.test = t;
      }
    }
  };
</script>
