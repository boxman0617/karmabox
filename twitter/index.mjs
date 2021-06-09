import { config } from "dotenv";
config();
import Twit from "twit";
import fetch from "node-fetch";

const env = {
  host: process.env["NEXT_PUBLIC_SDK_HOST"],
  port: process.env["NEXT_PUBLIC_SDK_PORT"],
};

const twitterConfig = {
  consumer_key: process.env["TWITTER_API_KEY"],
  consumer_secret: process.env["TWITTER_SECRET_KEY"],
  access_token: process.env["TWITTER_ACCESS_TOKEN"],
  access_token_secret: process.env["TWITTER_ACCESS_SECRET"],
};

const t = new Twit({
  ...twitterConfig,
});

const stream = t.stream("statuses/filter", { track: ["karma ++", "karma --"] });

const karmaMatch = /((?:u\/|@)\w+)\skarma\s(\+\+|--)/g;

const postBulkActions = (matches) =>
  fetch(`http://${env.host}:${env.port}/api/v1/bulk`, {
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

const getReply = (screenName, response) =>
  `@${screenName} ${response.map(
    ({ username, karma, action, actionDiff }) =>
      `@${username} (${karma}) ${
        action === "++" ? "gained" : "lost"
      } ${Math.abs(actionDiff)} karma! `
  )}`.trim();

stream.on("tweet", async ({ text, user: { screen_name: screenName } }) => {
  const matches = [...text.matchAll(karmaMatch)];

  if (Boolean(matches.length)) {
    console.log("Tweet", text);
    const response = await postBulkActions(matches);
    const reply = getReply(screenName, response);
    t.post(
      "statuses/update",
      {
        status: reply,
      },
      (err, { text: replyText }) => {
        if (err) throw err;
        console.log(replyText);
      }
    );
  }
});
