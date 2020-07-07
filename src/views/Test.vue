<template>
  <div class="test">
    <h1>test page</h1>
    <vue-airtable :columns="['Name', 'Sex', 'Points']"></vue-airtable>
    <Auth />
  </div>
</template>

<script>
//import Auth from "@/components/Auth.vue";
import VueAirtable from "./Airtable.vue";

export default {
  name: "Test",
  components: {
    //Auth,
    VueAirtable
  }
};
</script>
