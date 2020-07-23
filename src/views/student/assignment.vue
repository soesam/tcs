<template>
  <assignments assignments="records"/>
</template>

<script>
  import assignments from "@/components/Multi/assignments.vue"
  export default {
    data() {
      return {
        records: []
      }
    },

    components: {
      assignments
    },

    mounted: async function() {
      const records = await fetch("http://localhost:8000/assignments");
      this.records = (await records.json()).table;
    }
  }
</script>
