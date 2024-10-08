module.exports = {
  apps: [
    {
      name: "DB Migration",
      script: "./scripts/migrate.mjs",
      watch: false,
      autorestart: false,
    },
    {
      name: "Twitter Bot",
      script: "./twitter/index.mjs",
      watch: false,
    },
    {
      name: "KarmaBox Web App",
      script: "./node_modules/.bin/next",
      args: "start -H 0.0.0.0 -p 8080",
      watch: false,
    },
  ],
};
