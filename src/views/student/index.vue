<template>
  <div>
    {student === [] ? (
    <signin />
    ) : (
    <assignments />
    )}
  </div>
</template>

<script>
import assignments from "@/components/assignments.vue";
import signin from "@/components/signin.vue";
export default {
  data() {
    return {
      student: []
    };
  },

  components: {
    assignments,
    signin
  }
};
</script>
