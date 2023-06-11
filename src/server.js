import React from 'react';


const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/api', (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
