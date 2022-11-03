import express from 'express';

const app = express()

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
  },
  {
    id: 6,
    username: 'Morty',
    avatar: 'https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest?cb=20210827150137',
    tweet: 'Hello'
  },
  {
    id: 7,
    username: 'Rick',
    avatar: 'https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest?cb=20210827150137',
    tweet: 'Hi'
  },
  {
    id: 8,
    username: 'Summer',
    avatar: 'https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest?cb=20210827150137',
    tweet: 'Lalala'
  },
  {
    id: 9,
    username: 'Jery',
    avatar: 'https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest?cb=20210827150137',
    tweet: 'Hello'
  },
  {
    id: 10,
    username: 'Beth',
    avatar: 'https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest?cb=20210827150137',
    tweet: 'Hello'
  },
  {
    id: 11,
    username: 'Morty',
    avatar: 'https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest?cb=20210827150137',
    tweet: 'Hello'
  },
  {
    id: 12,
    username: 'Rick',
    avatar: 'https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest?cb=20210827150137',
    tweet: 'Hi'
  },
  {
    id: 13,
    username: 'Summer',
    avatar: 'https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest?cb=20210827150137',
    tweet: 'Lalala'
  },
  {
    id: 14,
    username: 'Jery',
    avatar: 'https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest?cb=20210827150137',
    tweet: 'Hello'
  },
  {
    id: 15,
    username: 'Beth',
    avatar: 'https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest?cb=20210827150137',
    tweet: 'Hello'
  },
]

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