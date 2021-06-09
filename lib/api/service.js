import sql from "./db";

const userKarmaAttributes = sql("id", "uid", "username", "karma", "deleted_at");

export async function getUserByUidSQL(uid) {
  const [user] = await sql`
        SELECT 
            ${userKarmaAttributes}
        FROM "UserKarma"
        WHERE uid = ${uid}
  `;
  return user;
}

export async function getUserByUsername(username) {
  const [user] = await sql`
        SELECT 
            ${userKarmaAttributes}
        FROM "UserKarma"
        WHERE username = ${username}
  `;
  return user;
}

export async function getFullUserByUsername(username) {
  const [user] = await sql`
        SELECT
            ${userKarmaAttributes}
        FROM "UserKarma"
        WHERE username = ${username}
  `;
  return user;
}
