import Cors from "cors";
import sql from "lib/api/db";
import { initMiddleware } from "lib/middleware/init";
import { createAPI } from "lib/api/helpers";
import { firebaseAdmin } from "lib/auth/admin";

const METHODS = {
  POST: "POST",
};

const cors = initMiddleware(Cors({ methods: Object.values(METHODS) }));

async function createNewUser({ body }, res) {
  const { email, password, username } = body;

  const user = await firebaseAdmin.auth().createUser({
    email,
    password,
  });

  const [newUser] = await sql`
      INSERT INTO "UserKarma" ${sql({
        uid: user.uid,
        username: username,
        karma: 0,
      })}
      ON CONFLICT ON CONSTRAINT unique_username
      DO UPDATE SET uid = ${user.uid}
      returning *
  `;

  return res.json(newUser);
}

const API = createAPI(
  {
    [METHODS.POST]: createNewUser,
  },
  (req, res) => {
    return cors(req, res);
  }
);
export default API;
