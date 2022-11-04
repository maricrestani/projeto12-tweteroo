import express from 'express';

const app = express()

app.use(express.json())

const user = [{ username: '', avatar: '' }]

const tweets = [
  {
    id: 1,
    username: 'Morty',
    avatar: 'https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest?cb=20210827150137',
    tweet: 'Hello'
  },
  {
    id: 2,
    username: 'Rick',
    avatar: 'https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest?cb=20210827150137',
    tweet: 'Hi'
  },
  {
    id: 3,
    username: 'Summer',
    avatar: 'https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest?cb=20210827150137',
    tweet: 'Lalala'
  },
  {
    id: 4,
    username: 'Jery',
    avatar: 'https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest?cb=20210827150137',
    tweet: 'Hello'
  },
  {
    id: 5,
    username: 'Beth',
    avatar: 'https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest?cb=20210827150137',
    tweet: 'Hello'
  }
]

app.post('/sign-up', (req, res) => {
const {username, avatar} = req.body

if(!username || !avatar){
  res.status(400).send('Insira todos os campos')
  return;
}

  const loginUser = {
    username,
    avatar
  }

  user.push(loginUser)
  res.sendStatus(201)
})

app.post('/tweets', (req, res) => {
const {username , tweet} = req.body

if(!username || !tweet) {
res.status(400).send('Insira todos os dados')
return;
}

  const newTweet = {
    id: tweets.lenght + 1,
    username,
    tweet
  }

  tweets.push(newTweet)
  res.sendStatus(201)
})

app.get("/tweets", (req, res) => {

  const publishedTweets = []
  for (let i = 0; i < 10; i++) {

    publishedTweets.push(tweets[i])
  }
  res.send(publishedTweets);
});


app.listen(5000, () => {
  console.log('Server running in port: 5000');
})