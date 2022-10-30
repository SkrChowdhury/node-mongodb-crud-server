const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

//user = dbuser1
// password = ECtQOXnV8WNxWStu

const uri =
  'mongodb+srv://user_skr:bKCoPGH9qaEHccqW@cluster0.1dqilwu.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    const userCollection = client.db('nodeMongoCrud').collection('users');

    app.post('/users', (req, res) => {
      const user = req.body;
      console.log(user);
    });
  } finally {
  }
}

run().catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('Hello from node mongo crud server');
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
