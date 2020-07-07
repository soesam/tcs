<template>
  <div class="test">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import * as firebaseui from "firebaseui";
console.log(firebaseui);

export default {
  name: "Test",
  data: function() {
    return {
      message: "test"
    };
  }
};
</script>
