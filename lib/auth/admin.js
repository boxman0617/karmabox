import * as firebaseAdmin from "firebase-admin";

const privateKey = process.env["PRIVATE_KEY"].replace(/\\n/g, "\n");
const clientEmail = process.env["CLIENT_EMAIL"];
const projectId = process.env["PROJECT_ID"];

const noCreds = !privateKey || !clientEmail || !projectId;
if (noCreds) {
  console.warn(`Failed to load Firebase credentials!!`, {
    privateKey,
    envPrivateKey: process.env["PRIVATE_KEY"],
    clientEmail,
    projectId,
  });
}

if (!noCreds && !firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: privateKey,
      clientEmail,
      projectId,
    }),
    databaseURL: `https://${projectId}.firebaseio.com`,
  });
}

export { firebaseAdmin };
