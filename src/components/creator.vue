<template>
  <v-btn class="mx-2" fab dark large colour="teal" @click.native="sendData()">
    <v-icon dark>mdi-plus</v-icon>
  </v-btn>
</template>

<script>
  const express = require("express");
  const server = express();
  server.use(require("cors")())
  export default {
    methods: {
     sendRecord: async function(res) {
      	try {
      		const record = ["test3, test4"];

      		res.json({
      			success: true,
      			record,
      		});
      	} catch (err) {
      		res.status(400).json({
      			success: false,
      			message: err.toString(),
      		});
      	}
      },

    sendData: function() {
      server.get("/student/:id", async (req, res) =>
      	this.sendRecord(res)
      );
    }
    }
  }
</script>
