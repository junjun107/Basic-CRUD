const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const PORT = process.env.PORT;
const connectionString = process.env.DB_CONN;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log('Yay! Connected to Database');
    const db = client.db('star-wars-quotes');
    const quotesCollection = db.collection('quotes');

    app.set('view engine', 'ejs');

    app.get('/', (req, res) => {
      quotesCollection
        .find()
        .toArray()
        .then((results) => {
          // console.log(results);
          res.render('index.ejs', { quotes: results });
        })
        .catch((error) => console.error(error));
      //   res.sendFile(__dirname + '/index.html');
    });

    app.post('/quotes', (req, res) => {
      //   console.log(req.body);
      quotesCollection
        .insertOne(req.body)
        .then((result) => res.redirect('/'))
        .catch((error) => console.error(error));
    });

    app.put('/quotes', (req, res) => {
      // console.log(req.body);
      quotesCollection
        .findOneAndUpdate(
          { name: 'Yoda' },
          {
            $set: {
              name: req.body.name,
              quote: req.body.quote,
            },
          },
          { upsert: true }
        )
        .then((result) => {
          // console.log(result);
          res.json('Success');
        })
        .catch((error) => console.error(error));
    });

    app.delete('/quotes', (req, res) => {
      quotesCollection
        .deleteOne({ name: req.body.name })
        .then((result) => {
          // no more Darth Vader quotes
          if (result.deletedCount === 0) {
            return res.json('no more Vader quotes to delete');
          }
        })
        .catch((error) => console.error(error));
    });

    app.listen(5000, function () {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
