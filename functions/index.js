const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.scheduledFunction = functions.pubsub
    .schedule("* * * * *")
    .onRun((context) => {
      db.doc("users/john mark")
          .update({"time": admin.firestore.Timestamp.now()});
      return console.log("This will be run every minute!");
    });
