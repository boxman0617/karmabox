import { config } from "dotenv";
config();
import Twit from "twit";
import fetch from "node-fetch";

const twitterConfig = {
  consumer_key: process.env["TWITTER_API_KEY"],
  consumer_secret: process.env["TWITTER_SECRET_KEY"],
  access_token: process.env["TWITTER_ACCESS_TOKEN"],
  access_token_secret: process.env["TWITTER_ACCESS_SECRET"],
};

const t = new Twit({
  ...twitterConfig,
});

const stream = t.stream("statuses/filter", { track: "karma" });

const karmaMatch = /((?:u\/|@)\w+)\skarma\s(\+\+|--)/g;
stream.on(
  "tweet",
  async ({ text, id: replyId, user: { screen_name: screenName } }) => {
    const matches = [...text.matchAll(karmaMatch)];

    if (Boolean(matches.length)) {
      const response = await fetch("http://localhost:3000/api/v1/bulk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          actions: matches.map(([_, username, action]) => ({
            username,
            action,
          })),
        }),
      }).then((res) => res.json());
      const reply = `@${screenName} ${response.map(
        ({ username, karma, action, actionDiff }) =>
          `@${username} (${karma}) ${
            action === "++" ? "gained" : "lost"
          } ${Math.abs(actionDiff)} karma! `
      )}`.trim();

      t.post(
        "statuses/update",
        {
          status: reply,
          in_reply_to_status_id: replyId,
        },
        (err, data, res) => {
          console.error(err, data, res);
        }
      );
    }
  }
);
