const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv').config();

const DB_URI = 'mongodb://localhost:27017';
const DB_URI_ATLAS = `${process.env.DB_URI}`;
const uri = DB_URI_ATLAS;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
module.exports = client;
