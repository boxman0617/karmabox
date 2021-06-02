import { config } from "dotenv";
config();
import { createDb, migrate } from "postgres-migrations";
import path from "path";

const dbConfig = {
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOSTNAME,
  port: Number(process.env.PORT),
};

console.log({ dbConfig });

const doMigrate = async () => {
  await createDb(process.env.DATABASE, {
    ...dbConfig,
    defaultDatabase: "postgres",
  });
  await migrate(
    {
      ...dbConfig,
      database: process.env.DATABASE,
    },
    path.resolve(process.cwd(), "lib/migrations")
  );
};

await doMigrate();

console.log("Migration process is now finished...");
