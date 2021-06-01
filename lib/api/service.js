import sql from "./db";

export async function getUserByUidSQL(uid) {
  const [user] = await sql`
        SELECT 
        ${sql("id", "username", "karma", "deleted_at")}
        FROM "UserKarma"
        WHERE uid = ${uid}
  `;
  return user;
}

export async function getUserByUsername(username) {
  const [user] = await sql`
        SELECT 
        id, username, karma, deleted_at
        FROM "UserKarma"
        WHERE username = ${username}
  `;
  return user;
}
