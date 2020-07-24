<template>
  <div v-if="!loading">
    <assignments :assignments="records"/>
  </div>
</template>

<script>
  import assignments from "@/components/Multi/assignments.vue"
  export default {
    data() {
      return {
        records: [],
        loading: true
      }
    },

    components: {
      assignments
    },

    mounted: async function() {
      const data = await fetch("http://localhost:8000/assignments");
      const json = await data.json();
      this.records = json.table;
      this.loading = false;
      console.log("records", this.records)
    }
  }
</script>
