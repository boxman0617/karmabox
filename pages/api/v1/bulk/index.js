import Cors from "cors";
import { initMiddleware } from "lib/middleware/init";
import { createAPI } from "lib/api/helpers";
import sql from "lib/api/db";

const METHODS = {
  POST: "POST",
};

const cors = initMiddleware(Cors({ methods: Object.values(METHODS) }));

const getActionNumber = (action) => (action === "++" ? 1 : -1);

/**
 *
 * @param actions - { username: string, action: '++' | '--' }[]
 * @param res
 */
async function bulk({ body: { actions } }, res) {
  const proposedActionsByUsername = actions.reduce(
    (acc, { username, action }) => {
      if (username in acc) {
        acc[username] += getActionNumber(action);
      } else {
        acc[username] = getActionNumber(action);
      }

      return acc;
    },
    {}
  );

  const changes = await Promise.all(
    Object.keys(proposedActionsByUsername).map(async (username) => {
      const action = proposedActionsByUsername[username];
      const upsert = await sql`
          INSERT INTO "UserKarma" ${sql({
            username: username.replace("u/", "").replace("@", ""),
            karma: action,
          })}
          ON CONFLICT ON CONSTRAINT unique_username
          DO UPDATE SET karma = "UserKarma".karma + ${action}
          returning *
      `;

      return {
        ...upsert[0],
        action: action > 0 ? "++" : "--",
        actionDiff: action,
      };
    })
  );

  return res.json(changes);
}

const API = createAPI(
  {
    [METHODS.POST]: bulk,
  },
  (req, res) => {
    return cors(req, res);
  }
);
export default API;
