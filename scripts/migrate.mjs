import { config } from "dotenv";
config();
import { createDb, migrate } from "postgres-migrations";
import path from "path";

const dbConfig = {
  user: process.env["DB_USER"],
  password: process.env["DB_PASSWORD"],
  host: process.env["DB_HOST"],
  port: Number(process.env["DB_PORT"]),
};

const doMigrate = async () => {
  await createDb(process.env["DB_NAME"], {
    ...dbConfig,
    defaultDatabase: "postgres",
  });
  await migrate(
    {
      ...dbConfig,
      database: process.env["DB_NAME"],
    },
    path.resolve(process.cwd(), "lib/migrations")
  );
};

await doMigrate();

console.log("Migration process is now finished...");
