const express = require('express');

const app = express();

app.get('/app', (req, res) => {
  res.send(`Hello from server! server one Host: ${process.env.HOSTNAME}`);
});

app.listen(8000, () => {
  console.log('Backend server running on port 8000');
});