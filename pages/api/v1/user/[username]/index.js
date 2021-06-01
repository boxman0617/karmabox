import Cors from "cors";
import { initMiddleware } from "lib/middleware/init";
import { createAPI } from "lib/api/helpers";
import { getUserByUsername } from "lib/api/service";

const METHODS = {
  GET: "GET",
};

const cors = initMiddleware(Cors({ methods: Object.values(METHODS) }));

async function getUser({ query: { username } }, res) {
  const user = await getUserByUsername(username);

  return !user ? res.status(404).send("Unable to find User") : res.json(user);
}

const API = createAPI(
  {
    [METHODS.GET]: getUser,
  },
  (req, res) => {
    return cors(req, res);
  }
);
export default API;
