import { config } from "dotenv";
config();
import { migrate } from "postgres-migrations";
import path from "path";
import pg from "pg";

const client = new pg.Client({
  host: process.env["DB_HOST"],
  user: process.env["DB_USER"],
  database: process.env["DB_NAME"],
  port: process.env["DB_PORT"],
  password: process.env["DB_PASSWORD"],
  ssl: {
    rejectUnauthorized: false,
  },
});

const doMigrate = async () => {
  console.log("Connecting to DB...");
  await client.connect();
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
