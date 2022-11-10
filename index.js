import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const user = [];

const tweets = [];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    res.status(400).send("Todos os campos são obrigatórios!");
    return;
  }

  user.push(req.body);
  res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;

  if (!username || !tweet) {
    res.status(400).send("Todos os campos são obrigatórios!");
    return;
  }

  tweets.unshift(req.body);
  res.status(201).send("OK");
});

function findAvatar(username) {
  const foundUser = user.find((obj) => username === obj.username);
  return foundUser.avatar;
}

app.get("/tweets", (req, res) => {
  let publishedTweets = [];

  for (let i = 0; i < 10; i++) {
    if (i < tweets.length) {
      publishedTweets.push({
        username: tweets[i].username,
        avatar: findAvatar(tweets[i].username),
        tweet: tweets[i].tweet,
      });
    }
  }
  res.send(publishedTweets);
});

app.listen(5000, () => {
  console.log("Server running in port: 5000");
});
