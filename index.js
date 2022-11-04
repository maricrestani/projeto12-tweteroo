import express from 'express';

const app = express()

app.use(express.json())

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

const user =[{username:'', avatar:''}]

app.post('/sign-up', (req,res)=>{

  const loginUser = {
  username: req.body.username,
  avatar: req.body.avatar
  }
  
   user.push(loginUser)
   res.send('OK')
  })

  app.post('/tweets', (req,res)=>{

    const newTweet = {
      id: tweets.lenght+1,
    username: req.body.username,
    tweet: req.body.tweet
    }
    
     tweets.push(newTweet)
     res.send('OK')
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