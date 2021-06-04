export const dbConfig = {
  username: process.env["DB_USER"],
  password: process.env["DB_PASSWORD"],
  host: process.env["DB_HOST"],
  port: Number(process.env["DB_PORT"]),
  database: process.env["DB_NAME"],
  ...(process.env["NODE_ENV"] === "development"
    ? {}
    : {
        ssl: {
          rejectUnauthorized: true,
          ca: process.env.CA_CERT,
        },
      }),
};
