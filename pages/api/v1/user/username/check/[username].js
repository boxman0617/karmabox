import Cors from "cors";
import { initMiddleware } from "lib/middleware/init";
import { createAPI } from "lib/api/helpers";
import { getFullUserByUsername } from "lib/api/service";

const METHODS = {
  GET: "GET",
};

const cors = initMiddleware(Cors({ methods: Object.values(METHODS) }));

async function checkUsernameForAvailability({ query: { username } }, res) {
  const user = await getFullUserByUsername(username);

  return !user
    ? res.status(404).send("Username is not being used")
    : res.json({
        isAvailable: user.uid === null,
        karma: user.karma,
      });
}

const API = createAPI(
  {
    [METHODS.GET]: checkUsernameForAvailability,
  },
  (req, res) => {
    return cors(req, res);
  }
);
export default API;
