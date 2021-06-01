import Cors from "cors";
import { initMiddleware } from "lib/middleware/init";
import { createAPI } from "lib/api/helpers";
import sql from "lib/api/db";

const METHODS = {
  POST: "POST",
};

const cors = initMiddleware(Cors({ methods: Object.values(METHODS) }));

async function addKarmaToUser({ query: { username } }, res) {
  const [updatedUser] = await sql`
    INSERT INTO "UserKarma" ${sql({
      username,
      karma: 1,
    })} ON CONFLICT ON CONSTRAINT unique_username DO UPDATE SET karma = "UserKarma".karma + 1

    returning *
  `;
  return res.json(updatedUser);
}

const API = createAPI(
  {
    [METHODS.POST]: addKarmaToUser,
  },
  (req, res) => {
    return cors(req, res);
  }
);
export default API;
