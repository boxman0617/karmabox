import { config } from "dotenv";
config();
import { createDb, migrate } from "postgres-migrations";
import path from "path";
import { Client } from "pg";

const client = new Client(process.env["DATABASE_URL"]);

const doMigrate = async () => {
  console.log("Connecting to DB...");
  await client.connect();
  console.log("Creating DB...");
  try {
    await createDb(process.env["DB_NAME"], {
      client,
    });
  } catch (e) {
    console.error(e);
  }
  console.log("Starting migration...");
  await migrate(
    {
      client,
    },
    path.resolve(process.cwd(), "lib/migrations")
  );
};

await doMigrate();

console.log("Migration process is now finished...");
