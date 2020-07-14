<template>
  <v-card>
    <v-card-title> {{ title }} </v-card-title>
    <v-card-subtitle>Students:</v-card-subtitle>
    <v-card-text v-for="item in list" :key="item.id"> {{item.fields.Name}} </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: "Card",
    props: ['title', 'list']
  }
</script>
