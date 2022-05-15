const express = require('express');
const app = express();

app.get('/blockchain', (req, res) => {
  res.send('blockchain');
});

app.post('/transaction', (req, res) => {
  res.send('transaction');
});

app.get('/mine', (req, res) => {
  res.send('mine');
});

app.listen(3000, () => {
  console.log('Server running on port 3000...');
});
