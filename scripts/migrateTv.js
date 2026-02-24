const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // download from Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function migrate() {
  const oldCollection = await db.collection("tv_videos").get();

  for (const doc of oldCollection.docs) {
    const data = doc.data();

    await db.collection("tv_programs").doc(doc.id).set({
      ...data,
      createdAt: data.createdAt || admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log(`Migrated: ${doc.id}`);
  }

  console.log("Migration completed!");
}

migrate();