const functions = require('firebase-functions');
const env = functions.config();

  var Airtable = require("airtable");

  var base = new Airtable({ apiKey: "keyLVnvjV4bFHXOaD" }).base(
    "appvLWxrF80mDK8Xq"
  );

  exports.addToAirtable = functions.firestore
    .document('students/{Points}')
    .onCreate((snap, context) => {
      const data = snap.data();

      return base('Students').create(data)
    });
