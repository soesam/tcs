<template>
  <v-dialog v-model="dialog" scrollable>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
       class="mx-2"
       fab
       dark
       large
       colour="teal"
       v-bind="attrs"
       v-on="on">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </template>
    <card v-if="!loading">
      <v-card-title>Create new homework:</v-card-title>
      <v-spacer/>
      <v-card-subtitle>Title:</v-card-subtitle>
      <v-text-field>
        label="Title"
        placeholder="Homework Title"
        outlined
      </v-text-field>
      <v-spacer/>
      <v-card-subtitle>Content:</v-card-subtitle>
      <v-text-field>
        label="Content"
        placeholder="Homework content"
      </v-text-field>
      <v-spacer/>
      <v-card-subtitle>Class:</v-card-subtitle>
      <v-radio-group v-model="radioGroup">
        <v-radio
          v-for="(classRecord, classId) in classRecords"
          :key="classId"
          :label="classRecord.fields.Name"
          :value="classRecord.fields.Name"
        ></v-radio>
      </v-radio-group>
      <v-spacer/>
      <v-card-subtitle>Teacher:</v-card-subtitle>
      <v-radio-group v-model="radioGroup">
        <v-radio
          v-for="(teacherRecord, teacherId) in teacherRecords"
          :key="teacherId"
          :label="teacherRecord.fields.Name + ' ' + teacherRecord.fields.Surname"
          :value="teacherRecord.fields.Name"
        ></v-radio>
      </v-radio-group>
    </card>
  </v-dialog>
</template>

<script>
  export default {
    data() {
      return {
        classRecords: [],
        teacherRecords: [],
        loading: false
      }
    },

    mounted: async function() {
      const classData = await fetch("http://localhost:8000/assignments");
      const classJson = await classData.json();
      this.classRecords = classJson.table;

      const teacherData = await fetch("http://localhost:8000/classes");
      const teacherJson = await teacherData.json();
      this.teacherRecords = teacherJson.table;

      this.loading = true;
    },
  }
</script>
