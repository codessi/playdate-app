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

// async function resetScores() {
//   const collection = await db
//     .collection("users")
//     .get()
//   collection.forEach(doc=> {
//     doc.ref
//       .update({
//         score: 0
//       })
//   })
// }

exports.scheduledFunction = functions.pubsub
    .schedule("36 20 * * *")
    .onRun((context) => {
      db.doc("users/john mark")
      // .update({"time": admin.firestore.Timestamp.now()});
          .update({"playOn": false});
      return console.log("This will be run every minute!");
    });

// exports.scheduledFunction = functions.pubsub
//     .schedule("0 7 * * *")
//     // .schedule("* * * * *")
//     .onRun((context) => {
//       const collection = db.collection("users")
//           .get();
//       collection.forEach((doc)=> {
//         doc.ref
//             .update({
//               playOn: false,
//             });
//       });
//     });

