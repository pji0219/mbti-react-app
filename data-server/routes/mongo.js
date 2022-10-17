const express = require('express');
const router = express.Router();

const mongoDB = require('../controllers/mongoController');

router.post('/setdata', async (req, res) => {
  const msg = await mongoDB.setData();
  res.send(JSON.stringify(msg));
});

router.get('/count', async (req, res) => {
  const counts = await mongoDB.getCounts();
  res.send(counts);
});

router.post('/inccount', async (req, res) => {
  const msg = await mongoDB.incCounts();
  res.send(JSON.stringify(msg));
});

router.get('/getData', async (req, res) => {
  const data = await mongoDB.getData();
  res.send(data);
});

module.exports = router;
